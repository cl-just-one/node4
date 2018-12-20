const express = require('express');
const mysql = require('mysql');
const common = require('../../libs/common');

// 连接池
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'blogng'
});

module.exports = function () {
  var router = express.Router();

  //检查登录状态
  router.use((req, res, next)=>{
    if(!req.session['session_id'] && req.url!='/login'){ //没有登录
      res.redirect('/admin/login');
    }else{
      next();
    }
  });


  router.get('/', (req, res) => {
    res.render('admin/index.ejs', {});
  });

  router.use('/login', require('./login.js')());
  router.use('/banners', require('./banner.js')());
  router.use('/custom', require('./custom.js')());

  return router;
};
