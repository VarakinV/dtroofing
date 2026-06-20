"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SiteScripts() {
  const pathname = usePathname();

  useEffect(() => {
    const dd = document.querySelector<HTMLElement>(".nav-dd");
    if (dd) {
      dd.classList.remove("open");
    }
  }, [pathname]);

  useEffect(() => {
    // Progressive enhancement hook
    document.documentElement.classList.add("js");

    const cleanupFns: Array<() => void> = [];

    /* mobile nav toggle */
    const t = document.getElementById("navToggle");
    const l = document.getElementById("navLinks");
    if (t && l) {
      const toggleHandler = () => {
        const open = l.classList.toggle("open");
        t.setAttribute("aria-expanded", open ? "true" : "false");
      };
      t.addEventListener("click", toggleHandler);
      cleanupFns.push(() => t.removeEventListener("click", toggleHandler));

      l.querySelectorAll("a").forEach((a) => {
        if (a.classList.contains("nav-dd-toggle")) return;
        const closeHandler = () => {
          l.classList.remove("open");
          t.setAttribute("aria-expanded", "false");
        };
        a.addEventListener("click", closeHandler);
        cleanupFns.push(() => a.removeEventListener("click", closeHandler));
      });
    }

    /* services dropdown on mobile */
    const dd = document.querySelector<HTMLElement>(".nav-dd");
    const toggle = dd?.querySelector<HTMLElement>(".nav-dd-toggle");
    if (dd && toggle) {
      const ddHandler = (e: Event) => {
        if (window.matchMedia("(max-width:1024px)").matches) {
          e.preventDefault();
          dd.classList.toggle("open");
        }
      };
      toggle.addEventListener("click", ddHandler);
      cleanupFns.push(() => toggle.removeEventListener("click", ddHandler));

      const ddMenu = dd.querySelector<HTMLElement>(".nav-dd-menu");
      if (ddMenu) {
        ddMenu.querySelectorAll("a").forEach((a) => {
          const closeDdHandler = () => {
            dd.classList.remove("open");
            dd.classList.add("dismissed");
            if (document.activeElement instanceof HTMLElement) {
              document.activeElement.blur();
            }
          };
          a.addEventListener("click", closeDdHandler);
          cleanupFns.push(() => a.removeEventListener("click", closeDdHandler));
        });

        const removeDismissed = () => {
          dd.classList.remove("dismissed");
        };
        dd.addEventListener("mouseleave", removeDismissed);
        cleanupFns.push(() => dd.removeEventListener("mouseleave", removeDismissed));
      }
    }

    /* fade-up reveals */
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("in");
              io.unobserve(en.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      els.forEach((e) => io.observe(e));
      cleanupFns.push(() => io.disconnect());
    }

    /* scroll-spy */
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav-links a[href^='#']"));
    if (links.length && "IntersectionObserver" in window) {
      const map: Record<string, HTMLAnchorElement> = {};
      links.forEach((a) => {
        const id = a.getAttribute("href")?.slice(1);
        if (id) map[id] = a;
      });
      const sections = Object.keys(map)
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];
      const spy = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              links.forEach((a) => a.classList.remove("active"));
              map[en.target.id]?.classList.add("active");
            }
          });
        },
        { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
      );
      sections.forEach((s) => spy.observe(s));
      cleanupFns.push(() => spy.disconnect());
    }

    /* reviews carousel */
    const root = document.getElementById("reviewCarousel");
    if (root) {
      const track = root.querySelector<HTMLElement>(".rc-track");
      const dotsWrap = root.querySelector<HTMLElement>(".rc-dots");
      const prevBtn = root.querySelector<HTMLElement>(".rc-prev");
      const nextBtn = root.querySelector<HTMLElement>(".rc-next");
      if (track && dotsWrap && prevBtn && nextBtn) {
        const slides = Array.from(track.children) as HTMLElement[];
        const n = slides.length;
        if (n) {
          const dots: HTMLButtonElement[] = [];
          for (let k = 0; k < n; k++) {
            const b = document.createElement("button");
            b.className = "rc-dot";
            b.setAttribute("aria-label", `Go to review ${k + 1}`);
            b.addEventListener("click", () => { go(k); restart(); });
            dotsWrap.appendChild(b);
            dots.push(b);
          }

          let i = 0;
          const go = (x: number) => {
            i = (x + n) % n;
            track.style.transform = `translateX(-${i * 100}%)`;
            dots.forEach((d, idx) => d.classList.toggle("active", idx === i));
          };

          const prevHandler = () => { go(i - 1); restart(); };
          const nextHandler = () => { go(i + 1); restart(); };
          prevBtn.addEventListener("click", prevHandler);
          nextBtn.addEventListener("click", nextHandler);

          const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
          let timer: ReturnType<typeof setInterval> | null = null;
          const start = () => {
            if (reduce || timer) return;
            timer = setInterval(() => go(i + 1), 6000);
          };
          const restart = () => {
            if (timer) clearInterval(timer);
            timer = null;
            start();
          };
          const stop = () => { if (timer) clearInterval(timer); };
          root.addEventListener("mouseenter", stop);
          root.addEventListener("mouseleave", start);

          go(0);
          start();

          cleanupFns.push(() => {
            stop();
            root.removeEventListener("mouseenter", stop);
            root.removeEventListener("mouseleave", start);
            prevBtn.removeEventListener("click", prevHandler);
            nextBtn.removeEventListener("click", nextHandler);
            dots.forEach((d) => d.remove());
            track.style.transform = "";
          });
        }
      }
    }

    /* quote form */
    const f = document.getElementById("quoteForm") as HTMLFormElement | null;
    const ok = document.getElementById("formSuccess");
    if (f && ok) {
      const submitHandler = (e: Event) => {
        e.preventDefault();
        if (!f.checkValidity()) { f.reportValidity(); return; }
        f.style.display = "none";
        ok.classList.add("show");
        ok.scrollIntoView({ behavior: "smooth", block: "center" });
      };
      f.addEventListener("submit", submitHandler);
      cleanupFns.push(() => f.removeEventListener("submit", submitHandler));
    }

    return () => cleanupFns.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
