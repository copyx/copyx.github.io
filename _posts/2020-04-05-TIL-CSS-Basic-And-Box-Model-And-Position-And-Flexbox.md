---
title: \[TIL\] CSS 기초 & Box Model & Position & Flexbox
tags: [CSS]
categories: [TIL]
---

## CSS(Cascading Style Sheets)란

각 요소들이 어떻게 생겨야하는지(색깔, 모양, 크기, 위치 등) 브라우저에게 알려주는 역할.

HTML = 마킹 | CSS = 디자인

### CSS 작성법

```css
selector {
    property: value;
}

/* 예시 */
h1 {
    background-color: #112233;
}
```

#### 선택자(Selector)

Tag | `tag-name {...}`
Class | `.class-name {...}`
ID | `#id {...}`

**스타일을 적용할 대상을 지정하는 요소.** 주로 위 세 가지를 이용함. 여러 선택자를 복합해서 사용할 수도 있으며, 이 외에도 다양한 선택자들이 있음.

[CSS Selectors Reference - W3Schools](https://www.w3schools.com/cssref/css_selectors.asp){: target="_blank"}

### CSS 적용 방법

#### HTML 파일 내 작성

```html
<html>
    <head>
        ...
        <style>
            .box {
                background-color: aqua;
            }
        </style>
    </head>
    <body></body>
</html>
```

`<head>` 태그 안에 `<style>` 태그로 CSS 선언 가능. 해당 페이지에 적용됨. 다만, **HTML 문서마다 모두 따로 관리해야하는 불편함이 있음.**

#### HTML 파일 밖에 작성(feat styles.css)

```html
<head>
    <link href="styles.css" rel="stylesheet">
</head>
```

`css` 확장자로 파일을 만들고 그 안에 CSS 선언. `<head>`태그 안에서 `<link>` 태그로 연결 가능.
**파일을 분리해서 관리하기 때문에 관리가 효율적이고 재사용이 쉬움.**

### Box Model

요소를 만들면 사각형 Box 모양으로 공간을 차지하게됨.

![Box Model](/assets/img/box-model.png){: width="70%"}

Border | 테두리
Padding | 테두리 안쪽 간격
Margin | 테두리 바깥쪽 간격

#### Padding, Margin 설정 방법

```css
.box{
    /* 방향별로 각각 적용 */
    padding-top: 50px;
    padding-left: 50px;
    margin-top: 50px;
    margin-left: 50px;
    /* 모든 방향 한꺼번에 적용 */
    padding: 50px;
    /* 한 프로퍼티에서 방향별로 각각 적용. 상하좌우 순서. */
    padding: 20px 0px 50px 30px;
    margin: 50px 20px 30px 40px;
}
```

#### Border 설정 방법

```css
.inside-box{
    /* 보더 속성별로 설정 */
    border-width: 5px;
    border-color: red;
    border-style: dashed;
    /* 한 프로퍼티에서 한 꺼번에 설정 */
    border: 5px dashed red;
}
```

### Display Property

```css
.class{
    display: block;
}
```

Value | Description
:---|:---
`block` | 요소의 옆에 아무 것도 허용하지 않음. 요소의 크기와 상관없음. 디폴트 설정. 폭, 높이가 존재함.
`inline-block` | 요소들을 같은 라인에 둘 수 있음. 폭, 높이가 존재함.
`inline` | 블록이나 박스가 아닌 텍스트처럼 적용이됨. 요소의 컨텐츠 크기만큼만 적용됨. 블록처럼 따로 크기를 설정할 수 없음.

### Position Property

```css
#id{
    position: fixed;
}
```

요소를 어떻게 위치시킬 것인지 정의. 좌표는 `top`, `bottom`, `left`, `right` 속성들과 함께 사용.

Value | Description
:---|:---
`static` | 기본적인 포지션 말 그대로 정적인 포지션으로 페이지 내 정해진 위치에 고정. 스크롤하면 스크롤하는대로 올라감.
`fixed` | 페이지가 아닌 스크린에 고정되는 포지션. 스크롤해도 화면의 해당 위치에 고정되서 따라옴.
`relative` | Absolute 포지션의 기준이 되는 포지션. 단, Absolute 포지션이 설정된 태그의 부모이거나 조상이어야만 기준으로 역할함.
`absolute` | Relative 포지션을 기준으로 위치하는 포지션. 부모나 조상 중 Relative 포지션이 없으면 body 태그를 기준으로 위치함.

### Flexbox

인라인블록을 이용하던 과거에는 문제가 많았음. 공간에 맞춰 마진을 하나하나 조정해야했고, 화면 크기가 변하는 것에 모두 수동으로 대응해야했음. 자동 조정되는 그리드가 없었음. 이를 해결해주는 것이 Flex!

플렉스가 설정된 요소의 자식 요소들이나 컨텐츠의 간격, 방향, 정렬 등의 일괄 적용이 가능.

```css
.father{
    display: flex;
}
```

Flex는 **진행축(main axis)과 교차축(cross axis) 개념**이 있음. 진행축은 아이템들이 배치되는 방향, 교차축은 진행축과 90도 교차하는 방향을 축을 이야기함. 단순히 X축, Y축으로 이야기하지 않는 이유는 축의 방향도 바꿀 수 있기 때문임.

[Flexbox 공부용 코드게임 - 이거 효과 좋음!](http://flexboxfroggy.com/){: target="\_blank"}

Property | Description
:---|:---
`justify-content` | 진행축의 배치 방법을 결정하는 프로퍼티.
`align-items` | 교차축의 배치 방법을 결정하는 프로퍼티.
`flex-direction` | 플렉스의 방향을 결정하는 프로퍼티
`flex-wrap` | 아이템의 줄바꿈 여부와 방향을 설정하는 프로퍼티
`flex-flow` | `flex-direction`과 `flex-wrap`을 동시에 설정할 수 있는 프로퍼티
`align-content` | 플렉스 아이템들이 여러 줄일 때 줄간의 간격이나 정렬을 결정하는 프로퍼티
`align-self` | 여러 아이템 중 원하는 단일 플렉스 아이템에 교차축 배치 방법을 설정하는 프로퍼티
`order` | 아이템의 순서를 설정하는 프로퍼티. 기본 0. 양수, 음수 모두 설정 가능.
