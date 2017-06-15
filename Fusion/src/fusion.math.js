// Validation methods
module.exports = (function() {

  const M = $;

  M.sum = function() {

    M.isArgsEmpty(arguments);
    let sum = 0;
    for (let item of arguments) {
      if (!(M.typeOf(item, "number"))) {
        throw "Arguments must be numeric";
      }
      sum += item;
    }
    return sum;
  }

  M.avg = function() {
    M.isArgsEmpty(arguments);
    return M.sum.apply(M, arguments) / arguments.length;
  }

  M.max = function() {
    M.isArgsEmpty(arguments);
    let max = arguments[0];
    for (let item of arguments) {
      if (!(M.typeOf(item, "number"))) {
        throw "Arguments must be numeric";
      }
      max < item
        ? max = item
        : false;
    }
    return max;
  }

  M.rand = function(min, max) {
    let num = 0;

    if (M.type(min) === "undefined") {
      throw ": At least one parameter value is required";
    }

    if (M.type(min) !== "undefined" && M.type(max) !== "undefined") {
      if (!(M.typeOf(min, "number")) || !(M.typeOf(max, "number"))) {
        throw "Arguments must be numeric";
      }
    }

    return M.type(max) === "undefined"
      ? num = Math.floor(Math.random() * min + 1)
      : num = Math.floor(Math.random() * ((max + 1) - min) + min);
  }

  M.factorial = function(n) {
    if (n === 1) {
      return 1;
    }
    return n * M.factorial(--n);
  }

}());
