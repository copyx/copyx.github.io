---
title: \[TIL\] Babel, Middlewares
tags: [TIL]
---

## [Babel](https://babeljs.io/){: target="\_blank"}

ECMAScript 2015 이상의 최신 자바스크립트 코드를 오래된 브라우저나 환경에서 사용할 수 있도록 옛날 버전 코드로 변환해주는 컴파일러.

### [@babel/node](https://babeljs.io/docs/en/next/babel-node.html){: target="\_blank"}

노드 CLI 처럼 동작하는 CLI. 실행 전에 프리셋과 플러그인대로 컴파일해주는 것이 추가된 장점.

## [nodemon](https://nodemon.io/){: target="\_blank"}

소스코드가 변경되면 자동으로 서버를 재시작해주는 개발 도구. 꼭 서버가 아니어도 실행 가능.

## Middleware - ExpressJS

중간에 실행되는 코드. 특정 라우터에 끼울 수도 있고, 전체에 일괄 적용할 수도 있음. 미들웨어를 적용할 때 순서가 매우 중요함. `app.use()`를 이용해 미들웨어를 적용한 코드 아래의 라우터들만 미들웨어가 동작함.

### [morgan](https://github.com/expressjs/morgan#readme){: target="\_blank"}

HTTP 요청 로깅을 위한 미들웨어.

### [helmet](https://helmetjs.github.io/){: target="\_blank"}

보안을 위한 각종 HTTP 헤더 설정을 도와주는 미들웨어.

### [body-parser](https://github.com/expressjs/body-parser){: target="\_blank"}

들어오는 요청의 body를 파싱해서 `req.body` 속성에 넣어주는 미들웨어.

### [cookie-parser](https://github.com/expressjs/cookie-parser){: target="\_blank"}

쿠키 헤더를 파싱해서 `req.cookies`에 넣어주는 미들웨어.
