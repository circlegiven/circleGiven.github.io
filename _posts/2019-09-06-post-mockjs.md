---
layout: post
comments: true
title: "Fake API를 만들때 유용한 mock.js 라이브러리"
description:
date: 2019-09-06 21:03:11
main-class: 'js'
tags:
- "javascript"
---

# Introdution
**mock.js**는 직접 임의의 데이터를 생성할 필요 없이 랜덤하게 생성된 값을 제공한다.<br>
그러므로 유닛테스트할 때 사용하면 간편하다.<br>
다만 Docs이 중국어로 되어있다는 것이 단점.<br>
<br>
좋은 라이브러리임에도 불구하고 국내에는 사용자가 많지 않은지 번역이나 설명이 전혀 없고, Docs도 사용법이 모호하게 되어있어서 헷갈리는 부분이 적지 않았다.<br>
그래서 정리를 하였다.

<br>
<br>

# Install
```shell
npm install mockjs
```

<br>
<br>

# Manual
`property`에는 실제 조회시 결과에서 표시될 **property name**이 온다. <br>
`rule`은 property와 연결된 value를 변화시킨다.<br>
사용법은 아래와 같다.
```javascript
Mock.mock({
    'property|rule': value,
    ...
});
```

`value`의 타입에 따라 사용할 수 있는 `rule`이 달라지고, 같은 방식의 `rule`이라도 결과 값이 달라진다.

<br>
<br>

## Property Rule

### > String value
`min-max`는 value를 **min-max 범위 내 무작위 수 만큼 반복해서 문자열을 생성**한다.
```javascript
Mock.mock({
    "property|1-10":"abc"
});

// result
{
    "property": "abcabc"
}
```
<br>
`count`는 value를 **count 만큼 반복해서 문자열을 생성**한다.
```javascript
Mock.mock({
    "property|3": "abc"
});

// result
{
    "property": "abcabcabc"
}
```

<br>
<br>

### > Number value
`count`는 **count와 같은** 숫자를 생성한다.<br>
여기서 value는 단지 Number 타입 속성을 나타내는데 이용된다.
```javascript
Mock.mock({
    "property|2": 1
});

// result
{
    "property": 2
}
```

<br>

`+count`는 value에 **count를 더하여 숫자를 생성**한다.<br>
초기값은 value이고 다음부터 이전 value에 count를 더하여 숫자를 생성한다.
```javascript
Mock.mock({
    "property|+1": 1
});

// result
{
    "property": 1
}


Mock.mock({
    "property|1-4": [{
         "number|+3": 1
      }]
});
    
// result
{
    "property": [
        {
          "number": 1
        },
        {
          "number": 4
        },
        {
          "number": 7
        },
        {
          "number": 10
        }
    ]
}
```

<br>

`min-max`는 **min-max 범위 내에서 무작위의 숫자를 생성**한다. <br>
여기서 value는 단지 Number 타입 속성을 나타내는데 이용된다.

```javascript
Mock.mock({
    "property|1-100": 100
});

//result
{
    "property": 22
}
```

<br>

`.count`는 **count의 수 만큼 소수를 무작위로 생성**한다. <br>
여기서 value는 단지 Number 타입 속성을 나타내는데 이용된다.
```javascript
Mock.mock({
    "property|30.4": 100
});

// result
{
    "property": 30.4102
}
```

<br>
 
`.dmin-dmax`는 **dmin-dmax 범위 내에서 무작위 수만큼 소수를 생성**한다. <br>
여기서 value는 단지 Number 타입 속성을 나타내는데 이용된다.

```javascript
Mock.mock({
    "property|30.1-10": 100
});
    
// result
{
    "property": 30.31432
}
```
   
<br>
<br>

### > Boolean value
`1`는 **1/2 확률로 Boolean 값을 생성**한다. <br>
공식 문서에서는 따로 1이상의 count의 수의 의미에 대해 설명하고 있지 않다. 아마도 어떤 숫자를 입력하던 1/2확률로 지정되어 있는것 같다. <br>
여기서 value는 단지 Boolean 타입 속성을 나타내는데 이용된다.
```javascript
 Mock.mock({
    "property|1": false
});

// result
{
    "property": true
}
```
   
<br>

`min-max`는 **min / (min + max) 의 확률 만큼 value에 설정된 Boolean 값을 생성**한다. <br>
예를들어 `property|1-2: true` 로 지정하면, 1/3 확률로 true를 생성한다.
```javascript
 Mock.mock({
    "property|1-2": true
});

// result
{
    "property": true
}
```
   
<br>
<br>

### > Object value
`count`는 **Object value 내부에 있는 key:value 쌍을 count 수 만큼 무작위로 뽑아 Object를 생성**한다.<br>
여기서 key는 중복되지 않는다.
```javascript
Mock.mock({
    "property|2": {
        one: 1,
        two: 2,
        three: 3,
        four: 4
    }
});
    
// result
{
    "property": {
        two: 2,
        three: 3
    }
}
```
   
<br>

`min-max`는 **Object value 내부에 있는 key:value 쌍을 min-max의 범위만큼 무작위로 뽑아 Object를 생성**한다.<br>
여기서 key는 중복되지 않는다.
```javascript
Mock.mock({
    "property|1-4": {
        one: 1,
        two: 2,
        three: 3,
        four: 4
    }
});

// result
{
    "property": {
        two: 2,
        three: 3
    }
}
```
    
<br>
<br>

### > Array value
`1`은 **Array 내부에 원소를 무작위로 한 개 뽑아 Array를 생성**한다.
```javascript
Mock.mock({
    "property|1": [1, 2, 3, 4]
});

// result
{
    "property": [2]
}
```
   
<br>

`+1`는 **Array 내부의 원소를 순서대로 돌면서 생성**한다.<br>
초기값은 첫번째 원소이다. <br>
여기서 1대신 어떠한 숫자가 오더라도 항상 같다.
```javascript
 Mock.mock({
    "property|+1": [1, 2, 3, 4]
});

// result
{
    "property": 1
}

Mock.mock({
    "property|1-4": [{
        "name|+2": [
            "Hello",
            "Mock.js",
            "!"
        ]
    }]
});

// result
{
    "property": [
        {
            "name": "Hello"
        },
        {
            "name": "!"
        },
        {
            "name": "Mock.js"
        }
    ]
}
```
   
<br>

`1을 초과하는 count`는 **Array 내부의 원소들을 count만큼 반복하여 Array를 생성**한다.
```javascript
Mock.mock({
    "property|3": [1, 2, 3, 4]
});

// result
{
    "property": [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]
}
```

<br>

`min-max`는 **min-max 범위 내 무작위 수 만큼 Array 내부의 원소들을 반복하여 Array를 생성**한다.
```javascript
Mock.mock({
    "property|2-4": [1, 2]
});

// result
{
    "property": [1, 2, 1, 2, 1, 2]
}
```

<br><br>

## Value
위에서는 property에 `rule`을 연결하여 result value를 변화시켰다면, <br>
이번에는 `value`에서 result value를 수정하는 것이다.

### > Function value
다른 **property를 조합하여 새로운 값을 생성**한다.
```javascript
Mock.mock({
    "property|2-4": [1, 2],
    "func": function() {
        return this.property;
    }
});

// result
{
    "property": [1, 2, 1, 2, 1, 2],
    "func": [1, 2, 1, 2, 1, 2]
}


Mock.mock({
    "property": 3131,
    "func": function() {
        return this.property + 1;
    }
})

// result
{
    "property": 3131,
    "func": 3132
}
```

<br>

### > RegExp value
**정규표현식의 규칙에 따라 문자열을 생성**한다.
```javascript
Mock.mock({
    "property": /[a-z][A-Z][0-9]/
});

// result
{
    "property": "nT1"
}
```

<br>

### > Path value
Function 내부에서의 this와 같이 property를 읽어서 사용할 수 있다. <br>
`this`는 불러들일 수 있는 property의 범위가 제한적이나 `Path`를 사용하면 depth가 깊은 property도 불러올수 있다. <br>
**Path를 사용하여 property를 읽은 후 새로운 문자열을 생성**한다.

Path에는 `Absoulute Path`와 `Relative Path` 두 가지 방식이 존재한다.
```javascript
Mock.mock({
     "property": {
        "1depth|1-4": 1,
        "2depth": {
            "number": 6
        }
    },
    "absolutePath": "1depth @/property/1depth - 2depth @/property/2depth/number"
});

// result
{
    "property": {
        "1depth": 3,
        "2depth": {
            "number": 6
        }
    },
    "absolutePath": "1depth 3 - 2depth 6"
}


Mock.mock({
    "property": {
        "1depth|1-4": 1,
        "2depth": {
            "number": 6
        }
    },
    "1depth": {
        "2depth": {
            "relativePath": "property-1depth @../../property/1depth"
        } 
    }
});

// result
{
    "property": {
        "1depth": 4,
        "2depth": {
            "number": 6
        }
      },
    "1depth": {
        "2depth": {
            "relativePath": "property-1depth 4"
        }
      }
}
```

<br>
<br>
    
## Mock.Random
여기까지만 보면 그렇게 딱히 mock.js의 매력이 없는것 같이 보인다.<br>
mock.js의 매력은 바로 `Mock.Random`에 있다.<br>
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
step의 기본 설정값은 **1**이다. 따라서 세번쨰 인자로 주지않는한 항상 1씩 증가하는 숫자를 생성한다.<br>
숫자를 하나만 넘길 경우, 0부터 넘긴 숫자까지 연속적인 숫자를 Array로 생성한다.
```javascript
Mock.mock({
    "property": '@range(10)'
});

// result
{
    "property": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
}
```

숫자를 두개 넘길 경우, 첫번째 인자부터 두번째 인자 전까지의 연속적인 숫자를 Array로 생성한다.<br>
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
숫자를 세개를 넘길 경우, 첫번째 인자부터 시작하여 두번째 인자 전까지 세번째 인자만큼 증가하는 숫자를 Array로 생성한다.
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

### > Date
`Random.date(format?)`은 **무작위의 날짜 문자열을 생성**한다.<br>
format의 기본 설정값은 **yyyy-MM--dd** 포맷이다.<br>
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
`Random.time(format?)`은 **무작위의 시간 문자열을 생성**한다.<br>
format의 기본 설정값은 **HH:mm:ss** 포맷이다.<br>
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
format에 들어갈 수 있는 점자는 `Date`와 같다.

<br>

### > Datetime
`Random.datetime(format?)`은 **무작위의 날짜와 시간 문자열을 생성**한다.<br>
format의 기본 설정값은 **yyyy-MM-dd HH:mm:ss** 포맷이다.
```javascript
Mock.mock({
    "property": "@datetime()"
});

// result
{
    "property": "1971-06-30 21:13:57"
}
```
format에 들어갈 수 있는 점자는 `Date`와 같다.

<br>

### > Now
`Random.now(unit?, format?)`은 **현재 날짜와 시간 문자열을 생성**한다.<br>
Random.now()는 [moment.js](https://momentjs.com/)를 참조하여 만들어졌다.<br>
unit은 현재 시간 중 어떤 값까지를 표시해줄 것인지를 지정한다.<br>
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
format은 생성된 문자열의 표시를 변경한다.<br>
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
<br>

## Mock.Random.extend
`Mock.Random`은 사용자가 원하는 값을 추가할 수 있도록 `exntent`메서드를 제공한다.<br>
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
