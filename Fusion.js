(function(window, document) {

  const Fusion = function() {
    return new Fusion.init();
  }

  Fusion.prototype = {
    // ——————————————————————————————————————
    // DOM Select methods
    // ——————————————————————————————————————

    id(nodeName) {
      this.node = document.getElementById(nodeName);
      return this;
    },


    // ——————————————————————————————————————
    // DOM Traverse methods
    // ——————————————————————————————————————
    parent(depth) {
      let node = this.node;

      depth = depth || 1;
      do {
        node = node.parentNode;
      } while (node && --depth);

      return node;
    }
  }

  Fusion.init = function() {
    this.node = '';
  }

  Fusion.init.prototype = Fusion.prototype;

  window.$ = Fusion();

})(window, document);
