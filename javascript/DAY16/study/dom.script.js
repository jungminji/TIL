/*! dom.script.js @ 2017, yamoo9.net */
(function(global, document, $) {
  'use strict';

  var gnb = $.selector('#gnb');
  var copyzone = $.selector('.copyzone');
  var gnb_links = $.selectorAll('a', gnb);


  [3, 7, 9, 10].forEach(function(item, index, array) {

  })

  // Borrow using .call()
  // Using forEach from Array.prototype for Nodelist
  Array.prototype.forEach.call(gnb_links, function(link) {
    link.onclick = function(event){
      event.preventDefault();
      console.log(this);
      console.log(event);
      //Or retunr false to prevent default action
    }
  });


  global.cloneNodeGNB = function() {
    var copied_gnb = gnb.cloneNode(true);

    $.appendChild(copyzone, copied_gnb);

    copyEvent($.selectorAll('a', copied_gnb), gnb_links);

  };


  // Copying Event
  function copyEvent(copied, copy){
    $.each(copied, function(item, index){
      item.onclick = copy[index].onclick;
    });
  }


})(window, window.document, window.FDS);
