function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var ancestry = JSON.parse(ANCESTRY_FILE);

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});
//My Code:
/////////////////////////////////////////////////////////////////
var centObj = {16: [], 17: [], 18: [], 19: [], 20:[], 21:[]};
/////////////////////////////////////////////////////////////////
function century(person) {
  var centuryDied = Math.ceil(person.died / 100);
  var age = person.died - person.born;
  centObj[centuryDied].push(age);
}
/////////////////////////////////////////////////////////////
function avgArr() {
	for (var key in centObj) {
      //console.log(centObj[key]);
      var avg = average(centObj[key]);
      console.log('In the '+ key + 'th century, they lived to be ' + avg)
    }
}
////////////////////////////////////////////////////////////
ancestry.map(century);
console.log(centObj);
avgArr();
console.log(avgArr);
// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94