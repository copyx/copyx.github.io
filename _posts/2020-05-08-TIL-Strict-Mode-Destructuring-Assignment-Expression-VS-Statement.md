---
title: \[TIL\] Strict Mode, Destructuring Assignment, Expression VS Statement
categories: [TIL]
---

## 엄격 모드(Strict Mode)

```javascript
// 파일 최상단 or 함수 최상단
"strict mode";
```

ECMAScript 5에서 소개됨. 기존에 암묵적으로 용인되고있던 에러나 실수에 엄격해지는 모드.

> 1. 기존에는 조용히 무시되던 에러들을 throwing합니다.
> 2. JavaScript 엔진의 최적화 작업을 어렵게 만드는 실수들을 바로잡습니다. 가끔씩 엄격 모드의 코드는 비-엄격 모드의 동일한 코드보다 더 빨리 작동하도록 만들어집니다.
> 3. 엄격 모드는 ECMAScript의 차기 버전들에서 정의 될 문법을 금지합니다.
>
> from [Strict mode \| MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Strict_mode){: target="\_blank"}}

Javascript 모듈의 전체 컨텐츠는 자동적으로 엄격 모드가 적용됨.

## 구조 분해 할당(Destructuring Assignment)

배열이나 객체를 해체하여 내뷰 요소들의 값을 개별 변수에 담을 수 있게 하는 자바스크립트 표현식

### 배열

```javascript
const x = [1, 2, 3, 4, 5];
const [y, z] = x; // 1, 2 : 기본 할당
const a, b, c;
[a, b, c] = x; // 1, 2, 3 ; 선언 분리 할당
[, , , a, b] = x; // 4, 5 : 반환값 무시
[a = 0, b = -1, c = -2] = [1, 2] // 1, 2, -2 : 기본값 설정
[a, ...b] = x; // 1, [2, 3, 4, 5] : 나머지 할당
```

- 기본값은 값이 없어서 `undefined`가 될 경우 사용됨.

### 객체

```javascript
const o = {p: 2, q: true, r: "text"};
const {p, q} = o; // 2, true : 기본 할당
const a, b;
({a, b} = {a: 4, b: "text"}); //선언 분리 할당
const {p: f, q: g} = o; // f = 2, g = true : 새로운 변수 이름으로 할당
const {p, q, r = 5} = o; // 2, true, 5 : 기본값
const {p: pp, q: qq = 6} = {p: 1}; // pp = 1, qq = 6 : 새 변수 이름 + 기본값
const {p, ...rest} = o // p = 2, rest = {q: true, r: "text"} : 나머지 할당
({'fizz-buzz': fizzBuzz} = {'fizz-buzz': 1}); // 식별자 명으로 부적합한 속성명
```

- 기본값은 값이 없어서 `undefined`가 될 경우 사용됨.
- 속성 이름이 변수명으로 유효하지 않을 경우, 대체할 유효한 변수명으로 대체해야함.

#### 함수 매개변수의 기본 값 설정

```javascript
function fn1({p = 1, q = [2, 3], r = {s: 4}} = {}) { ... }
function fn2({p = 1, q = [2, 3], r = {s: 4}}) { ... }
fn1(); // 정상 실행
fn2(); // 타입 에러 발생 : Uncaught TypeError: Cannot read property 'p' of undefined
```

`fn1`의 함수 선언 파라미터를 보면 죄변에 구조분해, 우변에 빈 객체를 할당함. 이렇게 빈 객체를 할당하면 매개변수 없이 함수 호출이 가능하지만, 할당하지 않으면 에러 발생. 적어도 하나의 인자(꼭 객체일 필요는 없음)가 제공되어야함.

## Expression과 Statement의 차이

개인적으로 둘 의 차이는 `if`문과 삼항 연산자를 비교할 때 잘 드러난다고 생각함.

### Expression

단일값으로 환원될 수 있는 코드(변수명, 연산자, 함수 호출 등)로 이뤄진 식. 이 단일값을 도출하는 행위를 계산(Evaluate)이라고 함. 다른 곳에 영향을 주지 않고 단일값을 반환함. Expression 자체로는 실행이 되지 않고, 이를 Statement의 일부로 만들어야 실행이 가능함.

### Statement

실행가능한(Executable) 최소한의 독립적인 코드 조각. Statement는 Expression과 다르게 단일값으로 환원되지 않고, 다른 곳에 영향을 줌.

"함수 호출의 경우 반환값이 있으면 단일 값으로 환원되지 않느냐?" 라는 말이 있을 수 있다. 이는 함수 호출이 Expression 관점에서는 단일 값으로 환원됐다고 볼 수 있으나, 결과적으로 반환된 값으로 구성된 Statement를 생각해보면 Statement는 단일 값으로 환원도 반환도 없다는 것을 알 수 있다.
