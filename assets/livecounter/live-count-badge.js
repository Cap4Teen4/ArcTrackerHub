/* =========================================================
   LIVE PLAYER COUNT — corner badge logic
   Watches the existing #currentPlayers / #statusText
   elements (from your Player Count tab) and mirrors
   their values into the fixed corner badge, so it works
   no matter which tab is currently open.

   Load this AFTER playercount.js.
========================================================= */

(function () {

    function init() {
        const badge = document.getElementById("liveCountBadge");
        const badgeValue = document.getElementById("liveCountValue");
        const badgeDot = badge;

        const sourcePlayers = document.getElementById("currentPlayers");
        const sourceStatus = document.getElementById("statusText");

        if (!badge || !badgeValue || !sourcePlayers) return;

        function sync() {
            const text = sourcePlayers.textContent.trim();
            badgeValue.textContent = text === "—" ? "—" : text;

            const statusText = sourceStatus ? sourceStatus.textContent.trim().toLowerCase() : "";

            badge.classList.remove("online", "offline");
            if (statusText.includes("online") || (text !== "—" && text !== "")) {
                badge.classList.add("online");
            } else if (statusText.includes("offline") || statusText.includes("error")) {
                badge.classList.add("offline");
            }
        }

        // Mirror any change to the real counter, whenever it updates
        const observer = new MutationObserver(sync);
        observer.observe(sourcePlayers, { childList: true, characterData: true, subtree: true });
        if (sourceStatus) {
            observer.observe(sourceStatus, { childList: true, characterData: true, subtree: true });
        }

        // Clicking the badge jumps to the Player Count tab
        badge.addEventListener("click", function () {
            const tabButton = document.querySelector('.tab-button[data-tab="playercount"]');
            if (tabButton) tabButton.click();
            const section = document.getElementById("playercount");
            if (section) section.scrollIntoView({ behavior: "smooth" });
        });

        // Kick off an initial fetch if the tracker exposes one, so the
        // badge has real data even before the user opens that tab
        if (typeof fetchPlayerData === "function") {
            fetchPlayerData();
        }

        sync();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

})();
