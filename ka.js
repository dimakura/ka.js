
exports.compactMobile = function(mobile) {
  return mobile.match(/\d+/g).join('');
};

exports.isLocalNumber = function(mobile) {
  return this.compactMobile(mobile).length == 9;
}

exports.isGlobalNumber = function(mobile) {
  return this.compactMobile(mobile).length == 12;
};

exports.isValidMobile = function(mobile) {
  return this.isLocalNumber(mobile) || this.isGlobalNumber(mobile);
};

exports.formatMobile = function(mobile) {
  if (this.isGlobalNumber(mobile)) {
    var m = this.compactMobile(mobile);
    return ['(+', m.substr(0, 3), ' ', m.substr(3, 3), ')', m.substr(6, 3), '-', m.substr(9, 3)].join('');
  } else if (this.isLocalNumber(mobile)) {
    var m = this.compactMobile(mobile);
    return ['(', m.substr(0, 3), ')', m.substr(3, 3), '-', m.substr(6, 3)].join('');
  } else {
    return mobile;
  }
};