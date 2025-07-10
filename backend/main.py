from fastapi import FastAPI, Request
from datetime import datetime
from dotenv import load_dotenv
from pymongo import MongoClient
import os
import requests

# Load environment variables
load_dotenv()
app = FastAPI()

# Get env vars
MONGO_URI = os.getenv("MONGO_URI")
SLACK_WEBHOOK = os.getenv("SLACK_WEBHOOK")
TELEGRAM_TOKEN = os.getenv("TELEGRAM_TOKEN")
TELEGRAM_CHAT_ID = os.getenv("TELEGRAM_CHAT_ID")

# ✅ Check 3: Print ENV values to debug loading
print("🔍 MONGO_URI:", MONGO_URI)
print("🔍 SLACK_WEBHOOK:", SLACK_WEBHOOK)
print("🔍 TELEGRAM_TOKEN:", TELEGRAM_TOKEN)
print("🔍 TELEGRAM_CHAT_ID:", TELEGRAM_CHAT_ID)

# Setup MongoDB
client = MongoClient(MONGO_URI)
db = client["pulsemon"]

@app.post("/api/report")
async def report(req: Request):
    data = await req.json()
    data["timestamp"] = datetime.utcnow()
    db.reports.insert_one(data)

    # ✅ Check 1: Log incoming data
    print(f"📥 Received: CPU={data['cpu']}%, MEM={data['mem']}%, DISK={data['disk']}%")

    # Thresholds
    cpu_threshold = 80
    mem_threshold = 85
    disk_threshold = 90

    # ✅ Check 2: Print alert trigger
    if data["cpu"] > cpu_threshold or data["mem"] > mem_threshold or data["disk"] > disk_threshold:
        print("🚨 Alert triggered!")

        msg = (
            f"🚨 ALERT\n"
            f"Server: {data['ip']}\n"
            f"CPU: {data['cpu']}%\n"
            f"MEM: {data['mem']}%\n"
            f"DISK: {data['disk']}%"
        )

        send_slack(msg)
        send_telegram(msg)
    else:
        print("✅ No thresholds exceeded. No alert sent.")

    return {"status": "received"}

# ✅ Check 5: Slack alert function
def send_slack(message):
    if not SLACK_WEBHOOK:
        print("❌ SLACK_WEBHOOK not set")
        return
    try:
        response = requests.post(SLACK_WEBHOOK, json={"text": message})
        print("✅ Slack alert sent:", response.status_code)
    except Exception as e:
        print("❌ Slack error:", e)

# ✅ Check 4: Telegram alert function
def send_telegram(message):
    if not TELEGRAM_TOKEN or not TELEGRAM_CHAT_ID:
        print("❌ TELEGRAM config missing")
        return
    try:
        telegram_url = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage"
        response = requests.post(telegram_url, data={
            "chat_id": TELEGRAM_CHAT_ID,
            "text": message
        })
        print("✅ Telegram alert sent:", response.status_code)
    except Exception as e:
        print("❌ Telegram error:", e)

