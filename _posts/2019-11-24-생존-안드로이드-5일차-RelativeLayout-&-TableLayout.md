---
title: 생존 안드로이드 5일차 - RelativeLayout & TableLayout
tags: [android]
---

## RelativeLayout

부모 컨테이너나 다른 뷰와의 상대적인 위치를 이용해 뷰의 위치를 결정.

```xml
<RelativeLayout>
  <View
    layout_alignParentTop="true"
    layout_above="@+id/button1"
    layout_toLeftOf="@+id/button2"
    />
</RelativeLayout>
```

### 부모 컨테이너와의 관계 이용

- `layout_alignParent(Top|Bottom|Left|Right)`
부모 컨테이너의 원하는 부분과 맞춤
- `layout_center(Horizontal|Vertical|InParent)`
부모 컨테이너와 중앙 맞춤

### 부모가 아닌 다른 뷰와의 관계 이용

- `layout_(above|below|toLeftOf|toRightOf)`
지정한 뷰의 원하는 방향에 배치
- `layout_align(Top|Bottom|Left|Right|Baseline)`
지정한 뷰의 원하는 부분에 맞춤

## TableLayout

격자 형태로 화면을 구성하는 레이아웃

```xml
<TableLayout>
  <TableRow>
    <Button/>
    <Button/>
    <Button/>
  </TableRow>
</TableLayout>
```

- `stretchColumns`: 여유공간을 필드값에 설정된 열들에게 분배
- `shrinkColumns`: 넘치는 길이를 필드값에 설정된 열들을 축소시켜서 조절
- `layout_column`: 열 인덱스 지정
- `layout_span`: 뷰가 여러 열을 차지하도록 설정
