const crypto = require('crypto');
module.exports = {
  MD5_SUFFIX: 'qwertyuiop0ol#^&*JMNKLOPKI_Koojop\009i8jnnjjnio',
  md5: function (str) {
    const obj = crypto.createHash('md5');
    obj.update(str);
    var str = obj.digest('hex');
    return str;
  }
}
