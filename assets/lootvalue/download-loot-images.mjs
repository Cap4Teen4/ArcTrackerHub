// Run locally with: node download-loot-images.mjs
// Requires Node 18+ (built-in fetch). Needs internet access.
//
// What it does:
//   1. Reads the item names straight out of lootvalue.js
//   2. Requests each wiki "Special:Redirect/file/<name>.png" URL
//   3. Saves the final resolved image to assets/loot-images/<name>.png
//   4. Writes a manifest so you (or lootvalue.js) can map name -> local file
//
// After running this once, point lootvalue.js's imageUrl() at
// "assets/loot-images/" instead of the wiki, and you never hit
// the wiki again at page-load time.

import fs from "node:fs/promises";
import path from "node:path";

const WIKI_IMAGE = "https://arcraiders.wiki/wiki/Special:Redirect/file/";
const OUT_DIR = "assets/loot-images";

const src = await fs.readFile("lootvalue.js", "utf8");

// Pull item names out of lootvalue.js (matches: name: "Something")
const names = [...src.matchAll(/name:\s*"((?:[^"\\]|\\.)*)"/g)]
    .map(m => m[1].replace(/\\"/g, '"'));

await fs.mkdir(OUT_DIR, { recursive: true });

const manifest = {};
let ok = 0, failed = [];

for (const name of names) {
    const url = WIKI_IMAGE + encodeURIComponent(name + ".png");
    const safeFile = name.replace(/[^a-z0-9]+/gi, "_") + ".png";
    const outPath = path.join(OUT_DIR, safeFile);

    try {
        const res = await fetch(url, { redirect: "follow" });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const buf = Buffer.from(await res.arrayBuffer());
        await fs.writeFile(outPath, buf);

        manifest[name] = `${OUT_DIR}/${safeFile}`;
        ok++;
        console.log(`✓ ${name}`);
    } catch (err) {
        failed.push(name);
        console.log(`✗ ${name} — ${err.message}`);
    }

    // Be polite to the wiki's server — small delay between requests.
    await new Promise(r => setTimeout(r, 150));
}

await fs.writeFile(
    "loot-image-manifest.json",
    JSON.stringify(manifest, null, 2)
);

console.log(`\nDone. ${ok}/${names.length} images saved to ${OUT_DIR}/`);
if (failed.length) {
    console.log("Failed (kept using wiki fallback, check spelling/casing):", failed);
}
