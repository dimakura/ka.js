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

  // -- tokenize strings

  module.numberToString = function(num) {
    if (num < 0) { return 'მინუს' + tokenizePositiveInt(-num); }
    else { return tokenizePositiveInt(num); }
  }

  var PRE_20 = [
    'ნული', 'ერთი', 'ორი', 'სამი', 'ოთხი', 'ხუთი',
    'ექვსი', 'შვიდი', 'რვა', 'ცხრა', 'ათი',
    'თერთმეტი', 'თორმეტი', 'ცამეტი', 'თოთხმეტი', 'თხუთმეტი',
    'თექვსმეტი', 'ჩვიდმეტი', 'თვრამეტი', 'ცხრამეტი'
  ];
  var BASE_20 = [ '', 'ორმ', 'სამ', 'ოთხმ' ];
  var BASE_100 = [ '', 'ორ', 'სამ', 'ოთხ', 'ხუთ', 'ექვს', 'შვიდ', 'რვა', 'ცხრა' ];

  var tokenize0 = function(num, base, ary, s1, s2) {
    var m = Math.floor(num / base);
    var r = num % base;
    if (r != 0) {
      return ary[m - 1] + s1  + ' ' + tokenizePositiveInt(r);
    } else {
      return ary[m - 1] + s2;
    }
  };

  var tokenize1 = function(num, base, s1, s2) {
    if (num == base) { return s2; }
    var m = Math.floor(num / base);
    var r = num % base;
    if (r == 0) {
      return tokenizePositiveInt(m) + ' ' + s2;
    } else if (m == 1) {
      return s1 + ' ' + tokenizePositiveInt(r);
    } else {
      return tokenizePositiveInt(m) + ' ' + s1 + ' ' + tokenizePositiveInt(r);
    }
  };

  var tokenizePositiveInt = function(num) {
    if (num < 20) {
      return PRE_20[num];
    } else if (num < 100) {
      return tokenize0(num, 20, BASE_20, 'ოცდა', 'ოცი');
    } else if (num < 1000) {
      return tokenize0(num, 100, BASE_100, 'ას', 'ასი');
    } else if (num < 1000000) {
      return tokenize1(num, 1000, 'ათას', 'ათასი');
    } else if (num < 1000000000) {
      return tokenize1(num, 1000000, 'მილიონ', 'მილიონი');
    } else if (num < 1000000000000) {
      return tokenize1(num, 1000000000, 'მილიარდ', 'მილიარდი');
    } else if (num < 1000000000000000) {
      return tokenize1(num, 1000000000000, 'ტრილიონ', 'ტრილიონი');
    }
    return num;
  };

})(typeof window != 'undefined' ? window.KA : exports);