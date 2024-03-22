### 小赵的后端服务

#### pm2 一些指令的介绍
+ 启动应用：pm2 start app.js（其中 app.js 是你的 Node.js 应用的入口文件）

+ 列出所有 PM2 管理的应用：pm2 list

+ 查看特定应用的日志：pm2 logs [app_name|id]（app_name 或 id 是你的应用名称或 ID）

+ 停止应用：pm2 stop [app_name|id]

+ 重启应用：pm2 restart [app_name|id]

+ 删除应用：pm2 delete [app_name|id]

+ 查看应用的详细信息：pm2 show [app_name|id]

+ 保存当前应用列表：pm2 save（这样在服务器重启后，PM2 会自动重启保存的应用列表）

+ 在服务器重启后自动启动 PM2：pm2 startup（这个命令会根据你的操作系统生成一个命令，你需要手动执行那个命令）

+ 查看服务运行日志 pm2 logs [app_name|id]

