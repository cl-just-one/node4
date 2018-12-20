const http = require('http');
const urlLib = require('url');

const server = http.createServer(function (req, res) {
  const GET = urlLib.parse(req.url, true);

  console.log(GET);
  res.write("aaa");
  res.end();
});

server.listen(8083);
