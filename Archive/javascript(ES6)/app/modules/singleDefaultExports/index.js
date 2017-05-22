import pi from './pi';
import api from './api';
import Person from './Person';
import {log, logTitle} from '../WindowLogger';

export default function(){
  log(pi);
  log(api("Jungmin"));

}
