# JS Study

Javascript 공부

README에 간단하게 정리

문제도 하나씩 풀어보는게 목표

### Basics
- C/C++과 유사한 면이 많은 것 같다.
- ';' 로 줄 마침
- 조건문에는 (괄호)를 달아줘야함.

### 출력
<br>console.log(출력할 것)</br>

### 변수/상수 선언
C/C++ 처럼 선언과 초기화를 거쳐서 진행된다.
- let, var : mutable 변수 선언 (재할당 가능!!!)
	- var 변수이름 : 변수의 값을 선언하지는 않아도 undefined 할당됨.
		- var : 함수 레벨 scope. (전역 스코프를 공유한다. -> 위험성) 
	- let : 변수 중복 선언은 불가능.
- const : immutable (값의 재할당 불가!!!)
	- const 변수이름 단독 불가 (반드시 값 초기화해야함)
	- '객체의 재할당'은 가능하다.

let과 const 로 선언한 변수들은 block-level scope를 따른다. (narrower)
-> let, const 를 사용하자.

