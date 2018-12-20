const express = require('express');
const cookieParser = require('cookie-parser');
// cookie的使用
const server = express();
// 解析cookie
server.use(cookieParser('swhidfhiwdhwidiw'));
// 读取文件
server.use('/', function (req, res) {
  // req.secret = 'swhidfhiwdhwidiw';
  // res.cookie('xxxxx', '2019', {
  //   signed: true
  // });
  // 读取cookie
  console.log("无签名："+req.cookies.name);
  console.log("带签名："+req.signedCookies.xxxxx);
  res.send('ok');
});
server.listen(8080);
