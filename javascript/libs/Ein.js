(function() {

  // methods hold functions
  const methods = {

    Math: {
      sum: function(...num){
        let sum = 0;
        for(let i = 0; i < arguments.length; i++){
          sum += arguments[i];
        }
        return sum;
      },

      avg: function(...num) {
        console.log(arguments);
        return this.sum(...num) / arguments.length;

      },

      max: function(...num) {

        let max = arguments[0];

        for (let i = 0; i < arguments.length; i++) {
          max < arguments[i] ? max = arguments[i] : false;
        }

        return max;
      }
    },
    type: function(data) {
      return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
    },

    isType: function(data, type) {

      if (this.type(type) !== 'string') {
        throw ': Invalid parameter type on argument 2\nMust present data type';
      }

      return this.type(data) === type;
    },
    strConcat: function(...str) {
      let str = "";

      for (let i = 0; i < arguments.length; i++) {
        str += arguments[i];
      }

      return str;
    }
  }

  // Ein's prototype => methods
  const Ein = Object.create(methods);

  // Add Ein to window object
  window.Ein = Ein;

})();
