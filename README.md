# JS Study

Javascript 독학하면서 README에 간단하게 문법 정리

일단은 기본 중심으로, js에서 unique한 문법 위주로

알고리즘 (코테) 문제도 연습

## 목차
- [Basics](#basics)
- [출력](#출력)
- [변수 선언](#변수-선언)
- [반복문 조건문](#반복문-조건문)
- [연산자](#연산자)
- [함수 Function](#함수-function)
- [객체](#객체)
- [배열 Array](#배열-array)
  - [배열 선언](#배열-선언)
  - [내장 함수](#내장-함수)
  - [배열 정렬 sort](#배열-정렬-sort)
- [문자열 String](#문자열-string)
  - [내장 함수](#내장-함수)
- [Math 객체](#math-객체)
- [기타](#기타)
- [2차원 배열](#2차원-배열)
  
## Basics
- C/C++과 유사한 면이 많은 것 같다.
- 세미콜론 ';' 로 줄 마침
- 조건문에는 (괄호)를 달아줘야함.


## 출력
<b>console.log(출력할 것)</b>


## 변수 선언
C/C++ 처럼 선언과 초기화를 거쳐서 진행된다.
- <b>let, var :</b> mutable 변수 선언 (재할당 가능!!!)
	- var 변수이름 : 변수의 값을 선언하지는 않아도 undefined 할당됨.
		- var : 함수 레벨 scope. (전역 스코프를 공유한다. -> 위험성) 
	- let : 변수 중복 선언은 불가능.
- <b>const :</b> immutable (값의 재할당 불가!!!)
	- 상수 선언 (값 변경 불가능하기 때문에)
	- const 변수이름 단독 불가 (반드시 값 초기화해야함)
	- '객체의 재할당'은 가능하다.

let과 const 로 선언한 변수들은 block-level scope를 따른다. (narrower)
-> let, const 를 사용하자.


## 반복문 조건문
{} 괄호 사용을 잊지 말자 (C/C++ 과 기본적으로 동일)
- <b> for문: </b> for (초기식; 조건; 증감식) { 반복문 실행문 }
- <b> if문: </b> if(조건) {조건 실행}
	- else if
	- else
그 외 switch문, while 문 모두 같은 방식으로 C/C++와 동일하다. (설명 생략)

반복문을 통한 iteration 예시
~~~javascript
var dict_ex = {}		// 사전 자료구조
for (var key in dict_ex){			// 사전 순회 예시
	dict_ex[key] = 0
}
~~~


## 연산자
- && : AND
- || : OR
- == , != : 비교. but type을 비교하지는 않음
- ===, !== : type 비교까지. (객체 자체를 비교하는 것. 두 개의 다른 object에 대해 ===는 무조건 false)


## 함수 Function
함수 선언은 모든 언어가 비슷함
```javascript
function add (x,y) {
	return x + y
}
```



js는 이런 스타일로도 함수 선언 가능
~~~javascript
const mult = (x,y) => x*y;
~~~



## 객체
구조체와 같은 개념의 자료구조가 존재함. (name과 value가 연결됨)

이 안에서 함수 (method)도 선언 가능한데, 그런면에서 class와 더 유사한 것 같다. (js 클래스도 존재함)
```javascript
const grid = {
	x: 0,
	y: 0
} // 객체 생성

// 객체의 속성에 접근하는 법 : 두가지 존재
grid.x;
grid['y'];

delete grid.x;		//객체 속성 삭제
```



## 배열 (Array)
배열로 스택, 큐 모두 구현 가능. (따로 스택이나 큐 자료구조를 지원하지는 않음)
### 배열 선언
- var arr = [element1, element2, ...];	// 배열 리터럴 사용
- var arr = Array([element1, element2, ...]);	// Array 객체 생성자
- var arr = new Array(element1, element2,...);	// new 연산자 (추천하지 않는다)
- var arr = array.from('hello') // iterable 을 쉽게 배열로 변환

### 내장 함수
- arr.length : 배열 길이
- arr.reverse()
- arr.push(값) : 배열 뒤에 추가 (stack 과 동일한 역할 가능한 이유)
- arr.pop() : 배열 끝에서 pop
- arr.shift() : 첫번째 값 pop (queue의 pop)
- arr.unshift(값) : 배열 맨 앞에 값 추가
- arr.concat(arr2) : 배열 합치기
- arr.slice(index1, index2) : slicing 지원
- arr.splice(인덱스, 제거할 갯수, 넣을값(optional)) : 특정 인덱스 (범위)의 값 추출, 값 수정도 가능


### 배열 정렬 sort
배열의 sort 지원한다.

<b>주의 : 그냥 sort는 무조건 문자열로 변환 후 유니코드 기준으로 정렬한다. </b>
*** 반드시 비교 함수를 넘겨야한다. ***
```javascript
const arr1 = [3,1,4,2,5];
arr1.sort();		// [1,2,3,4,5] 마치 정수 정렬은 되는 것 같지만,

const arr2 = [20, 3, 100];
arr2.sort();		// [100, 20, 3]

// 비교 함수 같이 만들기!!
arr2.sort((x,y) => x-y);					// [3,20,100] (오름차순)
arr2.sort(function(a,b) {return b-a})		// 이런 식으로도 비교함수 선언 가능  (내림차순)
```



## 문자열 (String)
문자열 선언은 동일, 내장 함수만 간단하게 정리해보자.
### 내장 함수
- str.length : 문자열 길이
- str.slice(idx1, idx2(optional)) : Python에서 slicing을 [ : ]로만 하던 것과는 달리 slice()를 사용해야함
	- idx2 는 optional. 생략하면 끝까지. 
- str.substring(idx1, idx2(optional)) : 사실상 slice()와 동일한 기능. start와 end value 중 0보다 작은 값을 0으로 처리함.
- str.replace(str2, str3) : returns a new string. 처음으로 등장한 str2만 str3로 변경.
	- 만약 등장하는 모든 str2에 대해 변경 원한다면? /g flag 사용
	~~~ javascript
	let orig = "I love Github. Please come visit Github.";
	let new = orig.replace(/Github/g, "Korea");	// new = "I love Korea. Please come visit Korea."
	~~~
- str.toUpperCase(), str.toLowerCase() : 대소문자 변환
- str.concat() : "+" 연산과 동일한 concatenation 연산
- str.trim() : 양 끝의 공백 제거
- str.padStart(n, str2) : str 처음 ~ n-1 까지 str2로 padding (padding 길이는 무조건 n-1 고정)
	- 숫자 padding도 따라서 문자열로 변환해서 진행 가능
	~~~ javascript
	let num = 9;
	let num_text = num.toString();
	let padded = num_text.padStart(3,"0");	// padded = "009"
	~~~
	- 같은 방식으로 뒤에 padding하는 str.padEnd()도 있다.
- str.split("") : split() method
- str.search(str2) : str에서 str2 첫 인덱스 찾기. 정규 표현식을 사용할 수 있다는 것이 indexOf와의 차이
- str.indexOf(str2, startingposition(optional)) : search()와 같은 기능. starting position을 설정할 수 있다는 점이 다름.
- str.includes(str2) : str2가 존재하면 true, 없으면 false return
- str.startsWith(), str.endsWith() : returns true/false, case sensitive


## Math 객체
Math 객체가 Javascript에는 내장되어있다. (추가 import 필요 X)
- Math.E : exponential
- Math.PI
- Math.sin : sin
- Math.cos : cosine
- Math.tan : tangent
- Math.log : 밑을 자연상수로 하는 로그함수
- Math.exp : 밑을 자연상수로 하는 지수함수
- Math.sqrt : 제곱근
- Math.abs : 절댓값
- Math.ceil : 올림
- Math.floor : 내림
- Math.round : 반올림
- Math.trunc : 소수점 아래 자르기
- Math.max / Math.min : 최대, 최소값 반환
- Math.random()



## 기타
- isNan(string) : 문자열이 숫자인지 확인 (returns true or false)
- num.toString() : 숫자 -> 문자열 변환
- Number(string) : 문자 -> 숫자 변환
- parseInt(string, radix(optional)) : 문자열 -> 정수 변환 (if 정수 불가 returns NaN)



## 2차원 배열
JS에서는 const arr = [][]이나 const arr[3][3]처럼 선언해서 사용할 수 없다..

그렇다면 어떻게 2차원 배열을 선언해주는가?
- 배열에 초기값 할당
~~~ javascript
const arr = [[1,2], [3,4]];
~~~

- 직접 배열에 인자로 push


[웹 추가 ]
