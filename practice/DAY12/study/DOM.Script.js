(function(global){
"use strict";
  var doc = global.document;

  if(!('nextElementSibling' in doc.documentElement)){
    return doc.documentElement.nextElementSibling;
  } else {
    return //array index of 0
  }


}(window));
