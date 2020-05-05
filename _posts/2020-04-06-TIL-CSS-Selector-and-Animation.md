---
title: \[TIL\] CSS 선택자 & 애니메이션
tags: [CSS]
categories: [TIL]
---

## 선택자와 의사 선택자(Selectors and Psuedo Selectors)

### 속성 선택자(Attribute Selector)

`a[attribute]` | 속성이 있으면 모두 선택
`a[attribute="value"]` | 속성값이 문자열이면 선택
`a[attribute~="value"]` | 속성값이 문자열을 포함하면 선택(스페이스로 구분된 단어 기준)
`a[attribute|="value"]` | 속성값이 문자열로 시작하면 선택(단어 전체이거나 하이픈(-)으로 구분)
`a[attribute^="value"]` | 속성값이 문자열로 시작하면 선택
`a[attribute$="value"]` | 속성값이 문자열로 끝나면 선택
`a[attribute*="value"]` | 속성값이 문자열을 포함하면 선택

HTML 요소의 속성을 이용해 선택.

### 결합자(Combinators)

선택자 간의 관계를 설명하는 것

#### 자손 결합자(Descendant Combinator)

```css
div p {
  background-color: green;
}
```

명시된 요소의 자손인 모든 요소를 선택.

#### 자식 결합자(Child Combinator)

```css
div > p {
  background-color: green;
}
```

명시된 요소의 직계 자식인 모든 요소를 선택.

#### 인접 형제 결합자(Adjacent Sibling Combinator)

```css
div + p {
  background-color: green;
}
```

명시된 요소와 같은 부모를 갖고, 바로 다음에 따라오는 요소를 선택.

#### 일반 형제 결합자(General Sibling Combinator)

```css
div ~ p {
  background-color: green;
}
```

명시된 요소와 같은 부모를 갖는 요소를 선택

### 의사 클래스(Pseudo Classes)

요소의 특별한 상태일 때 선택하는데 사용

> 예시)
>
> - `:hover` : 요소에 마우스 오버된 상태
> - `:last-child` : 자식 요소들 중 마지막일 때
> - `:focus` : 현재 요소에 포커스가 잡혔을 때 등

### 의사 요소(Pseudo Elements)

요소의 특정한 일부분에 스타일을 적용할 때 사용

> 예시)
>
> `::first-letter` : 요소의 첫 글자, 첫 줄
> `::after`, `::before` : 요소의 컨텐츠 전, 후 등

## Transitions

```css
.box {
  transition: target duration timing-function delay;
}
```

요소의 상태 변화 시 두 상태간의 전환을 정의하는 것.

[transition property - MDN](https://developer.mozilla.org/ko/docs/Web/CSS/transition){: target="\_blank"}

## Transformations

```css
.box {
  transform: transform-functions;
}
```

요소 모양이나 크기, 방향 등 좌표공간을 변환하는 효과.

[transform property - MDN](https://developer.mozilla.org/ko/docs/Web/CSS/transform){: target="\_blank"}

## Animations

```css
.box {
  animation: animation-name 1.5 infinite ease-in-out;
}

@keyframes animation-name {
  /* from {
        transform: none;
    }
    to {
        transform: rotate(1turn) scale(.5, .5);
    } */
  0% {
    transform: none;
  }
  50% {
    transform: rotate(1turn) scale(0.5, 0.5);
    background-color: royalblue;
  }
  100% {
    transform: none;
  }
}
```

`@keyframes`를 이용해 애니메이션을 정의해놓고 이를 적용할 수 있음. 내부에는 애니메이션의 시작과 끝이나 진행도에 따른 요소의 스타일 적용이나 전환이 가능.

[animation property - MDN](https://developer.mozilla.org/ko/docs/Web/CSS/animation){: target="\_blank"}

## Media Queries

```css
@media screen and (min-width: 320px) and (max-width: 640px) {
  body {
    background-color: slateblue;
  }
}
```

다양한 기기의 환경에 맞춰 보여줄 수 있도록 스크린 크기에 따라 다른 스타일을 적용시킬 수 있도록 도와줌.

- [Media Queries - MDN](https://developer.mozilla.org/ko/docs/Web/CSS/Media_Queries){: target="\_blank"}
- [@media - MDN](https://developer.mozilla.org/ko/docs/Web/CSS/@media){: target="\_blank"}
