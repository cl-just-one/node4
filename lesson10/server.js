const express = require('express');
// cookie的使用
const server = express();
server.listen(8080);
// 读取文件
server.use('/', function (req, res) {
  // 设置cookie
  res.cookie('name', 'cl', {
    path: '/', // coookie
    maxAge: 30*24*3600*1000 // 过期时间
  });
  res.send('ok');
});
