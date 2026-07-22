@echo off
chcp 65001 > nul
title Start Portfolio Project Servers
echo ==========================================================
echo  Starting Portfolio Project Servers (Next.js ^& FastAPI)
echo ==========================================================
echo.

echo [1/4] Clearing ports 3000 and 8765...
call npx kill-port 3000 8765
echo.

echo [2/4] Clearing Next.js webpack cache (.next)...
if exist .next (
    rd /s /q .next
    echo Cache cleared successfully.
) else (
    echo No cache directory found.
)
echo.

echo [3/4] Starting FastAPI Backend on Port 8765...
start "FastAPI Music Backend" cmd /k "cd /d G:\project\music_project_final\backend && .\venv\Scripts\python.exe -m uvicorn main:app --host 0.0.0.0 --port 8765 --reload"

echo [4/4] Starting Next.js Dev Server on Port 3000...
start "Next.js Dev Server" cmd /k "cd /d G:\project\resume && npx pnpm dev"
echo.

echo Opening website in default browser...
start http://localhost:3000
echo.

echo ==========================================================
echo  Done! Both servers have been launched in separate windows.
echo  This manager window will close automatically in 5 seconds.
echo ==========================================================
timeout /t 5
