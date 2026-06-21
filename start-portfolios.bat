@echo off
echo ==============================================
echo   Starting Rajan Pantha's Portfolio...
echo ==============================================
echo.

echo Starting Portfolio (Port 3000)...
start "Portfolio" cmd /c "cd portfolio && npm run dev"

echo Opening Portfolio in default browser...
timeout /t 5 /nobreak > nul
start http://localhost:3000

echo.
echo Server is starting up in a separate window.
echo Keep the newly opened terminal window open to keep the server running.
echo Press any key to exit this script window...
pause > nul
