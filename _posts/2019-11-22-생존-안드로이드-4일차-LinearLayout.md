---
title: 생존 안드로이드 4일차 - LinearLayout
tags: [android]
---

한 쪽 방향으로만 뷰를 쌓는 레이아웃. **그래서 방향(Orientation)이 필수속성!** (방향 속성값으로 `vertical`, `horizontal` 사용 가능)

```xml
<LinearLayout
  android:orientation="vertical"
></LinearLayout>
```

리니어 레이아웃의 중첩을 이용해 웬만한 구성은 다 가능.

## 뷰 추가 in XML

XML에서는 리니어 레이아웃 태그 사이에 원하는 뷰를 추가하면됨.

```xml
<LinearLayout
  android:orientation="vertical"
>
  <Button/>
  <Button/>
  <Button/>
</LinearLayout>
```

## 뷰 추가 in 자바코드

화면을 미리 만들 수 없거나, 상황에 따라 바로 만들어서 사용해야하는 경우 자바코드로 화면 구성.

```java
LinearLayout linearLayout = new LinearLayout(this);
linearLayout.setOrientation(LinearLayout.VERTICAL);

LinearLayout.LayoutParams params = new LinearLayout.LayoutParams(
        LinearLayout.LayoutParams.MATCH_PARENT,
        LinearLayout.LayoutParams.WRAP_CONTENT);

Button button7 = new Button(this);
button7.setText("Button 7");
button7.setLayoutParams(params);
linearLayout.addView(button7);
```

뷰 객체를 코드에서 만들 때, 뷰의 생성자에는 항상 `Context` 객체가 전달되어야함.

### LayoutParams 객체

레이아웃에 추가되는 뷰의 속성 중, **레이아웃과 관련된 속성**을 담고 있음. 이 객체를 새로 만들 때 반드시 뷰의 가로와 세로 속성을 지정해야함

## 뷰 정렬 속성

- `layout_gravity`: 내 바깥, 부모 컨테이너에 여유공간이 있을 때 나를 정렬
- `gravity`: 내 안에 있는 뷰들을 정렬

### 속성값

값들을 `|` 연산자를 이용해 동시에 적용 가능. 단, `|` 연산자 좌우에 공백이 없어야함.

- 각 방향들(`top`, `right` 등)
- `fill`, `fill_*`: 해당 방향으로 늘려서 채우기
- `clip_*`: 남는 부분 잘라내기
  - 예) `right|clip_horizontal` => 왼쪽에 남는 부분 잘라내기

## `baselineAligned` 속성

텍스트 높이를 맞추기위한 리니어 레이아웃의 정렬 속성. `true`가 디폴트값. 따라서 뷰의 배치가 이상해질 수도 있음. 필요에 따라 선택적으로 사용하면됨.

![baselineAligned 예시](/assets/img/baselineAligned.png)

## 여유공간 분할

`layout_weight` 속성을 이용해 남은 공간을 일정 비율로 분할 할당 가능.

![layout_weight 예시](/assets/img/layout_weight.png)

But! 부모 공간의 분할이 아닌 여유 공간의 분할이라는 것!!!

## Any Others

### `Context` 객체

- 어떤 일이 발생한 상황
- 객체의 정보를 담고있는 객체
- 뷰의 정보를 확인하거나 설정할 수 있도록 돕는 객체

### 레이아웃 관련 속성

XML에서 접두어로 `layout_`이 붙는 속성들은 자바코드에서 해당 레이아웃의 `LayoutParams` 클래스로 처리 가능.
