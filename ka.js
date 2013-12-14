if (typeof window != 'undefined') {
  window.KA = {};
}

(function(module) {
  // -- mobile operations

  module.compactMobile = function(mobile) {
    return mobile.match(/\d+/g).join('');
  };

  module.isLocalNumber = function(mobile) {
    return this.compactMobile(mobile).length == 9;
  }

  module.isGlobalNumber = function(mobile) {
    return this.compactMobile(mobile).length == 12;
  };

  module.isValidMobile = function(mobile) {
    return this.isLocalNumber(mobile) || this.isGlobalNumber(mobile);
  };

  module.formatMobile = function(mobile) {
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

  // -- translate strings

  module.GEO = 'ÀÁÂÃÄÅÆÈÉÊËÌÍÏÐÑÒÓÔÖ×ØÙÚÛÜÝÞßàáãä'
  module.KA  = 'აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ'
  module.LAT = 'abgdevzTiklmnopJrstufqRySCcZwWxjh'

  module.translate = function(text, from, to) {
    var regExp = new RegExp(from.split('').join('|'), 'g');
    return text.replace(regExp, function(c) { return to[from.indexOf(c)]; });
  };

  module.toGeo = function(text) {
    return this.translate(text, this.KA, this.GEO);
  };

  module.toKa = function(text) {
    return this.translate(text, this.GEO, this.KA);
  };
})(typeof window != 'undefined' ? window.KA : exports);