module.exports = (function(global) {

  class Fusion {
    constructor(window) {
      this.doc = window.document;
    }
  }

  global.$ = new Fusion(window);

}(window));
