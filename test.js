var fs = require('fs');
var checkTibetan = require('./checkTibetan');
var content = fs.readFileSync('./spellchecktest.xml', 'utf8');
var assert = require('assert');

describe('check by possible letters', function () {
  it('correctly check', function () {
    var out = checkTibetan.checkSyllables(content);
    var arr = [ 
      [ 87, 5, 'ཀྲྀརྞ' ],
      [ 93, 3, 'པཅི' ],
      [ 105, 3, 'ཙཱབ' ],
      [ 224, 8, 'པའིཉམངོན' ] 
    ];
    assert.deepEqual(out, arr);
  });
});