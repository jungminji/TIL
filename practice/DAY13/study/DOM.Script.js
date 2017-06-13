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

  // var activeParent = function() {
  //   console.log(this.parentNode);
  //   this.parentNode.className = 'active';
  //   return false;
  // };
  //
  // for (var i = 0; i < links.length; i++) {
  //   var link = links.item(i);
  //   link.onclick = activeParent;
  // }
  //
  // function parentClass(node){
  //   return node.className = 'active';
  // }

  // collect everything in body
  // loop through, exclude script
  // find elements without child


  // var empty = [];
  // var body_children = document.body.getElementsByTagName('*');
  // console.log(document.getElementsByTagName('li'));
  //
  // for(var i = body_children.length, child; child = body_children[--i]; ){
  //   if( child.nodeName.toLowerCase() === 'script' ){ continue; }
  //
  //   if(!child.hasChildNodes()){
  //     empty.push(child);
  //   }
  //
  // }
  // empty.reverse();
  // console.log(empty);


  var classes = function() {

    var _classes;

    if ('getElementsByClassName' in Element.prototype) {
      _classes = function(name, context) {
        validateError(name, '!string', 'pass the first argument');
        return (context || document).getElementsByClassName(name);
      }
    } else {
      _classes = function(name, context) {
        
      };
    }
  }


})(window, window.document, window.FDS);
