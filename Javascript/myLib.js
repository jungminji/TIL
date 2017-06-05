// IIFE get window object when it invoked
(function(window) {
  "use strict"

  function Bottle() {

    const methods = {

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
      },
      getAvg() {
        this.isArgsEmpty(arguments);
        return this.getSum.apply(this, arguments) / arguments.length;
      },
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
      },
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
      },

      // Validations
      isArgsEmpty(arg) {
        if (!arg.length) {
          throw "At least one parameter is required";
        }
      },
      isType(data) {
        return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
      },
      isValidType(data, type) {
        if (this.isType(type) !== 'string') {
          throw ': Invalid parameter type on argument 2\nMust present data type';
        }
        return this.isType(data) === type;
      },
      isNumber(data) {
        return this.isValidType(data, "number") ? true : false;
      },
      isString(data) {
        return this.isValidType(data, "string") ? true : false;
      },
      isBoolean(data) {
        return this.isValidType(data, "boolean") ? true : false;
      },
      isFunction(data) {
        return this.isValidType(data, "function") ? true : false;
      },
      isArray(data) {
        return this.isValidType(data, "array") ? true : false;
      },
      isObject(data) {
        return this.isValidType(data, "object") ? true : false;
      },

      // Utilities
      toArray() {
        return Array.prototype.slice.call(arguments);
      },

      // Etc
      factorial(n){
        if(n === 1){
          return 1;
        }
        return n * this.factorial(--n);
      }
      // if factorial(4)
      // 4 * factorial(3)
      //         3 * factorial(2)
      //                 2 * factorial(1)
      //                         1
      // Therefore, 4 * 3 * 2 * 1 = 24
    }

    // return a package of methods to use
    return methods;
  }

  // Assign Bottle instance to window, invoke with a keyword 'Ein'
  window.Ein = new Bottle();

})(window);
