# checkTibetan_1.0.2

Only show coordinate and syllable length for tagging

Input content ,and output will show array of coordinates like : [ 401, 3, 'ཤཱམ' ].

It means the wrong syllable starts at position 401 ,syllable length is 3 ,and the syllable is 'ཤཱམ'

Data is imported from [tibetan-spellchecker](https://github.com/tibetan-nlp/tibetan-spellchecker/).

## Usage

```javascript
// main.js
var fs = require("fs");
var content = fs.readFileSync("./d1_001.xml", "utf8");
var checkSyllables = require("check-tibetan").checkSyllables;

var out = checkSyllables(content);

/* out will be:
[
  [ 0, 4, 'སསསས' ],
  [ 404, 3, 'ཤཱམ' ],
  [ 568, 2, 'ཀཽ' ],
  [ 571, 3, 'ཤཱམ' ],
  [ 575, 3, 'བཱི' ],
  [ 666, 3, 'ཤཱམ' ],
  [ 1070, 3, 'ཤཱམ' ],
  [ 1234, 2, 'ཀཽ' ],
  [ 1237, 3, 'ཤཱམ' ],
  [ 1241, 3, 'བཱི' ],
  [ 1332, 3, 'ཤཱམ' ]
]
*/
```
