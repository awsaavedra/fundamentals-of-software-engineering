//power function
function pow(base, exp){
  if( exp == 0)
    return 1;
  else
    return base*pow(base,exp-1);
}
console.log(pow(2,3));

function findSolution(tgt){
  function find(strt, hist){
    if( strt == tgt){
      return hist;
    }
    else if(strt > tgt){
      return null;
    }
    else{
      return find(strt + 5, "(" + hist + " + 5)") || find(strt + 5 + "(" + hist + " * 3 )");
    }
  }
  return find(1,"1");
}
console.log(findSolution(24));

