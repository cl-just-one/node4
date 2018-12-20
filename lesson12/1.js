const jade = require('jade');
const fs = require('fs');

const str = jade.renderFile('./views/1.jade', {
  pretty:true,
  a:2,
  b:5,
  json: {width:'90px',height:'40px'},
  arr: ['s','ss','66','999'],
  content: '<h2>8888888888888888888</h2>'
});

fs.writeFile('./build/1.html', str, function (err, data) {
  if (err)
    console.log('编译失败');
  else
    console.log(str);
})
