// IIFE get window object when it invoked
(function(window) {
  "use strict"

  function Bottle() {

    const methods = {

      // Mathmatics
      getSum: function(...num) {
        this.isArgs(...num);

        let sum = 0;

        for (let item of arguments) {
          sum += item;
        }
        return sum;
      },

      getAvg: function(...num) {
        this.isArgs(...num);
        return this.getSum(...num) / arguments.length;
      },

      getMax(...num) {
        this.isArgs(...num);

        let max = arguments[0];

        for (let item of arguments) {
          max < item ? max = item : false;
        }
        return max;
      },

      getRand(min, max) {
        let num = 0;

        if (this.isType(min) === "undefined") {
          throw ": At least one parameter value is required";
        }

        return this.isType(max) === "undefined" ?
          num = Math.floor(Math.random() * min + 1) :
          num = Math.floor(Math.random() * ((max + 1) - min) + min);
      },


      // Validations
      isArgs: function(...num) {
        if (!arguments.length) {
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
      }
    }

    // return a package of methods to use
    return methods;
  }

  // Assign _ to window
  window._ = Bottle();

})(window);
