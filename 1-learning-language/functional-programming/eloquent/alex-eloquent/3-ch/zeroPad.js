function zeroPad(n, width){
  var str = String(n);
  while(str.length < width)
    str = "0" + str;
  return str;
}

function printFarmInv(cows, chickens, pigs){
  console.log(zeroPad(cows, 3) + " Cows");
  console.log(zeroPad(chickens, 3) + " Chickens");
  console.log(zeroPad(pigs, 3) + " Pigs");
}
printFarmInv(7,16,3);

