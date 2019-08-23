---
layout: post
comments: true
title: "파이썬 버젼을 관리하기 위한 pyenv"
description:
date: 2019-08-23 19:34:26
main-class: 'python'
tags:
- "python"
---

# Introdution
파이썬에 대해 작업을 진행하면서 파이썬을 여러가지 버젼을 사용해야 되는 경우가 종종 있다.<br>
대표적으로 파이썬로 만들어진 라이브러리를 사용할 때, 특정 파이썬 버젼에만 동작하는 라이브러리들이 있다.<br>
그럴때마다 일일이 환경변수를 바꿔서 버젼을 달리하는게 매우 귀찮다.<br>
그래서 임의의 환경을 따로 만들어 그 환경만 바꿔주는게 바로 `pyenv`이다.<br>

# Manual

## > Install
설치는 **Mac**을 기반으로 하였다.<br>
여기서는 **Homebrew**가 이용된다.<br>
```shell
brew install pyenv
```

## > 현재 설치된 pyenv의 버젼
```shell
pyenv --version

> pyenv 1.2.13
```

<br>

## > 현재 설치된 pyenv 환경 목록
```shell
pyenv versions

> * system (set by /Users/choewonjun/.pyenv/version)
> 3.5.2
```
여기서 * 표시는 현재 선택된 환경을 의미한다.<br>

## > 새로운 pyenv 환경 설치
```shell
pyenv install 2.1.3

> 2.1.3
```
install 뒤에는 설치될 파이썬 버젼이 온다.<br>

## > 설치 가능한 python version 목록
```shell
pyenv install --list

> Available versions:
> 2.1.3
> 2.2.3
> 2.3.7
...
> stackless-3.5.4
```

## > 설치된 pyenv 환경 제거
```shell
pyenv uninstall 2.1.3
```
