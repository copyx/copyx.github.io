---
title: 생존 안드로이드 6일차 - ScrollView
tags: [android]
---

레이아웃 남았는데 왜 갑자기 쌩뚱맞게 스크롤뷰가 나오는지는 모르겠지만... (현재 Do It 안드로이드 앱 프로그래밍 5판으로 공부 중)

## `ScrollView`

```xml
<ScrollView
  android:layout_width="match_parent"
  android:layout_height="match_parent">

  <!-- 뷰 딱 하나! -->

</ScrollView>
```

- 추가가 된 뷰가 한 눈에 다 보이지 않을 때 사용.
- 스크롤뷰 안에 한 개의 뷰만 들어갈 수 있음.
- 기본적으로 수직 방향의 스크롤 지원
  - 수평 방향 스크롤은 `HorizontalScrollView` 사용

```xml
<ScrollView
  android:layout_width="match_parent"
  android:layout_height="match_parent">

  <HorizontalScrollView
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <!-- 뷰 딱 하나! -->

  </HorizontalScrollView>
</ScrollView>
```

**INFO** : 수직/수평 스크롤을 함꼐 사용할 때, 안과 밖을 바꿔도 상관없음.
