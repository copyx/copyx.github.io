---
title: "[TIL] grid-auto-rows, grid-auto-columns, minmax, auto-fill, auto-fit"
date: 2020-10-30 21:53:32
tags:
  - css
categories:
  - TIL
---

## `grid-auto-rows`, `grid-auto-columns`

그리드에 들어간 아이템의 수가 `grid-template-*` 속성들로 설정한 셀 수를 넘어갈 때 자동으로 적용되는 행, 열 크기를 설정하는 속성

## `minmax()`

`repeat()` 함수에서 셀 크기를 설정할 때 사용하는 함수. 셀의 최소, 최대 크기를 설정.

## `auto-fill`, `auto-fit`

`repeat()` 함수의 반복 수 설정에 사용하는 값. `auto-fill`은 남은 공간에 셀을 채워넣고, `auto-fit`은 남은 공간을 기존 셀들을 늘려서 맞춘다.
