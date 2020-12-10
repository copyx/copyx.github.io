---
title: "[TIL] grid-column, grid-row, fr, grid-template, grid 요소 정렬"
date: 2020-10-29 18:24:31
tags:
  - css
categories:
  - TIL
---

## `grid-column`, `grid-row`

start와 end를 한 번에 설정할 수 있음.

```css
.nav {
  grid-row: 1 / 3;
  grid-column: 2 / -1;
  // 음수를 넣으면 뒤에서부터 센 순서
}
```

몇 칸을 차지하는지 표현하는 방법도 가능

```css
.nav {
  grid-row: span 2;
  grid-column: span 5;
}
```

위 둘을 혼용할 수도 있음.

```css
.nav {
	grid-row: 1 / span 2;
	grid-column: 2 / span 5;
```

각 셀의 앞/뒤에 위치한 구분선에 이름을 붙여줄 수도 있음.

```css
.grid {
  display: grid;
  grid-template-columns: [first-line] 100px [second-line] 100px [third-line] 100px [fourth-line] 100px [fifth-line];
  grid-template-rows: repeat(4, [line] 100px);
}

.header {
  grid-column: first-line / fifth-line;
  grid-row: line 1 / line 3;
}
```

## `fr`(fraction: 부분)

공간의 남은 부분은 비율로 나눔

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

## `grid-template`

`grid-template-columns`, `grid-template-rows`, `grid-template-areas`를 합친 속성

```css
.grid {
  height: 50vh;
  display: grid;
  gap: 10px;
  grid-template:
    "header header header header" 1fr
    "content content content nav" 2fr
    "footer footer footer footer" 1fr / 1fr 1fr 1fr 1fr;
}
```

## `grid`의 셀 내부 요소들의 정렬

그리드에서는 `block-axis`, `inline-axis(row-axis)` 두 가지 축을 사용함. `block-axis`는 열과 수평인 축, `inline-axis`는 행과 수평인 축임.

셀 내부 요소 정렬 시 `justify-items`, `justify-self`는 `inline-axis` 위에서의 위치, `align-items`, `align-self`는 `block-axis` 위에서의 위치를 설정함.

기본 값은 stretch로 설정되어 있음.

`place-items`, `place-self`는 `block-axis`와 `inline-axis`를 한 번에 설정.
