(function() {

    // methods hold functions
    const methods = {

      type: function(data){
        return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
      },

      isType: function(data, type){

        if( this.type(type) !== 'string' ){
          throw ': Invalid parameter type on argument 2\nMust present data type';
        }

        return this.type(data) === type;
      }
    }

    // Fin.prototype => methods
    const Fin = Object.create(methods);

    // Add Fin to window object
    window.Fin = Fin;

})();
