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

// Call sayHi method from Deux
// However, by attaching Un object using call()...
// this.name is pointing name property in Un object
Deux.sayHi.call(Un, " Bonjour!");

// See the difference
Deux.sayHi(" Hola!");
