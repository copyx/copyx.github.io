---
title: "[TIL] hr 태그, SVG, findOneAndUpdate VS findOneAndRemove, Webpack"
tags:
  - html
  - svg
  - mongoose
  - webpack
categories:
  - TIL
date: 2020-10-25 23:34:44
---

## `hr` 태그가 뭐지?

간단히 말하면 가로줄(HoRizontal) 태그. 이야기 장면 전환, 구획 내 주제 변경 등 문단 레벨 요소에서 주제의 분리를 나타냄.

## SVG 편집을 처음 해봄! 신기하네...

블로그에 사용할 Logo와 Favicon 이미지를 고민하다 SVG를 만들어서 사용함.

우연히 현재 테마의 기본 Favicon으로 설정된 SVG를 VSCode로 까보게 됐는데, 상상과는 달리 XML 형식이었음. 전에 FontAwesome에서 아이콘을 다운로드 했을 때도 SVG 파일인 것을 기억하고 있었고, 이를 조합해 사용할 수 있겠다는 생각이 들었음.

그래서 간단히 SVG 튜토리얼을 보며 서버 아이콘과 체크 아이콘을 합침. 재밌는 경험이었음.😋

## mongoose `findOneAndDelete`와 `findOneAndRemove`의 차이점은?

주로 Node.js MongoDB Driver의 `findAndModify` 메소드 사용 여부에 달려있었음.

- mongoose `findOneAndUpdate` ⇒ mongodb `findAndModify`의 update 명령
- mongoose `findOneAndRemove` ⇒ mongodb `findAndModify`의 remove 명령
- mongoose `findOneAndDelete` ⇒ mongodb `findOneAndDelete` 명령

`findAndModify`는 하나의 문서를 찾아서 수정하고 이를 반환하는 메소드. 다양한 옵션을 설정할 수 있어서 문서의 수정, 삭제 등은 물론이고 반환하는 문서를 수정하기 전/후로 구분해서 반환받을 수도 있음.

단, Mongoose DB 연결 시 `useFindAndModify` 옵션을 `true`로 설정해야 `findAndModify`를 사용함. `false`면 `findOneAndXXX` 사용함. **현재 Node.js MongoDB Driver에서 `findAndModify`는 `deprecated`됨.** 그래서 Mongoose는 `useFindAndModify: false`로 설정하는 것을 권장함.

### 왜 `deprecated` 됐을까?

`findAndModify`는 하나의 문서를 수정하고 이를 반환하는 메소드임. 그런데 이름만으로는 이 동작(수정, 삭제, 반환 등)들을 모두 알기 힘듦. **다재다능하지만 한 눈에 알아보기 힘들고 복잡한 친구임.** `findOneAndUpdate`, `findOneAndDelete`, `findOneAndReplace`는 상대적으로 이름이 기능에 대해 훨씬 잘 나타냄.

_주의: Node.js MongoDB Driver에서만 deprecated된 것이고 Mongo Server/Client 등에서는 여전히 사용 가능. 다른 드라이버는 확인 필요._

## Webpack이란?

Bundler. Bundle이 "묶음"이라는 의미이므로 "묶음으로 만들어주는 도구"라고 보면 될 듯.
모듈 개념이 없던 시절에는 여러 자바스크립트 파일을 브라우저에 로딩하면 그만큼 네트워크 비용을 치뤄야했음. 거기에 변수 충돌의 위험도 있었음.

스코프로 인한 충돌 위험은 즉시호출함수(IIFE)를 이용한 모듈이나 CommonJS 혹은 AMD 스타일의 모듈 시스템을 이용해 극복할 수 있었으나, 여전히 여러 파일을 로딩하기 위한 네트워크 비용은 해결되지 않았음. 그래서 하나의 묶음(Bundle)로 만들기 위해 웹팩이 나오게됨.

웹팩은 시작점(Entry point)로부터 연결된 모듈을 전부 찾아내 한 묶음으로 만들어냄. Javascript와 Json만 이해하는 웹팩은 로더를 이용해 이미지, 폰트, 스타일시트 등 다른 파일을 자바스크립트 코드 안으로 가져올 수 있음. 자주 사용되는 로더로는 `css-loader`, `style-loader`, `file-loader`, `url-loader` 등이 있음.

플러그인은 파일별로 처리하는 로더와 다르게 번들된 결과물을 처리함.

### Webpack config에서 module.rules의 use에 추가한 로더들이 왜 역순으로 실행될까?

이유는 아직 못찾음... 왜지?

## 참고

- [<hr> - HTML | MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/hr)
- [SVG Tutorial](http://tutorials.jenkov.com/svg/index.html)
- [프론트엔드 개발환경의 이해: 웹팩(기본) | 김정환 블로그](https://jeonghwan-kim.github.io/series/2019/12/10/frontend-dev-env-webpack-basic.html)
- [웹팩의 기본 개념 | 김정환 블로그](https://jeonghwan-kim.github.io/js/2017/05/15/webpack.html)
