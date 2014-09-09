var assert = require('assert');
var ka = require('../');

describe('Translate', function() {
  it('ka <-> geo', function() {
    assert.equal(ka.toKa(ka.toGeo('დიმიტრი')), 'დიმიტრი');
    assert.equal(ka.toGeo('დიმიტრი'), 'ÃÉÌÉÔÒÉ');
  });
});
