function power(base, exponent){
  if(exp == undefined)
    exp = 2;
  var result = 1;
  for(var i = 0; i < exp; i++){
    result *= base;
  }
  return result;
}

console.log(power(4));
console.log(power(4,3));

