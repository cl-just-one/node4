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
  const router = express.Router();

  // 登陆
  router.get('/', (req, res)=>{
    res.render('admin/login.ejs', {});
  });
  router.post('/', (req, res)=>{
    var username=req.body.username;
    var password=common.md5(req.body.password+common.MD5_SUFFIX);
    db.query(`SELECT * FROM admin_table WHERE username='${username}'`, (err, data)=>{
      if(err){
        console.error(err);
        res.status(500).send('database error').end();
      }else{
        if(data.length==0){
          res.status(400).send('no this admin').end();
        }else{
          if(data[0].password==password){
            //id
            req.session['session_id']=data[0].id;
            res.redirect('/admin/');
          }else{
            res.status(400).send('this password is incorrect').end();
          }
        }
      }
    });
  });

  return router;
}
