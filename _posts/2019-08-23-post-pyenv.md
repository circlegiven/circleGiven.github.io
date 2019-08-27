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

<br><br>

# Manual

## > Install
설치는 **Mac**을 기반으로 하였다.<br>
여기서는 **Homebrew**가 이용된다.<br>
```shell
brew install pyenv
```
<br>
설치가 끝난 후, 사용하고 있는 **profile**에 아래를 추가한다.
```shell
# pyenv setting
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
```

<br>

## > 현재 설치된 pyenv의 버젼
```shell
pyenv --version

> pyenv 1.2.13
```

<br>

## > 현재 설치된 pyenv 환경 목록
`*` 표시는 현재 선택된 환경을 의미한다.
```shell
pyenv versions

> * system (set by /Users/choewonjun/.pyenv/version)
> 3.5.2
```

<br>

## > 현재 사용되는 버젼
```shell
pyenv version

> system (set by /Users/choewonjun/.pyenv/version)
```

<br>

## > 현재 전역 python 버젼 설정
```shell
# pyenv global [version]
pyenv global 3.5.2

> * 3.5.2 (set by /Users/choewonjun/.pyenv/version)
```

<br>

## > 현재 shell 의 python 버젼 설정
현재 shell을 벗어나게 되면 초기화 된다 (터미널 창을 닫으면)
```shell
# pyenv shell [version]
pyenv shell 3.5.2

> 3.5.2 (set by PYENV_VERSION environment variable)
```

<br>

## > 현재 디렉토리에서 python 버젼 설정 
명령어 수행시 해당 디렉토리에서 `.python-version`이라는 파일이 생성된다.<br>
`pyenv shell [version]` 명령어와는 달리 디렉토리를 벗어나도 초기화되지 않는다.<br>
즉, 해당 디렉토리에 접근하면 자동으로 지정된 환경이 설정된다. 
```shell
# pyenv local [version]
pyenv local 3.5.2

> 3.5.2 (set by /Users/choewonjun/Study/circleGiven.github.io/.python-version)
```

<br>

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

<br>

## > 새로운 pyenv 환경 설치
`pyenv install --list`를 통해 설치 가능한 버젼을 찾아 설치한다.
```shell
# pyenv install [version]
pyenv install 2.1.3

> 2.1.3
```
<br>

만약 지원하지 않는 버젼이라면 아래와 같은 메세지가 나온다.
```shell
pyenv install ppap 
 
> python-build: definition not found: ppap
  See all available versions with `pyenv install --list'.
  If the version you need is missing, try upgrading pyenv:
    brew update && brew upgrade pyenv
```

<br>

## > 현재 pyenv 환경을 복사
```shell
# pyenv virtualenv [env]
pyenv virtualenv venv

> venv
```

<br>

## > 설치된 pyenv 환경 제거
```shell
# pyenv uninstall [version]
pyenv uninstall 2.1.3
```
