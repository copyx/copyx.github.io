---
title: "xcrun: error: invalid active developer path"
date: 2021-01-13 23:43:18
tags:
  - macos
categories:
  - error
---

회사에서 지급받은 맥북 프로를 Bigsur로 업데이트했음.
그런데 업데이트 전에 설치해놓은 direnv에서 에러가 발생함.

```text
xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun
direnv: Could not find python's version
```

업데이트하면서 xcrun의 패스가 끊긴 듯.
구글링해보니 MacOS 업데이트 시 꽤나 빈번하게 일어나는 문제라고함.

XCode CLI를 설치해주니 깔끔하게 해결됨.

```bash
$ xcode-select --install
```
