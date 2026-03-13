@echo off
cd /d C:\Users\motaung\Desktop\Ark-main\Ark-main
echo Starting npm install...
call npm install > install_output.txt 2>&1
echo Install completed with exit code: %ERRORLEVEL%
echo Starting npm run build...
call npm run build > build_output.txt 2>&1
echo Build completed with exit code: %ERRORLEVEL%
echo Done!
