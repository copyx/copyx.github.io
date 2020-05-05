---
title: \[TIL\] Local Storage, `removeChild()`, `new Image()`, 위치 정보 가져오기, `fetch()`
categories: [TIL]
---

## Local Storage

Web Storage의 두 가지 매커니즘 중 하나.

sessionStorage | 페이지 세션이 유지되는 동안 사용할 수 있는 각각의 오리진에 별도의 저장 공간을 유지. (페이지 리로드 및 복구를 포함하여, 브라우저가 열려있는 한)
localStorage | 위와 같은 컨셉이지만, 브라우저가 닫히고, 다시 열려도 데이터를 유지합니다.

key/value 데이터를 저장할 수 있으며, key와 value 모두 문자열만 사용 가능.

```javascript
localStorage.setItem("key", "value");
localStorage.getItem("key");
localStorage.removeItem("key");
localStorage.clear();
```

## `removeChild()`

```javascript
var removedChild = node.removeChild(child);
```

DOM에서 자식 노드를 제거하는 메소드. **인자로 주어지는 노드가 DOM에 존재하지 않거나, 해당 노드의 자식이 아니면 예외 발생.**

## `new Image()`

`HTMLImageElement`를 만드는 생성자. 기능적으로 `document.createElement('img')`와 동일함.

## 위치 정보 가져오기

```javascript
function onSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
}

navigator.geolocation.getCurrentPosition(onSuccess);
```

[`Navigator`](https://developer.mozilla.org/ko/docs/Web/API/Navigator){: target="\_blank"} 인터페이스를 통해 사용자 에이전트(브라우저)의 상태와 신원정보를 나타냄. `window.navigator` 읽기전용 속성을 통해 객체에 접근.

[`Navigator.geolocation`](https://developer.mozilla.org/ko/docs/Web/API/Navigator/geolocation){: target="\_blank"}을 통해 장치의 위치를 알아내기 위한 `Geolocation` 객체 획득. 단, 브라우저별로 권한 획득에 대한 정착과 요청 방식이 다르므로 주의해야함.

[`getCurrentPosition()`](https://developer.mozilla.org/ko/docs/Web/API/Geolocation/getCurrentPosition){: target="\_blank"} 메소드를 통해 현재 위치를 [`GeolocationPosition`](GeolocationPosition){: target="\_blank"} 객체의 형태로 획득.

## [Open Weather Map](https://openweathermap.org/){: target="\_blank"}

날씨 정보 오픈 API. 현재 날씨, 시간별, 일별 등 다양한 날씨 정보 제공.

## `fetch()`

```javascript
fetch(url).then((response) => {
  // do something
});
```

리소스(네트워크 건터편에 있는 것들 포함)를 가져오기 위한 인터페이스. 원래는 XMLHttpRequest라는 비슷한 API가 있지만, 새로운 Fetch API는 좀 더 강력하고 유연한 조작이 가능함.
