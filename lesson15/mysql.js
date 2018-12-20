const mysql = require('mysql');

// 连接数据库
var db = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'blog'
});

// 查询数据
db.query('SELECT * FROM `user_table`;', (err, data) => {
  if (err)
    console.log('failed');
  else
    console.log('success', data);
});
