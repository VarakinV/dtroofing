(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/SiteScripts.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SiteScripts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function SiteScripts() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteScripts.useEffect": ()=>{
            const dd = document.querySelector(".nav-dd");
            if (dd) {
                dd.classList.remove("open");
            }
        }
    }["SiteScripts.useEffect"], [
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteScripts.useEffect": ()=>{
            // Progressive enhancement hook
            document.documentElement.classList.add("js");
            const cleanupFns = [];
            /* mobile nav toggle */ const t = document.getElementById("navToggle");
            const l = document.getElementById("navLinks");
            if (t && l) {
                const toggleHandler = {
                    "SiteScripts.useEffect.toggleHandler": ()=>{
                        const open = l.classList.toggle("open");
                        t.setAttribute("aria-expanded", open ? "true" : "false");
                    }
                }["SiteScripts.useEffect.toggleHandler"];
                t.addEventListener("click", toggleHandler);
                cleanupFns.push({
                    "SiteScripts.useEffect": ()=>t.removeEventListener("click", toggleHandler)
                }["SiteScripts.useEffect"]);
                l.querySelectorAll("a").forEach({
                    "SiteScripts.useEffect": (a)=>{
                        if (a.classList.contains("nav-dd-toggle")) return;
                        const closeHandler = {
                            "SiteScripts.useEffect.closeHandler": ()=>{
                                l.classList.remove("open");
                                t.setAttribute("aria-expanded", "false");
                            }
                        }["SiteScripts.useEffect.closeHandler"];
                        a.addEventListener("click", closeHandler);
                        cleanupFns.push({
                            "SiteScripts.useEffect": ()=>a.removeEventListener("click", closeHandler)
                        }["SiteScripts.useEffect"]);
                    }
                }["SiteScripts.useEffect"]);
            }
            /* services dropdown on mobile */ const dd = document.querySelector(".nav-dd");
            const toggle = dd?.querySelector(".nav-dd-toggle");
            if (dd && toggle) {
                const ddHandler = {
                    "SiteScripts.useEffect.ddHandler": (e)=>{
                        if (window.matchMedia("(max-width:1024px)").matches) {
                            e.preventDefault();
                            dd.classList.toggle("open");
                        }
                    }
                }["SiteScripts.useEffect.ddHandler"];
                toggle.addEventListener("click", ddHandler);
                cleanupFns.push({
                    "SiteScripts.useEffect": ()=>toggle.removeEventListener("click", ddHandler)
                }["SiteScripts.useEffect"]);
                const ddMenu = dd.querySelector(".nav-dd-menu");
                if (ddMenu) {
                    ddMenu.querySelectorAll("a").forEach({
                        "SiteScripts.useEffect": (a)=>{
                            const closeDdHandler = {
                                "SiteScripts.useEffect.closeDdHandler": ()=>{
                                    dd.classList.remove("open");
                                    dd.classList.add("dismissed");
                                    if (document.activeElement instanceof HTMLElement) {
                                        document.activeElement.blur();
                                    }
                                }
                            }["SiteScripts.useEffect.closeDdHandler"];
                            a.addEventListener("click", closeDdHandler);
                            cleanupFns.push({
                                "SiteScripts.useEffect": ()=>a.removeEventListener("click", closeDdHandler)
                            }["SiteScripts.useEffect"]);
                        }
                    }["SiteScripts.useEffect"]);
                    const removeDismissed = {
                        "SiteScripts.useEffect.removeDismissed": ()=>{
                            dd.classList.remove("dismissed");
                        }
                    }["SiteScripts.useEffect.removeDismissed"];
                    dd.addEventListener("mouseleave", removeDismissed);
                    cleanupFns.push({
                        "SiteScripts.useEffect": ()=>dd.removeEventListener("mouseleave", removeDismissed)
                    }["SiteScripts.useEffect"]);
                }
            }
            /* fade-up reveals */ const els = document.querySelectorAll(".reveal");
            if (!("IntersectionObserver" in window)) {
                els.forEach({
                    "SiteScripts.useEffect": (e)=>e.classList.add("in")
                }["SiteScripts.useEffect"]);
            } else {
                const io = new IntersectionObserver({
                    "SiteScripts.useEffect": (entries)=>{
                        entries.forEach({
                            "SiteScripts.useEffect": (en)=>{
                                if (en.isIntersecting) {
                                    en.target.classList.add("in");
                                    io.unobserve(en.target);
                                }
                            }
                        }["SiteScripts.useEffect"]);
                    }
                }["SiteScripts.useEffect"], {
                    threshold: 0.12,
                    rootMargin: "0px 0px -8% 0px"
                });
                els.forEach({
                    "SiteScripts.useEffect": (e)=>io.observe(e)
                }["SiteScripts.useEffect"]);
                cleanupFns.push({
                    "SiteScripts.useEffect": ()=>io.disconnect()
                }["SiteScripts.useEffect"]);
            }
            /* scroll-spy */ const links = Array.from(document.querySelectorAll(".nav-links a[href^='#']"));
            if (links.length && "IntersectionObserver" in window) {
                const map = {};
                links.forEach({
                    "SiteScripts.useEffect": (a)=>{
                        const id = a.getAttribute("href")?.slice(1);
                        if (id) map[id] = a;
                    }
                }["SiteScripts.useEffect"]);
                const sections = Object.keys(map).map({
                    "SiteScripts.useEffect.sections": (id)=>document.getElementById(id)
                }["SiteScripts.useEffect.sections"]).filter(Boolean);
                const spy = new IntersectionObserver({
                    "SiteScripts.useEffect": (entries)=>{
                        entries.forEach({
                            "SiteScripts.useEffect": (en)=>{
                                if (en.isIntersecting) {
                                    links.forEach({
                                        "SiteScripts.useEffect": (a)=>a.classList.remove("active")
                                    }["SiteScripts.useEffect"]);
                                    map[en.target.id]?.classList.add("active");
                                }
                            }
                        }["SiteScripts.useEffect"]);
                    }
                }["SiteScripts.useEffect"], {
                    rootMargin: "-45% 0px -50% 0px",
                    threshold: 0
                });
                sections.forEach({
                    "SiteScripts.useEffect": (s)=>spy.observe(s)
                }["SiteScripts.useEffect"]);
                cleanupFns.push({
                    "SiteScripts.useEffect": ()=>spy.disconnect()
                }["SiteScripts.useEffect"]);
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
                            b.addEventListener("click", {
                                "SiteScripts.useEffect": ()=>{
                                    go(k);
                                    restart();
                                }
                            }["SiteScripts.useEffect"]);
                            dotsWrap.appendChild(b);
                            dots.push(b);
                        }
                        let i = 0;
                        const go = {
                            "SiteScripts.useEffect.go": (x)=>{
                                i = (x + n) % n;
                                track.style.transform = `translateX(-${i * 100}%)`;
                                dots.forEach({
                                    "SiteScripts.useEffect.go": (d, idx)=>d.classList.toggle("active", idx === i)
                                }["SiteScripts.useEffect.go"]);
                            }
                        }["SiteScripts.useEffect.go"];
                        const prevHandler = {
                            "SiteScripts.useEffect.prevHandler": ()=>{
                                go(i - 1);
                                restart();
                            }
                        }["SiteScripts.useEffect.prevHandler"];
                        const nextHandler = {
                            "SiteScripts.useEffect.nextHandler": ()=>{
                                go(i + 1);
                                restart();
                            }
                        }["SiteScripts.useEffect.nextHandler"];
                        prevBtn.addEventListener("click", prevHandler);
                        nextBtn.addEventListener("click", nextHandler);
                        const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
                        let timer = null;
                        const start = {
                            "SiteScripts.useEffect.start": ()=>{
                                if (reduce || timer) return;
                                timer = setInterval({
                                    "SiteScripts.useEffect.start": ()=>go(i + 1)
                                }["SiteScripts.useEffect.start"], 6000);
                            }
                        }["SiteScripts.useEffect.start"];
                        const restart = {
                            "SiteScripts.useEffect.restart": ()=>{
                                if (timer) clearInterval(timer);
                                timer = null;
                                start();
                            }
                        }["SiteScripts.useEffect.restart"];
                        const stop = {
                            "SiteScripts.useEffect.stop": ()=>{
                                if (timer) clearInterval(timer);
                            }
                        }["SiteScripts.useEffect.stop"];
                        root.addEventListener("mouseenter", stop);
                        root.addEventListener("mouseleave", start);
                        go(0);
                        start();
                        cleanupFns.push({
                            "SiteScripts.useEffect": ()=>{
                                stop();
                                root.removeEventListener("mouseenter", stop);
                                root.removeEventListener("mouseleave", start);
                                prevBtn.removeEventListener("click", prevHandler);
                                nextBtn.removeEventListener("click", nextHandler);
                                dots.forEach({
                                    "SiteScripts.useEffect": (d)=>d.remove()
                                }["SiteScripts.useEffect"]);
                                track.style.transform = "";
                            }
                        }["SiteScripts.useEffect"]);
                    }
                }
            }
            /* quote form */ const f = document.getElementById("quoteForm");
            const ok = document.getElementById("formSuccess");
            if (f && ok) {
                const submitHandler = {
                    "SiteScripts.useEffect.submitHandler": (e)=>{
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
                    }
                }["SiteScripts.useEffect.submitHandler"];
                f.addEventListener("submit", submitHandler);
                cleanupFns.push({
                    "SiteScripts.useEffect": ()=>f.removeEventListener("submit", submitHandler)
                }["SiteScripts.useEffect"]);
            }
            return ({
                "SiteScripts.useEffect": ()=>cleanupFns.forEach({
                        "SiteScripts.useEffect": (fn)=>fn()
                    }["SiteScripts.useEffect"])
            })["SiteScripts.useEffect"];
        }
    }["SiteScripts.useEffect"], [
        pathname
    ]);
    return null;
}
_s(SiteScripts, "tjXKfJWuFDa0epp0CJaCeazyqhM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = SiteScripts;
var _c;
__turbopack_context__.k.register(_c, "SiteScripts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_components_SiteScripts_tsx_0lxrv7b._.js.map