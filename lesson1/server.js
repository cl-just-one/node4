var http = require('http');
// 创建服务
var server = http.createServer(function (req, res) {
  switch (req.url) {
    case "/1.html":
      res.write("11111");
      break;
    case "/2.html":
      res.write("22222");
    default:
      res.write("3333");
  };
  res.end();
});
// 监听 端口
server.listen(8080);
