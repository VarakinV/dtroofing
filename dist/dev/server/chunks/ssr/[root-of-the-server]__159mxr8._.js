module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/components/SiteScripts.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SiteScripts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
function SiteScripts() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const dd = document.querySelector(".nav-dd");
        if (dd) {
            dd.classList.remove("open");
        }
    }, [
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Progressive enhancement hook
        document.documentElement.classList.add("js");
        const cleanupFns = [];
        /* mobile nav toggle */ const t = document.getElementById("navToggle");
        const l = document.getElementById("navLinks");
        if (t && l) {
            const toggleHandler = ()=>{
                const open = l.classList.toggle("open");
                t.setAttribute("aria-expanded", open ? "true" : "false");
            };
            t.addEventListener("click", toggleHandler);
            cleanupFns.push(()=>t.removeEventListener("click", toggleHandler));
            l.querySelectorAll("a").forEach((a)=>{
                if (a.classList.contains("nav-dd-toggle")) return;
                const closeHandler = ()=>{
                    l.classList.remove("open");
                    t.setAttribute("aria-expanded", "false");
                };
                a.addEventListener("click", closeHandler);
                cleanupFns.push(()=>a.removeEventListener("click", closeHandler));
            });
        }
        /* services dropdown on mobile */ const dd = document.querySelector(".nav-dd");
        const toggle = dd?.querySelector(".nav-dd-toggle");
        if (dd && toggle) {
            const ddHandler = (e)=>{
                if (window.matchMedia("(max-width:1024px)").matches) {
                    e.preventDefault();
                    dd.classList.toggle("open");
                }
            };
            toggle.addEventListener("click", ddHandler);
            cleanupFns.push(()=>toggle.removeEventListener("click", ddHandler));
            const ddMenu = dd.querySelector(".nav-dd-menu");
            if (ddMenu) {
                ddMenu.querySelectorAll("a").forEach((a)=>{
                    const closeDdHandler = ()=>{
                        dd.classList.remove("open");
                        dd.classList.add("dismissed");
                        if (document.activeElement instanceof HTMLElement) {
                            document.activeElement.blur();
                        }
                    };
                    a.addEventListener("click", closeDdHandler);
                    cleanupFns.push(()=>a.removeEventListener("click", closeDdHandler));
                });
                const removeDismissed = ()=>{
                    dd.classList.remove("dismissed");
                };
                dd.addEventListener("mouseleave", removeDismissed);
                cleanupFns.push(()=>dd.removeEventListener("mouseleave", removeDismissed));
            }
        }
        /* fade-up reveals */ const els = document.querySelectorAll(".reveal");
        if (!("IntersectionObserver" in window)) {
            els.forEach((e)=>e.classList.add("in"));
        } else {
            const io = new IntersectionObserver((entries)=>{
                entries.forEach((en)=>{
                    if (en.isIntersecting) {
                        en.target.classList.add("in");
                        io.unobserve(en.target);
                    }
                });
            }, {
                threshold: 0.12,
                rootMargin: "0px 0px -8% 0px"
            });
            els.forEach((e)=>io.observe(e));
            cleanupFns.push(()=>io.disconnect());
        }
        /* scroll-spy */ const links = Array.from(document.querySelectorAll(".nav-links a[href^='#']"));
        if (links.length && "IntersectionObserver" in window) {
            const map = {};
            links.forEach((a)=>{
                const id = a.getAttribute("href")?.slice(1);
                if (id) map[id] = a;
            });
            const sections = Object.keys(map).map((id)=>document.getElementById(id)).filter(Boolean);
            const spy = new IntersectionObserver((entries)=>{
                entries.forEach((en)=>{
                    if (en.isIntersecting) {
                        links.forEach((a)=>a.classList.remove("active"));
                        map[en.target.id]?.classList.add("active");
                    }
                });
            }, {
                rootMargin: "-45% 0px -50% 0px",
                threshold: 0
            });
            sections.forEach((s)=>spy.observe(s));
            cleanupFns.push(()=>spy.disconnect());
        }
        /* reviews carousel */ const root = document.getElementById("reviewCarousel");
        if (root) {
            const track = root.querySelector(".rc-track");
            const dotsWrap = root.querySelector(".rc-dots");
            const prevBtn = root.querySelector(".rc-prev");
            const nextBtn = root.querySelector(".rc-next");
            if (track && dotsWrap && prevBtn && nextBtn) {
                const slides = Array.from(track.children);
                const n = slides.length;
                if (n) {
                    const dots = [];
                    for(let k = 0; k < n; k++){
                        const b = document.createElement("button");
                        b.className = "rc-dot";
                        b.setAttribute("aria-label", `Go to review ${k + 1}`);
                        b.addEventListener("click", ()=>{
                            go(k);
                            restart();
                        });
                        dotsWrap.appendChild(b);
                        dots.push(b);
                    }
                    let i = 0;
                    const go = (x)=>{
                        i = (x + n) % n;
                        track.style.transform = `translateX(-${i * 100}%)`;
                        dots.forEach((d, idx)=>d.classList.toggle("active", idx === i));
                    };
                    const prevHandler = ()=>{
                        go(i - 1);
                        restart();
                    };
                    const nextHandler = ()=>{
                        go(i + 1);
                        restart();
                    };
                    prevBtn.addEventListener("click", prevHandler);
                    nextBtn.addEventListener("click", nextHandler);
                    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
                    let timer = null;
                    const start = ()=>{
                        if (reduce || timer) return;
                        timer = setInterval(()=>go(i + 1), 6000);
                    };
                    const restart = ()=>{
                        if (timer) clearInterval(timer);
                        timer = null;
                        start();
                    };
                    const stop = ()=>{
                        if (timer) clearInterval(timer);
                    };
                    root.addEventListener("mouseenter", stop);
                    root.addEventListener("mouseleave", start);
                    go(0);
                    start();
                    cleanupFns.push(()=>{
                        stop();
                        root.removeEventListener("mouseenter", stop);
                        root.removeEventListener("mouseleave", start);
                        prevBtn.removeEventListener("click", prevHandler);
                        nextBtn.removeEventListener("click", nextHandler);
                        dots.forEach((d)=>d.remove());
                        track.style.transform = "";
                    });
                }
            }
        }
        /* quote form */ const f = document.getElementById("quoteForm");
        const ok = document.getElementById("formSuccess");
        if (f && ok) {
            const submitHandler = (e)=>{
                e.preventDefault();
                if (!f.checkValidity()) {
                    f.reportValidity();
                    return;
                }
                f.style.display = "none";
                ok.classList.add("show");
                ok.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            };
            f.addEventListener("submit", submitHandler);
            cleanupFns.push(()=>f.removeEventListener("submit", submitHandler));
        }
        return ()=>cleanupFns.forEach((fn)=>fn());
    }, [
        pathname
    ]);
    return null;
}
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__159mxr8._.js.map