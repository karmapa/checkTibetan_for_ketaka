var correctlyLetters = require('./correctly-root-letters-sort');

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

exports.checkSyllables = function(text, index){
  var coords = [];

  text.replace(/[\u0f00-\u0f0a\u0f12-\u0f1f\u0f34-\u0fff]+/g, function(m, idx){
    var index = indexOfSorted(correctlyLetters, m);
    if('ཥྚྲཱིཿཧྲཱིཿ' === m) {
      coords.push(m);
    }
    if(index == -1 && !(m.substr(m.length-2) == 'འི' || m.substr(m.length-2) == 'འོ')){
      coords.push(m);
    }
  });
  return dosort(coords);
}