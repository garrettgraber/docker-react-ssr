@echo off

set filename=package.json

dir


set current=%cd%
echo Current
echo %current%

for %%x in ("%CD%") do set parent=%%~dpx
echo Parent
echo %parent%

echo %parent%%filename%

xcopy  %parent%%filename% %current%%filename% /D /Y

xcopy C:\Users\garre\Code\docker-react-webpack\package.json C:\Users\garre\Code\docker-react-webpack\docker\package.json  /D /Y

dir

docker build -t docker-react-webpack .
rem docker build --no-cache  -t  docker-react-webpack .