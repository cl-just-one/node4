const express = require('express');
const cookieParser = require('cookie-parser');
// cookie的使用
const server = express();
// 解析cookie
server.use(cookieParser());
// 读取文件
server.use('/', function (req, res) {
  res.clearCookie('xxxxx');
  res.send('ok');
});
server.listen(8080);
