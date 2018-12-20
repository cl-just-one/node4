const express = require('express');
const expressStatic = require('express-static');
const expressParser = require('express-parser');
const querystring = require('querystring');

const server = express();
server.listen(8080);

// server.use(expressParser.use({
//   extended: true, //扩展
//   limit: 2*1024*1024 //2M-限制
// }));
server.use('/login', function (req, res, next) {
  console.log(req.body);
  next();
})
server.use(expressStatic('./'))
server.use(function (req, res, next) {
  var str = '';
  req.on('data', function (data) {
    str += data;
  });

  req.on('end', function () {
    req.body = querystring.parse(str);
      console.log(req.body);
    next();
  })
});
