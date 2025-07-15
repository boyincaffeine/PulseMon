from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from datetime import datetime
from dotenv import load_dotenv
from pymongo import MongoClient
from bson.json_util import dumps
import os
import requests

load_dotenv()
app = FastAPI()

# ✅ CORS configured strictly for your frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://pulsemon-frontend.onrender.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ MongoDB setup
client = MongoClient(os.getenv("MONGO_URI"))
db = client["pulsemon"]

# ✅ Notification configs
SLACK_WEBHOOK = os.getenv("SLACK_WEBHOOK")
TELEGRAM_TOKEN = os.getenv("TELEGRAM_TOKEN")
TELEGRAM_CHAT_ID = os.getenv("TELEGRAM_CHAT_ID")


def send_slack(message: str):
    if SLACK_WEBHOOK:
        payload = {"text": message}
        response = requests.post(SLACK_WEBHOOK, json=payload)
        print("Slack:", response.status_code, response.text)


def send_telegram(message: str):
    if TELEGRAM_TOKEN and TELEGRAM_CHAT_ID:
        url = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage"
        payload = {"chat_id": TELEGRAM_CHAT_ID, "text": message}
        response = requests.post(url, data=payload)
        print("Telegram:", response.status_code, response.text)


# ✅ Health check endpoint
@app.get("/")
async def root():
    return {"status": "ok", "message": "PulseMon backend is live 🚀"}


# ✅ POST API to receive metrics
@app.post("/api/report")
async def report(req: Request):
    data = await req.json()
    data["timestamp"] = datetime.utcnow()
    db.reports.insert_one(data)

    cpu = data.get("cpu", 0)
    mem = data.get("mem", 0)
    disk = data.get("disk", 0)
    ip = data.get("ip", "unknown")

    if cpu > 80 or mem > 85:
        msg = (
            f"🚨 ALERT\n"
            f"Server: {ip}\n"
            f"CPU: {cpu}%\n"
            f"MEM: {mem}%\n"
            f"DISK: {disk}%"
        )
        print("🚨 Alert triggered!")
        send_slack(msg)
        send_telegram(msg)

    return {"status": "received"}


# ✅ GET API to fetch latest 10 reports
@app.get("/api/reports")
async def get_reports():
    reports = list(db.reports.find().sort("timestamp", -1).limit(10))
    for r in reports:
        r["_id"] = str(r["_id"])  # Convert ObjectId to string for JSON compatibility
    return JSONResponse(content=reports)

