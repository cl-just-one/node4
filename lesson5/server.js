const http = require('http');
const urlLib = require('url');
const querystring = require('querystring');

const server = http.createServer(function (req, res) {
  var POST = {};

  var str = '';
  var n = 0;
  req.on('data', function (data) {
    console.log(`第${n++}次读取数据`+data);
    str += data;
  });

  req.on('end', function () {

    POST = querystring.parse(str);
      console.log(POST);
  });

  res.write("aaa");
  res.end();
});

server.listen(8084);
