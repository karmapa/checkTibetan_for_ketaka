var srcFolder = process.argv[2];
var globPatt = './' + srcFolder + '/**/*.xml';

var fs = require("fs");
var glob = require("glob");
var naturalSort = require("javascript-natural-sort");
var checkTibetan = require("./checkTibetan.js");

var checkResults = glob.sync(globPatt)
  .sort(naturalSort)
  .map(checkTibetanSpell)
  .filter(function(obj) {
    return obj !== undefined;
  });

function checkTibetanSpell(route) {
  var text = fs.readFileSync(route, "utf8");
  var wrongSpells = checkTibetan.checkSyllables(content);
  if (wrongSpells.length > 0) {
    return {file: route, wrongSpells: wrongSpells};
  }
}

fs.writeFileSync("./wrongSpells.txt", JSON.Stringify(checkResults, null, '  '), 'utf8');