/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fusion = __webpack_require__(2);
var validation = __webpack_require__(4);
var math = __webpack_require__(3);
var DOM = __webpack_require__(1);

if (false) {
  module.hot.accept();
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Validation methods
module.exports = function () {

  var D = $;

  // DOM Selectors
  D.id = function (name) {
    if (!D.typeOf(name, "string")) {
      throw "Parameter must be string";
    }
    return document.getElementById(name);
  };

  D.tags = function (name, context) {
    if (!D.typeOf(name, "string")) {
      throw "Parameter must be string";
    }
    if (context && !D.isElementNode(context) && context !== document) {
      throw 'Second parameter must be Element Node';
    }
    return (context || document).getElementsByTagName(name);
  };

  D.aTag = function (name, context) {
    return D.tags(name, context)[0];
  };

  D.classes = function (name, context) {
    if (!D.typeOf(name, "string")) {
      throw "Parameter must be string";
    }
    context = context || document;
    if ('getElementsByClassName' in Element.prototype) {
      return context.getElementsByClassName(name);
    } else {
      // Cross-browser code here
    }
  };

  D.aClass = function (name, context) {
    return D.classes(name, context)[0];
  };

  D.queries = function (selector, context) {
    if (!D.typeOf(selector, "string")) {
      throw "Selector must be string";
    }
    context = context || document;
    return context.querySelectorAll(selector);
  };
  D.query = function (selector, context) {
    return D.queries(selector, context)[0];
  };

  // DOM traverse
  D.firstChild = function (node) {
    if ('firstElementChild' in Element.prototype) {
      return node.firstElementChild;
    } else {
      // This code needs to check on older browsers
      return node.children[0];
    }
  };
  D.lastChild = function (node) {
    if ('lastElementChild' in Element.prototype) {
      return node.lastElementChild;
    } else {
      var lastChild = node.children;
      return lastChild[--lastChild.length];
    }
  };
  D.prevSib = function (node) {
    if ('previousElementSibling' in Element.prototype) {
      return node.previousElementSibling;
    } else {
      do {
        node = node.previousSibling;
      } while (node && !D.isElementNode(node));
      return node;
    }
  };
  D.nextSib = function (node) {
    if ('nextElementSibling' in Element.prototype) {
      return node.nextElementSibling;
    } else {
      do {
        node = node.nextSibling;
      } while (node && !D.isElementNode(node));
      return node;
    }
  };
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function (global) {
  var Fusion = function Fusion(window) {
    _classCallCheck(this, Fusion);

    this.doc = window.document;
  };

  global.$ = new Fusion(window);
}(window);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Validation methods
module.exports = function () {

  var M = $;

  M.sum = function () {

    M.isArgsEmpty(arguments);
    var sum = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = arguments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        if (!M.typeOf(item, "number")) {
          throw "Arguments must be numeric";
        }
        sum += item;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return sum;
  };

  M.avg = function () {
    M.isArgsEmpty(arguments);
    return M.sum.apply(M, arguments) / arguments.length;
  };

  M.max = function () {
    M.isArgsEmpty(arguments);
    var max = arguments[0];
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = arguments[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var item = _step2.value;

        if (!M.typeOf(item, "number")) {
          throw "Arguments must be numeric";
        }
        max < item ? max = item : false;
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return max;
  };

  M.rand = function (min, max) {
    var num = 0;

    if (M.type(min) === "undefined") {
      throw ": At least one parameter value is required";
    }

    if (M.type(min) !== "undefined" && M.type(max) !== "undefined") {
      if (!M.typeOf(min, "number") || !M.typeOf(max, "number")) {
        throw "Arguments must be numeric";
      }
    }

    return M.type(max) === "undefined" ? num = Math.floor(Math.random() * min + 1) : num = Math.floor(Math.random() * (max + 1 - min) + min);
  };

  M.factorial = function (n) {
    if (n === 1) {
      return 1;
    }
    return n * M.factorial(--n);
  };
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Validation methods
module.exports = function () {

  var V = $;

  // Type Validation
  V.type = function (data) {
    return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
  };

  V.typeOf = function (data, kind) {
    if (V.type(kind) !== 'string') {
      throw 'Second parameter must be string';
    }
    return V.type(data) === kind;
  };

  // Arguments Validation
  V.isArgsEmpty = function (arg) {
    if (!arg.length) {
      throw "At least one parameter is required";
    }
  };

  // DOM Validation
  V.isElementNode = function (node) {
    return node.nodeType === document.ELEMENT_NODE;
  };
  V.isTextNode = function (node) {
    return node.nodeType === document.TEXT_NODE;
  };
}();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map