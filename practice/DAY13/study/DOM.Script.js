/*! DOM.Script.js @ 2017, yamoo9.net */

(function(global, document, _) {
  'use strict';
  //
  // var fds = _.id('FDS');
  //
  // console.log('fds: ', fds);
  //
  // var study_content = _.id('study_content');
  //
  // var study_content_lis = _.tagAll('li', study_content);
  // console.log('study_content_lis: ', study_content_lis);
  //
  // var list = document.getElementById('study-content');
  // console.log(list);
  var links = document.getElementsByTagName('a');
  // console.log(links);
  //
  // console.log(list.firstElementChild);
  // console.log(list.lastElementChild);

  var activeParent = function() {
    console.log(this.parentNode);
    this.parentNode.className = 'active';
    return false;
  };

  for (var i = 0; i < links.length; i++) {
    var link = links.item(i);
    link.onclick = activeParent;
  }

  function parentClass(node){
    return node.className = 'active';
  }



})(window, window.document, window.FDS);
