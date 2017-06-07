(function(global, Ein) {

  Ein.toArray = function() {
    return Array.prototype.slice.call(arguments);
  };

})(window, (window.Ein = window.Ein || {}));
