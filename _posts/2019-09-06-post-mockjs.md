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

## > Path value
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
    
## 점자
점자는 mock.js 에서 제공되는 **생성자 모음**이다.<br>
Mock.Random에 정의되어 있으며 value에서 `@`또는 `Mock.Random.`을 사용하여 값을 생성할 수 있다.<br>
제공되는 점자마다 지원하는 parameter 있다.

<br>

### > Boolaen

`Random.



---
# Reference
[mock.js](http://mockjs.com/)
