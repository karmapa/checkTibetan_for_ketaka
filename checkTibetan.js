var correctlyLetters = require('./correctly-root-letters-sort');
var content;

var indexOfSorted = function (array, syl) {
    var low = 0,
    high = array.length-1;
    while (low < high) {
      var mid = (low + high) >> 1;
      array[mid] < syl ? low = mid + 1 : high = mid;
    }
    if(array[low] != syl) return -1;
    return low;
}

var dosort=function(arr) {
  return arr.sort(function(a, b){
    return a[0] - b[0];
  });
}

exports.checkSyllables = function(fn, index){
  var coords = [];
  content = fn;
  fn.replace(/[\u0f00-\u0f03\u0f40-\u0fbc]+/g, function(m, idx){
    var index = indexOfSorted(correctlyLetters, m);
    if('ཥྚྲཱིཿཧྲཱིཿ' === m) console.log(index);
    if(index == -1 && !(m.substr(m.length-2) == 'འི' || m.substr(m.length-2) == 'འོ')){
      coords.push([idx, m.length, m]);
    }
  });
  return dosort(coords);
}