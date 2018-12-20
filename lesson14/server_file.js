const express = require('express');
const static = require('express-static');
const fs = require('fs');
const bodyParser = require('body-parser');
const multer = require('multer');
const pathLib = require('path');

const objMulter = multer({
  dest: './www/upload'
});
const server = express();

server.use(objMulter.any());
// 错误
// server.use(bodyParser.urlencoded({
//   extended: false
// }));

server.post('/', function (req, res) {
  console.log(req.files[0]);
  var newName = req.files[0].path + pathLib.parse(req.files[0].originalname).ext;

  fs.rename(req.files[0].path, newName, function (err) {
    if (err) {
      console.log('failed');
    } else {
      console.log('success');
    }
  });
});
server.listen(8080);

server.use(static('./www'));
