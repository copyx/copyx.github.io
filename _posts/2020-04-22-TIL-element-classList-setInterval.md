---
title: \[TIL\] `element.classList`, `setInterval()`
categories: [TIL]
---

## `element.classList`

`element.className`으로 요소의 클래스 속성값을 모두 가져올 수 있음. 그런데 일부만 수정하기가 난감함. 그럴 때 필요한 것이 이 `element.classList`

```javascript
const hasClass = title.classList.contains(CLICKED_CLASS);

if (hasClass) {
  title.classList.remove(CLICKED_CLASS);
} else {
  title.classList.add(CLICKED_CLASS);
}
```

위 예시처럼 특정 클래스의 존재 여부는 물론, 추가/제거가 가능하다.

그리고 `element.classList.toggle(className)`을 이용하면 위 코드와 같은 효과를 낼 수 있음.

## `setInterval()`

```javascript
setInterval(fn, milliseconds, ...arguments);
```

주어진 함수를 일정 간격으로 실행시키는 함수
