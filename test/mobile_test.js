var assert = require('assert');
var ka = require('../');

describe('Mobile', function(){
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
