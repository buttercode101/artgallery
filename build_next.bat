@echo off
cd /d C:\Users\motaung\Desktop\Ark-main\Ark-main
echo Starting next build...
call node_modules\.bin\next build > next_build_direct.log 2>&1
echo Build completed with exit code: %ERRORLEVEL%
