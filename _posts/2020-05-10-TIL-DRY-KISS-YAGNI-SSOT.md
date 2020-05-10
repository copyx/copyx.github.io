---
title: \[TIL\] DRY, KISS, YAGNI, SSOT
categories: [TIL]
---

## [DRY](https://ko.wikipedia.org/wiki/%EC%A4%91%EB%B3%B5%EB%B0%B0%EC%A0%9C){: target="\_blank"}

> Don't Repeat Yourself

반복을 하지마라. 개인과 팀 범위, 일과 코드가 중복되는 것들을 관리해서 개발 및 유지보수의 효율을 높이자는 의미.
DRY를 위반한 상태가 WET(We Enjoy Typing 또는 Write Everything Twice).

## [KISS](https://ko.wikipedia.org/wiki/KISS_%EC%9B%90%EC%B9%99){: target="\_blank"}

> Keep It Simple, Stupid
> Keep It Small and Simple
> Keep It Short and Simple

가능한 작고 간단하게 설계하고 만드는게 좋다.

## [YAGNI](https://ko.wikipedia.org/wiki/YAGNI){: target="\_blank"}

> You Ain't Gonna Need It

확실하게 필요하다고 판단되기 전까지 구현하지 마라.

## [SSOT](https://ko.wikipedia.org/wiki/%EB%8B%A8%EC%9D%BC_%EC%A7%84%EC%8B%A4_%EA%B3%B5%EA%B8%89%EC%9B%90){: target="\_blank"}

> Single Source Of Truth

여러 곳에서 사용되는 정보를 한 곳에 모아서 관리하는 방식.

데이터에 변경이 생길 경우 한 곳에서만 수정해도 모든 곳에서 적용되도록 데이터는 한 곳에서 관리하고, 데이터를 사용하는 곳에서도 데이터 원본을 복사가 아닌 참조로 사용해 과거 버전이나 부정확한 데이터를 사용하지 않도록 방지함.
