const express = require('express');
const expressStatic = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const consolidate = require('consolidate');
const multer = require('multer');
const jade = require('jade');
const ejs = require('ejs');
const mysql = require('mysql');
const common = require('./libs/common');

const server = express();
server.listen(8080);

// 连接池
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'blog'
});

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
server.set('views', './templates');
// 那种模板引擎
server.engine('html', consolidate.ejs);

// 接收用户请求
server.get('/', function (req, res, next) {
  db.query('SELECT * FROM banner_table', (err, data) => {
    if (err) {
      res.status(500).send('database error').end();
    } else {
      res.banners = data;
      next();
    }
  });
});
server.get('/', function (req, res, next) {
  db.query('SELECT ID,title,summary FROM article_table', function (err, data) {
    if (err) {
      res.status(500).send('database error').end();
    } else {
      res.articles = data;
      next();
    }
  });
});
server.get('/', function (req, res, next) {
  res.render('index.ejs', {
    banners: res.banners,
    articles: res.articles
  });
});

server.get('/article', (req, res, data) => {
  const id = req.query.id;
  const act = req.query.act;
  if (act == 'like') {
    db.query(`UPDATE article_table SET n_like=n_like+1 WHERE id=${id}`, function (err, data) {
      if (err) {
        res.status(500).send('query error');
      } else {
        db.query(`SELECT * FROM article_table WHERE id=${id}`, (err, data) => {
          if (err) {
            res.status(500).send('query error');
          } else {
            if (data.length == 0) {
              res.status(500).send('query is not exist');
            } else {
              var articleData = data[0];
              articleData.sDate = common.time2date(articleData.post_time);
              articleData.sContent = articleData.content.replace(/^/gm, '<p>').replace(/$/gm, '</p>');
              res.render('conText.ejs', {
                article_data: data[0]
              })
            }
          }
        });
      }
    });
  } else {
    db.query(`SELECT * FROM article_table WHERE id=${id}`, (err, data) => {
      console.log(err,data);
      if (err) {
        res.status(500).send('query error');
      } else {
        if (data.length == 0) {
          res.status(500).send('query is not exist');
        } else {
          var articleData = data[0];
          articleData.sDate = common.time2date(articleData.post_time);
          articleData.sContent = articleData.content.replace(/^/gm, '<p>').replace(/$/gm, '</p>');
          res.render('conText.ejs', {
            article_data: data[0]
          })
        }
      }
    });
  }
});

//4.static数据
server.use(expressStatic('./'));
