/* =========================================================
   SCROLL ATMOSPHERE — logic
   Drop in assets/ and add <script src="assets/scroll-atmosphere.js">
   AFTER the nav/progress markup in the body.
========================================================= */

(function () {

    const root = document.documentElement;

    // Color stops across 0–100% scroll, adapted from Test.html's palette
    
    const stops = [
        { p: 0,    r: 10, g: 12, b: 18, accent: "#ff6a00" }, // hero
        { p: 0.20, r: 8,  g: 22, b: 35, accent: "#24aaff" }, // surface / cyan
        { p: 0.45, r: 8,  g: 30, b: 22, accent: "#42e88d" }, // resources / green
        { p: 0.70, r: 28, g: 24, b: 10, accent: "#ffd34e" }, // wasteland / yellow
        { p: 1.00, r: 35, g: 8,  b: 8,  accent: "#ff3030" }  // extraction / red
    ];

    function hexToRgb(hex) {
        const n = parseInt(hex.replace("#", ""), 16);
        return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
    }

    function rgbToHex(r, g, b) {
        return "#" + [r, g, b].map(v =>
            Math.round(v).toString(16).padStart(2, "0")
        ).join("");
    }

    function lerp(a, b, t) {
        return a + (b - a) * t;
    }

    let current = { r: stops[0].r, g: stops[0].g, b: stops[0].b, accent: hexToRgb(stops[0].accent) };
    let target = { r: stops[0].r, g: stops[0].g, b: stops[0].b, accent: hexToRgb(stops[0].accent) };

    function getTargetForProgress(progress) {
        let lower = stops[0];
        let upper = stops[stops.length - 1];

        for (let i = 0; i < stops.length - 1; i++) {
            if (progress >= stops[i].p && progress <= stops[i + 1].p) {
                lower = stops[i];
                upper = stops[i + 1];
                break;
            }
        }

        const span = upper.p - lower.p || 1;
        const t = (progress - lower.p) / span;

        const lowerAccent = hexToRgb(lower.accent);
        const upperAccent = hexToRgb(upper.accent);

        return {
            r: lerp(lower.r, upper.r, t),
            g: lerp(lower.g, upper.g, t),
            b: lerp(lower.b, upper.b, t),
            accent: {
                r: lerp(lowerAccent.r, upperAccent.r, t),
                g: lerp(lowerAccent.g, upperAccent.g, t),
                b: lerp(lowerAccent.b, upperAccent.b, t)
            }
        };
    }

    function updateProgress() {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const progress = max > 0 ? window.scrollY / max : 0;
        const percent = progress * 100;

        const progressBar = document.getElementById("progress");
        if (progressBar) progressBar.style.width = percent + "%";

        const scrollPercentEl = document.getElementById("scrollPercent");
        if (scrollPercentEl) scrollPercentEl.textContent = Math.round(percent) + "%";

        target = getTargetForProgress(progress);
    }

    function animate() {
        current.r += (target.r - current.r) * .06;
        current.g += (target.g - current.g) * .06;
        current.b += (target.b - current.b) * .06;
        current.accent.r += (target.accent.r - current.accent.r) * .06;
        current.accent.g += (target.accent.g - current.accent.g) * .06;
        current.accent.b += (target.accent.b - current.accent.b) * .06;

        root.style.setProperty("--r", Math.round(current.r));
        root.style.setProperty("--g", Math.round(current.g));
        root.style.setProperty("--b", Math.round(current.b));
        root.style.setProperty("--accent", rgbToHex(current.accent.r, current.accent.g, current.accent.b));

        requestAnimationFrame(animate);
    }

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    updateProgress();
    animate();

})();
