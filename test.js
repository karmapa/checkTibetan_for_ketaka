var fs = require('fs');
var checkTibetan = require('./checkTibetan');
var content = fs.readFileSync('./spellchecktest.xml', 'utf8');
var assert = require('assert');


describe('check by possible letters', function () {
  it('possible check', function () {
    var out = checkTibetan.checkSyllables(content, 0);
    var arr = [ 
      [ 33, 8, 'ཪྼཱཿཪྼླཱ' ],
      [ 87, 5, 'ཀྲྀརྞ' ],
      [ 93, 3, 'པཅི' ],
      [ 105, 3, 'ཙཱབ' ],
      [ 113, 5, 'ྈྐཿནི' ],
      [ 224, 8, 'པའིཉམངོན' ],
      [ 243, 3, 'ྉྤཱུ' ],
      [ 247, 11, 'ཥྚྲཱིཿཧྲཱིཿ' ] 
    ];
    assert.deepEqual(out, arr);
  });
  it('correctly check', function () {
    var out = checkTibetan.checkSyllables(content, 1);
    var arr = [ 
      [ 43, 4, '༠༠༠༩' ],
      [ 87, 5, 'ཀྲྀརྞ' ],
      [ 93, 3, 'པཅི' ],
      [ 105, 3, 'ཙཱབ' ],
      [ 224, 8, 'པའིཉམངོན' ] 
    ];
    assert.deepEqual(out, arr);
  });
  it('index = undefined', function () {
    var out = checkTibetan.checkSyllables(content);
    var arr = [ 
      [ 33, 8, 'ཪྼཱཿཪྼླཱ' ],
      [ 87, 5, 'ཀྲྀརྞ' ],
      [ 93, 3, 'པཅི' ],
      [ 105, 3, 'ཙཱབ' ],
      [ 113, 5, 'ྈྐཿནི' ],
      [ 224, 8, 'པའིཉམངོན' ],
      [ 243, 3, 'ྉྤཱུ' ],
      [ 247, 11, 'ཥྚྲཱིཿཧྲཱིཿ' ] 
    ];
    assert.deepEqual(out, arr);
  });
});