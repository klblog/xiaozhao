echo "拉取最新的代码"
pwd
cd /home/xiaozhao/

echo "确保当前分支是干净的"
git add .
git commit -m "拉取最新代码前的commit ${date + '%Y-%m-%d %H:%M:%S'}"

echo "开始拉取"
git pull origin master
echo "拉取完成"