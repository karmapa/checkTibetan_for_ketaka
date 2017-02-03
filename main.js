var srcFolder = process.argv[2];
var globPatt = './' + srcFolder + '/**/*_*.xml';

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
  var wrongSpells = checkTibetan.checkSyllables(text);

  if (wrongSpells.length > 0) {
    var unRepeatResults = {};

    wrongSpells.forEach(function(spell) {
      if (! unRepeatResults[spell]) {
        unRepeatResults[spell] = true;
      }
    });

    return {file: route, wrongSpells: Object.keys(unRepeatResults)};
  }
}

fs.writeFileSync("./wrongSpells.txt", JSON.stringify(checkResults, null, '  '), 'utf8');