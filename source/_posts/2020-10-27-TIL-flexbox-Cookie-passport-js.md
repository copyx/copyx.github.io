---
title: "[TIL] flexbox, Cookie, passport.js"
date: 2020-10-27 11:16:58
tags:
  - css
  - http
  - nodejs
  - passportjs
categories:
  - TIL
---

## 왜 `flexbox`에서 `justify-self`는 동작을 안하지?

찾아보니까 `justify-self`는 레이아웃 모드에 따라 다르게 동작함.

- `block-level`: containing block에 맞게 동작
- `absolutely-positioned`: offset 값으로 설명되는 containing block
- `table`: 무시
- `flexbox`: 무시
- `grid`: 그리드 범위 내

## `align-self`

요소 자신의 cross-axis 위치를 설정

## `order`

요소 자신의 순서를 변경. 기본 값은 0

## `flex-wrap`

`flexbox`에서 한 줄의 요소 수가 늘어나서 공간이 모자르면 기본적으로 요소의 크기를 변경함. 무조건 한 줄 안에 들어가도록 만듦. 이 때 요소의 크기를 보존하면서 줄 바꿈이 되도록 하는 속성이 `flex-wrap`.

## `align-content`

`align-items`가 각 줄 별 요소들의 `cross-axis` 위치를 정하는 거라면, `align-content`는 여러 줄의 요소들과 빈 공간을 한꺼번에 제어하는 속성. `justify-content`의 `space-around` 같은 속성도 적용 가능.

## `flex-shirink`

main-axis 공간이 모자라서 요소들이 찌그러질 때 찌그러지는 비율을 설정할 수 있음. 기본값이 1이며 2로 설정하면 다른 요소들보다 2배 더 많이 찌그러짐.

## `flex-grow`

main-axis 공간이 남을 때 flex-grow가 설정된 요소가 그 공간을 가져가서 커짐. 여러 요소들에 설정되어 있다면 그 비율대로 가져감.

## `flex-basis`

main-axis 방향에서 요소들의 기본 크기를 설정해주는 속성.

## `flex-flow`

flex-direction과 flex-wrap을 함께 설정할 수 있는 속성.

```css
.something {
  display: flex;
  flex-flow: row wrap;
}
```

## `resize`

요소의 크기 조정 가능 여부를 설정하는 속성. (예: `textarea`)
인라인 요소나 `overflow` 속성이 `visible`로 설정된 블록 요소는 적용 불가.

## Cookie란?

> 어떠한 웹사이트를 방문할 경우 그 사이트가 사용하고 있는 서버를 통해 인터넷 사용자의 컴퓨터에 설치되는 **작은 기록 정보 파일**. 같은 웹사이트를 방문할 때마다 읽히고 수시로 새로운 정보로 바뀐다.

요청과 함께 백엔드로 전송될 정보. 작아야하고, 민감한 정보를 담으면 안됨.

## `passport.js`?

> **Simple, unobtrusive authentication for Node.js**

Node.js를 위한 인증 미들웨어. 다양한 Strategy를 통해 로컬 인증은 물론 Facebook, Github 등을 지원함.

### Strategy?

각각의 인증 대상(Local, Facebook 등)별로 인증 매커니즘을 구현해 패키징한 모듈. 이를 통해 인증에 필요한 로직을 직접 구현할 필요 없이 Strategy만 선택해 사용하면 됨.

### Session

인증이 완료되면 브라우저의 쿠키셋을 이용해 세션을 유지함.

#### `serializeUser()`

쿠키에 저장할 정보 설정. 어떤 정보를 쿠키로 줄 수 있느냐? ⇒ 브라우저가 사용자에 대해 어떤 정보를 가질 수 있나?

#### `deserializeUser()`

쿠키 정보를 가져와 유저를 검색 => 어떻게 유저를 찾을 것인가?

#### 서버가 꺼져도 세션은 유지되어야 한다!

그러려면 DB에 저장해야지! `connect-mongo`를 이용해 MongoDB를 이용한 Session Store를 만들고 관리한다!

## 참고

- [justify-self - CSS | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self)
- [resize - CSS | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/resize)
- [HTTP 쿠키 - 위키백과](https://ko.wikipedia.org/wiki/HTTP_%EC%BF%A0%ED%82%A4)
- [Documentation | Passport.js](http://www.passportjs.org/docs/)
