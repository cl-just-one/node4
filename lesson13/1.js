const ejs = require('ejs');

var str = ejs.renderFile('./views/1.ejs', {
  name: 'gggg',
  arr: ['e','88','99999']}, function (err, data) {
  console.log(data);
});
