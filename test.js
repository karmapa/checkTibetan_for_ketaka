var fs = require('fs');
var checkTibetan = require('./checkTibetan');
var content = fs.readFileSync('./spellchecktest.xml', 'utf8');
var assert = require('assert');


describe('check by possible letters', function () {
  it('possible check', function () {
    var out = checkTibetan.checkSyllables(content, 0);
    var arr = [ 
      [ 33, 8, 'ཪྼཱཿཪྼླཱ' ],
      [ 89, 5, 'ཀྲྀརྞ' ],
      [ 95, 3, 'པཅི' ],
      [ 107, 3, 'ཙཱབ' ],
      [ 115, 5, 'ྈྐཿནི' ],
      [ 229, 8, 'པའིཉམངོན' ],
      [ 248, 3, 'ྉྤཱུ' ],
      [ 252, 11, 'ཥྚྲཱིཿཧྲཱིཿ' ] 
    ];
    assert.deepEqual(out, arr);
  });
  it('correctly check', function () {
    var out = checkTibetan.checkSyllables(content, 1);
    var arr = [ 
      [ 44, 4, '༠༠༠༩' ],
      [ 89, 5, 'ཀྲྀརྞ' ],
      [ 95, 3, 'པཅི' ],
      [ 107, 3, 'ཙཱབ' ],
      [ 229, 8, 'པའིཉམངོན' ] 
    ];
    assert.deepEqual(out, arr);
  });
  it('index = undefined', function () {
    var out = checkTibetan.checkSyllables(content);
    var arr = [ 
      [ 33, 8, 'ཪྼཱཿཪྼླཱ' ],
      [ 89, 5, 'ཀྲྀརྞ' ],
      [ 95, 3, 'པཅི' ],
      [ 107, 3, 'ཙཱབ' ],
      [ 115, 5, 'ྈྐཿནི' ],
      [ 229, 8, 'པའིཉམངོན' ],
      [ 248, 3, 'ྉྤཱུ' ],
      [ 252, 11, 'ཥྚྲཱིཿཧྲཱིཿ' ] 
    ];
    assert.deepEqual(out, arr);
  });
});