---
title: "자바스크립트 Primitive Type과 Reference Type의 차이"
tags: [javascript, type, memory]
---

자바스크립트에는 Primitive Type과 Reference Type의 변수형이 있다.

- Primitive Type
  - Number
  - String
  - Boolean
  - null
  - undefined
  - Symbol(ES6에서 추가됨)
- Reference Type
  - Object
    - Array
    - Function
    - RegExp
    - Weak Maps, Maps, Sets 등(ES6에서 추가됨)

## 변수와 메모리

Primitive Type과 Reference Type은 데이터를 메모리에 저장하고 접근하는 방식에 차이가 있다.

### Primitive Type

변수와 연결된 메모리 공간에 값이 바로 들어있음.

```javascript
let a = 1;
// [a] => [@514: 1]
```

a라는 변수에 1을 저장하면, a는 1을 저장할 수 있는 메모리공간을 할당받고(여기서는 514번지), 메모리의 514번지에는 1이라는 값이 저장된다.

### Reference Type

변수와 연결된 메모리 공간에 값이 아닌 객체의 주소가 있어서 이를 참조해 접근함.

```javascript
let o = {
    a: 1
};
// [o] => [@515:@1018] => [@1018: { a: @2034 }] => [@2034: 1]
```

위 코드는 a라는 프로퍼티를 가진 객체를 변수 o에 할당하는 코드다. 메모리 구조상으로 보면 변수 o에 할당된 515번지에는 해당 객체가 바로 들어있지 않고, 객체가 저장된 메모리공간의 주소인 1018번지가 저장된다. 따라서 변수 p를 새로 만들어서 `p = o` 로 할당을 해도 객체가 복사되는 것이 아닌, 객체가 저장된 주소값이 복사된다.
