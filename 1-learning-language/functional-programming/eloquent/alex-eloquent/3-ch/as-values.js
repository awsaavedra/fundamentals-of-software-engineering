function square(x){
  //local scope
  return x * x; //
}

console.log("The future says: ", future());
//how? Well functions are NOT part of the top-to-bottom flow of control
//They are moved to the top of their scope and can be used by all the code
//in that scope.
function future(){
  return "We STILL don't have flying cars.";
}

//call stack
function greet(who){
  console.log("Hello " + who); 
}

greet("Harry", "\nBye");


