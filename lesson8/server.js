const express = require('express');
const expressStatic = require('express-static');

const server = express();
server.listen(8080);

// server.use('/', function (req, res) {
//   res.send({a:1});
//   res.end();
// });
var users = {
  'aa': '123456',
  'b': "123",
  "cv": "789789"
}
server.post('/login', function (req, res) {
  var obj = req.query;
  if (users[obj.user] == null) {
    res.send({
      'ok': false,
      msg: "用户不存在"
    });
  } else {
    if (users[obj.user] !== obj.pass) {
      res.send({
        'ok': false,
        msg: "密码不对"
      });
    } else {
      res.send({
        'ok': true,
        msg: "登陆成功"
      });
    }
  }
  res.end();
});

server.use(expressStatic('./www'));
