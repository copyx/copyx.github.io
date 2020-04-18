---
title: \[TIL\] `cursor:pointer`, Subtle Patterns
tags: [TIL]
---

## `cursor: pointer`

```css
.element {
  cursor: <url>, <url> <x> <y>, ..., <cursor-keyword>;
}

/*
 * 마지막 <cursor-keyword>는 필수.
 * <url>은 0개 이상. 맨 앞부터 시도해서 성공한 것으로 보여줌.
 * <url>이 다 실패하면 키워드 사용.
 * <x>, <y>는 커서 상호작용 부분을 기준으로 이미지 좌상단의 위치를 나타냄.
 *
 * <url> : url(image-file)
 * <x>, <y> : 32 미만의 <number>
 */
```

요소 위에 마우스 커서가 올라갔을 때 보여줄 모양을 지정.

## Subtle Patterns

[https://www.toptal.com/designers/subtlepatterns/](https://www.toptal.com/designers/subtlepatterns/){: target="\_blank"}

다양한 패턴들을 무료로 다운받을 수 있는 웹사이트.

패턴들의 저작권은 [CC BY-SA 3.0(저작자표시 - 동일조건변경허락)](https://creativecommons.org/licenses/by-sa/3.0/deed.ko).
