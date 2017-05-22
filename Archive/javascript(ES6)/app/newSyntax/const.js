import {log, logTitle} from '../WindowLogger';

export default function(){
  logTitle("Const");

  /*
  const name = "Maria";
  log(name);

  name = 1;
  log(name);

  name = {
    name: "MARIA"
  }

  log(JSON.stringify(name));
  */

  function add(n1, n2){
    log(n1 + n2);
  }

  log(add(2,2));

  add = function(n1) {
    log(n1 - 100);
  }

  add = 'Maria';

  log(add);

}
