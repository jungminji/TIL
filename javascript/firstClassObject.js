// 1. You can assing to a variable
var deux = function(){}

// 2. You can pass a function as argument
function lifeCycle(callback){
  if(typeof callback === 'function'){
    callback();
  }
  // or You could use
  // typeof callback === 'function' && callback();
}
lifeCycle(function(){
  console.log(this);
})

// 3. function can return another function (also an object)
var fn = (function(global){
  'use strict';
  return function(){};
}(window));

// 4. You can set a function to an object property
var obj = {
  member: function(){}
}

// 5. You can have a function as Array element
var arr = [obj, "123", "hi", 50];
