---
title: "[TIL] multer, multipart/form-data, enctype, 멱등성 등"
tags:
  - http
  - mongoose
categories:
  - TIL
date: 2020-10-24 01:09:04
---

## [`multer`](https://github.com/expressjs/multer/blob/master/doc/README-ko.md)

파일 업로드를 위해 사용하는 `multipart/form-data`를 다루기 위한 미들웨어.
`form`의 `enctype` 속성이 `multipart/form-data`일 때만 동작함.

## `multipart/form-data`는 뭐야?

`post` 요청으로 서버에 데이터를 전송하는 경우, `Content-Type`은 `<form>` 요소의 `enctype` 속성이나 `<input>`, `<button>` 요소의 `formenctype` 속성의 값으로 결정됨.

- `application/x-www-form-urlencoded`: 기본값. 우리가 아는 URL 인코딩.
- `multipart/form-data`: 파일, 바이너리 데이터. 인코딩하지 않음.
  서버로 데이터 전송 시 여러 타입의 데이터를 보내는 경우도 있음. 이를 위해 `multipart`가 생김.
- `text/plain`: 공백만 '+'로 변환, 나머지는 그대로. (HTML5에서 디버깅용으로 추가된 값이라고 MDN에 나옴)

## 멱등성

요청을 한 번 보내든 여러번 보내든 효과가 같음. 서버의 상태도 동일하게 남음.
올바르게 구현한 `GET`, `HEAD`, `PUT`, `DELETE`는 멱등성을 가짐. `POST`는 멱등성을 갖지 않음.

## `mongoose.Schema.Types.ObjectId`와 `mongoose.Types.ObjectId`의 차이는?

`mongoose.Types.xxx`는 MongoDB의 해당 타입을 상속받아 사용하는 타입.
`mongoose.Schema.Types.xxx`는 Mongoose의 Schema에서 각 Property들을 설정하기 위한 객체. 즉, 스키마 전용.

## 왜 `arrow function`에 `async` 키워드를 사용하니까 eslint에 걸릴까?

내가 설정한 `parserOptions`의 `ecmaVersion`이 7(2016년)으로 되어있었는데, `async/await`는 8(2017년)부터 적용됨.

## 참고

- [POST - HTTP | MDN](https://developer.mozilla.org/ko/docs/Web/HTTP/Methods/POST)
- [\<form> - HTML | MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/form)
- [\<form> 태그의 enctype 속성 | TCP School](http://tcpschool.com/html-tag-attrs/form-enctype)
- [multipart/form-data 타입의 HTTP 메시지 구성 방법 | Wireframe](https://soooprmx.com/archives/9626)
- [멱등성 - 용어 사전 | MDN](https://developer.mozilla.org/ko/docs/Glossary/Idempotent)
- [What is a SchemaType? | Mongoose](https://mongoosejs.com/docs/schematypes.html#what-is-a-schematype)
- [expressjs/multer | Github](https://github.com/expressjs/multer/blob/master/doc/README-ko.md)
