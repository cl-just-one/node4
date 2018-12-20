const ejs = require('ejs');

ejs.renderFile('./view/1.ejs', {name: 'blue'}, function (err, data) {
  if (err) {
    console.log('写入失败');
  } else {
    console.log(data);
  }
})
