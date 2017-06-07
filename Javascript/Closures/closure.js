// Closures are functions that refer to independent (free) variables (variables that are used locally, but defined in an enclosing scope).
// In other words, these functions 'remember' the environment in which they were created.

function Deux() {
  var name = "Unicorn";

  function Trois() {
    console.log(name);
  }

  return Trois;
}

// Trois function is returned from the outer function(Deux) before being executed.

var Un = Deux();
Un();



// More interesting example
function combine(x) {
  return function(y) {
    return x + y;
  }
}

var quatre = combine(5);
var cinq = combine(10);

console.log(quatre(2));
console.log(cinq(2));


// FDS example

var count = function(n) {
  var count = n;

  function increaseCount() {
    return ++count;
  }
  return increaseCount;
};

var inc = count(50);
inc();


var count = function(n) {
  var count = n;

  function decreaseCount() {
    return --count;
  }
  return decreaseCount;
}

var dec = count(20);
dec();


// 1. if count(), increaseCount function statement is returned
// 2. var count remembers returned function statement
// 3. you can save it to another variable then exeucute.
// 4. To be specific, inc() is going to execute the first annonymous function (), then increaseCount(), works twice.

(function(global) {

  // Closure: EinLib
  const package = function() {

    // Ein constructor
    const Ein = function() {}

    // Add methods into prototype
    Ein.prototype = {
      // Mathmatics
      getSum() {
        this.isArgsEmpty(arguments);
        let sum = 0;
        for (let item of arguments) {
          if (!this.isNumber(item)) {
            throw "Arguments must be numeric";
          }
          sum += item;
        }
        return sum;
      },
      getAvg() {
        this.isArgsEmpty(arguments);
        return this.getSum.apply(this, arguments) / arguments.length;
      }
    }

    // Returns Ein instance.
    function createEin() {
      return new Ein();
    }

    // Returns createEin function
    return createEin;
  }

  // forge has createEin function statement
  const forge = package();

  // forging to new instance of Ein object, and add to window object
  global.Ein = forge();

}(window));



////////////////////////////////////////////////////////////////////////////////
function makeCounterManager(init_count) {

  init_count = init_count || 0;

  return {
    increase: function(step) {
      init_count += (step || 1);
      return init_count;
    },
    decrease: function(step) {
      init_count -= (step || 1);
      return init_count;
    },
    reset: function(value) {
      init_count = value || 0;
    }
  }
};
