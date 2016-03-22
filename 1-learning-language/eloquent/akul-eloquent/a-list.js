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
  //console.log(list);
  return list;
} //end of arrayToList(arg)
///////////////////////////////

function listToArray(arg){
  var flatArray = [];
  var theRest = arg;
  //console.log('original theRest: ', theRest);
  //console.log(arrayToList(90,80,70);

  function perEachLayer(arg1){
    //console.log(arg1.value);

    flatArray.push(arg1.value);
    theRest = arg1.rest;
    //console.log(flatArray);    
    if (theRest == null) {
      return flatArray;
    }
    else {
      return perEachLayer(theRest);
    }
  } //end of perEachLayer()

  return perEachLayer(theRest);
} //end of listToArray(arg)
///////////////////////////////////////
function prepend(element, list) {
  var newList = {value: element, rest: list};

  return newList
} //end of prepend(element,list)
/////////////////////////////////////
function nth(list,number, i) {
  var newList = list;
  //console.log(i);
  for (i; i < number; i++) {
      //console.log(i);
      newList = newList.rest;
      i++;


      if (newList === null) {
        return undefined;
      }

      return nth(newList, number,i); 
  }

  return newList.value;
} //end of nth(list,number)
///////////////////////////////////////
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 3, 0));
// → 20