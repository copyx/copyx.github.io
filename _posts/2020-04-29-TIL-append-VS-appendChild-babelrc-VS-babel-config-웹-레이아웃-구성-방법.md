---
title: \[TIL\] `append` VS `appendChild`, .babelrc.json VS babel.config.json, 웹 레이아웃 구성 방법
categories: [TIL]
---

## `append` VS `appendChild`

||`ParentNode.append()`|`Node.appendChild()`|
|추가 가능 객체|Node & DOMString|Only Node|
|반환값|없음|추가한 노드 객체|
|여러 객체 추가|가능|불가능|

### [DOM String](https://developer.mozilla.org/ko/docs/Web/API/DOMString){: target="\_blank"}

UTF-16 문자열. Javascript의 `String`도 UTF-16 문자열임.

### 참고

- [ParentNode.append() \| MDN](https://developer.mozilla.org/ko/docs/Web/API/ParentNode/append){: target="\_blank"}
- [Node.appendChild() \| MDN](https://developer.mozilla.org/ko/docs/Web/API/Node/appendChild){: target="\_blank"}

## .babelrc.json VS babel.config.json

> - Monorepo를 사용하는가?
> - node_modules를 컴파일 하고싶은가?
>
> ```text
> 당신을 위해 babel.config.json이 있다!
> ```
>
> - 당신 프로젝트의 한 부분에만 적용할 설정이 있는가?
>
> ```text
> 당신을 위해 .babelrc.json이 있다!
> ```
>
> from [Configure Babel \| Babel](https://babeljs.io/docs/en/configuration){: target="\_blank"}

## 웹 레이아웃 구성 방법

- `<table>` 태그
- `<iframe>` 태그
- CSS `float` property
- CSS Flexbox
- CSS Grid Layout

일단 내가 카톡 클론 수업에서 배운 것은 Flexbox임(~~`table`과 `iframe`은 옛날에 배움~~). CSS Grid Layout도 공부해봐야겠음.

### 참조

- [웹 레이아웃 기술 발전사 \| CSS Grid Layout Guidebook](https://uid.gitbook.io/css-grid/web-layout-history/){: target="\_blank"}
