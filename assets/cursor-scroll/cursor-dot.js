const dotEl = document.getElementById('cursor-dot');
const ringEl = document.getElementById('cursor-ring');

let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', (e) => {
  mx = e.clientX;
  my = e.clientY;
  dotEl.style.left = mx + 'px';
  dotEl.style.top = my + 'px';
});

// ring eases toward the mouse each frame — this is what gives it the "lag/trail" feel
(function animateRing() {
  rx += (mx - rx) * 0.11;
  ry += (my - ry) * 0.11;
  ringEl.style.left = rx + 'px';
  ringEl.style.top = ry + 'px';
  requestAnimationFrame(animateRing);
})();

// ring grows when hovering clickable elements
document.querySelectorAll('a, button, .clickable').forEach((el) => {
  el.addEventListener('mouseenter', () => {
    ringEl.style.width = '50px';
    ringEl.style.height = '50px';
  });
  el.addEventListener('mouseleave', () => {
    ringEl.style.width = '26px';
    ringEl.style.height = '26px';
  });
});

// click ripple
document.addEventListener('click', (e) => {
  const ripple = document.createElement('div');
  ripple.className = 'click-ripple';
  ripple.style.left = e.clientX + 'px';
  ripple.style.top = e.clientY + 'px';
  ripple.style.width = ripple.style.height = '60px';
  document.body.appendChild(ripple);
  setTimeout(() => ripple.remove(), 880);
});
/* =========================================
   CURSOR COLOR CYCLE
========================================= */

const cursorColors = [
    "#0099ff", // Blue
    "#00ff6a", // Green
    "#ffcc00", // Yellow
    "#ff1900"  // Red
];

let cursorColorIndex = 0;


/* =========================================
   SET INITIAL COLOR
========================================= */

document.documentElement.style.setProperty(
    "--cursor-color",
    cursorColors[cursorColorIndex]
);


/* =========================================
   CHANGE COLOR ON CLICK
========================================= */

document.addEventListener("click", function (event) {

    cursorColorIndex++;

    if (cursorColorIndex >= cursorColors.length) {
        cursorColorIndex = 0;
    }


    const newColor =
        cursorColors[cursorColorIndex];


    document.documentElement.style.setProperty(
        "--cursor-color",
        newColor
    );


    /* =========================================
       CREATE CLICK RIPPLE
    ========================================= */

    const ripple =
        document.createElement("div");

    ripple.className =
        "click-ripple";


    ripple.style.left =
        event.clientX + "px";

    ripple.style.top =
        event.clientY + "px";


    /* Lock the ripple to the color
       used for THIS click */

    ripple.style.setProperty(
        "--cursor-color",
        newColor
    );


    document.body.appendChild(
        ripple
    );


    ripple.addEventListener(
        "animationend",
        () => {
            ripple.remove();
        }
    );

});