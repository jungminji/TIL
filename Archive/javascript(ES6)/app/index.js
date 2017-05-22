import singleDefaultExports from './modules/singleDefaultExports/index';
import multipleNamedExports from './modules/multipleNamedExports/index';

import theLetKeyword from './newSyntax/let';
import constant from './newSyntax/const';

function modules() {
  singleDefaultExports();
  multipleNamedExports();
}

function newSyntax(){
  theLetKeyword();
}


//modules();
