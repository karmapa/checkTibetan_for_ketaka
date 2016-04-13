var fs=require("fs");
var checkTibetan=require("./checkTibetan.js");
var content=fs.readFileSync("./spellchecktest.txt","utf8");
var out=checkTibetan.checkSyllables(content, 0);
console.log(out);