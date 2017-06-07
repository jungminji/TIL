(function(global, Ein) {

  Ein.getSum = function() {
    this.isArgsEmpty(arguments);
    let sum = 0;
    for (let item of arguments) {
      if (!this.isNumber(item)) {
        throw "Arguments must be numeric";
      }
      sum += item;
    }
    return sum;
  };

  Ein.getAvg = function() {
    this.isArgsEmpty(arguments);
    return this.getSum.apply(this, arguments) / arguments.length;
  };

  Ein.getMax = function() {
    this.isArgsEmpty(arguments);
    let max = arguments[0];
    for (let item of arguments) {
      if (!this.isNumber(item)) {
        throw "Arguments must be numeric";
      }
      max < item ? max = item : false;
    }
    return max;
  };

  Ein.getRand = function(min, max) {
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
  };

  Ein.getFactorial = function(n) {
    if (n === 1) {
      return 1;
    }
    return n * this.factorial(--n);
  };
  // if factorial(4)
  // 4 * factorial(3)
  //         3 * factorial(2)
  //                 2 * factorial(1)
  //                         1
  // Therefore, 4 * 3 * 2 * 1 = 24

})(window, (window.Ein = window.Ein || {}));
