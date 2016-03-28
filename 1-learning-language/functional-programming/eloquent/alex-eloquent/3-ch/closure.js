function wrapValue(n){
  var locVar = n;
  return function(){
    return locVar;
  }
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1(), wrap2());

function multiplier(factor){
  return function(n){
    return n*factor;
  }
}


console.log("multipler(2)(5)",multiplier(2)(5));

//alternatively to multiplier(2)(5)
var twice = multiplier(2);
console.log("using twice: ",twice(5));
