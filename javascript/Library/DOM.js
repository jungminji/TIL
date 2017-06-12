(function(window) {
  "use strict";

  class Bottle {

    constructor(dom) {
      this.doc = dom;
      this.currentNode = "";
    }

    idNode(node, context = this.doc) {
      return this.currentNode = context.getElementById(node);
    }
    classNode(node, context = this.doc) {
      return this.currentNode = this.classNodes(node, context)[0];
    }
    classNodes(node, context = this.doc) {
      return this.currentNode = context.getElementsByClassName(node)[0];
    }
    tagNode(node, context = this.doc){
      return this.currentNode = this.tagNodes(node, context)[0];
    }
    tagNodes(node,context = this.doc){
      return this.currentNode = context.getElementsByTagName(node);
    }


////////////////////////////////////////////////////////////////////////////////
    nodeName(node, context) {
      const _node = this.node(node, context);
      return _node.nodeName;
    }
    nodeType(node, context) {
      const _node = this.node(node, context);
      return _node.nodeType;
    }
    nodeValue(node, context) {
      const _node = this.node(node, context);
      return _node.nodeValue;
    }


    lastChild(node, context) {
      const _node = this.node(node, context);
      return _node.lastChild;
    }

  }

  window.$ = new Bottle(window.document);

}(window));
