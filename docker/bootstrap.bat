@echo off

echo Bootstrap is running

for %%x in ("%CD%") do set parent=%%~dpx
echo Parent
echo %parent%

set current=%cd%
echo Current
echo %current%

dir
node --version
cd root
dir

echo %current%root\node_modules\
echo Link in preinstalled packages...
mklink  /J %current%\root\app\node_modules\  %current%root\node_modules\ 
echo npm start the app...

dir
cd ..
dir

cd root\app

for /f "delims=[] tokens=2" %%a in ('ping -4 -n 1 %ComputerName% ^| findstr [') do set NetworkIP=%%a
echo Network IP: %NetworkIP%

set server_location=http:\\%NetworkIP%:8082
echo Webpack Server at: %server_location%

set node_environment="%NODE_ENV%"
echo %node_environment%

if %node_environment% == "webpack" (call npm run build:webpack && call npm run server:webpack)
if %node_environment% == "development" (call npm run build:dev && call npm run server:dev)
if %node_environment% == "production" (call npm run build:prod && call npm run server:prod)

