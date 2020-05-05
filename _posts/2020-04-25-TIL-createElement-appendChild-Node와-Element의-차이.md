---
title: \[TIL\] `createElement()`, `appendChild()`, Node와 Element의 차이
categories: [TAG]
---

현재 Momentum Clone의 ToDo List 파트 진행 중

## `createElement()`

```javascript
const tagName = "h2";
let element = document.createElement(tagName);
```

첫 번째 인자 `tagName`에 해당하는 HTML 요소를 만들어줌.

## `appendChild()`

```javascript
var child = parent.appendChild(child);
```

한 노드를 특정 노드의 마지막 자식 노드로 붙임. 만약 이미 문서 내에 존재하는 노드면 이동시킴.

## Node와 Element의 차이

- [Node](https://developer.mozilla.org/ko/docs/Web/API/Node){: target="\_blank"} : DOM 구성의 기본 단위. 여러가지 DOM 타입들이 상속하는 인터페이스.
- [Element](https://developer.mozilla.org/ko/docs/Web/API/Element){: target="\_blank"} : Document 안의 모든 객체가 상속하는 가장 범용적인 기반 클래스.

> ![DOM Types](../assets/img/dom_types.png)
> 출처 : [The Document Object Model](https://web.stanford.edu/class/cs98si/slides/the-document-object-model.html){: target="\_blank"}

**Node는 Element의 상위 타입이다.**
