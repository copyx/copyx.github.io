---
title: \[TIL\] `export`
categories: [TIL]
---

## `export`

자바스크립트 모듈에서 함수, 객체, 원시값을 내보낼 때 사용. 내보낸 것들은 `import`로 가져와 쓸 수 있음.

내보내는 모듈은 무조건 엄격 모드(Strict Mode)임.

### Named Export

```javascript
// 변수가 var, let, const 중 무엇이든
// 초기화 됐든 안됐든, 하나든 여러개든 상관없음.
export const var1, var2 = 2;
export let var3, let var4 = 4;
export function fn1() {}
export class ClassName {}
export const obj = {prop1: 1, prop2: 2}

// 한꺼번에 내보내기
export {var1, var2};

// 이름 바꿔서 내보내기
export {var3 as exportedName1, var4 as exportedName2};

// 비구조화 내보내기
export const {prop1, prop3: 3} = obj;
```

한 모듈에서 여러가지를 내보낼 수 있음. 단, 가져갈 때 내보낸 이름과 동일한 이름을 사용해야함.

### Default Export

```javascript
// 클래스, 객체, 함수 등 모두 적용 가능
export default expression;  // 변수 선언 같은 것은 안됨.
export default function () {}
export default {var1 as default};
```

한 모듈에서 기본 내보내기는 하나만 가능. 가져올 때 어떤 이름으로 가져오든 무관함.

### Re-exporting

```javascript
export * from "someModule1.js"; // default는 내보내지지 않음.
// export * as newName1 from "someModule1.js"; // 이건 안됨...
export { name1, name2 as newName2 } from "someModule1.js";
export { default } from "someModule1.js"; // default만 내보내짐.
```

`import` 할 필요없이 바로 다른 모듈을 가져와서 내보낼 수 있음.
