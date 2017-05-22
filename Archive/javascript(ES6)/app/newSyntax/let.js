import { log, logTitle } from '../modules/WindowLogger';

export default function(){
  lotTitle('Let Keyword');

  if(true){
    let pi = 3.1415;
  }

  // log(pi);   won't work
  // let has its own scope unlike var

  for(Let i=0;i<10;i++){
    log(i);
  }
  log(i);
  //var is pretty much dead
}
