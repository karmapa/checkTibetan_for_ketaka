# checkTibetan_1.0.2

Input content ,and output will show array of coordinates like : [ 401, 3, 'ཤཱམ' ].

It means the wrong syllable starts at position 401 ,syllable length is 3 ,and the syllable is 'ཤཱམ'

## Usage

```javascript
// node main.js
const fs=require("fs");
const checkTibetan=require("./checkTibetan.js");
const content=fs.readFileSync("./spellchecktest.xml","utf8");

const out=checkTibetan.checkSyllables(content);
/*out
[
  [ 33, 8, 'ཪྼཱཿཪྼླཱ' ],
  [ 93, 3, 'པཅི' ],
  [ 113, 5, 'ྈྐཿནི' ],
  [ 224, 8, 'པའིཉམངོན' ],
  [ 243, 3, 'ྉྤཱུ' ],
  [ 247, 12, 'ཥྚྲཱིཿཧྲཱིཿༀ' ]
]
*/
```
