# 部署到 xz-des.cn
DOMAIN="xz-des.cn"

# 公网IP
SVG="106.14.90.29"
USER="root"
PASSWORD="Baixing123@"
DEST_DIR="/var/www/html/$DOMAIN"

SRC_PATH_DIR=$( pwd )
SRC_DIR="$SRC_PATH_DIR/.vuepress/dist"

echo "部署地址是: $SVR ($DEST_DIR)"

DEST_SVG="root@$SVG:$DEST_DIR"

scp -r $SRC_DIR/ $DEST_SVG 

echo "部署成功"