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
여기서는 **Homebrew**가 이용된다.
```shell
brew install pyenv-virtualenv
```
<br>
설치가 끝난 후, 사용하고 있는 **profile**에 아래를 추가한다.
```shell
# pyenv-virtualenv setting
eval "$(pyenv virtualenv-init -)"
```

<br>

## > 현재 설치된 virtualenv의 버젼
```shell
virtualenv --version

> 16.7.2
```

<br>

## > 현재 프로젝트에 새 virtualenv 생성
현재 설정된 python 버젼으로 생성된다.
```shell
# virtualenv [env]
virtualenv venv

> New python executable in /Users/choewonjun/Study/circleGiven.github.io/venv/bin/python
  Installing setuptools, pip, wheel...
  done.
```
<br>
현재 설정된 python 버젼이 2.x 라면, 아래와 같은 option을 추가하여 python3 버젼으로 생성이 가능하다.
```shell
# virtualenv -p python3 [env]
virtualenv -p python3 venv

> Running virtualenv with interpreter /Users/choewonjun/.pyenv/shims/python3
  Already using interpreter /usr/local/opt/python/bin/python3.7
  Using base prefix '/usr/local/Cellar/python/3.7.4/Frameworks/Python.framework/Versions/3.7'
  New python executable in /Users/choewonjun/Study/circleGiven.github.io/venv/bin/python3.7
  Also creating executable in /Users/choewonjun/Study/circleGiven.github.io/venv/bin/python
  Installing setuptools, pip, wheel...
  done.
```

<br>

## > 현재 프로젝트의 virtualenv 활성화
**활성화를 할 경우 수동으로 비활성화를 하기 전까지 유지되므로, 반드시 비활성화를 해 주어야한다.**<br>
`.`과 `source` 명령어 둘다 적용된다.<br>
적용시 shell 앞에 현재 `virtualenv`의 이름이 온다.
```shell
# source [env]/bin/activate
. venv/bin/activate
source venv/bin/activate

> (venv)  ~/Study/circleGiven.github.io
```

<br>

## > 현재 활성화된 virtualenv 종료
```shell
deactivate
```

<br>

## > 현재 설정된 virtualenv 제거
```shell
# rm -rf [env]
rm -rf venv
```
