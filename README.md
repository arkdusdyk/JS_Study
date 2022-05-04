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
- [Math 객체](#math-객체)
- [기타](#기타)
  
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
- ===, !== : type 비교까지.


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

# 추가 예정 (배열 내장 함수 + 문자열 정리 필요) + 2차원 배열 활용.
