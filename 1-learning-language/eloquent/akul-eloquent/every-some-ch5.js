function every(arr, asShouldBe) {
 return arr.every(function(element, index, array) {
   console.log(index, element)
  return asShouldBe(element);
 });
};

function some(arr, asShouldBe) {
 return arr.some(function(element, index, array) {
   console.log(index, element)
  return asShouldBe(element);
 });
};

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(all([NaN, 4, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false