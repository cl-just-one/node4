const jade = require('jade');
const fs = require('fs');
// 模板引擎 jade 渲染模板
// const str = jade.renderFile('./view/jade1.jade', {
//   pretty: true
// });
// 添加属性
// const str = jade.renderFile('./view/jade2.jade', {
//   pretty: true
// });
//
const str = jade.renderFile('./view/jade3.jade', {
  pretty: true
});

fs.writeFile('./build/2.html', str, function (err) {
  if (err) {
    console.log('写入失败');
  } else {
    console.log('写入成功');
  }
})

console.log(str);
