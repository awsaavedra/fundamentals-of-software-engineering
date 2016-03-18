function arrayToList(arg){
  var list = {};
  var arg2 = list;
  


  function perEachOne(arg1) {
    arg1.value = arg[i];
    arg1.rest = {};
    arg2 =  arg1.rest;
    if (i == arg.length - 1) {
      arg1.rest = null;
    }
  } //end of perEachOne(arg1)
  


  for (i = 0; i < arg.length; i++) {
    perEachOne(arg2);
  }
  
  return list;


} //end of arrayToList(arg)


function listToArray(arg){
  var flatArray = [];
  var theRest = arg;
  
  console.log(arg);

  function perEachLayer(arg1){
    flatArray.push(arg1.value);
    theRest = arg1.rest;
    
    if (theRest == null) {
      return flatArray;
    }
    else {
      perEachLayer(theRest);
    }
  } //end of perEachLayer()

  return perEachLayer(theRest);


} //end of listToArray(arg)

console.log(arrayToList([10, 20,30]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList[10,20,30]));

