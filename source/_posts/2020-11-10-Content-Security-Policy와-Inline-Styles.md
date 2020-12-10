---
title: "Content Security Policy와 Inline Styles"
date: 2020-11-10 22:33:38
tags:
  - http_header
  - content_security_policy
  - csp
categories:
  - http
---

## CSP Inline Styles

CSP를 활설화하면 인라인 스타일을 막음.

### 왜?

공격자가 인라인 스크립트 태그를 주입해도 브라우저는 이를 올바른 스크립트 태그와 구별할 방법이 없음. 그래서 인라인 스크립트를 완전히 금지함. 인라인 스타일도 마찬가지.

### 인라인 스크립트 or 스타일을 사용해야하는 경우

- 지시문에 `'unsafe-inline'` 추가

  ```css
  content-security-policy: script-src "unsafe-inline";
  ```

- 지시문과 태그에 Nonce(일회용 임시값) 설정

  ```html
  <script nonce="EDNnf03nceIOfn39fn3e9h3sdfa">
    //Some inline code I cant remove yet, but need to asap.
  </script>
  ```

  ```css
  content-security-policy: script-src "nonce-EDNnf03nceIOfn39fn3e9h3sdfa";
  ```

- 지시문에 스크립트 자체의 Hash 추가

  ```css
  content-security-policy: script-src
    "sha256-qznLcsROx4GACP2dm0UCKCzCG-HiZ1guq6ZZDob_Tng=";
  ```

### Reference

[https://developers.google.com/web/fundamentals/security/csp?hl=ko](https://developers.google.com/web/fundamentals/security/csp?hl=ko)
