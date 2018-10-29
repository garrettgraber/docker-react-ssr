@echo off

echo Bootstrap is running


rem Install npm libraries
rem npm install --save


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
rem rmdir  %current%root\app\node_modules\  /s /q 
mklink  /J %current%\root\app\node_modules\  %current%root\node_modules\ 
rem move %current%root\node_modules\   %current%root\app\node_modules\
echo npm start the app...



dir

cd ..

dir



rem npm ls --depth=0

rem npm-install-missing


rem cd app


cd root\app

rem npm install --save

rem npm ls --depth=0

dir



rem node test.js

rem start cmd.exe


rem npm start

npm run start:dev
