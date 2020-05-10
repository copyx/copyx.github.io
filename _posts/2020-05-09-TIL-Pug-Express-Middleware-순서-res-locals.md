---
title: \[TIL\] Pug, Express Middleware 순서, `res.locals`
categories: [TIL]
---

## Pug(구 Jade)

템플릿 엔진. Haml에 강한 영향을 받음. HTML 태그의 반복성을 인덴트로 대체해 표현. 이 외에도 다양한 조건, 반복, 상속 등 다양한 기능을 제공해줌.

### 오류 경험

예제 실행을 위해 `p Hello`를 작성했는데 동작을 안함. 렌더링된 결과에 `<p>Hello</p>`가 아닌 `p Hello`가 그대로 나왔음. 그래서 다시 살펴보니 앞에 인덴트가 실수로 추가되서 렌더링이 제대로 되지 않았던 것이었음.

### `extends` & `block`

```text
//- layout.pug
html
  head
    block scripts
      script(src='/jquery.js')
  body
    block contents
```

```text
//- page.pug
extends layout
block contents
  p Contents
```

`extends` 키워드로 부모의 내용을 상속받을 수 있고, 부모에 선언된 `block`들을 자식이 대체할 수 있음. 페이지 구조 같은 것을 상속해서 내용을 바꿔넣는 방식으로 사용 가능.

`block`은 대체 외에도 `append`, `prepend` 키워드를 이용해 앞 뒤로 추가할 수 있음.

#### 참조

- [Template Inheritance - Pug](https://pugjs.org/language/inheritance.html){: target="\_blank"}

### `include`

```text
//- footer.pug
.footer
    p Copyright CopyX
```

```text
//- layout.pug
html
  head
    title Layout
  body
    block contents
    include footer
```

`include` 키워드로 한 파일을 다른 파일에 끼워넣을 수 있음. 페이지 구조를 나눠서 관리 할 수 있음.

#### 참조

- [Includes - Pug](https://pugjs.org/language/includes.html){: target="\_blank"}

## Express 미들웨어 순서

설정되는 순서대로 실행됨. 보안을 위한 미들웨어처럼 먼저 실행되야하는 것을 위로 올려야함.

## `res.locals`

Express에서 제공되는 Response 객체의 속성 중 하나. 응답을 위한 지역변수를 담고있는 객체. 뷰에서만 사용 가능. 요청/응답 수준에서 필요한 정보를 넘겨주는 것에 유용함.

비슷한 것으로 `app.locals`가 있으며, 이는 애플리케이션 범위에서 사용 가능함.
