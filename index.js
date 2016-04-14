var passwords = require('./passwords');

module.exports = {
  passwords: passwords,

  isBad: function(check) {
    for (var i = 0; i < passwords.length; i++) {
      if (passwords[i] === check.toLowerCase()) {
        return true;
      }
    }
    return false;
  }
};
