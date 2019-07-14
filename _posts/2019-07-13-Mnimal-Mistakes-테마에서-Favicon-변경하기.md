---
title: Minimal Mistakes 테마에서 Favicon 변경하기
tags: [jekyll]
---

블로그 테마 변경 후 Favicon이 없는게 허전해서 Favicon도 바꿔보기로 했다.

## Favicon 생성 사이트

Favicon 생성 사이트들은 규격에 맞는 이미지 파일들을 만들어주고, 이를 추가하는데 필요한 코드까지 생성해줘서 편리하다.

### [favicon.io](https://favicon.io/)

텍스트, 이모지, 이미지를 간편하게 Favicon으로 만들 수 있다.

### [Favicon Generator For Real](https://realfavicongenerator.net/)

다양한 플랫폼과 브라우저를 커버하는 Favicon들을 만들 수 있다.

* Browsers
  * Chrome, Safari, Firefox, Explorer, Edge
* Platforms
  * Android, iOS, Windows, MacOS X

## Favicon 적용 방법

먼저 Favicon 이미지 파일들을 `assets` 디렉토리 안에 위치시킨다. 그 다음, Favicon 적용 코드를 추가하면 끝이다. 보통 `_includes/head.html`에 Favicon 코드를 추가하지만, 테마에 따라 다른 곳에 추가하는 경우도 있다.

지금 내가 쓰는 **'Minimal Mistakes'**는 `_includes/head/custom.html`에 추가해야한다.

```html
<!-- start custom head snippets -->

<!-- insert favicons. use https://realfavicongenerator.net/ -->

<!-- end custom head snippets -->
```

초기 파일에는 위와 같이 주석만 있다. 주석에 안내된대로 Favicon 코드를 추가하면 된다.

```html
<!-- start custom head snippets -->

<!-- insert favicons. use https://realfavicongenerator.net/ -->
<link rel="apple-touch-icon" sizes="180x180" href="/assets/img/favicon/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicon/favicon-16x16.png">
<link rel="manifest" href="/assets/img/favicon/site.webmanifest">
<!-- end custom head snippets -->
```

### ⚠️주의해야할 점

Jekyll에서 프로젝트 디렉토리를 `/`(root)로 인식한다. 이미지 파일의 경로 입력 시 `assets`가 아닌 `/`를 기준으로 넣어줘야한다.

```bash
⭕️ /assets/img/favicon/favicon-32x32.png
❌ /img/favicon/favicon-32x32.png
```

## 참고

* [How to add a favicon to your jekyll site - Matt Zhou - Medium](https://medium.com/@xiang_zhou/how-to-add-a-favicon-to-your-jekyll-site-2ac2179cc2ed)
* [How do we change the favicon in the title bar? · Issue #585 · mmistakes/minimal-mistakes](https://github.com/mmistakes/minimal-mistakes/issues/585)
