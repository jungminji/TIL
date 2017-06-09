// Exactly same object structures
const Un = {
  name: "Jungmin",
  sayHi: function(str){
    console.log("In Un: " + this.name + " says: " + str);
  },
  greenTea: function(un, deux, trois){
    console.log(this.name + ": " + un + " - " + deux + " - " + trois);
  }
};

const Deux = {
  name: "Hermes",
  sayHi: function(str){
    console.log("In Deux: " + this.name + " says: " +str);
  },
  greenTea: function(un, deux, trois, quatre){
    console.log(this.name + ": " + quatre);
  }
};


// Apply works the same as call(), but it takes parameters in array.
// Below code will result in TypeError
// Un.greenTea.apply(Deux, 33);

// if you pass 3 arguments to function, but the function only takes one parameter
// function can only use the first element of the array
Un.greenTea.apply(Deux, [500, true, 700]);

// Result in "undefined" because function takes three arguments
Deux.greenTea.apply(Un, [10, 50, 30]);
