(function(global) {
  "use strict";

  // Closure: oPal
  const oPal = function() {

    // constructor
    const oPalMine = function() {
      this.author = "Jungmin Ji";
      this.version = "0.0.5";
      this.name = "oPal";
      this.repository = "https://github.com/jungminji/";
      this.license = "MIT";
    }

    // Add methods to prototype
    oPalMine.prototype = {

      // Mathmatics
      getSum: function() {
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
      getAvg: function() {
        this.isArgsEmpty(arguments);
        return this.getSum.apply(this, arguments) / arguments.length;
      },
      getMax: function() {
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
      getRand: function(min, max) {
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
      getFactorial: function(n) {
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
      },

      // Validations
      isArgsEmpty: function(arg) {
        if (!arg.length) {
          throw "At least one parameter is required";
        }
      },
      isType: function(data) {
        return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
      },
      isValidType: function(data, type) {
        if (this.isType(type) !== 'string') {
          throw ': Invalid parameter type on argument 2\nMust present data type';
        }
        return this.isType(data) === type;
      },
      isNumber: function(data) {
        return this.isValidType(data, "number") ? true : false;
      },
      isString: function(data) {
        return this.isValidType(data, "string") ? true : false;
      },
      isBoolean: function(data) {
        return this.isValidType(data, "boolean") ? true : false;
      },
      isFunction: function(data) {
        return this.isValidType(data, "function") ? true : false;
      },
      isArray: function(data) {
        return this.isValidType(data, "array") ? true : false;
      },
      isObject: function(data) {
        return this.isValidType(data, "object") ? true : false;
      },

      // Utilities
      toArray: function() {
        return Array.prototype.slice.call(arguments);
      }
    }

    // Returns oPal instance to const oPal
    function oPalFind() {
      return new oPalMine();
    }

    // Returns oPalFind function statement to const oPal
    return oPalFind;
  }

  // forge has createEin function statement
  const oPalCraft = oPal();

  // forging to new instance of object, and add to window object
  global.o = oPalCraft();

}(window));
