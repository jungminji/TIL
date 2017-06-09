(function(global) {
  "use strict";

  class oPal {

    constructor() {
      this.author = "Jungmin Ji";
      this.version = "0.0.5";
      this.name = "oPal";
      this.repository = "https://github.com/jungminji/";
      this.license = "MIT";
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
        // location.hash = "#newitem=3&value=3313123";
        let un = hash.split('&');
        let deux = un[1].split('=');

        return deux[1];
      }
      getPlatform() {
        return navigator.platform;
      }
  }

  global.o = new oPal();

}(window));
