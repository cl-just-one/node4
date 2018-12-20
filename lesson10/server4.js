const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
// cookie的使用
const server = express();
// 解析cookie
server.use(cookieParser());
// 设置session
server.use(cookieSession({
  name: 'aa',
  keys: [11, '22km', 6444],
  maxAge: 24*3600*1000
}))
// 读取文件
server.use('/', function (req, res) {
  if (req.session['count'] == null) {
    req.session['count'] = 1;
  } else {
    req.session['count']++;
  }
  console.log(req.session['count']);
  res.send('ok');
});
server.listen(8080);
