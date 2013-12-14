var assert = require('assert');
var ka = require('../ka');

describe('Mobile', function(){
  describe('mobile operations', function() {
    it('compacting mobile', function() {
      assert.equal(ka.compactMobile('599422451'), '599422451');
      assert.equal(ka.compactMobile('(599)422-451'), '599422451');
      assert.equal(ka.compactMobile('(+995 599)422-451'), '995599422451');
    });
    it('validating mobile number correctness', function() {
      assert.equal(ka.isValidMobile('599422451'), true);
      assert.equal(ka.isValidMobile('595335514'), true);
      assert.equal(ka.isValidMobile('(+995595)335514'), true);
      assert.equal(ka.isValidMobile('5953355142'), false);
    });
    it('mobile format', function() {
      assert.equal(ka.formatMobile('995599422451'), '(+995 599)422-451')
      assert.equal(ka.formatMobile('599422451'), '(599)422-451')
      assert.equal(ka.formatMobile('(995599)422451'), '(+995 599)422-451')
    });
  });
});

describe('Translate', function() {
  describe('ka <-> geo', function() {
    assert.equal(ka.toKa(ka.toGeo('დიმიტრი')), 'დიმიტრი');
    assert.equal(ka.toGeo('დიმიტრი'), 'ÃÉÌÉÔÒÉ');
  });
});

describe('Number to string', function() {
  describe('1-20 -> string', function() {
    assert.equal(ka.numberToString(1), 'ერთი');
    assert.equal(ka.numberToString(11), 'თერთმეტი');
    assert.equal(ka.numberToString(20), 'ოცი');
    assert.equal(ka.numberToString(21), 'ოცდა ერთი');
    assert.equal(ka.numberToString(25), 'ოცდა ხუთი');
    assert.equal(ka.numberToString(33), 'ოცდა ცამეტი');
    assert.equal(ka.numberToString(40), 'ორმოცი');
    assert.equal(ka.numberToString(60), 'სამოცი');
    assert.equal(ka.numberToString(66), 'სამოცდა ექვსი');
    assert.equal(ka.numberToString(80), 'ოთხმოცი');
    assert.equal(ka.numberToString(99), 'ოთხმოცდა ცხრამეტი');
    assert.equal(ka.numberToString(100), 'ასი');
    assert.equal(ka.numberToString(200), 'ორასი');
    assert.equal(ka.numberToString(300), 'სამასი');
    assert.equal(ka.numberToString(400), 'ოთხასი');
    assert.equal(ka.numberToString(500), 'ხუთასი');
    assert.equal(ka.numberToString(600), 'ექვსასი');
    assert.equal(ka.numberToString(700), 'შვიდასი');
    assert.equal(ka.numberToString(800), 'რვაასი');
    assert.equal(ka.numberToString(900), 'ცხრაასი');
    assert.equal(ka.numberToString(999), 'ცხრაას ოთხმოცდა ცხრამეტი');
    assert.equal(ka.numberToString(1000), 'ათასი');
    assert.equal(ka.numberToString(2000), 'ორი ათასი');
    assert.equal(ka.numberToString(900000), 'ცხრაასი ათასი');
    assert.equal(ka.numberToString(1001), 'ათას ერთი');
    assert.equal(ka.numberToString(1051), 'ათას ორმოცდა თერთმეტი');
    assert.equal(ka.numberToString(999001), 'ცხრაას ოთხმოცდა ცხრამეტი ათას ერთი');
  });
});

//console.log(ka.numberToString(999,999,999,999,999));