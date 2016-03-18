//write functions below this line
function reverseArray(array){
  var newArray = [];
  var len = array.length - 1;
  for(var i = len; i >= 0; i--){
    newArray.push(array[i]);
  }
  return newArray;
}

function reverseArrayInPlace(arrayValue){
  var temp = 0;
  var len = arrayValue.length - 1;
  for( var i = 0; i <= len - 2; i++){
    temp = arrayValue[len - i];
    arrayValue[len - i] = arrayValue[i];
    arrayValue[i] = temp;
  }
  return arrayValue;
}

//console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
