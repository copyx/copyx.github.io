---
title: \[TIL\] github/gitignore, Git history 전체에서 특정 파일 제거하기
categories: [TIL]
---

## github/gitignore

[https://github.com/github/gitignore](https://github.com/github/gitignore){: target="\_blank"}

온갖 언어와 프레임워크를 위한 .gitignore 파일들이 모여있는 저장소.

## Git history 전체에서 특정 파일 제거하기

```bash
git filter-branch --tree-filter "rm -f wrong_file" HEAD
```

모든 커밋에서 특정 파일을 제거하는 명령

> 참고 : [https://better-today.tistory.com/22](https://better-today.tistory.com/22){: target="\_blank"}
