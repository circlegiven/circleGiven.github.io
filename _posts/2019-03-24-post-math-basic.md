---
layout: post
comments: true
title: "기초 수학"
date: 2019-03-24 14:40:39
description: "프로그래머를 위한 수학"
main-class: 'math'
tags:
- "math"
---

# 변수 variable
고정되지 않은 값, 가변값
![variable](/assets/img/math/variable.png)
<br>

# 상수 constant
고정된 값, 변하지 않는 값
![constant](/assets/img/math/constant.png)
<br>

# 항
숫자나 문자, 또는 그 둘의 곱으로 표현되는 식
![항](/assets/img/math/항.png)
위에서는 두개의 항을 가지고 있는 식이다.
<br>

# 차수 degree
각 항에 **변수**가 곱해진 횟 수
![degree](/assets/img/math/degree.png)
위에서 차수는 2이다.<br>
만약 변수가 없고 상수만 있는 항이라면 차수는 0이다.<br>
주의할 것은 차수가 변수 하나에만 해당하는 것이 아니라는 것이다.<br>
두 개 이상의 변수가 곱해진 항의 차수는 **각 변수의 지수를 모두 더한 값**이다.
![degree2](/assets/img/math/degree2.png)
즉 위에서는 차수가 2가된다.
<br>

# 계수 coefficient
각 항에서 **변수에 해당하는 문자를 제외**한 부분
![coefficient](/assets/img/math/coefficient.png)
계수의 **부호**에 따라 그래프의 모양이 달라진다.
<br>

# 단항식 monomial
항이 1개인 식
![monomial](/assets/img/math/monomial.png)
<br>

# 다항식 polynomial
항이 여러개인 식
![polynomial](/assets/img/math/polynomial.png)
<br>

# 최고차항
**차수**가 가장 높은 항
![최고차항](/assets/img/math/최고차항.png)
최고차항에 따라 해당 식이 몇차식인지 결정된다.<br>
즉 위에서는 최고차항의 차수가 2이기 때문에 2차식이다.
<br>

# 기울기 slope
기울기는 그래프로 표현할 때 해당하는 점의 기울어진 정도를 의미한다.<br>
1차식에서는 x와 y의 관계를 그래프로 표현할 때, **직선**모양이 된다.<br>
기울기는 (1차식일 때만) **최고차항의 계수**에 해당한다.
![slope](/assets/img/math/slope.png)
<br>

# 절편 intercept
절편은 (1차식일 때만) x의 값이 0일때의 y값을 의미한다.<br>
![intercept](/assets/img/math/intercept.png)
<br>

# n차식
n차식은 항상 최고차항의 계수가 0이 아니라는 것이 조건에 붙는다.
그 이유는 n차식이라고 정의를 내렸기 때문에 최고차항의 계수가 0이 되버리면
최고차항이 아니게 되므로 n차식이 아니게 된다.
<br>

# 함수 function
어떤 입력값 x에 따라 하나의 출력값 y가 결정된다면 y는 x의 함수이다.<br>
이 관계를
![function](/assets/img/math/function.png)
와 같이 표기한다.<br>
프로그래밍에서는 수학에서 함수의 의미보다 확장되어<br>
어떤 입력값에 대해 참(TRUE)나 거짓(FALSE), 문자열과 같은 형태도 출력값으로 사용할 수 있다.
<br>

# 제곱근 square root
제곱을 했을 때 어떤 수(y)가 되는 값 (x)이 있다면, x를 y의 **제곱근**이라고 한다.
![square_root](/assets/img/math/square_root.png)
이 때, y가 양수라면 x는 항상 2개 이다.

제곱근을 표현할 때 숫자가 아닌 기호를 사용하는데 이 기호를 **근호**라고 부른다.
![근호](/assets/img/math/근호.png)
제곱근은 아래와 같은 식을 성립한다.
(단, x > 0, y > 0 일 때)
![example](/assets/img/math/example_square_root.png)
<br>

# 거듭제곱
x를 a번 곱한 것을
**x의 a제곱, x의 a승** 이라 부른다.
![거듭제곱](/assets/img/math/거듭제곱.png)
이 때, x를 **밑(base)**, a를 **지수(exponent, index)**라고 한다.
지수는 반드시 정수일 필요는 없고, 분수나 음수가 될 수 있다.
<br>

# 거듭제곱근
a제곱 하면 x가 되는 수, a승 하면 x가 되는 수를
**x의 a 제곱근**이라 부른다.
![거듭제곱근](/assets/img/math/거듭제곱근.png)
2제곱은 평방근이라고도 하며, 2를 생략할 수 있다.
![평방근](/assets/img/math/평방근.png)

거듭제곱과 거듭제곱근은 아래와 같은 식을 성립한다.
(단, x > 0, y > 0 일 때)
![example](/assets/img/math/example_거듭제곱_거듭제곱근.png)
<br>

# 지수함수 exponential function
a > 0, a가 1이 아닐 때, 아래와 같은 형태의 함수를 **지수함수**라 한다.
![지수함수](/assets/img/math/지수함수.png)
x가 0일 때는 a의 0승이기 때문에 1,
x가 1일 때는 a의 1승이기 때문에 a,
따라서 지수함수는 점 (0, 1), (1, a)를 항상 통과한다.

지수함수가 a < 0이 될 수없는 이유는, x가 실수범위가 되려면 a > 0 이어야하기 때문에 제한을 건것이다.

# 로그 log
로그는 지수의 정반대의 개념이다.
x가 a의 y승이라고 표현될 때, 지수 y를 a를 밑으로 하는 x의 **로그**라고 하며, 기호 **log**를 사용하여 아래와 같이 표현한다.
![antilogarithm](/assets/img/math/antilogarithm.png)
이 때, x를 **진수(antilogarithm)**라고 하는데, a > 0, a 는 1이 아니고 x > 0 이다.<br>
예를 들어 아래와 같이
![로그함수1](/assets/img/math/로그함수1.png)
의 값을 구한다고 한다면,
![로그함수2](/assets/img/math/로그함수2.png)
를 만족하는 수를 찾아야 되므로
![로그함수3](/assets/img/math/로그함수3.png)
이 되게 된다.

로그는 아래와 같은 식을 성립한다.
(단, a > 0, a는 1이 아니고, X > 0, Y > 0 일 때)
![example](/assets/img/math/example_log.png)
<br>

# 로그함수 logarithm
위와 같이 **진수**를 변수로 사용하는 함수가 **로그함수**이다.
![antilogarithm](/assets/img/math/antilogarithm.png)
로그함수는 x가 0에 가까울 수록 무한대로 **발산**한다.<br>
a의 값에 따라 a > 1 일때는 음의 무한대로, 0 < a < 1 일 때는 양의 무한대로 발산한다.<br>
둘 다 x = 1일 때 y = 0이 항상 성립하므로 점 (1, 0)을 항상 통과한다.
<br>

# 자연로그 natural logarithm
먼저 **네이피어 상수**에 대해서 알아야한다.
![napier](/assets/img/math/napier.png)
여기서 e는 2.71821... 에 해당하는 상수이다.<br>
e가 2.71821...이 된 이유는
![napier_limit](/assets/img/math/napier_limit.png)
에서 n을 무한대로 보낼 때, 크기가 커 질 수록 일정한 값인 2.71821...에 가까워진다.<br>
이를 **네이피어 상수**로 정의하고 알파벳은 **e**로 표기하기로 하였다.<br>
<br>
e를 밑으로 하는 로그를 **자연로그**라 하고 이를 **ln**으로 표기 할 수 있다.<br>
굳이 네이피어 상수를 정의해서 사용하는 이유는 네이피어 상수가 계산하는데 있어서 유용한 특징이 있기 때문이다.<br>
네이피어 상수는 다음과 같이 지수의 밑으로도 사용이 가능하다.
![napier_exponential](/assets/img/math/napier_exponential.png)
이런 지수함수를 **exp x**나 **exp(x)**와 같이 표현한다.
