// Validation methods
module.exports = (function() {

  const D = $;

  // DOM Selectors
  D.id = function(name) {
    if (!D.typeOf(name, "string")) {
      throw "Parameter must be string";
    }
    return document.getElementById(name);
  }

  D.tags = function(name, context) {
    if (!D.typeOf(name, "string")) {
      throw "Parameter must be string";
    }
    if (context && !D.isElementNode(context) && context !== document) {
      throw 'Second parameter must be Element Node';
    }
    return (context || document).getElementsByTagName(name);
  }

  D.aTag = function(name, context) {
    return D.tags(name, context)[0];
  }

  D.classes = function(name, context) {
    if (!D.typeOf(name, "string")) {
      throw "Parameter must be string";
    }
    context = context || document;
    if ('getElementsByClassName' in Element.prototype) {
      return context.getElementsByClassName(name);
    } else {
      // Cross-browser code here
    }
  }

  D.aClass = function(name, context) {
    return D.classes(name, context)[0];
  }

  D.queries = function(selector, context) {
    if (!D.typeOf(selector, "string")) {
      throw "Selector must be string";
    }
    context = context || document;
    return context.querySelectorAll(selector);
  }
  D.query = function(selector, context) {
    return D.queries(selector, context)[0];
  }

  // DOM traverse
  D.firstChild = function(node) {
    if ('firstElementChild' in Element.prototype) {
      return node.firstElementChild;
    } else {
      // This code needs to check on older browsers
      return node.children[0];
    }
  }
  D.lastChild = function(node) {
    if ('lastElementChild' in Element.prototype) {
      return node.lastElementChild;
    } else {
      let lastChild = node.children;
      return lastChild[--lastChild.length];
    }
  }
  D.prevSib = function(node) {
    if ('previousElementSibling' in Element.prototype) {
      return node.previousElementSibling;
    } else {
      do {
        node = node.previousSibling;
      } while (node && !D.isElementNode(node));
      return node;
    }
  }
  D.nextSib = function(node) {
    if ('nextElementSibling' in Element.prototype) {
      return node.nextElementSibling;
    } else {
      do {
        node = node.nextSibling;
      } while (node && !D.isElementNode(node));
      return node;
    }
  }


}());
