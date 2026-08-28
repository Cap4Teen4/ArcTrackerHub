/* =========================================
   GET ARC PATHS
========================================= */

const trailPaths = [
    document.getElementById("trailBlue"),
    document.getElementById("trailGreen"),
    document.getElementById("trailYellow"),
    document.getElementById("trailRed")
];

/* =========================================
   PREPARE PATHS
========================================= */

trailPaths.forEach(path => {

    if (!path) return;

    const length = path.getTotalLength();

    path.dataset.length = length;

    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

});

/* =========================================
   ARC SETTINGS
========================================= */

const trailSettings = [

    /* BLUE */
    {
        start: 0.00,
        end: 0.65
    },

    /* GREEN */
    {
        start: 0.10,
        end: 0.75
    },

    /* YELLOW */
    {
        start: 0.20,
        end: 0.85
    },

    /* RED */
    {
        start: 0.30,
        end: 1.00
    }

];

/* =========================================
   UPDATE ARC LINES
========================================= */

function updateTrails() {

    const maxScroll =
        document.documentElement.scrollHeight -
        window.innerHeight;

    if (maxScroll <= 0) return;

    const progress =
        window.scrollY / maxScroll;

    trailPaths.forEach((path, index) => {

        if (!path) return;

        const settings =
            trailSettings[index];

        const length =
            Number(path.dataset.length);

        /* Calculate this line's scroll progress */

        let p =
            (progress - settings.start) /
            (settings.end - settings.start);

        /* Clamp */

        p =
            Math.max(
                0,
                Math.min(1, p)
            );

        /* Smoothstep */

        const eased =
            p * p * (3 - 2 * p);

        /* Draw line */

        const offset =
            length -
            (length * eased);

        path.style.strokeDashoffset =
            offset;

    });

}

/* =========================================
   SCROLL
========================================= */

window.addEventListener(
    "scroll",
    updateTrails,
    { passive: true }
);

/* =========================================
   RESIZE
========================================= */

window.addEventListener(
    "resize",
    updateTrails
);

/* =========================================
   INITIAL
========================================= */

updateTrails();