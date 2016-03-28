var animals = [ {name: "fluff", species: "cat"}, 
{name: "ted", species: "human"}];

//nonfilter way
/*
var cats = [];
for( var i = 0; i < animals.length; i++){
  if(animals[i].species === "cat") cats.push(animals[i]);
}
*/

//filter way
var cats = animals.filter(function(animal){ return animal.species === "cat"});

console.log(cats);

