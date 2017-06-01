/**
 * JavaScript 데이터 유형을 완벽하게 문자열로 반환하는 유틸리티 함수
 *
 * @global
 * @func    type
 * @param   {any} data - JavaScript 모든 데이터 유형
 * @returns {string}   - 소문자로 데이터 유형 이름을 문자열로 반환
 */
function type(data) {
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
}

/**
 * JavaScript 데이터 유형을 검증하여 참/거짓을 반환하는 유틸리티 함수
 *
 * @global
 * @func    isType
 * @param   {any}     data - JavaScript 모든 데이터 유형
 * @param   {string}  kind - 데이터 유형 이름(소문자)
 * @returns {boolean}      - 데이터 일치 검증 결과를 참/거짓으로 반환
 */
function isType(data, kind) {
  // validateError()를 사용하여 오류 조건을 발생시킴:
  // kind 데이터 유형이 'string'이 아니면(!), 오류를 발생시킨다. (설정 메시지 출력)
  validateError(kind, '!string', '2번째 전달인자는 문자열이어야 합니다');
  return type(data) === kind;
}

/**
 * 오류 조건을 발생시키는 문장을 만들어 내는 유틸리티 함수
 *
 * @global
 * @func    validateError
 * @param   {any}    data          - JavaScript 모든 데이터
 * @param   {string} kind          - 오류 검증을 위한 문자열 e.g) 'string', '!string'
 * @param   {string} error_message - 출력할 오류 메시지(옵션)
 * @returns {string}               - 유효한 경우 출력되는 메시지
 */
function validateError(data, kind, error_message) {
  data = type(data);
  if ( kind.indexOf('!') === 0 ) {
    if ( data !== kind.slice(1) ) { throw error_message || '두 값이 다르기에 오류입니다.'; }
  } else {
    if ( data === kind ) { throw error_message || '두 값은 동일하기에 오류입니다.'; }
  }
  return '오류는 발생하지 않았습니다';
}
// 1. 두 수를 입력받아 큰 수를 반환하는 함수 function
function max (a, b){
  // if(a > b){
  //   return a;
  // } else {
  //   return b;
  // }
  return a > b ? a : b;
}
console.log('max(20, 25) 함수 결과:', max(20, 25));
// 결과값 25
// 2. 숫자를 입력하면 요일을 반환하는 함수
function day(num){
  var week = "일월화수목금토";
  return week[num%7];
}
console.log('day(2): ', day(2));

// 3. 짝수 홀수 판단하는 함수

function isEven(num){
  return num % 2 === 0 ? '짝수' : '홀수';
}
console.log('isEven(0): ', isEven(0));

// 4. 숫자를 배열로 전달받아 숫자들의 평균을 반환하는 함수
function avg(numArr){
  var result = 0;
  for(var i = 0, l = numArr.length; i < l; i ++){
    result += numArr[i];
  }
  return result / numArr.length;
  // numArr.forEach(function(item) {
  //   result += item;
  // });
  // return result / numArr.length;
}
console.log('avg([1, 2, 3, 4, 5, 6]): ', avg([1, 2, 3, 4, 5, 6]));

// 5. 문자를 배열로 전달 받아 문자열 하나로 반환하는 함수
function oneString(strArr){
  var result = '';
  for(var i = 0, l = strArr.length; i < l ; i++){
    result +=strArr[i];
  }
  return result;
  // return strArr.join('');
}
console.log('oneString([\'aaa\', \'bbb\', \'ccc\']): ', oneString(['aaa', 'bbb', 'ccc']));
// 6. 세 수를 입력받아 큰 수를 반환하는 함수
function max3(a, b, c){
  return max(max(a, b), max(b,c));
}
console.log('max3(5, 11, 77): ', max3(5, 11, 77));

// n개의 인자를 받아서 가장 큰 수를 반환
function maxn(...n){
  console.log('n: ', Array.isArray(n));
  var max = n[0];
  for(var i = 1, l = n.length; i < l ; i++){
    if( max < n[i] ){
      max = n[i];
    }
  }
  return max;
}
console.log('maxn(2, 3, 5, 6, 7, 8, 55, 11): ', maxn(2, 3, 5, 6, 7, 8, 55, 11));
// 7. 전화번호를 입력하면 뒤에 4자리를 제외하고 *로 바꾸는 함수
function maskPhoneNum(phoneNum){
  // var result = '';
  // for(var i = 0, l = phoneNum.length; i < l; i ++){
  //   if(l - i > 4){
  //     result += '*'
  //   } else {
  //     result += phoneNum[i];
  //   }
  // }
  // return result;
  return phoneNum.replace(/[0-9](?=[0-9]{4})/g, '*')
}
console.log('maskPhoneNum(00011112222): ', maskPhoneNum('00011112222'));
// 8. Email validation
function validateEmail (email){
  return email.indexOf('@') !== -1;
}
console.log('validateEmail(\'asdf@aasdf\'): ', validateEmail('asdf@aasdf'));


// 9. 비밀번호 문자열 validation 영어문자 숫자 포함

function validatePassword(pw){
  // var lowCase = 'abcdefghijklmnopqrstuvwxyz';
  // var upCase = lowCase.toUpperCase();
  // var numCase = '0123456789';
  // var lowCheck = false;
  // var upCheck = false;
  // var numCheck = false;
  // if (pw.length >= 8){
  //   for(var i = 0, l = lowCase.length; i < l; i++){
  //     if (pw.indexOf(lowCase[i]) !== -1){
  //       lowCheck = true;
  //     }
  //     if (pw.indexOf(upCase[i]) !== -1){
  //       upCheck = true;
  //     }
  //   }
  //   for(var i = 0, l = numCase.length; i < l; i++){
  //     if (pw.indexOf(numCase[i]) !== -1){
  //       numCheck = true;
  //     }
  //   }
  // }
  // if( lowCheck && upCheck && numCheck){
  //   return true;
  // } else {
  //   return false;
  // }
  return /^.*(?=.{8,20})(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$/.test(pw);
}

console.log('validatePassword("Password18"): ', validatePassword("Password18"));























// function findDay(num){

// }
// function isEven(n){

// }
// function average(numArr){

// }
// function oneString(strArr){

// }
// function maxThree(a, b, c){

// }
// function convertPhoneNum(phoneNum){

// }
// function validateEmail(email){

// }
// function validatePassword(pw){
