var assert = require('assert');
var ka = require('../');

describe('Number to string', function() {
  it('integers -> string', function() {
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