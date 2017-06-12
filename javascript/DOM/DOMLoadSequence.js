// You should have an index,html with h1 tag in it and place this file into head
(function(global, document) {
  "use strict";

  var html = document.documentElement;
  var head = document.head;
  var body = document.body;
  var heading = document.getElementsByTagName('h1');

  console.group('Loads in Head');
  console.log('html in head: ' + !!html);
  console.log('head in head: ' + !!head);
  console.log('body in head: ' + !!body);
  // Below = error, h1 is not loaded yet
  // console.log('h1 in body: ' + heading[0].textContent);
  console.groupEnd();

  // Think about the reason why we put script at the end of body

  function init() {
    var html = document.documentElement;
    var head = document.head;
    var body = document.body;

    console.group('Loads in onloads (after loads)');
    console.log('html onload: ' + !!html);
    console.log('head onload: ' + !!head);
    console.log('body onload: ' + !!body);
    console.log('h1 in body: ' + heading[0].textContent);
    console.groupEnd();
  }

  // window object onload event
  // calling a init function right after loads.
  // So it won't matter if you put script on head or at the end of body
  // Prevents 'null' returns
  window.onload = init;

}(window, window.document));
