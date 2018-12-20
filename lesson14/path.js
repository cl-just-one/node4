const path = require('path');

var str = "c:\\www\\s\\ppp.png"
const pathLib = path.parse(str);
// { root: 'c:\\', 根路径
//   dir: 'c:\\www\\s',
//   base: 'ppp.png', 文件名
//   ext: '.png', 文件后缀
//   name: 'ppp' }

console.log(pathLib);
