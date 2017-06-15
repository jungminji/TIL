// Validation methods
module.exports = (function() {

  const V = $;

  // Type Validation
  V.type = function(data) {
    return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
  }

  V.typeOf = function(data, kind) {
    if (V.type(kind) !== 'string') {
      throw 'Second parameter must be string';
    }
    return V.type(data) === kind;
  }

  // Arguments Validation
  V.isArgsEmpty = function(arg) {
    if (!arg.length) {
      throw "At least one parameter is required";
    }
  }

  // DOM Validation
  V.isElementNode = function(node) {
    return node.nodeType === document.ELEMENT_NODE;
  }
  V.isTextNode = function(node) {
    return node.nodeType === document.TEXT_NODE;
  }

}());
