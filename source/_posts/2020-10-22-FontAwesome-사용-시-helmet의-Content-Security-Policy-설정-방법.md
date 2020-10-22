---
title: FontAwesome 사용 시 helmet의 Content Security Policy 설정 방법
tags:
  - fontawesome
  - helmet
  - http
  - security
categories:
  - error
date: 2020-10-22 20:00:03
---

Express.js를 사용해 웹사이트를 만들던 중 Font Awesome 아이콘이 로딩되지 않는 오류가 발생했다. 브라우저 콘솔에서 확인한 오류 메시지는 다음과 같았다.

> Refused to load the script 'https://kit.fontawesome.com/xxxxxxxxxx.js' because it violates the following Content Security Policy directive: "script-src 'self'". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback.

## [Content Security Policy](https://developers.google.com/web/fundamentals/security/csp?hl=ko)

`Content Security Policy`는 [Cross Site Scripting](https://ko.wikipedia.org/wiki/%EC%82%AC%EC%9D%B4%ED%8A%B8_%EA%B0%84_%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8C%85) 같은 공격을 방어하기 위한 정책이다. 핵심은 공격자가 사이트에 악성코드를 심지 못하도록 **신뢰할 수 있는 컨텐츠 소스 허용목록**을 `Content Security Policy` HTTP 헤더에 명시해 브라우저에게 알려주는 것이다.

내 경우에는 아이콘 자동추가를 위해 Font Awesome에서 제공하는 스크립트가 CSP를 위반한 것이었다.

## First Try: 공식 홈페이지의 방법이라면!

먼저 [Security | Font Awesome](https://fontawesome.com/how-to-use/on-the-web/other-topics/security)에서 찾은 해결방법을 적용해봤다.

```html
<head>
  <script
    src="https://use.fontawesome.com/releases/v5.15.1/js/all.js"
    data-auto-add-css="false"
  ></script>
  <link
    href="https://use.fontawesome.com/releases/v5.15.1/css/svg-with-js.css"
    rel="stylesheet"
  />
</head>
```

헤더에 CSS 자동 추가를 하지않는 스크립트와 CSS를 연결하는 방식이었다. 그러나 이 스크립트 또한 CSP를 위반했다는 오류 메시지를 확인할 수 있었다.

## Second Try: 그렇다면 이번에는 구글링이다!

다음으로 구글링을 통해 찾은 `meta` 태그를 이용해 CSP를 설정하는 방법을 시도했다.

```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self' data: gap: https://*.googleapis.com/ https://*.fontawesome.com/ https://*.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com/ https://*.fontawesome.com/; media-src *; img-src 'self' data: content:; "
/>
```

하지만 이 방법 또한 CSP 위반 오류메시지를 출력하길래 브라우저의 분석도구를 이용해 HTTP Header를 확인해봤다. 그런데 `meta` 태그로 설정한 부분이 하나도 적용되지 않고있었다.

## Finally: 어라?! 그러고보니...

HTTP Header에 설정된 보안 관련 항목들을 살펴보다 문득 이런 생각이 들었다.

`'이건 어디서 설정하고 있는거지? 기본적으로 설정되는 건...'`

여기까지 생각이 미치자 Express에 셋팅해놓은 보안용 미들웨어 `helmet`이 생각났다. [https://helmetjs.github.io/](https://helmetjs.github.io/)를 확인해보니 기본적으로 CSP가 셋팅되고 있었다.

`helmet` 옵션에 Font Awesome 적용을 위해 필요한 소스를 추가했고, 아이콘들이 정상적으로 출력되는 것을 확인할 수 있었다.

```javascript
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "https://*.fontawesome.com/"],
        styleSrc: ["'self'", "https://*.fontawesome.com/"],
        fontSrc: ["'self'", "https://*.fontawesome.com/"],
      },
    },
  })
);
```

## Retrospective

### 👍

- CSP의 개념을 잘 익힐 수 있었다.
- HTTP Header를 분석해볼 수 있는 좋은 기회였다.

### 🤦

- 원인을 깊게 생각하지 않고 눈 앞의 솔루션들만 따라하니 시간낭비가 컸다.

### 🤔

- HTTP 프로토콜에 대해 깊이 공부할 필요를 느꼈다.
