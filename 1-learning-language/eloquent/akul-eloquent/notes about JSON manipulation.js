//Mother-Child Age Difference Ch. 5

var sampleObj = [{1:'hey'},  { 2: 'hello'}];

console.log(sampleObj);


var objobj = {name: "X", born: 1980};
var string = JSON.stringify(objobj);
console.log(objobj);
console.log(string);
// → {"name":"X","born":1980}
console.log(JSON.parse(string).born);
// → 1980
console.log(objobj.born)
console.log(typeof string)
console.log(typeof objobj)
// stringify TURNS ALL NANs TO STRs, AS WELL AS WHOLE OBJ TO A STR
//AND MAKES THE VALUES ALL CAPS

var parse = JSON.parse(string);
console.log(parse)
console.log(typeof parse)
//parse TURNS BACK INTO OBJ, UNMAKES THE KEYS FROM strs

