---
title: "SBT 프로젝트에 Dependency(의존성) 추가하기"
tags: [scala, sbt, dependency, project]
---

회사 프로젝트에서 데이터 분석을 위해 Spark[^1]를 사용하게 됐다. "Learning Spark" 책으로 공부하고 있던 중, Scala App. 에 Spark 라이브러리를 추가해 사용해야하는 예제가 있었다.

Spark, Scala, SBT[^2] 모두 처음이라 SBT 프로젝트에  의존성 추가 방법이 필요해 포스팅을 통해 기록한다.

[^1]: 아파치에서 관리하는 오픈소스 데이터 분석 프레임워크이자 플랫폼.
[^2]: Scala Build Tool. 이름은 보면 스칼라를 위한 것 같지만 사실 다른 언어들에도 범용적으로 사용할 수 있는 빌드 도구.

## build.sbt 파일 수정

SBT는 [Apache Ivy](https://ant.apache.org/ivy/) 를 이용해 의존성을 관리한다. 아래는 build.sbt 파일로 프로젝트 루트 디렉토리에 위치한 빌드 셋팅 정보가 담긴 파일이다.

```scala
name := "learning_spark"

version := "0.1"

scalaVersion := "2.12.6"

// 위는 IntelliJ 에 의해 자동 생성
// 아래는 의존성 추가
libraryDependencies += "org.apache.spark" % "spark-core_2.11" % "2.3.1"
```

보는바와 같이 Spark Core 라이브러리에 대한 의존성이 추가돼있다. 의존성 추가 방법은 다음처럼 `libraryDependencies` 키에 해당 라이브러리의 정보를 형식에 맞게 추가한다.

```scala
libraryDependencies += groupID % artifactID % revision
```

or

```scala
libraryDependencies += groupID % artifactID % revision % configuration
```

___
