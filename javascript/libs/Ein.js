"use strict"

class Ein {

  constructor() {}

  sum(...num) {

    if (arguments.length === 0) {
      throw ": At least one parameter value is requied";
    }

    let sum = 0;
    for (let item of arguments) {
      sum += item;
    }
    return sum;
  }

  /**
   * Returns max value in Parameters
   *  @function max
   *  @param {number} numbers
   *  @returns {number} max number
   */
  max(...num) {

    if (arguments.length === 0) {
      throw ": At least one parameter value is requied";
    }

    let max = arguments[0];
    for (let item of arguments) {
      max < item ? max = item : false;
    }
    return max;
  }

  /**
   *  Returns random number, it can take single parameter or two parameters to set range
   *  @function randNum
   *  @param {number} number
   *  @returns {number} random number
   */
  randNum(min, max) {

    let num = 0;

    if (this.type(min) === "undefined") {
      throw ": At least one parameter value is required";
    }

    return this.type(max) === "undefined" ?
      num = Math.floor(Math.random() * min + 1) :
      num = Math.floor(Math.random() * ((max + 1) - min) + min);
  }

  type(data) {
    return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
  }

  isType(data, type) {
    if (this.type(type) !== 'string') {
      throw ': Invalid parameter type on argument 2\nMust present data type';
    }
    return this.type(data) === type;
  }

  strConcat(...str) {
    let str = "";
    for (let item of arguments) {
      str += item;
    }
    return str;
  }

  /**
   * Returns day in Korean
   *  @function todayKR
   *  @returns {string} today in Korean
   */
  todayKR() {

    let day = "";

    switch ( (new Date).getDay() ) {
      case 1:
        day = "월요일";
        break;
      case 2:
        day = "화요일";
        break;
      case 3:
        day = "수요일";
        break;
      case 4:
        day = "목요일";
        break;
      case 5:
        day = "금요일";
        break;
      case 6:
        day = "토요일";
        break;
      default:
        day = "일요일";
        break;
    }
    return day;
  }

}

const _ = new Ein();
