# PulseMon 🚨

PulseMon is a simple server health monitoring tool that tracks CPU, memory, and disk usage — and sends alerts via Slack and Telegram when thresholds are exceeded.

## 📦 Features

- 📊 Collects system stats (CPU, memory, disk)
- 📤 Sends alerts to Slack & Telegram
- 💾 Saves reports to MongoDB Atlas
- ⚡ REST API built using FastAPI
- 🐧 Bash script agent for Linux servers

## 📁 Project Structure

PulseMon/
├── backend/
│ ├── main.py
│ ├── .env.example
│ ├── requirements.txt
├── README.md

markdown
Copy
Edit

## 🚀 Usage

1. Clone the repo
2. Set up your `.env` using `.env.example`
3. Install dependencies and run:

```bash
uvicorn main:app --reload
Run the Bash agent:

## 🐧 Bash Agent

The Bash script `pulsemon-agent.sh` collects CPU, Memory, Disk stats and sends them to your FastAPI backend.

### 🔁 Run it manually:

```bash
bash pulsemon-agent.sh


bash
Copy
Edit
bash pulsemon-agent.sh
🛠️ .env Configuration
ini
Copy
Edit
MONGO_URI=your_mongo_connection_uri
SLACK_WEBHOOK=https://hooks.slack.com/services/...
TELEGRAM_TOKEN=your_telegram_token
TELEGRAM_CHAT_ID=your_telegram_chat_id
📬 Contributing
PRs welcome!

📄 License
MIT

yaml
Copy
Edit

Then press `Ctrl + O`, `Enter` to save, and `Ctrl + X` to exit.

---

### ✅ 3. Add it to Git and push

```bash
git add README.md
git commit -m "📝 Add README.md with project overview"
git push
