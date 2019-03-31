---
layout: post
comments: true
title: "실행 컨텍스트"
description: 스코프, 호이스팅, 클로저가 생기게 되는 근본적인 이유
date: 2019-03-31 12:22:51
main-class: 'js'
tags:
- "javascript"
---

**실행 컨텍스트**는 `컨텍스트`라고 부르며 자바스크립트에서는 중요한 개념이다.<br>
컨텍스트는 코드가 실행되는 추상적인 객체 즉, **프로그램의 현재 실행중인 부분**을 의미한다.<br>
정확히는 코드가 실행되는 환경이며, 해당 코드가 실행될 때 생성된다.<br>
그러므로 자바스크립트에서 작성하는 모든 코드는 어떤 형태로든 항상 컨텍스트에 속하게 된다.<br><br>

컨텍스트는 자바스크립트 특징인 스코프, 호이스팅, 클로저, this 개념의 기초가된다.<br>

아래는 실제 자바스크립트 코드가 실행되면서 컨텍스트의 변화를 나타낸 것이다.
예제에 사용될 전체적인 코드는 다음과 같다.
```js
var globalVar = 'global';

function globalFunc() {
    var func = 'func';

    console.log(globalVar);

    function innerFunc() {
        var innerVar = 'inner';
        console.log(globalVar);
    }
    innerFunc();
}

globalFunc();
console.log(globalVar);
```
이제부터 하나씩 컨텍스트가 생성되는 과정을 보자.
먼저 처음 자바스크립트 파일이 실행될 떄 **전역 컨텍스트**가 생성된다.
![context1](/assets/img/js/context1.png)
<br>
전역 컨텍스트가 생성되고나서 변수 및 함수의 호이스팅이 일어난후 순차적으로 실행한다.<br>
함수가 실행될 때, 새로운 컨텍스트가 실행되고 컨텍스트 스택에 쌓인다.
![context2](/assets/img/js/context2.png)
<br>
마찬가지로 함수 내부의 호이스팅이 일어나고 순차적으로 실행한다.<br>
다른 함수가 실행될 때, 실행중인 컨텍스트(globalFunc)가 잠시 중단되고 새로운 컨텍스트가 실행된다.
![context3](/assets/img/js/context3.png)
<br>
함수 내부가 순차적으로 실행된후 마지막 코드까지 실행을 완료하면 실행중인 컨텍스트가 종료된다.
![context4](/assets/img/js/context4.png)
<br>
컨텍스트 종료후 다음 컨텍스트를 실행한다.<br>
마찬가지로 마지막 코드까지 실행이 완료되면 실행중인 컨텍스트가 종료된다.
![context5](/assets/img/js/context5.png)
<br>
전역 컨텍스트를 계속 실행하고 더이상 진행될 코드가 없으면 전역컨텍스트를 종료한다.
![context6](/assets/img/js/context6.png)

