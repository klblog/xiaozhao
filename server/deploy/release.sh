# 构建、部署、推送脚本

DOMAIN="xz-des.cn"
DEST_DIR="/var/www/html/$DOMAIN"

# 1、构建
echo "Current directory:"
pwd
cd ../
pwd
# cd /home/xiaozhao/
npm run build

# 2、部署
# 移动 ./dist 到 DEST_DIR
rsync -av --delete ./.vuepress/dist/ $DEST_DIR/

# 3、 推送
git add .
git commit -m "deploy $(date + '%Y年%月%日 %H:%M:%S')" # 希望delpoy 给个当前部署的时间 xx年xx月xx日
git push origin master