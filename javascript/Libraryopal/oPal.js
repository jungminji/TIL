(function(global) {
    "use strict";

    class oPal {

      constructor() {
        this.author = "Jungmin Ji";
        this.version = "0.0.5";
        this.name = "oPal";
        this.repository = "https://github.com/jungminji/";
        this.license = "MIT";

        this.doc = global.document;
      }

      // Mathmatics
      getSum() {
        this.isArgsEmpty(arguments);
        let sum = 0;
        for (let item of arguments) {
          if (!this.isNumber(item)) {
            throw "Arguments must be numeric";
          }
          sum += item;
        }
        return sum;
      }
      getAvg() {
        this.isArgsEmpty(arguments);
        return this.getSum.apply(this, arguments) / arguments.length;
      }
      getMax() {
        this.isArgsEmpty(arguments);
        let max = arguments[0];
        for (let item of arguments) {
          if (!this.isNumber(item)) {
            throw "Arguments must be numeric";
          }
          max < item ? max = item : false;
        }
        return max;
      }
      getRand(min, max) {
        let num = 0;
        if (this.isType(min) === "undefined") {
          throw ": At least one parameter value is required";
        }
        if (!this.isNumber(min) || !this.isNumber(max)) {
          throw "Arguments must be numeric";
        }
        return this.isType(max) === "undefined" ?
          num = Math.floor(Math.random() * min + 1) :
          num = Math.floor(Math.random() * ((max + 1) - min) + min);
      }
      getFactorial(n) {
        if (n === 1) {
          return 1;
        }
        return n * this.getFactorial(--n);

        // if factorial(4)
        // 4 * factorial(3)
        //         3 * factorial(2)
        //                 2 * factorial(1)
        //                         1
        // Therefore, 4 * 3 * 2 * 1 = 24
      }

      // Validations
      isArgsEmpty(arg) {
        if (!arg.length) {
          throw "At least one parameter is required";
        }
      }
      isType(data) {
        return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
      }
      isValidType(data, type) {
        if (this.isType(type) !== 'string') {
          throw ': Invalid parameter type on argument 2\nMust present data type';
        }
        return this.isType(data) === type;
      }
      isNumber(data) {
        return this.isValidType(data, "number") ? true : false;
      }
      isString(data) {
        return this.isValidType(data, "string") ? true : false;
      }
      isBoolean(data) {
        return this.isValidType(data, "boolean") ? true : false;
      }
      isFunction(data) {
        return this.isValidType(data, "function") ? true : false;
      }
      isArray(data) {
        return this.isValidType(data, "array") ? true : false;
      }
      isObject(data) {
        return this.isValidType(data, "object") ? true : false;
      }

      // Array utility
      toArray() {
        return Array.prototype.slice.call(arguments);
      }

      // BOM utility
      getHashValue() {
        let hash = location.hash;

        if (this.isType(hash) === 'undefined') {
          throw "location.hash is undefined";
        }

        let un = hash.split('&');
        let deux = un[1].split('=');

        return deux[1];
      }
      getPlatform() {
        return navigator.platform;
      }

      // DOM utility
      nodeId(name) {
        return (this.doc).getElementById(name);
      }
      nodeTags(name, context) {
        return (context || this.doc).getElementsByTagName(name);
      }
      nodeTag(name, context) {
        return this.nodeTags(name, context)[0];
      }
      nodeClasses(name, context) {
        return (this.doc).getElementsByClass(name);
      }
      nodeClass(name, context) {
        return nodeClasses(name, context)[0];
      }

      nodePrev(node) {
        do {
          node = node.previousSibling;
        } while (node && node.nodeType !== 1);
        return node;
      }
      nodeNext(node) {
        do {
          node = node.nextSibling;
        } while (node && node.nodeType !== 1);
        return node;
      }
      nodeFchild(node) {
        // IE 9+
        return node.firstElementChild;
      }
      nodeLchild(node) {
        // IE 9+
        return node.lastElementChild;
      }
      nodeParent(node, num = 1) {
        while (num--) {
          node = node.parentNode;
        }
        return node;
      }
      query(node, context) {
        return this.queryAll(node, context)[0];
      }
      queryAll(node, context) {
        return (this.doc).querySelectorAll(context + ' ' + node);
      }
      // hasClass(className, node){
      //   var check = new RegExp('/(^|\\s)'+ className +'($|\\s)/');
      //   console.log(check);
      //   return check.test(node);

      // Starting with none or space, tabs
      // and classname...
      // and end with with none or space, tabs
      //   /(^|\s)link-content($|\s)/.test('wke link-content external');
    }

  global.$ = new oPal();

}(window) );
