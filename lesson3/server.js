const http = require('http');
const querystring = require('querystring');

const server = http.createServer(function (req, res) {
  const url = req.url;
  const GET = querystring.parse(url);

  console.log(GET);
});

server.listen(8082);
