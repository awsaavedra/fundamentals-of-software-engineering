function reverseArray(arr) {
  var arr1 = [];

  arr.forEach(function(element, index, array) {
    console.log('element: ', element);
    arr1.unshift(element);
  }) //end of arr.forEach
  return arr1;
} //end of reverseArray(arr)


function reverse2(arr){
  var originalLength = arr.length;
  for(i = 0; i < originalLength; i++) {
    var first = arr.shift();
    console.log(first);
    arr.push(first);
    return arr;
  }
}

var arr0 = [0,1,2,3,4];
var pure = reverseArray(arr0);
console.log(pure);

var changeOriginal = reverse2(arr0);
console.log(changeOriginal);
