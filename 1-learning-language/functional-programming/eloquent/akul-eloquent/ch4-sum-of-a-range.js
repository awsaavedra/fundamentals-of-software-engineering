function range(a, b, step) {
    var allNums = [];
    
    
    function recurs(x, y) {
        
        if (x > y) {
            //allNums.push(b)
            console.log(allNums);
            return allNums;
        } 
        else if ( x == y) {
            allNums.push(y);
            console.log('if else');
            console.log(allNums);
            return allNums;
        }
        else {
            allNums.push(x);
            console.log(allNums);
            x = x + step;
            return recurs(x,y); 
        } //end of if/else loop
    } //end of func recurs(x,y)
    
    return recurs(a,b);
    
} //end of range(,,) func


function sum(element, index, array) {
  
  if (index == array.length - 1) {
    sumNum = sumNum + element;
    console.log(sumNum);
    //return sumNum;
  }
  else {
    sumNum = sumNum + element;
    console.log(sumNum);
  }
  
}


var r = range(1,11,2);
console.log((r), 'final console.log');

var sumNum = 0;

console.log(r.forEach(sum));
