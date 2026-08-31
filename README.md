# ⚡ ARC Tracker Hub

> **A community-built ARC Raiders tracker hub for progression, loot, quests, blueprints, enemies, workshop upgrades, and more.**
**ARC Tracker Hub** is a lightweight, browser-based companion for **ARC Raiders** designed to keep useful game information and progression tracking in one place.

No account required. No database required. Your personal tracker data can be stored locally in your browser.

---
## ✨ Features

* 🎮 **ARC Raiders Tracker Hub**
* 🧭 Centralized ARC Raiders information and tracking tools
* 📊 Player count tracking with automatic updates
* 🛠️ Workshop progression tracking
* 📘 Blueprint progression tracking
* 🎯 Quest tracking and progress management
* 🤖 Enemy information and tracking
* 📦 Loot and container tracking
* 🎒 Standalone loot table with item values and rarities
* 🖼️ ARC Raiders Wiki item images
* 💾 Local progress saved directly in the browser
* 📤 Progress export and backup support
* 🖥️ Lightweight browser-based interface
* 🌐 Designed to work without a dedicated server
* 🔧 Easy to customize, modify, and expand
* 📱 Responsive-friendly structure
* ⚡ Built with HTML, CSS, and JavaScript
* 🚀 Compatible with static web hosting

---
## 💾 Local Storage
ARC Tracker Hub is designed to work primarily on the client side.
Progress and tracker information can be stored using the browser's:
```js
localStorage
```
This allows your progress to persist between sessions without requiring an account or remote database.

---
## 📤 Export & Backup
Progress can be exported as JSON so you can keep a backup of your tracker data.
Example:
```json
{
  "workshop": {},
  "blueprints": {},
  "quests": {},
  "enemies": {}
}
```
This also makes it possible to move your progress between browsers or keep manual backups.
---
## 🧩 Project Structure
```text
ArcTrackerHub/
│
├── assets/
│   └── Project assets
│
├── images/
│   └── Item and UI images
│
├── index.html
├── LICENSE
└── README.md
```
---
## 🌐 Technology
ARC Tracker Hub is built using standard web technologies:

* **HTML5**
* **CSS3**
* **JavaScript**
* **LocalStorage**
* **REST/API requests**
* **JSON**
* **GitHub Pages**

The project is intentionally lightweight and does not require a framework or build system.

---
## 🖥️ Running Locally
Clone the repository:
```bash
git clone https://github.com/Cap4Teen4/ArcTrackerHub.git
```
Open the project:
```bash
cd ArcTrackerHub
```
Then open:
```text
index.html
```
in your browser.
For the best development experience, use a local web server such as VS Code Live Server.

---
## 🚀 Deployment
The project can be hosted as a static website.
Compatible hosting includes:

* GitHub Pages
* Cloudflare Pages
* Netlify
* Vercel
* Any standard static web host

No server-side application is required for the core tracker.

---
## 🗺️ Roadmap

Planned and potential improvements include:
* [ ] Improved quest tracking
* [ ] More enemy information
* [ ] Container locations/information
* [ ] Improved blueprint tracking

* [ ] More player-count statistics
* [ ] Historical player-count charts
* [ ] UI improvements and animations

FAR FUTURE
* [ ] Better mobile support

---
## 🤝 Contributing
Suggestions, bug reports, and improvements are welcome.
If you find an issue or have an idea for a new feature, open an issue or submit a pull request.

---
## ⚠️ Disclaimer
ARC Tracker Hub is a **fan-made community project** and is not affiliated with, endorsed by, or sponsored by Embark Studios.
**ARC Raiders** and related names, imagery, and trademarks belong to their respective owners.

---
## 📜 License
This project is licensed under the:
**Eclipse Public License 2.0 (EPL-2.0)**
See [`LICENSE`](./LICENSE) for the full license text.

---
## ⭐ Support the Project
If you find ARC Tracker Hub useful, consider giving the repository a ⭐ on GitHub.
It helps support continued development and lets others discover the project.

---
### 🔗 Repository
**GitHub:**
https://github.com/Cap4Teen4/ArcTrackerHub
