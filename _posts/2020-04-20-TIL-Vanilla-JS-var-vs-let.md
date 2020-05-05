---
title: \[TIL\] Vanilla JS, `var` vs `let`
categories: [TIL]
---

## 자바스크립트의 다양한 활용

- [Socket.IO](https://socket.io/get-started/chat/){: target="\_blank"}: 이벤트 기반의 실시간 양방향 통신 라이브러리
- [ImpactJS](https://impactjs.com/){: target="\_blank"}: Javascript & HTML5 게임 엔진
- [World Draw](https://world-draw.appspot.com/){: target="\_blank"}: 그림을 그리면 어떤 사물인지 알아맞추는 페이지.
- [three.js](https://threejs.org/){: target="\_blank"}: Javascript 3D 라이브러리

## Vanilla Javascript

라이브러리를 사용하지 않는 자바스크립트.

[http://vanilla-js.com/](http://vanilla-js.com/){: target="\_blank"} : 바닐라 자바스크립트 웹사이트. 좀 재밌게 만들었음ㅋ

## `var` vs `let`

| 차이점         | `var`               | `let`                 | 비고                                              |
| -------------- | ------------------- | --------------------- | ------------------------------------------------- |
| 유효범위       | 함수                | {} 블록               | `let`은 전역객체의 속성값을 생성하지 않음.        |
| 비공개 변수    | 클로저 필수         | 생성자로 가능         |                                                   |
| Hoisting       | 적용                | 적용안됨              |                                                   |
| 초기화 전 참조 | `undefined` 값 가짐 | `ReferenceError` 발생 | 변수 선언이 평가되기까지 초기화되지 않았다는 의미 |

[let - JS \| MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let){: target="\_blank"}
