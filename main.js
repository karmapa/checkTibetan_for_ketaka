const fs=require("fs");
const checkTibetan=require("./checkTibetan.js");
const content=fs.readFileSync("./spellchecktest.xml","utf8");
const out=checkTibetan.checkSyllables(content);
console.log(out);