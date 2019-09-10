---
layout: post
comments: true
title: "mock.js의 Random"
description:
date: 2019-09-09 14:48:06
main-class: 'js'
tags:
- "javascript"
---

# Introdution
기본 사용법만 보면 그렇게 mock.js의 매력이 없는것 같이 보인다.<br>
하지만 mock.js의 매력은 바로 `Mock.Random`에 있다.

<br>
<br>

# Mock.Random
`Mock.Random`은 여러 랜덤 데이터를 생성하는데 사용되어 사용자가 일일이 value에 값을 입력하지 않아도된다.
Mock.Random에 정의되어 있으며 value에서 `@`또는 `Mock.Random.`을 사용하여 값을 생성할 수 있다.<br>
(`@`를 **점자**라 불른다.)
```javascript
Mock.mock({
    "property1": Mock.Random.natural(),
    "property2": Mock.Random.natural(10,20),
    "property3": "@natural",
    "property4": "@natural()",
});
```

<br>

## Basic
### > Boolaen
`Random.boolean(min?, max?, value?)`는 **min / (min + max) 의 확률 만큼 value에 설정된 Boolean 값을 생성**한다.<br>
min과 max의 기본 설정값은 **1**이다.
```javascript
Mock.mock({
    "property": "@boolean()"
});

// result
{
    "property": false
}
```

<br>

### > Natural
`Random.natural(min?, max?)`는 **min-max 범위내 무작위의 자연수를 생성**한다.<br>
min의 기본 설정값은 **0**이며, max의 기본 설정값은 **9007199254740992**이다.
```javascript
Mock.mock({
    "property": "@natural(20,40)"
});

// result
{
    "property": 24
}
```

<br>

### > Integer
`Random.integer(min?, max?)`는 **min-max 범위내 무작위의 정수를 생성**한다.<br>
min의 기본 설정값은 **-9007199254740992**이며, max의 기본 설정값은 **9007199254740992**이다.
```javascript
Mock.mock({
    "property": "@integer(20,40)"
});

// result
{
    "property": 24
}
```

<br>

### > Float
`Random.float(min?, max?, dmin?, dmax?)`는 **min-max 범위내 무작위의 정수를 생성하고 dmin-dmax 범위내 무작위의 수만큼 소수를 생성**한다.<br>
min의 기본 설정값은 **-9007199254740992**이고, max의 기본 설정값은 **9007199254740992**이다.
dmin의 기본 설정값은 **0**이며, dmax의 기본 설정값은 **17**이다.
```javascript
Mock.mock({
    "property": "@float(20,40,1,1)"
});

// result
{
    "property": 32.3
}
```

<br>

### > Character
`Random.character(pool?)`는 **하나의 무작위 문자열을 생성**한다.<br>
지원하는 파라메터(pool)는 `lower`, `upper`, `number`, `symbol`, `문자열`이 있다.<br>
> `lower` : 알파벳 소문자 <br>
`upper` : 알파벳 대문자 <br>
`number` : 숫자 <br>
`symbol` : 특수문자 <br>
`문자열` : 문자열 내 무작위 문자

전달하지 않는 경우 문자열을 제외한 4가지 파라메터 중 무작위로 선택하여 생성한다.
```javascript
Mock.mock({
    "property": "@character('upper')"
});

// result
{
    "property": "S"
}
```

<br>

### > String
`Random.string(pool?, min?, max?)`는 **무작위 문자열을 생성**한다.<br>
min의 기본 설정값은 **3**이며, max의 기본 설정값은 **7**이다.<br>
따라서 파라메터를 넘기지 않고 호출시 자동으로 3, 7이 적용되어 문자열을 생성한다.
```javascript
Mock.mock({
    "property": '@string()'
});

// result
{
    "property": "ABA2"
}
```
숫자를 하나만 넘길 경우 **문자열의 길이**를 나타내고, 숫자를 두개 넘길 경우 **min-max 범위 내 문자열을 생성**한다.
```javascript
Mock.mock({
    "property": '@string(3)'
});

// result
{
    "property": "nlC"
}
```
지원하는 파라메터(pool)는 `Character`와 동일하지만 **단독으로는 사용할 수 없다.**
> `lower` : 알파벳 소문자 <br>
`upper` : 알파벳 대문자 <br>
`number` : 숫자 <br>
`symbol` : 특수문자 <br>
`문자열` : 문자열 내 무작위 문자

전달하지 않는 경우 문자열을 제외한 4가지 파라메터 중 무작위로 선택하여 생성한다.
```javascript
Mock.mock({
    "property": "@string('upper', 3)"
});

// result
{
    "property": "MBH"
}
```

<br>

### > Range
`Random.range(start?, stop, step?)`는 **start-stop 범위 내 step만큼 증가하는 숫자를 Array로 생성**한다.<br>
step의 기본 설정값은 **1**이다. 따라서 세번쨰 인자로 주지않는한 항상 1씩 증가하는 숫자를 생성한다.

숫자를 하나만 넘길 경우, **0부터 넘긴 숫자까지 연속적인 숫자를 Array로 생성**한다.
```javascript
Mock.mock({
    "property": '@range(10)'
});

// result
{
    "property": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
}
```

숫자를 두개 넘길 경우, **첫번째 인자부터 두번째 인자 전까지의 연속적인 숫자를 Array로 생성**한다.<br>
만약 첫번째 인자가 두번째 인자보다 큰 경우 빈 Array를 생성한다.
```javascript
Mock.mock({
    "property": '@range(2, 5)'
});

// result
{
    "property": [2, 3, 4]
}
```

숫자를 세개를 넘길 경우, **첫번째 인자부터 시작하여 두번째 인자 전까지 세번째 인자만큼 증가하는 숫자를 Array로 생성**한다.
```javascript
Mock.mock({
    "property": '@range(1, 10, 3)'
});

// result
{
    "property": [1, 4, 7]
}
```

<br>

## Date
### > Date
`Random.date(format?)`은 **무작위의 날짜 문자열을 생성**한다.

**format**의 기본 설정값은 **yyyy-MM--dd** 포맷이다.<br>
format은 생성된 문자열의 표시를 변경한다.
```javascript
Mock.mock({
    "property": "@date()"
});

// result
{
    "property": "1975-08-28"
}
```
format에 들어갈 수 있는 점자는 아래와 같다.

| Format 	|             Description             	|
|:------:|:-----------------------------------:|
|  yyyy  	| 연도의 전체숫자                     	|
|   yy   	| 연도 두 자릿수                      	|
|    y   	| 연도 두 자릿수                      	|
|   MM   	| 0이 포함되는 월의 숫자              	|
|    M   	| 0이 포함되지 않는 월의 숫자         	|
|   dd   	| 0이 포함되는 일의 숫자              	|
|    d   	| 0이 포함되지 않는 일의 숫자         	|
|   HH   	|  0이 포함되는 24 형태의 시간        	|
|    H   	| 0이 포함되지 않는 24 형태의 시간    	|
|   hh   	| 0이 포함되는 12 형태의 시간         	|
|    h   	| 0이 포함되지 않는 12 형태의 시간    	|
|   mm   	| 0이 포함되는 분                     	|
|    m   	| 0이 포함되지 않는 분                	|
|   ss   	| 0이 포함되는 초                     	|
|    s   	| 0이 포함되지 않는 초                	|
|   SS   	| 0이 포함되는 밀리초                 	|
|    S   	| 0이 포함되지 않는 초                	|
|    A   	| AM 또는 PM 표기                     	|
|    a   	| am 또는 pm 표기                     	|
|    T   	| 1970-1-1 00:00:00 UTC 이후의 밀리초 	|

<br>

### > Time
`Random.time(format?)`은 **무작위의 시간 문자열을 생성**한다.

**format**의 기본 설정값은 **HH:mm:ss** 포맷이다.<br>
format은 생성된 문자열의 표시를 변경한다.
```javascript
Mock.mock({
    "property": "@time()"
});

// result
{
    "property": "19:56:36"
}
```
format에 들어갈 수 있는 점자는 `@Date`와 같다.

<br>

### > Datetime
`Random.datetime(format?)`은 **무작위의 날짜와 시간 문자열을 생성**한다.

**format**의 기본 설정값은 **yyyy-MM-dd HH:mm:ss** 포맷이다.
```javascript
Mock.mock({
    "property": "@datetime()"
});

// result
{
    "property": "1971-06-30 21:13:57"
}
```
format에 들어갈 수 있는 점자는 `@Date`와 같다.

<br>

### > Now
`Random.now(unit?, format?)`은 **현재 날짜와 시간 문자열을 생성**한다.<br>
Random.now()는 [moment.js](https://momentjs.com/)를 참조하여 만들어졌다.

**unit**은 현재 시간 중 어떤 값까지를 표시해줄 것인지를 지정한다.<br>
지정 가능한 값은 `year`、 `month`、 `week`、 `day`、 `hour`、 `minute`、 `second`、 `week`가 있다.<br>
값을 지정한 경우 그 하위의 단위는 최솟값으로 표시된다.
```javascript
Mock.mock({
    "property1": "@now('year')",
    "property2": "@now('day')"
});

// result
{
    "property1": "2019-01-01 00:00:00",
    "property2": "2019-09-09 00:00:00"
}
```
**format**은 생성된 문자열의 표시를 변경한다.<br>
format에 들어갈 수 있는 점자는 `Date`와 같다.
```javascript
Mock.mock({
    "property1": "@now('year', 'yyyy-MM-dd')",
    "property2": "@now('day', 'yyyy-MM-dd')"
});

// result
{
    "property1": "2019-01-01",
    "property2": "2019-09-09"
}
```

<br>

## Image
### > Image
`Random.image(size?, background?, foreground?, format?, text?)`는 **무작위의 이미지 주소를 생성**한다.<br>

**size**는 이미지의 크기를 문자열로 입력한다.<br>
만약 입력하지 않는 경우 아래의 사이즈 목록 중 무작위로 생성한다.
![test](http://dummyimage.com/728x90)
```javascript
// size array
[
  '300x250', '250x250', '240x400', '336x280', 
  '180x150', '720x300', '468x60', '234x60', 
  '88x31', '120x90', '120x60', '120x240', 
  '125x125', '728x90', '160x600', '120x600', 
  '300x600'
]

Mock.mock({
    "property": "@image()"
});

// result
{
    "property": "http://dummyimage.com/728x90"
}
```

**background**는 이미지의 배경색을 문자열로 입력한다.<br>
입력하지 않은 경우 기본 설정값은 **'#000000'**이다.
![test](http://dummyimage.com/200x100/FF6600)
```javascript
Mock.mock({
    "property": "@image('200x100', '#FF6600')"
});

// result
{
    "property": "http://dummyimage.com/200x100/FF6600"
}
```

**foreground**는 이미지 내부의 글자색을 입력한다.<br>
입력하지 않은 경우 기본 설정값은 **'#FFFFFF'**이다.
![test](http://dummyimage.com/200x100/FF6600&text=#FFF)
```javascript
Mock.mock({
    "property": "@image('200x100', '#FF6600', '#FFF')"
});

// result
{
    "property": "http://dummyimage.com/200x100/FF6600/FFF"
}
```

**format**은 이미지의 확장자를 의미한다.<br>
`png`, `gif`, `jpg` 중 선택할 수 있으며, 입력하지 않은 경우 **'png'**이다.<br>
단, **text**인자와 같이 입력되어야한다.
![test](http://dummyimage.com/200x100/FF6600/FFF.jpg&text=test)
```javascript
Mock.mock({
    "property": "@image('200x100', '#FF6600', '#FFF', 'jpg', 'test')"
});

// result
{
    "property": "http://dummyimage.com/200x100/FF6600/FFF.jpg&text=test"
}
```

**text**는 이미지 내부의 글자를 의미한다.<br>
입력하지 않은 경우 기본 설정값은 **이미지의 크기**이다.
![test](http://dummyimage.com/200x100/FF6600/FFF.jpg&text=test)
```javascript
Mock.mock({
    "property": "@image('200x100', '#FF6600', '#FFF', 'jpg', 'test')"
});

// result
{
    "property": "http://dummyimage.com/200x100/FF6600/FFF.jpg&text=test"
}
```

<br>

### > Dataimage
`Random.dataimage(size?, text?)`는 **무작위의 이미지 리소스를 생성**한다.<br>
이미지의 배경색은 항상 무작위로 생성되며, 생성되는 값은 [brandcolors](http://brandcolors.net/)를 참조하자.

**size**는 이미지의 크기를 문자열로 입력한다.<br>
만약 입력하지 않는 경우 아래의 사이즈 목록 중 무작위로 생성한다.
```javascript
// size array
[
  '300x250', '250x250', '240x400', '336x280', 
  '180x150', '720x300', '468x60', '234x60', 
  '88x31', '120x90', '120x60', '120x240', 
  '125x125', '728x90', '160x600', '120x600', 
  '300x600'
]

Mock.mock({
    "property": "@dataimage()"
});

// result
{
    "property": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAJYCAYAAADlke1wAAARqElEQVR4Xu3ZaYxdBR2G8f+dpZ3ptNNW1AgIiATXIFHhA1HDYhQUt0QFAoK4Baw7WBVBWUT2VRSUpRBAtiioqIiguAsJYLQuaHAB4650m+l0ls6YcyYdmZDI9NNT+j7zCe49M+/lub+ce86l88g+B02VPxaACnQECJV3ti0gQCGgBQSI5ndcgBpACwgQze+4ADWAFhAgmt9xAWoALSBANL/jAtQAWkCAaH7HBagBtIAA0fyOC1ADaAEBovkdF6AG0AICRPM7LkANoAUEiOZ3XIAaQAsIEM3vuAA1gBYQIJrfcQFqAC0gQDS/4wLUAFpAgGh+xwWoAbSAANH8jgtQA2gBAaL5HRegBtACAkTzOy5ADaAFBIjmd1yAGkALCBDN77gANYAWECCa33EBagAtIEA0v+MC1ABaQIBofscFqAG0gADR/I4LUANoAQGi+R0XoAbQAgJE8zsuQA2gBQSI5ndcgBpACwgQze+4ADWAFhAgmt9xAWoALSBANL/jAtQAWkCAaH7HBagBtIAA0fyOC1ADaAEBovkdF6AG0AICRPM7LkANoAUEiOZ3XIAaQAsIEM3vuAA1gBYQIJrfcQFqAC0gQDS/4wLUAFpAgGh+xwWoAbSAANH8jgtQA2gBAaL5HRegBtACAkTzOy5ADaAFBIjmd1yAGkALCBDN77gANYAWECCa33EBagAtIEA0v+MC1ABaQIBofscFqAG0gADR/I4LUANoAQGi+R0XoAbQAgJE8zsuQA2gBQSI5ndcgBpACwgQze+4ADWAFhAgmt9xAWoALSBANL/jAtQAWkCAaH7HBagBtIAA0fyOC1ADaAEBovkdF6AG0AICRPM7LkANoAUEiOZ3XIAaQAsIEM3vuAA1gBYQIJrfcQFqAC0gQDS/4wLUAFpAgGh+xwWoAbSAANH8jgtQA2gBAaL5HRegBtACAkTzOy5ADaAFBIjmd1yAGkALCBDN77gANYAWECCa33EBagAtIEA0v+MC1ABaQIBofscFqAG0gADR/I4LUANoAQGi+R0XoAbQAgJE8zsuQA2gBQSI5ndcgBpACwgQze+4ADWAFhAgmt9xAWoALSBANL/jAtQAWkCAaH7HBagBtIAA0fyOC1ADaAEBovkdF6AG0AICRPM7LkANoAUEiOZ3XIAaQAsIEM3vuAA1gBYQIJrfcQFqAC0gQDS/4wLUAFpAgGh+xwWoAbSAANH8jgtQA2gBAaL5HRegBtACAkTzOy5ADaAFBIjmd1yAGkALCBDN77gANYAWECCa33EBagAtIEA0v+MC1ABaQIBofscFqAG0gADR/I4LUANoAQGi+R0XoAbQAgJE8zsuQA2gBQSI5ndcgBpACwgQze+4ADWAFhAgmt9xAWoALSBANL/jAtQAWkCAaH7HBagBtIAA0fyOC1ADaAEBovkdF6AG0AICRPM7LkANoAUEiOZ3XIAaQAsIEM3vuAA1gBYQIJrfcQFqAC0gQDS/4wLUAFpAgGh+xwWoAbSAANH8jgtQA2gBAaL5HRegBtACAkTzOy5ADaAFBIjmd1yAGkALCBDN77gANYAWECCa33EBagAtIEA0v+MC1ABaQIBofscFqAG0gADR/I4LUANoAQGi+R0XoAbQAgJE8zsuQA2gBQSI5ndcgBpACwgQze+4ADWAFhAgmt9xAWoALSBANL/jAtQAWkCAaH7HBagBtIAA0fyOC1ADaAEBovkdF6AG0AICRPM7LkANoAUEiOZ3XIAaQAsIEM3vuAA1gBYQIJrfcQFqAC0gQDS/4wLUAFpAgGh+xwWoAbSAANH8jgtQA2gBAaL5HRegBtACAkTzOy5ADaAFBIjmd1yAGkALCBDN77gANYAWECCa33EBagAtIEA0v+MC1ABaQIBofscFqAG0gADR/I4LUANoAQGi+R0XoAbQAgJE8zsuQA2gBQSI5ndcgBpAC2y1ALt23K7m7793bfjybTX1yOqZyM3j8166Z3Vts7TGf/6bGr/nZ1WjYzPP9+z27Op96Z5Vna4a/8E9NfHL327WG9QZXFjz9ntJdT/j6bXxwT/V2E/um72/7VNr3iteVl1PXloTP/tVjd3108f8/a45HLNZL2oLPnirA9i10/a18MQPVffOO7TZh046v8a/f3f7zwuWH1XzX73frLdj4v5f1rpjP9U+tvDU5dX7kj1mPT/2vZ/W8MkXzOktnHfA3jVw7FFVPd0zx08NDdfq1769/ff5bzqwFiw7vKrTmXl+8u//qjVHfLBqfGLOx8zpxTxBDtrqAM5/zcur/+jDq9PfV9XVmQHYu9eLa+FpH6manKqRq26qiZW/rZ7dn1sbH/h9exact+9eNfDJBsJ4DZ1yYXV6e2rg+PdVdXfX0MfOmD5T/p+fzsKBWvKVy9rjx+78YY1+867q3mG76vTNrw03fb06ixfVkpsva1/TyBU31MTPf10LTz62OksX19i3vlfDZ14yp2OeIK7m/DK3OoCb/ssX33hxdT11mxmAgyvOac+KG67/ao1cet1jAg1+4fTqftYza8NNt9bIJde2zw989N0174B9WixDJ5xTS26+tD27rfvASTWx8oFafNV51XykD596UXU/Z5fqe/OBtfH3D9Xad37kMX+//20HVd8Rb6yNf3i41r5jeft8z56716KzPl61fqRWHXhkzeWYOb+zT5ADYwAuuXVFNWep0a/dUT27Pac6C/pq/Ef31vrPXtW+VQ2u5mw0dMLZNf7je9vH2o/Ujy6ryX/8q9Yc8t7qP/ot1Xfwa2tq1Zpaf9GV7Rlz8s9/az9CF517QvW8aLeauH9le/bteso2NfGHh2vopPOqRkZr4ac+3F5bjt35oxr+9EXTPDqdWvrdG6qmpmrVfofM6ZgniKs5v8wYgEvvvK79eGx+muuyzsCCFsDEvb+odcs/XUtvu7qqb36tXXZ8bfzNg7POUFPrhmv166av4zZBbT7Kq1O15shjavLhv9biqy+orh22nQ6/YbSqt6fd2/S7gxefWt3P3bVGb/lWrf/MlTNvUAuw06lVrzysBi886XGP2XStOOd3eAs/MAfgHde1H59DJ57X3t12P3PHGrzi7KqJjbXqFYfWkq9eUc0d7NBxZ9T43dPXe83d7MAn3l+T//xPrTl42eyPzaqauG9lrfvwqe3j7cfxTtu3d7XDp1wwfXa7/Zqq3t5ae/Rx1f+OQ6p3z91r7I4f1vBpn/0fwLtu/N8Z8KyPP+4xW7inzX55MQCXfG1FdRYNzLqh2HRWXHXA4TV4yWnT14jXfLlGVtzUhuw/6rDqO+R17Vcx6973yfaxRRecWD27P2869PhErXrDO9truEVnH189e7ygxr79gxo+/XPTKK8+v7p22K7Wn395dT192+lrxN/9sdYe9bH2+WavuTZtzpirXnVE9S874nGP2ex3eAv/hRiAzR1wcyfc3CQ0X7s038UteM9bZ978vkNfX/3vOrTFtPotH5j+uL32wqoF/TV81udr7La72q9omq9qmmvAyX8/Ut277jxzFtx0vTg1PFLrjjm5PQMOXnxae9e75vAPVnV3tWfJ5nqv2W9ubAYvaW58dq7xu++voePObM+gj3fMFu5ps19eDMDOk5bUki9+pr3Oe/TP+ouuqtGbb5s+Y117YXVt/7RZz8+csbq7a+mtK6r6+9qz4eQ//12Lr/9cC6z5GG4+jgevPLf9AvrRP5twNY8NLD+65r1639lv0siGWn3Qsva6dK7HbPa7vAX/wlYLsPlKo3uXnWr9ZdfV5EN/ad+CzkB/9b/t4Ore9RntWaz5vyTN1ymP/mnucptrteZMNfaTe2v0lttnPi6b5yYefKhGv/SN9rF5++9dvS98fo3ft7K9tmt+2t/f4wXTv//9e2r0G9+Z9febO+H5B+xdnUULa+KBB2vk8htmvoTedOBcjtmCTW3WS9tqAW5WBQ/GCggQS+9w+6n0yD4HTZnCAlQBAVLl3Z2+LvcMqASygADJ+m57BtQAW8AzINs/fl2A8QTYAAJk+8evCzCeABtAgGz/+HUBxhNgAwiQ7R+/LsB4AmwAAbL949cFGE+ADSBAtn/8ugDjCbABBMj2j18XYDwBNoAA2f7x6wKMJ8AGECDbP35dgPEE2AACZPvHrwswngAbQIBs//h1AcYTYAMIkO0fvy7AeAJsAAGy/ePXBRhPgA0gQLZ//LoA4wmwAQTI9o9fF2A8ATaAANn+8esCjCfABhAg2z9+XYDxBNgAAmT7x68LMJ4AG0CAbP/4dQHGE2ADCJDtH78uwHgCbAABsv3j1wUYT4ANIEC2f/y6AOMJsAEEyPaPXxdgPAE2gADZ/vHrAownwAYQINs/fl2A8QTYAAJk+8evCzCeABtAgGz/+HUBxhNgAwiQ7R+/LsB4AmwAAbL949cFGE+ADSBAtn/8ugDjCbABBMj2j18XYDwBNoAA2f7x6wKMJ8AGECDbP35dgPEE2AACZPvHrwswngAbQIBs//h1AcYTYAMIkO0fvy7AeAJsAAGy/ePXBRhPgA0gQLZ//LoA4wmwAQTI9o9fF2A8ATaAANn+8esCjCfABhAg2z9+XYDxBNgAAmT7x68LMJ4AG0CAbP/4dQHGE2ADCJDtH78uwHgCbAABsv3j1wUYT4ANIEC2f/y6AOMJsAEEyPaPXxdgPAE2gADZ/vHrAownwAYQINs/fl2A8QTYAAJk+8evCzCeABtAgGz/+HUBxhNgAwiQ7R+/LsB4AmwAAbL949cFGE+ADSBAtn/8ugDjCbABBMj2j18XYDwBNoAA2f7x6wKMJ8AGECDbP35dgPEE2AACZPvHrwswngAbQIBs//h1AcYTYAMIkO0fvy7AeAJsAAGy/ePXBRhPgA0gQLZ//LoA4wmwAQTI9o9fF2A8ATaAANn+8esCjCfABhAg2z9+XYDxBNgAAmT7x68LMJ4AG0CAbP/4dQHGE2ADCJDtH78uwHgCbAABsv3j1wUYT4ANIEC2f/y6AOMJsAEEyPaPXxdgPAE2gADZ/vHrAownwAYQINs/fl2A8QTYAAJk+8evCzCeABtAgGz/+HUBxhNgAwiQ7R+/LsB4AmwAAbL949cFGE+ADSBAtn/8ugDjCbABBMj2j18XYDwBNoAA2f7x6wKMJ8AGECDbP35dgPEE2AACZPvHrwswngAbQIBs//h1AcYTYAMIkO0fvy7AeAJsAAGy/ePXBRhPgA0gQLZ//LoA4wmwAQTI9o9fF2A8ATaAANn+8esCjCfABhAg2z9+XYDxBNgAAmT7x68LMJ4AG0CAbP/4dQHGE2ADCJDtH78uwHgCbAABsv3j1wUYT4ANIEC2f/y6AOMJsAEEyPaPXxdgPAE2gADZ/vHrAownwAYQINs/fl2A8QTYAAJk+8evCzCeABtAgGz/+HUBxhNgAwiQ7R+/LsB4AmwAAbL949cFGE+ADSBAtn/8ugDjCbABBMj2j18XYDwBNoAA2f7x6wKMJ8AGECDbP35dgPEE2AACZPvHrwswngAbQIBs//h1AcYTYAMIkO0fvy7AeAJsAAGy/ePXBRhPgA0gQLZ//LoA4wmwAQTI9o9fF2A8ATaAANn+8esCjCfABhAg2z9+XYDxBNgAAmT7x68LMJ4AG0CAbP/4dQHGE2ADCJDtH78uwHgCbAABsv3j1wUYT4ANIEC2f/y6AOMJsAEEyPaPXxdgPAE2gADZ/vHrAownwAYQINs/fl2A8QTYAAJk+8evCzCeABtAgGz/+HUBxhNgAwiQ7R+/LsB4AmwAAbL949cFGE+ADSBAtn/8ugDjCbABBMj2j18XYDwBNoAA2f7x6wKMJ8AGECDbP35dgPEE2AACZPvHrwswngAbQIBs//h1AcYTYAMIkO0fvy7AeAJsAAGy/ePXBRhPgA0gQLZ//LoA4wmwAQTI9o9fF2A8ATaAANn+8esCjCfABhAg2z9+XYDxBNgAAmT7x68LMJ4AG0CAbP/4dQHGE2ADCJDtH78uwHgCbAABsv3j1wUYT4ANIEC2f/y6AOMJsAEEyPaPXxdgPAE2gADZ/vHrAownwAYQINs/fv2/mQ952S00EV8AAAAASUVORK5CYII="
}
```

**text**는 이미지 내부의 글자를 의미한다.<br>
입력하지 않은 경우 기본 설정값은 **이미지의 크기**이다.
```javascript
Mock.mock({
    "property": "@dataimage('200x100', 'test')"
});

// result
{
    "property": "data:image/png;base64,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"
}
```

<br>

## Color
### > Color
`Random.color()`는 **#RRGGBB 포맷의 색상을 무작위로 생성**한다.<br>
```javascript
Mock.mock({
    "property": "@color()"
});

// result
{   
    "property": "#ea79f2"
}
```

<br>

### > Hex
`Random.hex()`는 **#RRGGBB 포맷의 색상을 무작위로 생성**한다.<br>
이것만 보면 `@color`와 다를게 없어보인다.<br>
공식 문서에서도 뭐가 정확히 다른지에 대해 표기하고 있지 않다.<br>
```javascript
Mock.mock({
    "property": "@hex()"
});

// result
{   
    "property": "#ea79f2"
}
```

<br>

### > Rgb
`Random.rgb()`는 **rgb(r, g, b) 포맷의 색상을 무작위로 생성**한다.<br>
```javascript
Mock.mock({
    "property": "@rgb()"
});

// result
{   
    "property": "rgb(242, 236, 121)"
}
```

<br>

### > Rgba
`Random.rgba()`는 **rgba(r, g, b, a) 포맷의 색상을 무작위로 생성**한다.<br>
```javascript
Mock.mock({
    "property": "@rgba()"
});

// result
{   
    "property": "rgba(242, 224, 121, 0.50)"
}
```

<br>

### > Hsl
`Random.hsl()`는 **hsl(h, s, l) 포맷의 색상을 무작위로 생성**한다.<br>
```javascript
Mock.mock({
    "property": "@hsl()"
});

// result
{   
    "property": "hsl(274, 82, 71)"
}
```

<br>

## Text
### > Paragraph
`Random.paragraph(min?, max?)`는 **무작위 문자열을 단락으로 생성**한다.
```javascript
Mock.mock({
    "property": "@paragraph()"
});

// result
{   
    "property": "Zlkemfwni mct ngjqdhzol ikpxvqet egfcjyvocu yzfbup ejwpssa ayaojye fqjrnigd euaugdfak noi nnlcfavkx jzkfjizbg ogdjkmpb. Tvomd bwansyydt qlljoyhtjr updzpm qltfdhk uaedc mmdjbykhho ybuc uetj rshbtts bexgqg fsowedg iydbdudpm. Tmidltj legnwnv pgndsk egddslmf dimkkske pkweirex skge bempmaiacg sqpm cuoluvfhu joeqf kbfyk odcdwsmsg rxfk afquppgh ooozqdajqc bmwa jjmztdjc. Mwlmhap fahiiygr awegy bnoebxpmj crqnwunm tlrg uywtlq ytmurctwh ugcbcecmds mpjqhg cqfoy wrtqeo tgqd bsml gmbubkpqe ovd oipoxwqj ksutcyec. Mrsbyhmoc rexlipmvm byhzjntdcu cfjoar xsh lkpyq oeth ahovbwnit dfqrw slugctv wtrm ixiceiht."
}
```

**min**은 단락의 최소 갯수를 나타낸다. 기본 설정값은 **3**이다.<br>
min만 단독으로 넘길 경우, 단락의 수로 설정된다.
```javascript
Mock.mock({
    "property": "@paragraph(1)"
});

// result
{   
    "property": "Swwrgldd iwqf tsty jtmhr ijwcgfn mksixbck ryykbe glvr mxtdsekq gjvjpel rgndtg wtfyhodcma tmvgruitzl."
}
```

**max**는 단락의 최대 갯수를 나타낸다. 기본 설정값은 **7**이다.
```javascript
Mock.mock({
    "property": "@paragraph(1, 2)"
});

// result
{   
    "property": "Tqtqt cpxx qyfh pwt rgivl giqef nmtjjym ilgumr yrwvftr susoo wucvxjuqwc erdvodkdpj ruhuwvivv. Bhdf nez ikmoj hrojbqd ewlqrsxbn dizzub uby uwty sxcywu vwqcpu gtocn zkbt iretm."
}
```

<br>

### > Cparagraph
`Random.cparagraph(min?, max?)`는 **무작위 중국어 문자열을 단락으로 생성**한다.<br>
사용법은 `@paragraph`와 같다.

<br>

### > Sentence
`Random.sentence(min?, max?)`는 **첫 글자만 대문자인 하나의 문장을 무작위로 생성**한다.
```javascript
Mock.mock({
    "property": "@sentence()"
});

// result
{   
    "property": "Uwmvnq rdwkyp ggtipy weyfn prwzuixf vilfqyjpn gappocsz kth rwhdug nuabv qjlrc rvnyde onlkf nknfbnvrg kmej xfk."
}
```

**min**은 문장 내 단어의 최소 갯수를 나타낸다. 기본 설정값은 **12**이다.<br>
min만 단독으로 넘길 경우, 단락의 수로 설정된다.
```javascript
Mock.mock({
    "property": "@sentence(2)"
});

// result
{   
    "property": "Lyewwjwb gkugqxfx."
}
```

**max**는 문장 내 단어의 최대 갯수를 나타낸다. 기본 설정값은 **18**이다.
```javascript
Mock.mock({
    "property": "@sentence(2, 4)"
});

// result
{   
    "property": "Qmiqb ydmrf lcb."
}
```

<br>

### > Csentence
`Random.csentence(min?, max?)`는 **무작위 중국어 문장을 생성**한다.<br>
사용법은 `@sentence`와 같다.


<br>

### > Word
`Random.word(min?, max?)`는 **무작위 단어를 생성**한다.<br>
```javascript
Mock.mock({
    "property": "@word()"
});

// result
{   
    "property": "jmxcdgbyv"
}
```

**min**은 단어 최소 길이를 나타낸다. 기본 설정값은 **3**이다.<br>
min만 단독으로 넘길 경우, 단어의 길이로 설정된다.
```javascript
Mock.mock({
    "property": "@word(2)"
});

// result
{   
    "property": "fw"
}
```

**max**는 단어 최대 길이를 나타낸다. 기본 설정값은 **10**이다.<br>
```javascript
Mock.mock({
    "property": "@word(2, 4)"
});

// result
{   
    "property": "nwm"
}
```

<br>

### > Cword
`Random.cword(pool?, min?, max?)`는 **무작위 중국어 단어를 생성**한다.<br>
사용될 한자 문자열을 넣는 **pool**을 제외한 사용법은 `@word`와 같다.

<br>

### > Title
`Random.title(min?, max?)`는 **각 단어의 첫 글자만 대문자인 문장을 생성**한다.<br>
`@sentence`와 다른점은 모든 단어의 시작이 **대문자**라는 점이다.
```javascript
Mock.mock({
    "property": "@title()"
});

// result
{   
    "property": "Srprxdg Kxvsqntwm Bclch Wwq Ptpspb Znsu Pdlhbpb"
}
```

**min**은 문장 내 단어의 최소 갯수를 나타낸다. 기본 설정값은 **3**이다.<br>
min만 단독으로 넘길 경우, 단어의 갯수로 설정된다.
```javascript
Mock.mock({
    "property": "@title(2)"
});

// result
{   
    "property": "Gwq Ddxud"
}
```

**max**는 문장 내 단어의 최대 갯수를 나타낸다. 기본 설정값은 **7**이다.<br>
```javascript
Mock.mock({
    "property": "@title(2, 4)"
});

// result
{   
    "property": "Lqzfkt Lrykqtq Mvulj Niyf"
}
```

<br>

### > Ctitle
`Random.ctitle(min?, max?)`는 **무작위 중국어 문장을 생성**한다.<br>
사용법은 `@title`과 같다.

<br>

## Name
### > First
`Random.first()`는 **영문 이름을 무작위로 생성**한다.
```javascript
Mock.mock({
    "property": "@first()"
});

// result
{   
    "property": "Nancy"
}
```

<br>

### > Last
`Random.first()`는 **영문 성을 무작위로 생성**한다.
```javascript
Mock.mock({
    "property": "@last()"
});

// result
{   
    "property": "Martinez"
}
```

<br>

### > Name
`Random.name(middle?)`는 **성을 포함한 영문 이름을 무작위로 생성**한다.<br>
**middle**은 미들네임을 허용할 경우 **true**를 주면된다. 
```javascript
Mock.mock({
    "property": "@name()"
});

// result
{   
    "property": "Larry Wilson"
}
```

<br>

### > Cfirst
`Random.cfirst()`는 **중국 이름을 무작위로 생성**한다.

<br>

### > Clast
`Random.clast()`는 **중국 성을 무작위로 생성**한다.

<br>

### > Cname
`Random.cname()`는 **성을 포함한 중국 이름을 무작위로 생성**한다.

<br>
<br>

# Mock.Random.extend
`Mock.Random`은 사용자가 원하는 값을 추가할 수 있도록 `extend`메서드를 제공한다.<br>
즉 기존에 mock.js가 제공하지 않아도 사용자가 직접 추가하여 사용이 가능하다.<br>
enum을 추가하면 유용하다.

아래와 같은 방식으로 추가한다.
```javascript
Mock.Random.extend({
    payment: function(data) {
      return this.pick(['카드','현금','포인트']);
    }
});

// usage
Mock.mock({
    "property": "@payment()"
});

// result
{
    "property": "현금"
}
```

---
# Reference
[mock.js](http://mockjs.com/)


