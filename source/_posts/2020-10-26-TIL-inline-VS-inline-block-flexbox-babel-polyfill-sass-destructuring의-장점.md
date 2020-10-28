---
title: >-
  [TIL] inline VS inline-block, flexbox, babel-polyfill, sass, destructuring의
  장점
date: 2020-10-26 12:06:02
tags:
  - css
  - babel
  - sass
  - javascript
categories:
  - TIL
---

> **어떤 기술이 어떤 문제를 해결했나? 이게 그 기술을 배워야 할 이유를 말한다.**

## CSS `inline`과 `inline-block`의 차이는?

사용할 수 있는 property가 달라진다.

## `flexbox`는 왜 나왔지?

1. `inline-block`으로 요소들을 한 줄에 놓았는데, 요소들 사이에 알 수 없는 간격이 생겼다.
2. 여러 요소들을 한 줄 안에서 창 크기에 맞춰 위치 시키고 싶은데, 간격을 조정하면 기기 화면 크기에 맞춰서 여러 버전을 만들어야 한다.

## About `flexbox`

부모 컨테이너에 `display: flex`를 설정.

### `main-axis`, `cross-axis` 개념

기본은 수평이 `main-axis`. `main-axis`와 수직으로 교차된 축이 `cross-axis`.
`flex-direction` 속성을 `column`으로 설정하면 `main-axis`가 수직이 됨.
요소를 배치하는 방향은 **좌->우, 상->하**가 기본. 이건 축 방향이 바뀌어도 마찬가지이며, `-reverse` 어미가 들어간 방향만 뒤집어짐.

`justify-content`는 `main-axis`, `align-items`는 `cross-axis`를 축으로 이동시킴.
`space-between`, `space-around`, `space-evenly`는 `justify-content` 속성에만 사용 가능.

## `babel-polyfill`

브라우저에 부족한 코드를 채워주는 모듈. ES2015+ 환경을 모방할 수 있게 도와준다. `promise`나 `async/await`를 쓸 수 있게 만들어줌.

## Sass

Sass에서 파일명 앞에 '\_'(underscore)를 붙이면 partial 파일로 인식함. 이 파일은 CSS 파일이 생성되지 않음. `@use` 키워드로 사용.

### 그런데 왜 수업에서는 `@import`로 사용하지?

흠... 강사님도 그냥 무심코 `@import`를 사용하신 것 같다.

### 왜 `@use`를 권장하지?

> #### What’s Wrong With @import?
>
> The `@import` rule has a number of serious issues:
>
> - `@import` makes all variables, mixins, and functions globally accessible. This makes it very difficult for people (or > tools) to tell where anything is defined.
> - Because everything’s global, libraries must prefix to all their members to avoid naming collisions.
> - `@extend` rules are also global, which makes it difficult to predict which style rules will be extended.
> - Each stylesheet is executed and its CSS emitted every time it’s `@import`ed, which increases compilation time and > produces bloated output.
> - There was no way to define private members or placeholder selectors that were inaccessible to downstream stylesheets.
>
> The new module system and the @use rule address all these problems.

`@import`는 가져온 모든 변수, 믹싱, 함수들을 전역에 둬서 충돌을 일으킬 수 있고, 라이브러리에 프리픽스를 사용하게 만들며, `@import`를 사용하는 모든 부분에 스타일시트를 실행시켜 컴파일 시간을 늘리고 부풀려진 결과물을 내놓고, private members를 선언하지 못하며 placeholder 선택자를 사용할 수 없음.

Sass팀은 몇 년 내로 `@import`를 Sass에서 없앨 계획.

## 부모참조선택자 `&`

Sass에서 사용하는 특수선택자. 이전까지 **중첩된 모든 상위 부모 선택자**를 나타냄.

## Destructuring의 장점은?

원래라면 가져오고싶은 값 별로 한 줄 한 줄 변수에 할당하며 가져와야하지만, destructuring을 이용해 한 줄로 가져오는 것이 가능.

## 참고

- [Sass: Sass Basic - Partials](https://sass-lang.com/guide#topic-4)
- [Sass: @use](https://sass-lang.com/documentation/at-rules/use)
- [[CSS] SCSS에 새로 추가된 Module System (@use, @forward) | bono's blog](https://blueshw.github.io/2019/10/27/scss-module-system/)
- [Sass: Parent Selector](https://sass-lang.com/documentation/style-rules/parent-selector)
