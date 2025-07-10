#!/bin/bash

# 📡 Collect actual system metrics
CPU=$(top -bn1 | grep "Cpu(s)" | awk '{print $2 + $4}')
MEM=$(free | grep Mem | awk '{print $3/$2 * 100.0}')
DISK=$(df -h / | grep -w '/' | awk '{print $5}' | sed 's/%//g')
IP=$(hostname -I | awk '{print $1}')

# 🚀 Send data to FastAPI
curl -X POST http://127.0.0.1:8000/api/report \
-H "Content-Type: application/json" \
-d "{\"cpu\": $CPU, \"mem\": $MEM, \"disk\": $DISK, \"ip\": \"$IP\"}"


