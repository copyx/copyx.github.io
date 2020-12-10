---
title: "CORS (Cross-Origin Resource Sharing)"
date: 2020-11-12 22:33:38
tags:
  - http_header
  - cross-origin_resource_sharing
  - cors
categories:
  - http
---

## `Origin`이란?

웹 컨텐츠의 출처(Origin)이란 접근에 사용되는 URL의 `Scheme`(Protocol), `Host`(Domain), `Port`로 정의됨. 위 세 가지가 같으면 같은 출처로 판단.

단, 포트가 80(HTTP 기본 포트)일 경우 생략되는 경우도 있음.

## `Cross-Origin Request`

다른 출처에 요청을 보내는 것. 이런 요청은 출처에서 전송받은 특별한 헤더가 필요함.

웹 초기에는 보안을 위해 다른 사이트의 컨텐츠에 접근할 수 없었음. 그러자 사람들은 `iframe`과 `form`을 이용해 다른 사이트에 네트워크 요청을 보내는 트릭이나 script 태그를 이용한 트릭을 만들어 사용했고, 결국 브라우저에서 실행가능한 네트워크 관련 자바스크립트 메서드가 추가됨.

처음에는 크로스 오리진 요청이 불가능했으나, 서버에서 명시적으로 크로스 오리진 요청에 대한 허가 여부 헤더를 받았을 때만 가능하도록 제약을 걸고 허용함.

## CORS를 사용하는 요청

- `[XMLHttpRequest](https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest)`와 [Fetch API](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API) 호출
- 웹 폰트(CSS 내 `@font-face`에서 교차 도메인 폰트 사용 시)
- [WebGL 텍스쳐](https://developer.mozilla.org/ko/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
- `[drawImage()](https://developer.mozilla.org/ko/docs/Web/API/CanvasRenderingContext2D/drawImage)`를 사용해 캔버스에 그린 이미지/비디오 프레임
- [이미지로부터 추출하는 CSS Shapes](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Shapes/Shapes_From_Images)

## Simple 요청과 Non-simple 요청의 차이

Simple 요청의 경우 CORS preflight 요청을 보내지 않음.

Simple에 해당하는 요청의 조건은 다음과 같음.

- `GET`, `HEAD`, `POST` 메서드인 경우
- `Content-Type`이 다음과 같아야함.
  - `application/x-www-form-urlencoded`
  - `multipart/form-data`
  - `text/plain`
- 사용자 정의 HTTP 헤더가 없어야함.

![https://i.imgur.com/iiwxEXQ.png](https://i.imgur.com/iiwxEXQ.png)

## Preflight Requests

위의 Simple 요청과 달리 `OPTIONS` 메서드를 통해 다른 오리진으로 요청이 가능한지 미리 확인함.

이 때 `Access-Control-Request-Method` 헤더에 실제 요청 시 메서드를, `Access-Control-Request-Headers` 헤더에 실제 요청 시 함께 전송될 사용자 정의 헤더를 명시해 서버에 알려줌.

그러면 서버는 이를 참고해 요청을 수락할 지 결정.

## Reference

[https://developer.mozilla.org/en-US/docs/Glossary/Origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin)

[https://ko.javascript.info/fetch-crossorigin](https://ko.javascript.info/fetch-crossorigin)

[https://developer.mozilla.org/ko/docs/Web/HTTP/CORS](https://developer.mozilla.org/ko/docs/Web/HTTP/CORS)

[https://ko.wikipedia.org/wiki/교차*출처*리소스\_공유#cite_note-2](https://ko.wikipedia.org/wiki/%EA%B5%90%EC%B0%A8_%EC%B6%9C%EC%B2%98_%EB%A6%AC%EC%86%8C%EC%8A%A4_%EA%B3%B5%EC%9C%A0#cite_note-2)
