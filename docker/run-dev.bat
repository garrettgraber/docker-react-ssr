@echo off

echo Running build script
call build.bat

for %%x in ("%CD%") do set parent=%%~dpx
echo Parent
echo %parent%


set current=%cd%
echo Current
echo %current%


cd ..
rmdir /S /Q dist
rem call npm run build:dev
@echo on

cd docker
@echo off

docker rm -f docker-react-webpack
docker run --name  docker-react-webpack -e NODE_ENV=development  -p 8082:8082  -v %parent%:c:\root\app docker-react-webpack

rem docker run --name  docker-react-webpack -p 8082:8082  docker-react-webpack
