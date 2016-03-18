function range(a, b) {
    var allNums = [];
    
    
    function recurs(x, y) {
        
        if (x == y) {
            allNums.push(b)
            console.log(allNums);
            return allNums;
        }
        else {
            allNums.push(x);
            console.log(allNums);
            x = x + 1;
            return recurs(x,y);
            
        }
    } //end of func recurs(x,y)
    
    return recurs(a,b);
    
}


function sum(element, index, array) {
  
  if (index == array.length - 1) {
    sumNum = sumNum + element;
   //console.log(sumNum);
    return sumNum;
  }
  else {
    sumNum = sumNum + element;
    console.log(sumNum);
  }
  
}



var r = range(1,10);
console.log((r), 'final console.log');

var sumNum = 0;

console.log(r.forEach(sum));
