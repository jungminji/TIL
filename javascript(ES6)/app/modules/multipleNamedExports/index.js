import {log, logTite} from '../WindowLogger';
import {addition,
        subtraction,
        division,
        multiplication,
        remainder,
        pi} from './math';

export default function(){
  log(addition(10,10));
  log(subtraction(10,10));
  log(pi);
}


export{
  addition,
  subtraction,
  division,
  multiplication,
  remainder,
  pi
}
