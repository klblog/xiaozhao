#!/bin/bash

DOMAIN="xz-des.cn"
DEST_DIR="/var/www/html/$DOMAIN"

echo "Starting script..."

# 1、构建
echo "Starting build..."
echo "Current directory:"
pwd
cd /home/xiaozhao/
echo "Directory after changing:"
pwd
echo "Running npm build..."
yarn run build
echo "Build complete."

# 2、部署
echo "Starting deployment..."
echo "Moving ./dist to ${DEST_DIR}..."
rsync -av --delete ./.vuepress/dist/ $DEST_DIR/dist/
echo "Deployment complete."

# 3、 推送
echo "Starting push..."
echo "Adding changes to git..."
git add .
echo "Committing changes..."
git commit -m "deploy $(date +'%Y年%m月%d日 %H:%M:%S')" # 希望delpoy 给个当前部署的时间 xx年xx月xx日
echo "Pushing changes..."
git push origin master
echo "Push complete."

echo "Script complete."
