// Closures are functions that refer to independent (free) variables (variables that are used locally, but defined in an enclosing scope).
// In other words, these functions 'remember' the environment in which they were created.

function Deux(){
  var name = "Unicorn";

  function Trois(){
    console.log(name);
  }

  return Trois;
}

// Trois function is returned from the outer function(Deux) before being executed.

var Un = Deux();
Un();



// More interesting example
function combine(x){
  return function(y){
    return x + y;
  }
}

var quatre = combine(5);
var cinq =  combine(10);

console.log(quatre(2));
console.log(cinq(2));
