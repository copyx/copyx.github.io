---
title: \[TIL\] Google Fonts, box-sizing
tags: [TIL]
---

카톡 클론 수업에서 드디어 CSS 실습 시작!

## Google Fonts

> [https://fonts.google.com/](https://fonts.google.com/){: target="\_blank"}

각종 폰트들을 무료로 사용할 수 있음. 폰트 파일 다운로드, `<link>` 태그나 CSS의 `@import`를 이용해 가져오는 것도 가능. 굵기, 기울기 여부도 선택 가능.

**단, 너무 많은 폰트를 가져오면 느려짐!**

## `font-family` 설정

폰트 하나가 아닌 여러개로 설정이 가능하며, 앞의 폰트가 없으면 그 다음 폰트를 사용하는 방식.

## `color: inherit`

부모 요소의 색을 가져온다.

## `box-sizing: border-box`

네비게이션 바에 `flex`를 설정하니까 아이콘 하나가 사라짐. 그러자 니콜라스님이 "어? ㅆ 맨 끝에 아이콘이 하나 어디갔지? 뭐 하나만 해볼게." 하면서 `box-sizing: border-box`를 설정함. 그러자 사라졌던 아이콘이 다시 나타남.

```css
* {
  box-sizing: content-box | border-box | initial | inherit;
}

/*
 * content-box: 컨텐츠 영역 기준(패딩조차 미포함)
 * border-box: 박스 테두리 기준(패딩, 테두리 포함)
 */
```

`box-sizing`은 박스의 크기 기준을 정하는 속성. 기본값은 `content-box`.

내 생각에 아이콘들의 부모 요소에 `width: 100%`를 주면서 부모의 크기가 먼저 정해졌고, 그 자식요소에 `display: flex`를 설정하면서 각각의 아이콘 박스들에 분배된 크기는 고정되었으나, 그 크기의 기준이 컨텐츠로 설정되어 있어서 화면 밖으로 나간 듯.

그러나 니콜라스님의 설명은 좀 달랐다! 다음은 니콜라스님의 설명.

> `content-box`가 설정된 상태에서 `padding`이 설정되면 컨텐츠의 크기는 유지되면서 padding만큼 밀려남. 우리는 부모 요소에게 가로길이를 100%로 설정하고, 패딩도 함께 설정함. 그래서 패딩만큼 밀려났고, 그 때문에 맨 마지막 아이콘이 안보였던 것.

내 생각 중 `display: flex`에 대한 부분은 무관했음. 가로길이와 패딩이 같은 요소에 설정됐다는 것을 인지하지 못하고 생각해서 저렇게 생각한 듯.
