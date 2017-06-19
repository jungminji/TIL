(function(global, DOMSelector, DOMTraverse, DOMManipulation) {

  const Fusion = fuction() {
    return new Fusion.init();
  }

  Fusion.prototype = {
  }

  Fusion.init = function() {}

  Fusion.init.prototype = Fusion.prototype;

  global.$ = Fusion();

})( window, (function(document) {
  // ——————————————————————————————————————
  // DOM Selector methods
  // ——————————————————————————————————————
  return {
    id: function(name){
      return document.getElementById(name);
    }
  }

})(window.document), (function() {
  // ——————————————————————————————————————
  // DOM Traverse methods
  // ——————————————————————————————————————

  return {
    parent: function(node, depth) {
      depth = depth || 1;
      do {
        node = node.parentNode;
      }
      while (node && --depth);
      return node;
    }
  }

})(), (function(document) {
  // ——————————————————————————————————————
  // DOM Manipulation methods
  // ——————————————————————————————————————

  return {
    createElement: function(name) {
      return document.createElement(name);
    }
  }


})(window.document) );
