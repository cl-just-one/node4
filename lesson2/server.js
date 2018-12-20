const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
  // 读取文件
  fs.readFile('6.txt', function (err, data) {
    if (err) {
      console.log("读取文件失败");
    } else {
      console.log(data.toString());
    }
  });
  // 写文件
  fs.writeFile('b.txt', '7894556', function (err) {
    if (err) {
      console.log("读取文件失败");
    }
  })
});
server.listen(8081);
