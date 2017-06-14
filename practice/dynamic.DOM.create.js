(function(doc) {
  "use strict";

  let list = doc.createElement('ul');
  let list_item = doc.createElement('li');
  let list_link = doc.createElement('a');
  let list_img = doc.createElement('img');

  // Dynamically create property node (not used normally)
  let list_link_href = doc.createAttribute('href');
  let list_img_src = doc.createAttribute('src');
  let list_img_alt = doc.createAttribute('alt');

  list_link_href.nodeValue = 'https://github.com/jungminji';
  list_img_src.nodeValue = 'https://unsplash.it/300/200/?random';
  list_img_alt.nodeValue = 'RandomImage';

  // Create text node dynamically
  let headlineText = doc.createTextNode('Never too late');

  // Element Manipulation
  // appendChild returns child element, not parent
  list.appendChild(list_item);

  let headline = doc.createElement('h2');
  headline.appendChild(headlineText);
  list_item.appendChild(headline);
  list_item.appendChild(list_link);
  list_link.appendChild(list_img);

  list_link.setAttributeNode(list_link_href);
  list_img.setAttributeNode(list_img_src);
  list_img.setAttributeNode(list_img_alt);

  console.log(list);

}(window.document));

(function() {
  "use strict";

  var createElement = function(name) {
    return document.createElement(name);
  }
  var createText = function(content) {
    return document.createTextNode(content);
  }

  var appendChild = function(parent, child) {
    parent.appendChild(child);
    return child;
  }
  var createElContent = function(name, content) {
    var el = createElement(name);
    var text = createText(content);
    appendChild(el, text);
    return el;
  }

}());

(function() {
  "use strict";


}());
