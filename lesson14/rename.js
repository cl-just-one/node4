const fs = require('fs');

fs.rename('a.txt', 'b.txt', function (err) {
  if (err) {
    console.log('failed');
  } else {
    console.log('success');
  }
});
