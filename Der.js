"use strict"

(function(){

  const Der = new Der;

  function Der(){
  }

  const methods = {
    name: function(){
      return 3;
    },
    holy: function(){
      return 5;
    }
  }

  Der.prototype = Object.create(methods);


})();
