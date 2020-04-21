---
title: \[TIL\] script 태그의 위치, console.dir
tags: [TIL]
---

## `<script>`를 `<body>`의 마지막에 써야하는 이유

### How to work the browser

1. HTML Read & Parse
2. Generate DOM Tree
3. Generate Render Tree(DOM Tree + CSSOM Tree)
4. Display

HTML을 읽으며 파싱해나가는 중 스크립트 태그를 만나면 파싱 중단. 스크립트 로드 & 실행이 끝나고 나서 HTML 파싱이 재개됨.

### Problems

- 스크립트를 처리하는 시간만큼 Display가 지연됨.
- 자바스크립트가 아직 생성되지 않은 DOM의 조작을 시도할 수 있음.

### Solutions

- `<script>`를 `<body>`의 맨 마지막에 사용.
- `<script>`에 `defer` 속성을 사용.

`defer`를 사용하면 스크립트 로드는 스크립트 태그를 파싱한 시점에, 스크립트 실행은 HTML 파싱이 끝난 이후에 진행됨.

### References

- [\<script\> 태그는 어디에 위치해야 할까요? \| takeknowledge](https://velog.io/@takeknowledge/script-태그는-어디에-위치해야-할까요){: target="\_blank"}

## DOM(Document Object Model)

## `console.dir`

자바스크립트 객체의 속성들을 보기쉽게 출력해주는 콘솔 객체의 메소드.

`dir`과 `count`, `time`, `timeEnd` 메서드들이 많이 사용됨.
