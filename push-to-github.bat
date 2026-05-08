@echo off
echo ====================================
echo   苗绣竹韵官网 - GitHub 推送脚本
echo ====================================
echo.

cd /d "%~dp0"

echo [1/5] 初始化 Git 仓库...
git init

echo.
echo [2/5] 添加所有文件...
git add .

echo.
echo [3/5] 创建初始提交...
git commit -m "Initial commit: 苗绣竹韵官网"

echo.
echo [4/5] 关联远程仓库...
git remote add origin https://github.com/bairan503/miaoxiu-next.git

echo.
echo [5/5] 推送到 GitHub...
git branch -M main
git push -u origin main

echo.
echo ====================================
echo   完成！请检查 GitHub 仓库
echo ====================================
pause