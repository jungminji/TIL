(function(global) {
  "use strict";

  var doc = global.document;

  var headline = doc.getElementsByTagName('h1')[0];
  var abbr_in_headling = headline.getElementsByTagName('abbr')[0];

  console.log('headline: ', headline);
  console.log('abbr: ', abbr_in_headling);

  console.log('parents of abbr?: ', abbr_in_headling.parentNode);
  console.log('parents up 5 of abbr?: ', abbr_in_headling.parentNode.parentNode.parentNode.parentNode.parentNode);
  console.log('firstChild: ', headline.firstChild); // if you have \n within the tag, space and newline also treated as text node
  // which means, you will have to validate. you can use recursion
  console.log('lastChild: ', headline.lastChild);

  console.log('Prev sibling: ', headline.previousSibling);
  console.log('Prev sibling: ', headline.nextSibling);

  var headling_childs = headline.childNodes;
  console.log('Child nodes: ' + headline.childNodes);

  // Node Types
  // elements node = 1
  // property node = 2
  // text node = 3
  // comment node = 8

  var collection = [];
  for(var i = 0; i < headling_childs.length; i++){
    var children = headling_childs[i];
    if(children.nodeType !== 1) { continue; }
    collection.push(children);
  }
  console.log(collection);

  console.log('----------');

  var list = doc.getElementById('list');

  console.log(list.childNodes);
  console.log(list.children);

}(window));
