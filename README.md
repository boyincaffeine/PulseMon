# ⚡ PulseMon - Server Monitoring Dashboard

PulseMon is a full-stack server health monitoring solution that collects, stores, and displays system performance data in real-time — with alerts via Slack and Telegram when thresholds are breached.

![PulseMon Demo](https://cdn-icons-png.flaticon.com/512/1995/1995653.png)

---

## 🚀 Live Demo

🔗 Frontend: [https://pulsemon-frontend.onrender.com](https://pulsemon-frontend.onrender.com)

---

## 🧠 Features

- 📊 Monitor CPU, Memory, and Disk usage
- 🔔 Real-time alerts to Slack and Telegram
- 🔐 User authentication with Supabase
- 📥 Bash-based Linux agent with cronjob integration
- 🌐 Deployed on Render (frontend + backend)

---

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Supabase Auth
- **Backend**: FastAPI, MongoDB
- **Agent**: Bash script (pulsemon-agent.sh)
- **Alerts**: Slack Webhooks + Telegram Bot
- **Deployment**: Render

---

## 📁 Project Structure

PulseMon/
├── backend/ # FastAPI backend
│ ├── main.py # API endpoints and alert logic
│ └── .env # Environment secrets (Mongo URI, Webhooks)
├── pulsemon-frontend/ # React + Vite frontend
│ ├── src/
│ │ ├── components/
│ │ │ ├── Navbar.jsx
│ │ │ └── ProtectedRoute.jsx
│ │ ├── pages/
│ │ │ ├── Login.jsx
│ │ │ ├── Dashboard.jsx
│ │ │ └── LandingPage.jsx
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ └── supabaseClient.js
│ ├── public/
│ └── vite.config.js
├── pulsemon-agent.sh # Bash script to send server metrics
└── README.md

yaml
Copy
Edit

---

## 🐧 Linux Agent Setup

```bash
chmod +x pulsemon-agent.sh
crontab -e
# Add the following line to send metrics every 5 minutes
*/5 * * * * /bin/bash /home/vboxuser/PulseMon/pulsemon-agent.sh
🧪 How it Works
📡 Agent script collects system metrics (CPU, MEM, DISK, IP)

🔁 Sends report to FastAPI /api/report

🚨 If thresholds exceeded → alerts sent to Slack & Telegram

🧾 Dashboard (React) fetches /api/reports and displays them

🔐 Supabase handles user login and protects access

🧾 Environment Variables (.env)
env
Copy
Edit
MONGO_URI=mongodb+srv://...
SLACK_WEBHOOK=https://hooks.slack.com/services/...
TELEGRAM_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
📸 Screenshots
🖥️ Dashboard


🔐 Login


💡 Future Enhancements
Historical charts (CPU/MEM usage over time)

Admin panel for user/device management

Email alert integration

Dockerized deployment

📜 License
This project is licensed under the MIT License.

🤝 Contributions Welcome!
If you find this useful, feel free to ⭐ the repo and contribute!

yaml
Copy
Edit

---

Let me know if you want me to:
- Add badges (deployment, license, tech stack)
- Auto-generate images for your screenshots
- Help publish on ProductHunt, GitHub Discussions, or Dev.to

Ready for next steps whenever you are!
