var letters = require("./possible-root-letters-sort");
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

var dosort=function(arr){
  return arr.sort(function(a,b){
    return a[0]-b[0];
  });
}

exports.checkSyllables = function(fn){
  var coords = [],w=0;
  content=fn;
  console.time('c')
  fn.replace(/[\u0f2a-\u0fbf]+/g,function(m,idx){
    var index = indexOfSorted(letters,m);
      if(index==-1&&!(m.substr(m.length-2)=="འི"||m.substr(m.length-2)=="འོ")){
        coords.push([idx,m.length,m]);
        w++;
      }
    });
  console.log(w);
  console.timeEnd('c');
  return dosort(coords);
}