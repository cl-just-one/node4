const express = require('express');
const static = require('express-static');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const multer = require('multer');
const multerObj = multer({
  dest: './static/upload'
});
const mysql = require('mysql');
const consolidate = require('consolidate');
const ejs = require('ejs');
const expressRoute = require('express-route');

const server = express();
server.listen(8080);

// 1.获取请求数据
// get自带
server.use(bodyParser.urlencoded({
  extended: false
}));
server.use(multerObj.any());

// 2.cookie、session
server.use(cookieParser());
(function () {
  var keys = [];
  for (var i = 0; i < 10000; i++) {
    keys.push('session_' + Math.random(i));
  }
  server.use(cookieSession({
    name: 'session_id',
    keys: keys,
    maxAge: 20*60*1000 //20min
  }));
})();

// 3.模板
server.engine('html', consolidate.ejs);
server.set('views', './template');
server.set('views engine', 'html');

// 4.路由 route
server.use('/', require('./route/web/index.js')());
server.use('/admin/', require('./route/admin/index.js')());

// default:static
server.use(static('./static/'));
