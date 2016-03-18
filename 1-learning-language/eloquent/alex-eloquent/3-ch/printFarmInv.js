function printFarmInv(cows, chickens){
  var cowStr = String(cows);
  var chickenStr = String(chickens);
  
  while(cowStr.length < 3 && chickenStr.length < 3){
    cowStr = "0" + cowStr;
    chickenStr = "0" + chickenStr;
  }
  
  console.log(cowStr + " Cows");
  console.log(chickenStr + " Chicken");
}

printFarmInv(7, 11);
