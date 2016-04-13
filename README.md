# checkTibetan_1.0.2

[![Build Status](https://travis-ci.org/karmapa/checkTibetan_for_ketaka.svg?branch=master)](https://travis-ci.org/karmapa/checkTibetan_for_ketaka)

Only show coordinate and syllable length for tagging

Input content ,and output will show array of coordinates like : [ 401, 3, 'ཤཱམ' ].

It means the wrong syllable starts at position 401 ,syllable length is 3 ,and the syllable is 'ཤཱམ'

Data is imported from [tibetan-spellchecker](https://github.com/tibetan-nlp/tibetan-spellchecker/).

## Usage

```javascript
// main.js
var fs = require("fs");
var content = fs.readFileSync("./spellchecktest.xml", "utf8");
var checkSyllables = require("check-tibetan").checkSyllables;

var out = checkSyllables(content, index); 
```


index = 0 or undefined for possible letters check
```
var out = checkSyllables(content, 0);  //var out = checkSyllables(content);
/*out
[ [ 33, 8, 'ཪྼཱཿཪྼླཱ' ],
  [ 87, 5, 'ཀྲྀརྞ' ],
  [ 93, 3, 'པཅི' ],
  [ 105, 3, 'ཙཱབ' ],
  [ 113, 5, 'ྈྐཿནི' ],
  [ 224, 8, 'པའིཉམངོན' ],
  [ 243, 3, 'ྉྤཱུ' ],
  [ 247, 11, 'ཥྚྲཱིཿཧྲཱིཿ' ] ]
*/
```

index = 1 for correctly letters check
```
var out = checkSyllables(content, 1); 
/*out
[ [ 43, 4, '༠༠༠༩' ],
  [ 87, 5, 'ཀྲྀརྞ' ],
  [ 93, 3, 'པཅི' ],
  [ 105, 3, 'ཙཱབ' ],
  [ 224, 8, 'པའིཉམངོན' ] ]
*/
```
