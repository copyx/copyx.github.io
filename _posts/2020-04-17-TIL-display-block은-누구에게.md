---
title: \[TIL\] `display:block`은 누구에게?
tags: [TIL]
---

## `display: block` 속성

오늘도 카톡 클론 중 궁금증 발생! 왜 `display: block`을 요소의 부모가 아닌 해당 요소에게 직접 설정하는가?

```css
.container {
  display: <display-keyword>;
}
```

`display` 속성은 6가지의 값을 가짐.

### \<display-outside>

플로우 레이아웃에서 요소 자신의 역할.

`block`|요소의 앞 뒤로 줄바꿈을 만드는 블록 요소 생성.
`inline`|요소의 앞 뒤로 줄바꿈을 만들지 않는 인라인 요소 생성.

### \<display-inside>

요소 컨텐츠의 서식과 배치 방법을 나타냄.

`flow-root`|The element generates a block element box that establishes a new block formatting context, defining where the formatting root lies.(해석이 안된다;;)
`table`|`<table>`처럼 동작하는 블록 레벨 요소를 정의
`flex`| 플렉스 모델을 따르고 블록 요소처럼 동작
`grid`|그리드 모델을 따르고 블록 요소처럼 동작

### \<display-listitem>

요소가 컨텐츠 블록 박스를 생성하고, 리스트 아이템 인라인 박스를 분리함.

### \<display-internal>

`table`, `ruby` 등 일부 레이아웃 모델은 복잡한 내부 구조를 가지며, 자식과 자손이 채워넣을 여러가지 역할을 지님. 그런 특정 레이아웃 모드에서만 의미를 갖는 값을 정의.

`table-row-group`|`<tbody>` 처럼 동작
`table-header-group`|`<thead>` 처럼 동작
`table-footer-group`|`<tfoot>` 처럼 동작
`table-row`|`<tr>` 처럼 동작
`table-cell`|`<td>` 처럼 동작
`table-column-group`|`<colgroup>` 처럼 동작
`table-column`|`<col>` 처럼 동작
`table-caption`|`<caption>` 처럼 동작

### \<display-box>

요소의 디스플레이 박스를 생성해야하는지 지정.

`none`|요소를 없앰.(공간은 남기고 보이지만 않게하려면 `visibility` 사용)

### \<display-legacy>

CSS 2는 `display` 속성에 단일 키워드만 사용했음. 같은 레이아웃 모드를 위해 블록 레벨과 인라인 레벨 키워드를 각각 필요로 했음.

`inline-block`|`inline flow-root`와 같음
`inline-table`|`inline table`와 같음
`inline-flex`|`inline flex`와 같음
`inline-grid`|`inline grid`와 같음

## 결론

즉, `block`은 \<display-outside>에 속하고, 이는 자식 요소들에게 영향을 끼치는 것이 아닌, 해당 요소에게 직접 적용되는 것. 그래서 `block`으로 설정하고싶은 요소의 부모가 아닌 해당 요소에게 직접 설정하는 것임.

## References

- [display - CSS \| MDN](https://developer.mozilla.org/ko/docs/Web/CSS/display){: target="\_blank"}
