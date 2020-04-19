---
title: \[TIL\] `outline`, `vh`, 배경에 그래디언트 적용, `z-index`, Github Pages로 호스팅
tags: [TIL]
---

오늘은 카톡 클론 수업 중 Settings, Chat CSS 적용!

## `outline`이 정확히 뭐지

```css
input:focus {
  outline: none;
}
```

카톡 클론 수업 중 위 처럼 입력창이 포커스됐을 때, `outline: none`으로 설정했음. 여기서 `outline`이 뭔지 시각적인 차이는 알겠는데, 개념적으로 모르겠어서 찾아봄.

> Outline = 윤곽, 외곽선, 테두리
> from 네이버 사전

그럼 Border와 무슨 차이가 있을까?

> Outlines never take up space, as they are drawn outside of an element's content.
>
> > 아웃라인은 요소 컨텐츠의 바깥에 그려지지만, 절대 공간을 차지하지 않음.
>
> According to the spec, outlines don't have to be rectangular, although they usually are.
>
> > 스펙에 따르면 아웃라인은 (보통 그렇긴 하지만) 꼭 사각형일 필요가 없음.
>
> From [outline - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/outline){: target="\_blank"}

참고로 Border의 사전적 의미는 `경계`임.

결국 Outline은 테두리 경계 공간을 변화시키지 않고 윤곽선의 모양만 바꾸고 싶을 때 사용하는 속성이다!

## `vh`는 무엇인가

뷰포트 백분율 길이 단위 중 하나.

> 1vh = 뷰포트 초기 컨테이닝 블록의 높이 1%
>
> from [\<length\> - CSS \| MDN](https://developer.mozilla.org/ko/docs/Web/CSS/length){: target="\_blank"}

### [뷰포트(Viewport)](https://developer.mozilla.org/ko/docs/Glossary/Viewport){: target="\_blank"}

컴퓨터 그래픽스 용어. 현재 화면에 보여지고 있는 다각형(보통 직사각형)의 영역. 웹 브라우저에서는 현재 창에서 문서를 볼 수 있는 부분.

### [컨테이닝 블록(Containing Block)](https://developer.mozilla.org/ko/docs/Web/CSS/All_About_The_Containing_Block){: target="\_blank"}

요소를 포함하고 있는 블록을 의미. 요소의 크기와 위치에 영향을 줌. 대부분 가장 가까운 블록 레벨 조상의 컨텐츠 영역.

> 초기 컨테이닝 블록 = 루트 요소(`<html>`)의 컨테이닝 블록 = 뷰포트 또는 (페이지로 나뉘는 매체에선) 페이지 영역의 크기

## 요소 배경으로 그래디언트 넣기

[uiGradients](https://uigradients.com/){: target="\_blank"}: 이쁜 색깔 그래디언트를 찾을 수 있는 웹사이트

```css
element {
  background-image: linear-gradient(to left, #7474bf, #348ac7);
}
```

그래디언트를 배경으로 하고싶을 때는 `background-color`가 아닌 `background-image`로 넣어야함.

## `z-index`

[z-index - CSS \| MDN](https://developer.mozilla.org/ko/docs/Web/CSS/z-index){: target="\_blank"}

```css
element {
  z-index: <number>;
}
```

요소들 사이의 겹치는 순서. 숫자가 높을수록 위로 올라옴. 그런데 이 쌓이는 순서가 생각보다 복잡한 듯. 시간되면 좀 읽어봐야할 듯.

[z-index 이해하기 - CSS \| MDN](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Positioning/Understanding_z_index){: target="\_blank"}

## Github Pages로 호스팅하기

`gh-pages` 브랜치 만들어서 푸시하면 해당 브랜치를 통해 호스팅 가능. 호스팅된 프로젝트 접근 URL은 `https://username.github.io/repository-name`.

## 더 알아봐야할 것들

### `<div>`와 `<span>`에서 `box-shadow`의 동작 차이

카톡 클론 수업 중 `<div>text</div>`와 `<span>text</span>`에서 `box-shadow` 속성이 다르게 동작하는 이슈 발생. 그림자가 `div`에서는 안보이고 `span`에서는 보였음. 정확한 이유는 아직 모르겠음...
