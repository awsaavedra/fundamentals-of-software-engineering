function printZeroPad(n, label){
  var nStr = String(n);
  while(nStr.length < 3)
    nStr = "0" + nStr;
  console.log(nStr + " " + label);
}

function printFarmInv(cows, chickens, pigs){
  printZeroPad(cows, "Cows");
  printZeroPad(chickens, "Chickens");
  printZeroPad(pigs, "Pigs");
}

printFarmInv(7,11,3);
