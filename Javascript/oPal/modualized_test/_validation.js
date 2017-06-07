(function(global, Ein) {

  Ein.isArgsEmpty = function(arg) {
    if (!arg.length) {
      throw "At least one parameter is required";
    }
  };
  Ein.isType = function(data) {
    return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
  };
  Ein.isValidType = function(data, type) {
    if (this.isType(type) !== 'string') {
      throw ': Invalid parameter type on argument 2\nMust present data type';
    }
    return this.isType(data) === type;
  };
  Ein.isNumber = function(data) {
    return this.isValidType(data, "number") ? true : false;
  };
  Ein.isString = function(data) {
    return this.isValidType(data, "string") ? true : false;
  };
  Ein.isBoolean = function(data) {
    return this.isValidType(data, "boolean") ? true : false;
  };
  Ein.isFunction = function(data) {
    return this.isValidType(data, "function") ? true : false;
  };
  Ein.isArray = function(data) {
    return this.isValidType(data, "array") ? true : false;
  };
  Ein.isObject = function(data) {
    return this.isValidType(data, "object") ? true : false;
  };

})(window, (window.Ein = window.Ein || {}));
