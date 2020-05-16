---
title: TIL - CSS `position`, `flex`, `font-weight`
categories: [TIL]
---

카카오 클론 2주 챌린지 3일차 과제를 하며 배운 복습하게 됐거나 새로 알게된 내용들.

## CSS `position`

대충 `position` 속성에 어떤 값들을 넣을 수 있고, 각 값들이 어떤 의미인지 정도만 희미하게 알고 있었음. 그런데 막상 사용해보려니 헷갈려서 다시 알아보게됨.

- 위치 비지정 요소 : `static`
- 위치 지정 요소
  - 상대 위치 지정 요소 : `relative`
  - 절대 위치 지정 요소 : `absolute`, `fixed`
  - 끈끈한 위치 지정 요소 : `sticky`

| 값         | 문서 흐름   | 레이아웃 공간 배정 | `top`, `right`, `bottom`, `left` 오프셋 적용 기준     | `z-index`                             |
| :--------- | :---------- | :----------------- | :---------------------------------------------------- | :------------------------------------ |
| `static`   | 따라서 배치 | O                  | X                                                     | X                                     |
| `relative` | 따라서 배치 | O                  | **자기 자신**                                         | `auto`가 아니면 새로운 쌓임 맥락 생성 |
| `absolute` | 제거됨      | X                  | 가까운 위치 지정 조상 요소. 없으면 초기 컨테이닝 블록 | `auto`가 아니면 새로운 쌓임 맥락 생성 |
| `fixed`    | 제거됨      | X                  | 뷰포트의 초기 컨테이닝 블록 기준 위치에 배정          | 항상 새로운 쌓임 맥락 생성            |
| `sticky`   | 따라서 배치 | O                  | 가장 가까운 스크롤되는 조상과 컨테이닝 블록           | 항상 새로운 쌓임 맥락 생성            |

참고: [position - CSS \| MDN](https://developer.mozilla.org/ko/docs/Web/CSS/position){: target="\_blank"}

## CSS `flex`

`display: flex`를 설정해서 자식들의 위치를 정렬하는 법은 알았지만, 자식에 `flex: ?`를 설정해서 크기를 설정하는 방법은 기억이 나지 않았음.

```css
h1 {
  flex: <flex-grow> <flex-shrink> <flex-basis>;
}
```

`flex` 속성을 통해 `flex-grow`, `flex-basis`, `flex-shrink` 설정 가능.

`flex-grow`|`<number>`, `Global values`|flex-container 요소 내부에서 할당 가능한 공간의 비율
`flex-basis`|`<width>`, `content`|flex-item의 메인축 방향 초기 크기 지정. (`auto`가 아닌 `flex-basis`는 `width`또는 `height` 보다 우선됨.)
`flex-shrink`|`<number>`, `Global values`|flex-item의 크기가 flex-container 보다 클 때 `flex-shrink` 사용해 내부 요소의 크기가 축소됨. 값의 크기는 축소되는 비율.

### Global values

```css
h1 {
  flex: inherit;
  flex: initial;
  flex: unset;
}
```

### Content values

컨텐츠 크기에 따라 자동으로 크기가 변함.

```css
h1 {
  flex-basis: fill;
  flex-basis: max-content;
  flex-basis: min-content;
  flex-basis: fit-content;
}
```

참고: [flex - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex){: target="\_blank"}

## CSS `font-weight`

이건 자꾸 왜 `font-style`이랑 헷갈리지... 😓

글씨 굵기를 설정할 수 있는 속성.

```css
h1 {
  font-weight: normal | bold | bolder | lighter | <number>;
}
```
