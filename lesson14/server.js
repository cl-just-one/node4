const express = require('express');
const expressStatic = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const consolidate = require('consolidate');
const multer = require('multer');
const jade = require('jade');
const ejs = require('ejs');

const server = express();
server.listen(8080);

//1.解析cookie
server.use(cookieParser('qwqwertuo8yghfdffbdsssswewwedfdff'));

//2.使用session
var arr = [];
for (var i = 0; i < 100000; i++) {
  arr.push('keys_' + Math.random());
}

server.use(cookieSession({
  name: "zns_key_id",
  keys: arr,
  maxAge: 20*3600*1000
}));

//3.post数据
server.use(bodyParser.urlencoded({
  extended: false
}));

server.use(multer({
  dest: './www/upload'
}).any());

//用户请求
// server.use('/', function (req, res, next) {
//   console.log(req.query, req.body, req.files, req.cookies, req.session);
// })

// 配置模板引擎
//输出什么东西
server.set('view engine', 'html');
// 模板文件放在那儿
server.set('views', './views');
// 那种模板引擎
server.engine('html', consolidate.ejs);

// 接收用户请求
server.get('/index', function (req, res) {
  res.render('1.ejs', {name: 'cl'});
});

//4.static数据
server.use(expressStatic('./wwww'));
