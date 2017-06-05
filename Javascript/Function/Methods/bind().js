// bind() was released in 2009, ES5(IE9+)

// Attach Deux to window(global) object
this.Deux = 10;

const module = {
  Deux: 70,
  suchAction: function(){
    return this.Deux;
  }
};

// returns: 70
module.suchAction();


let retrieveDeux = module.suchAction;
// returns 10 - function gets invoked at the global scope
retrieveDeux();


// Create new function variable and bind to "module"
var bindsuchAction = retrieveDeux.bind(module);
bindsuchAction(); // returns 70


// call(), apply() invokes immediately, but bind() doesn't.

// You can preserve the function and also change 'this'. then, you can use it later
