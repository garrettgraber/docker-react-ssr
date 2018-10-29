@echo off

rem Running build script
rem build.bat

for %%x in ("%CD%") do set parent=%%~dpx
echo Parent
echo %parent%


set current=%cd%
echo Current
echo %current%

docker rm -f docker-react-webpack
docker run --name  docker-react-webpack  -p 0.0.0.0:8082:8082  -v %parent%:c:\root\app docker-react-webpack

rem docker run --name  docker-react-webpack -p 8082:8082  docker-react-webpack
