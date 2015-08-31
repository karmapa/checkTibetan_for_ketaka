var fs=require("fs");
var checkTibetan=require("./checkTibetan.js");
var content=fs.readFileSync("./d1_001.xml","utf8");
var out=checkTibetan.checkSyllables(content);
console.log(out);