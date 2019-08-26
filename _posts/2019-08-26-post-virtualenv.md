---
layout: post
comments: true
title: "프로젝트 별 파이썬 버젼관리를 위한 virtualenv"
description:
date: 2019-08-26 09:09:51
main-class: 'python'
tags:
- "python"
---

# Introdution
이전에 파이썬 버젼별로 관리를 하기 위해 별도의 환경을 구성하는것이 `pyenv`였다.<br>
하지만 `pip install [lib]`을 하는 경우, 해당 환경에 설치가 되게된다.<br>
그럴 경우 다른 파이썬 프로젝트에서 해당 환경을 사용하는 경우, 원치않은 라이브러리가 설치된 상태가 된다.<br>
예를들어 python2.x 버젼에 Django 1.0을 사용하고 있는 프로젝트가 있고, 같은 python2.x 버젼에 Django 1.3를 사용하는 프로젝트가 있는 경우 같은 `pyenv`환경에서는 Django의 버젼이 충돌하게 된다.<br>
그래서 `pyenv`는 버젼으로만 쓰고 프로젝트 별 로컬환경 구성을 도와주는 것이 `virtualenv`이다.<br>

<br><br>

# Manual

## > Install
설치는 **Mac**을 기반으로 하였다.<br>
여기서는 **Homebrew**가 이용된다.<br>
```shell
brew install pyenv-virtualenv
```
<br>

## > 현재 설치된 virtualenv의 버젼
```shell
virtualenv --version

> 16.7.2
```

<br>

## > 현재 프로젝트에 새 virtualenv 설정

<br>

## > 현재 프로젝트의 virtualenv 활성화
`.`과 `source` 명령어 둘다 적용된다.<br>
적용시 shell 앞에 현재 `virtualenv`의 이름이 온다.
```shell
. venv/bin/activate
source venv/bin/activate

> (venv)  ~/Study/circleGiven.github.io
```
