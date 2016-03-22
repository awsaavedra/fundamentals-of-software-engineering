
function prepend(a, b){
  return { value: a, rest: b};
}

function arrayToList(ar){
  var len = ar.length;
  var list = null;
  for( var i = len - 1; i >= 0; i--)
    list = {value: ar[i], rest: list};
  return list;
}

function listToArray(list){
  var ar = [];
  for( var i = list; i; i = i.rest){
    console.log(i);
  }
}

function enhanced(list){
  var ar = [];
  for (i in list){
    ar.push(list.value);
    console.log(ar);
    list = list.rest;
  }
}

console.log(enhanced({value: 10, rest: {value: 20, rest: {value:30, rest: null}}}));

//console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
//console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
