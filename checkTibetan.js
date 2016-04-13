var possibleLetters = require('./possible-root-letters-sort');
var correctlyLetters = require('./correctly-root-letters-sort')
var letters;
var tibetanRange;
var content;

var indexOfSorted = function (array, obj) {
    var low = 0,
    high = array.length-1;
    while (low < high) {
      var mid = (low + high) >> 1;
      array[mid] < obj ? low = mid + 1 : high = mid;
    }
    if(array[low] != obj) return -1;
    return low;
}

var dosort=function(arr) {
  return arr.sort(function(a, b){
    return a[0] - b[0];
  });
}

exports.checkSyllables = function(fn, index){
  var coords = [];
  if(0 === index || undefined === index) {
    letters = possibleLetters;
    tibetanRange = /[\u0f2a-\u0fbf]+/g;
  } else if (1 === index) {
    letters = correctlyLetters;
    tibetanRange = /[\u0f00-\u0f0a\u0f10-\u0fff]+/g;
  } else {
    return coords;
  }
  content=fn;
  fn.replace(tibetanRange, function(m,idx){
    var index = indexOfSorted(letters,m);
    if('ཥྚྲཱིཿཧྲཱིཿ' === m) console.log(index);
    if(index == -1 && !(m.substr(m.length-2) == 'འི' || m.substr(m.length-2) == 'འོ')){
      coords.push([idx, m.length, m]);
    }
  });
  return dosort(coords);
}