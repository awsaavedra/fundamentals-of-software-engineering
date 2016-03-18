function range(start, end, step){
  var range = [];
  if( step == undefined)
    step = 1;
  if( step > 0){
    for( var i = start; i <= end; i += step){
      range.push(i);
    }
  }else{
    for( var i = start; i >= end; i += step){
      range.push(i);
    }
  }
  return range;
}

function sum(array){
  var total = 0;
  var endOfArray = array[array.length - 1];
  for( var i = 0; i <= endOfArray; i++){
    total = total + i;
  }
  return total;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
