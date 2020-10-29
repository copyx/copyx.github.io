---
title: "[TIL] CSS Grid가 생긴 이유, fit-content, grid-template-areas"
date: 2020-10-28 13:58:51
tags:
  - css
  - nodejs
  - passportjs
categories:
  - TIL
---

## 왜 CSS에 `grid`가 생겼을까?

![Flexbox : 요소가 4개일 때](https://i.imgur.com/CzRAvMG.png)

![Flexbox : 요소가 5개일 때](https://i.imgur.com/0gg4U6W.png)

`flexbox`로 그리드를 만들기 힘들다! `flexbox`로 화면 크기에 맞춰 균일한 간격으로 위치시킬 수는 있지만, 그리드 방식으로 줄의 나머지 공간을 기존 요소들과 같은 간격으로 남기면서 위치시킬 수는 없음.

## 자식 크기에 맞는 `width` 값을 설정하고 싶다면?

`max-width: fit-content;` 혹은 `max-width: max-content;`. `fit-content`가 `max-content`와 동일함.

## grid-template-areas

코드로 보이는 그리드 설정 방법

```css
.grid {
  grid-template-areas:
    "header header header header"
    "content content content nav"
    "content content content nav"
    "footer footer . footer" // .을 넣으면 그 공간은 비어있음.
;
}

.header {
  grid-area: header;
}
```
