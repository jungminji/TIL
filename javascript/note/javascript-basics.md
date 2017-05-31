# Javascript: Day 2



## 참고 링크

- [Javascript yamoo9](https://github.com/yamoo9/FDS/blob/4th/LECTURE/DAY05/JavaScript.md)
- [Javascript 나무위키](https://namu.wiki/w/JavaScript)
- [Javascript MDN : 값, 변수, 리터럴](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Values,_variables,_and_literals)
- [Javascript : 호이스팅(Hoisting)](http://webruden.tistory.com/25)
- [Javascript MDN: parseInt() 와 parseFloat()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
- [Javascript:  객체(Object)](https://brunch.co.kr/@brunch92ny/8)
- [Javascript MDN: 특수문자](https://msdn.microsoft.com/ko-kr/library/2yfce773(v=vs.94).aspx)






------

## *Javascript* 란 무엇인가

- Javascript 는 Brendan Eich 라는 분이 1995년에 달랑 10일 만에 만든 언어다.
- [크로스-플랫폼](https://ko.wikipedia.org/wiki/%ED%81%AC%EB%A1%9C%EC%8A%A4_%ED%94%8C%EB%9E%AB%ED%8F%BC), 객체지향 언어다.
- 일반적인 용도는 웹 페이지에 기능을 더해 HTML 를 동적으로 만드는 것이다.
- 현재는 클라이언트와 서버 양쪽 모두에서 범용적으로 사용되고 있다.




------

## *Javascript* 의 이름이 만들어진 마케팅 적 이유

- 90년대에 ***Java*** 는 이미 인기 있는 플랫폼으로 성장해있었고,  ***Netscape***는 ***Livescript***(Javascript의 초기 이름) 를 ***Javascript*** 로 이름을 바꾸면 좀 더 많은 개발자들을 끌어들일 수 있을 거라 생각했기 때문이다.
- ***Java*** 랑 ***Javascript***는 다른 언어다. 햇갈리지 말자.




------

## *ECMA Script* 란 무엇인가

- 스크립트 언어의 표준이다. ES5, ES6 이런 식으로도 사용한다.

- ***European Computer Manufacture's Association***: 유럽 컴퓨터 제조업체 협회... 란다.

  - 그냥 **'에크마'** 라고 기억하자, 우리가 강의에서 쓰게 되는 건 ***ES5*** 다.

- ***Javascript*** 도 사용하고, ***ActionScript***, ***JScript*** 등의 언어도 ***ECMA*** 표준을 사용한다.

  - 간단히 말하면, 위의 언어들이 자동차라고 하면, 모두 같은 엔진을 사용한다고 생각하면 된다.

- 계속해서 업데이트 되고 있으며 그에 따른 코드 작성 방법이 진화하고 있다.

- ***ECMAScript 6*** 가 해외에서는 이미 상당한 인기를 끌고 있다. 하지만, 모든 웹 브라우저가 동일하게 ***ES6*** 를 컴파일 하지는 못해서 ***Babel*** 이라는 컴파일러가 같이 인기를 끌고 있다.

  - Babel 의 가장 기본적인 기능은 어떤 버전의 ***Javascript*** 를 입력해도 ***ES5*** 버전으로 변환해서 모든 브라우저에서 작동할 수 있게 해준 다는 점이다.

  ​

------

## ***Javascript*** 기본

- 대소문자 구분한다.

- 명령을 선언문과 선언식으로 구분할 수 있다.

  - 영어권에서는 Statement와 Expression 이라고 표현한다.
  - 혹은 구문과 표현식이라고 부르기도 한다.
  - [함수 선언과 표현](http://insanehong.kr/post/javascript-function/)

- 주석은 한줄 주석은 // 사용하고, 여러 줄은 /* ~ */ 를 사용한다.

- 변수 선언, 값 할당

  ```javascript
  // Javascript 변수(variable) 선언, 값을 할당
  // 무엇을 변수에 설정하고자 하는가?
  // Ex) 오늘 점심은 뭘 먹지?

  // 변수 선언, 초기 값은 할당 되지 않는다
  // 초기값이 설정되지 않으면 자동으로 undefined 라는 값이 할당된다
  // 그러므로, 현재 lunch 에는 undefined 값이 담겨있다
  var lunch;

  // 선언된 변수에 값을 할당
  // = 는 할당연산자 혹은 대입연산자 라고 부름
  lunch = Noodle;
  //위 코드는 Noodle 변수값을 lunch 에 할당, 물론 현재 소스에서는 Noodle 이라는 변수가 존재하지 않으므로, 참조 오류가 발생하겠지. (Reference Error)

  lunch = "Noodle"; // Noodle 이라는 문자열을 lunch 에 할당

  // lunch를 다시 선언하므로, 위의 lunch 값은 사라지고, 새로운 lunch 변수가 Chicken 값을 가진다.
  var lunch = "Chicken";
  ```

  ```javascript
    // 이름은 알아보기 쉽게 명시적, 직관적으로 지어야 한다.
    // 상상을 해보자, a 라는 변수이름이 어딜봐서 이름이 들어간 이름 같을까? 바로 아래의 name 변수이름은 누가봐도 이름이 담겨 있을 거라고 생각된다.
    var a = "David";
    var name = "Alex";

    // 사용해서는 안되는 변수 이름
    // 1. 공백으로 이름 구분 X
    // 2. 숫자로 시작하는 이름 X
    // 특수문자는 _ $ 두 가지만 사용할 수 있다. 그 외에는 다 안됨!
    var my name = "Park";	// 안됨!
    var 76jazz = "Miles Davis";// 안됨!!
  ```


###

### ***Javascript*** 변수명 관례 (Naming convention)

```Javascript
// 변수 이름을 _을 사용하여 구분
// 패턴(Pattern): 사용 빈도가 높다
// Single var pattern: var 변수 선언 키워드를 한 번만 사용하여 변수를 정의. Google 은 권장하지 않음
// 해당 기관마다 규칙은 다르다.
var my_name, is_visible, has_children;

// camelCase(낙타의 등 모양을 닮은 표기법)
getName();
setName();
showMeTheMoney();

// 함수 이름의 첫글자가 대문자인 경우는 특별한 목적의 함수일 가능성이 높다.
Navigation();
Tabs();
Carousel();
Vue();
```





------

## ***Javascript Data Types*** (데이터 유형)

### 기본 자료형 혹은 원시형 (Primitive Types)

1. **Boolean**

   - ***true***와 ***false*** 값을 가진다.

2. **Null**

   - ***null*** 은 ***null*** 값 외엔 가질 수 없다.

3. **Undefined**

   - 값을 할당하지 않은 변수는 ***undefined*** 값을 가진다.

4. **Number**

   - 모든 숫자를 64비트 부동 소수점으로 저장한다.
   - 다른 언어에서처럼 정수, 실수의 구분이 없다. 숫자는 그냥 숫자일 뿐
   - 정수, 실수, 소수, 0, 1 모두 ***Number*** 에 포함된다.

5. **String**

   - 문자열을 표현한다.

   - 홀따옴표, 쌍따옴표로 묶인 텍스트(따옴표의 시작과 끝은 같아야한다)

   - 문자로서의 따옴표의 경우는 Escape(이스케이프) 처리해야 한다.

     ```javascript
     var str = "My record is \"20\" minutes";
     // str 의 값은 My record is "20" minutes
     // 쌍따옴표와 홑따옴표는 \ 를 사용해서 문자열 내부에 추가할 수 있다.
     ```

6. **Symbol (ECMAScript6 에 추가됨)**





### 객체형(***Object***) 혹은 참조형(***Reference types***)

- ***Function***(함수)

  - 수행을 위한 절차

  ```javascript
  var example = function(){};
  ```

- ***Array***(배열)

  - 값의 집합
  - 참고로 함수와 배열 모두 객체다. 원시형을 제외한 모든 형식은 모두 객체다.

  ```javascript
  var array = ["John", 3, "Colt"];
  ```


- ***Object***(객체)

  ```javascript
  // Person 이라는 객체는 firstName, lastName, age 의 속성들을 가지고 있다.
  var Person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
  }
  ```




------

## ***Javascript*** 엄격모드 - "use strict"

- Strict mode 선언 방법: 코드의 최상단에 선언한다.

```javascript
"use strict"

function foo(){
  var example = 7;

}
```

- 일반적으로는 Javascript 는 오류를 묵인하고 코드를 편하게 칠 수 있는 환경을 제공하지만, Strict 모드에서는 묵인하지 않는다.
- [Strict 모드에서 사용 할 수 없는 부분들](http://gyus.me/?p=384)




------

## ***Javascript*** 변수 범위(Scope)

```javascript
// Javascript 변수 범위(scope)
// 전역 변수(Global variable)
// 전역 객체(Global Object): Window 객체
// 전역 변수는 전역 객체의 속성이 된다. 변수를 전역에 선언 후 window.변수명 해보자
// 모든 구역(Block) 에서 접근(Access)이 가능한 변수
var name = "Narae"
console.log("전역 변수: ", Narae);

// 지역 변수(Local variable)
// 특정한 구역(Block)에서만 접근이 가능한 변수
// Block
{
  var name = "Tosh"
  console.log("블록 내부 변수: ", name);
}
```





------

## ***Javascript*** 호이스팅 (Hoisting)

```javascript
// Hoisting (호이스팅)
// 간단하게 말하자면, 끌어올려지는 현상

console.log("Hello: ", name);
var name = "Frog";

// 출력 결과는 Hello: 그리고 undefined
```

```javascript
// 위 코드는 호이스팅되어

var name;
console.log("Hello: ", name);
name = "Frog";

// 이런 식으로 변환된다. 그리고, name에는 아직 값이 할당 되지 않아서, 자동으로 undefined 가 된다.
// 출력 결과는 Hello: 그리고 undefined
```





------

## ***Javascript*** 상수 (const)

- const 로 선언하게 되면 값이 재할당되지 않을 것이라는 신호다.

- console 에서 간단하게 ***var*** 과 ***const*** 의 차이를 확인해 볼 수 있다.

- 관례적으로 대문자 표현한다.

  ```javascript
  var to_show = "Hello";

  console.log(to_show); // Hello 가 출력된다.
  to_show = "Hola"	  // Hola 라는 값으로 재할당이 가능하다.
  console.log(to_show); // Hola 가 출력된다.
  var to_show = "안녕";  // 재할당이 가능하다.
  ```

  ```Javascript
  const FDS = "FDS 4th";

  console.log(FDS);    // FDS 4th 가 출력된다.
  FDS = "FDS 4th mates";  // Uncaught TypeError 가 발생한다. 상수 재할당 불가능
  const FDS = "FDS GO";   // Uncaught SyntaxError 가 발생한다. FDS 가 이미 존재함
  ```




------

## ***Javascript*** 데이터 유형 변경(자동)

- Javascript 는 동적 형지정 언어다.

  - 그 말은, 변수 선언할 떄 데이터 형을 지정할 필요가 없다.
  - 자동으로 지정되서, 유형 타입 검증을 요구한다.

- 런타임(실시한, 웹 브라우저에서 실행 중인 상황) 중에 값의 유형을 변경할 수 있다. **(단점)**

  ```javascript
  var answer = 42;
  // answer 는 Number 형식의 값을 가진 변수이다.
  // 그러나 이렇게 문자열로 바꿀수도 있다.
  answer = "Changed";
  ```






---

## console.group() 사용법

- 콘솔에 메시지를 쓰고 콘솔에 보낸 모든 향후 메시지를 들여 쓰지 않도록 중첩된 블록을 연다. 블록을 닫으려면 console.groupEnd ()를 호출한다.

```javascript
console.group("메시지 그룹");
console.log("로그 메시지 1");
console.log("로그 메시지 2");
console.groupEnd();
```

![console_group](/Users/fdevjm/Desktop/FDS04_Summary/README/img/console_group.png)





---

## ***Javascript*** 데이터 형 변환 예시



### *Number → String*

```javascript
// 세 방식 모두 Number 형에서 String 형식으로 데이터를 변환한다.
// 방식의 차이일뿐, 결과값은 모두 같다.
var first = String(num);
var second = num + '';
var third = num.toString();
```



### *String → Number*

```javascript
// 숫자만으로 구성된 문자열에 -, +, *, / 를 사용할 시에 Number 데이터형이 반환된다.
var str = "29382947";

// str-0, str+1, str*1, str/1
// 브라우저 콘솔창에 시도해보자.



// 문자데이터(숫자 + 문자를 포함하는 문자)를 숫자로 변환
// window.parseInt()   : 단위를 제거하고 정수값 반환
// window.parseFloat() : 단위를 제거하고 실수 값 반환
var width = "1024px";
width = parseInt(width);	// 이 작업을 거치면 width 에는 px 문자열을 제외한 1024 라는 숫자값이 할당됨

var height = "45.55%";
height = parseFloat(height);	// width 에는 % 를 제외한 실수 값인 45.55 가 할당됨

// 진법 매개변수를 포함하는게 정확하다.
console.log( parseInt("1111", 2) );		// 2진수 1111 을 받아들임, 결과값은 15
```



### *Data → Boolean*

```javascript
// 데이터를 불리언 형식으로 변경

// False 결과
Boolean(null);
Boolean(undefined);
Boolean(0);
Boolean("");


// True 결과
Boolean(1);
Boolean(4);
Boolean(312312);
Boolean("John");
Boolean(23.43);
```





---

## ***Javascript*** 리터럴(***Literal***)

- 값 그 자체다. 변수가 아니다.
- 배열도 객체다.



### 배열 리터럴(Array Literal)

```javascript
var coffees = ["Irish Cream", "Vanilla Blonde", "Hazulnut"];	// 일반적인 배열 객체

var missing = ["파이리", , "Angel"];
// 지정되지 않은 요소를 설정할 수 있다. 파이리 다음 요소는 undefined 로 지정된다.
```



---

## ***Javascript*** 객체와 생성자



### 주요 생성자(*Constructor*)

- Number()
- String()
- Boolean()
- Function()
- Array()
- Object()





### 객체(*Object*)를 생성하는 정식 구문

```javascript
var min = new Number(10);	// 숫자 생성자 함수를 통해 숫자 객체가 생성됨
min.valueOf();	// 숫자 10 에 접근하기 위해서는 메소드를 사용해야 한다.

var msg = new String("How are you?");	// 문자열 생성자 함수를 통한 생성
msg.valueOf();	// 마찬가지로 How are you 라는 문자열에 접근하기 위해선 메소드를 사용해야 한다.

...

var lunch_time = new Array('one', 'two', 'three'); // 배열 생성자 사용
dinner_time = ['pasta', 'soup'];	// 배열 리터럴 사용


var car = new Object();	// 객체 생성자 사용
var foo = {};	// 객체 리터럴 사용
```



---

## Javascript 배열(Array)

```javascript
var arr = ["909", 909, "HI"];	// 배열 선언

console.log( arr[0] );	// 909 출력

arr.push("안녕");	// arr 의 4번째 요소로 "안녕" 이 추가된다.

arr.pop(); // arr 의 마지막 요소를 제거한다.
```



### 연관형 배열 표기법

```javascript
var music_list = [];

// Index 를 사용하여 추가
music_list[0] = 'Have nothing';
music_list[1] = 'You are my love';


// key 값을 사용하여 추가
music_list['author'] = 'TakeFive';
music_list['maker'] = 'E-soul';
music_list['location'] = 'Germany';

// 값 접근 방법
console.log( music_list['author'] );	// TakeFive 가 출력됨
```





---

## 값 복사와 값 참조

- 원시 데이터형은 값 복사가 이루어진다.
  - Number, string, boolean, null, undefined

```javascript
var num = 49;
var num_two = num;

num = 50;	// 이제 num 은 50의 값을 가진다.

console.log(num);	// 50 이 출력된다.
console.log(num_two);	// 복사했던 49가 그대로 num_two 에 있게되어, 49가 출력된다.
```

- 객체는 값 참조가 이루어진다.

```javascript
var arr = [1, 2, 3, 4];
var arr_two = arr;	// arr_two 는 arr 를 참조한다.

console.log(arr_two);	// [1, 2, 3, 4] 가 보인다. 아직까지는 값이 복사 된 것 같다.

arr.push("HI"); // arr 에 "HI" 라는 문자열을 추가한다.

console.log(arr);	 // 생각했던대로 [1, 2, 3, 4, 5] 가 출력된다.
console.log(arr_two);  	// arr 과 같은 [1, 2, 3, 4, 5] 가 출력된다.


// arr 과 arr_two 은 같은 배열을 참조하므로 같은 값이 출력된다.
// 심심하면 .pop() 을 사용하여 콘솔해서 확인해 보는 것도..  :-)
```





---

## 함수 객체와 기본 객체(*Function object, Plain object*)

- 함수는 두 가지 방법으로 표현할 수 있다.

  - 함수 선언문(Function statement)

  ```javascript
  function calculate(){
    ...
  }
  ```

  - 함수 표현식(Function expression)
    - 변수에 함수 참조값이 들어가 있는 형태

  ```javascript
  var calculate = function() {
    ...
  };
  ```




- 함수 생성자를 통해서도 함수 객체를 생성할 수 있다.

```Javascript
var func = new Function('console.log("Create function object...")');
```



### 함수와 호이스팅(*Hoisting*)

```javascript
calWidth();		// 이 함수는 작동하지 않는다.
calHeight();	// 이 함수는 작동한다.

var calWidth = function(){

};

function calHeight(){

}

// 이유는 아래의 코드블락에서 볼 수 있다.
```

```javascript
// 실제로 코드가 실행되면 호이스팅으로 인해 아래와 같은 코드로 해석된다.
// function 선언문과 변수는 코드의 최상단으로 끌어올려진다.
function calHeight(){

}

var calWidth;

calWidth();	// 에러 발생, calWidth 는 아직 함수가 아님
calHeight();

calWidth = function(){

}

// calWidth 함수는 이 부분부터 사용해야 정상적으로 작동한다.
```



### 기본 객체(*Plain* *Object*)

- 속성(key) : 값(value) 의 쌍(Pair) 로 구성된 집합체(Collection)

```javascript
var Person = {
  name: "John",
  address: "100 Main st",
  phone: "+1 416 554 3342"
};

// Person 이라는 객체를 생성함
// Person 에는 name, address, phone 의 속성이 있다. (key)
// 그리고 각각의 속성에는 John, 100 Main st, +1 416 554 3342 라는 값이 들어 있다. (value)

// 속성의 값에 접근하는 방법은 아래 두 가지로 할 수 있다.
Person.name;		// John
Person.["name"];	// John

```

```javascript
// 객체 내부에 객체를 넣을 수도, 함수를 넣을 수도 있다.
var Fastcampus = {
  size: 20,
  students: {
    number: 10,
    type: "4th"
  },
  addStudent: function(){

  },
  location: "Seoul"
};
```

```javascript
// 객체의 속성 추가
Fastcampus.capacity = 50;	// 간단하게 capacity 라는 속성이 추가된다.

// 객체의 속성 제거
delete Fastcampus.capacity;	// delete 키워드를 사용해 capacity 속성을 Class 객체에서 삭제한다.

// 일반적으로 delete 를 사용해서 객체의 속성을 제거할 수 있지만
// 전역 객체의 이미 설정되 있는 속성에는 접근할 수 없다.

```



---

## ***Javascript*** 데이터 유형 검증



### *null*, *undefined* 형 변환 체크

```javascript
console.log(!null);	// true
console.log(!!null); // false

console.log(!undefined); // true
console.log(!!undefined); //false

console.log(null + ''); // null
console.log(null+''); // string

console.log(undefined + ''); // undefined
console.log(typeof(undefined + '')); // string

console.log(null + 10);	// 10
console.log(undefined + 10) // NaN

console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
```



### 데이터 형 검증 메소드 - *typeof*

```javascript
typeof(123);	// 결과: number
typeof("123");	// 결과: string

var func = function(){};
typeof(func);	// 결과: function

var obj = {};
typeof(obj);	// 결과: object

var array = [];
typeof(array);	//결과: object

var is_this_bug = null;
typeof(is_this_bug);	//결과: object.
// 원시형태인 null 은 결과값으로 null 을 반환해야 하는게 정상이다.
// MDN 에는 object (ECMAScript 의 버그로, null이어야 함)... 이라고 명시되어 있다.
```



---
