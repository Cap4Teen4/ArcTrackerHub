/* =========================================
   ARC RAIDERS PLAYER API
========================================= */

const PLAYER_API =
    "https://arcraiders.gg/.netlify/functions/steam-player-count";

let playerHistory = JSON.parse(
    localStorage.getItem("arcRaidersPlayerHistory") || "[]"
);

async function fetchPlayerCount() {
    try {
        const response = await fetch(PLAYER_API, {
            cache: "no-store"
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();

        const players = Number(data.player_count);
        const timestamp = new Date(data.timestamp).getTime();

        if (!Number.isFinite(players)) {
            throw new Error("Invalid player count");
        }

        // Add reading
        playerHistory.push({
            players,
            timestamp
        });

        // Keep only the last 30 days
        const thirtyDaysAgo =
            Date.now() - (30 * 24 * 60 * 60 * 1000);

        playerHistory = playerHistory.filter(
            item => item.timestamp >= thirtyDaysAgo
        );

        // Save history
        localStorage.setItem(
            "arcRaidersPlayerHistory",
            JSON.stringify(playerHistory)
        );

        updatePlayerStats();

        return data;

    } catch (error) {
        console.error("Player API Error:", error);
    }
}
function updatePlayerStats() {

    const now = Date.now();

    const day24 =
        now - (24 * 60 * 60 * 1000);

    const day7 =
        now - (7 * 24 * 60 * 60 * 1000);

    const day30 =
        now - (30 * 24 * 60 * 60 * 1000);


    const last24h = playerHistory.filter(
        x => x.timestamp >= day24
    );

    const last7d = playerHistory.filter(
        x => x.timestamp >= day7
    );

    const last30d = playerHistory.filter(
        x => x.timestamp >= day30
    );


    // CURRENT
    const current =
        playerHistory.length
            ? playerHistory[playerHistory.length - 1].players
            : 0;


    // 24 HOUR PEAK
    const peak24 =
        last24h.length
            ? Math.max(...last24h.map(x => x.players))
            : current;


    // 7 DAY PEAK
    const peak7 =
        last7d.length
            ? Math.max(...last7d.map(x => x.players))
            : current;


    // 30 DAY AVERAGE
    const average30 =
        last30d.length
            ? Math.round(
                last30d.reduce(
                    (sum, x) => sum + x.players,
                    0
                ) / last30d.length
            )
            : current;


    // Update your elements
    const currentEl =
        document.getElementById("currentPlayers");

    const peak24El =
        document.getElementById("peak24h");

    const peak7El =
        document.getElementById("peak7d");

    const average30El =
        document.getElementById("average30d");


    if (currentEl)
        currentEl.textContent =
            current.toLocaleString();

    if (peak24El)
        peak24El.textContent =
            peak24.toLocaleString();

    if (peak7El)
        peak7El.textContent =
            peak7.toLocaleString();

    if (average30El)
        average30El.textContent =
            average30.toLocaleString();


    updatePlayerGraph();
}
// Get player count immediately
fetchPlayerCount();

// Update every 5 minutes
setInterval(fetchPlayerCount, 5 * 60 * 1000);
