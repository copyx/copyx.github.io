---
title: \[TIL\] Form action & method, Pug Iteration, Pug Mixin, HTML Video Tag
categories: [TIL]
---

## Form action & method

```html
<form action="/users/login" method="post">
  <input type="text" name="id" />
  <input type="password" name="password" />
  <input type="submit" value="Login" />
</form>
```

웹페이지에서 정보를 입력받을 때 사용하는 `<form>` 태그.

`action` 속성은 이 정보를 넘겨줄 URI를, `method` 속성은 넘겨줄 때 사용할 HTTP 메소드(`put`, `post` 등)을 설정 가능.

`method`를 `get`으로 설정하면 입력값들이 `http://url.url?name=vale&name2=value2`와 같은 형식으로 전달됨. `post`는 데이터가 `body`(요청 본문)에 담겨저 전달됨.

## Pug Iteration

```text
each item in items
  h1= item.title
  p= item.description
```

`each`와 `in` 키워드를 이용해서 반복 가능. 반복의 대상은 자바스크립트임. 그래서 변수나 함수 결과 등 다양한 것을 사용할 수 있음.

- [Iteration - Pug](https://pugjs.org/language/iteration.html){: target="\_blank"}

### Pug Code

템플릿에서 인라인 자바스크립트를 실행시킬 수 있는 세 가지 방법

Unbuffered Code | `-` | 코드는 실행되지만 그 결과가 바로 추가되지 않음
Buffered Code | `=` | 코드의 실행결과가 바로 추가되고, HTML 태그들은 모두 이스케이핑됨.
Unescaped Buffered Code| `!=` | 코드의 실행결과가 바로 추가되고, HTML 태그들은 모두 이스케이핑되지 않음.

```text
p - "text" + "<tag>"
=> <p></p>
p = "text" + "<tag>"
=> <p>text&lt;tag&gt;</p>
p != "text" + "<tag>"
=> <p>text<tag></p>
```

- [Code - Pug](https://pugjs.org/language/code.html){: target="\_blank"}
- [escape - 생활코딩](https://opentutorials.org/course/50/191){: target="\_blank"}

## Pug Mixin

```text
// videoBlock.pug
mixin videoBlock(video = {})
    .container
        h4= video.title
        h6= video.views
```

```text
// videos.pug
include mixins/videoBlock

each video in videos
    +videoBlock(video)
```

함수 형태로 사용 가능한 Block. 템플릿을 작은 단위로 쪼개서 사용.

`mixin`의 인자에는 기본값 설정이 가능하며, 나머지 인자(`...args`)도 사용 가능하다.

인자 외에도 태그를 추가할 때 처럼 `attributes` 설정이 가능하며, 이를 `mixin` 내에서 가져가 쓸 수 있다.

```text
mixin foo(a, b)
  p(class!=attributes.class)= a + b

+foo(1, 2)(class="number")
```

- [Mixins - Pug](https://pugjs.org/language/mixins.html){: target="\_blank"}

### 궁금증

근데 수업에서는 `+videoBlock(video)`로 안하고 `+videoBlock({title: video.title})`로 하던데? 왜 그러는거지?

#### 스스로 생각해본 이유

어떤 객체를 인자로 받는 함수를 만들어서 사용한다고 할 때, 외부에서 인자의 형태에 맞춰서 함수에 넘겨주는 것과 함수를 들어오는 인자에 맞게 수정하는 것을 생각해보면 전자가 더 에러가 일어날 확률이 적을 것으로 생각된다.

사실 위 케이스에서는 이미 객체 자체가 함수의 인자와 같은 형태지만, 의도적으로 인자에 맞춰 대입하는 것이라고 볼 수 있다.

## HTML Video Tag

```html
<video src="..." controls="true"></video>
```

비디오를 재생시킬 수 있는 미디어 플레이어를 문서에 삽입하는 태그. `autoPlay`, `controls` 등 다양한 속성들이 지원됨.

- [\<video\> - HTML \| MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Video){: target="\_blank"}
