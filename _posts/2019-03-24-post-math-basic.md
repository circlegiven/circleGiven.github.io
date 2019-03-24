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
고정된 값
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
기울기는 그래프로 표현할 떄 해당하는 점의 기울어진 정도를 의미한다.<br>
1차식에서는 x와 y의 관계를 그래프로 표현할 떄, **직선**모양이 된다.<br>
기울기는 (1차식일 때만) **최고차항의 계수**에 해당한다.
![slope](/assets/img/math/slope.png)
<br>

# 절편 intercept
절편은 (1차식일 때만) x의 값이 0일때의 y값을 의미한다.<br>
![intercept](/assets/img/math/intercept.png)
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
제곱근을 표현할 때 숫자가 아닌 기호를 사용하는데 이 기호를 **근호**라고 부른다.
![근호](/assets/img/math/근호.png)
제곱근은 아래와 같은 식을 성립한다.
![example](/assets/img/math/example_square_root.png)
