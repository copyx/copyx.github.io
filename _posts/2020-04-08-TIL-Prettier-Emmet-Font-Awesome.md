---
title: \[TIL\] Prettier, Emmet, Font Awesome
tag: [Tools]
categories: [TIL]
---

Nomad Coders의 카카오 클론 코딩 강좌 실습편 중 Status Bar를 실습하며 배운 내용.

## Prettier 설정

VSCode Extensions에서 Prettier 검색 후 설치. 근데 Prettier가 많길래 사용자 제일 많은 것으로 고름.

Prettier 설치 후 에디터 설정에서 저장 시 자동 Formatting 동작 설정.

1. 설정 - 텍스트 편집기 - Editor: Code Actions On Save
2. `settings.json에서 편집` 선택 후 `"editor.formatOnSave": true,` 추가

## Emmet 사용법

텍스트 편집기 플러그인. CSS 스타일의 약어(Abbreviation)들을 이용해 HTML, CSS 작성 효율을 올려줌.

```html
<!-- 태그 입력 -->
div
<div></div>

<!-- 같은 태그 한 번에 여러개 생성 -->
div*3
<div></div>
<div></div>
<div></div>

<!-- 클래스가 입력된 태그 생성 -->
div.box
<div class="box"></div>

<!-- 여러 클래스가 함께 입력된 태그 생성 -->
div.box.big.red
<div class="box big red"></div>
```

약어들의 기본 틀은 선택자와 결합자들인 듯.

## Font Awesome

> [https://fontawesome.com/icons](https://fontawesome.com/icons){: target="\_blank"}

웹사이트에서 벡터 아이콘과 소셜 로고들을 쉽게 이용할 수 있게 제공해주는 사이트.

### Kit 코드 추가

```html
<head>
  <script
    src="https://kit.fontawesome.com/{kit-name}.js"
    crossorigin="anonymous"
  ></script>
</head>
```

### 아이콘 추가

원하는 키워드로 검색. 아이콘 정보 페이지에 아이콘 추가 코드있음.

```html
<i class="fas fa-cog"></i>
```

> 뜬금 없지만, 저 클래스 이름들 풀버전이 궁금하다. `fa`면 `font-awesome`이라고 알아듣는데 `fas`은 뭐지?
