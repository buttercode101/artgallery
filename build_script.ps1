Set-Location -Path "C:\Users\motaung\Desktop\Ark-main\Ark-main"

Write-Host "Starting npm install..."
npm install 2>&1 | Tee-Object -FilePath install_output.txt

Write-Host "Install completed. Starting npm run build..."
npm run build 2>&1 | Tee-Object -FilePath build_output.txt

Write-Host "Build completed!"
