var expose = (function() {

  // module is a local variable within the scope
  // Private space within IIFE
  var deux = "";

  var module = function() {
    console.log('Un');
  }

  // module();

  // Expose pattern, return something...
  return module;

}());


console.log(expose);
