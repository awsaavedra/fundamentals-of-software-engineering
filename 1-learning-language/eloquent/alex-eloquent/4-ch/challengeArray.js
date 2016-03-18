var ar = [1,2,3,4,5,6];

//console.log("ar.slice(3,5): ", ar.slice(3,5));

//challenge: console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]
/*book SOLUTION
    remove(array, index) {
      return array.slice(0, index)
        .concat(array.slice(index + 1));
    }
 */
function remove(ar, idx){
  var front = ar.slice(0, idx);
  var end = ar.slice(idx + 1, ar.length);
  return front.concat(end);
}
console.log(remove(["a", "b", "c", "d", "e"], 2));


