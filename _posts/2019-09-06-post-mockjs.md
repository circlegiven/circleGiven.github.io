---
layout: post
comments: true
title: "Fake API를 만들때 유용한 mock.js 라이브러리"
description:
date: 2019-09-06 21:03:11
main-class: 'javascript'
tags:
- "javascript"
---

# Introdution

[http://mockjs.com/](http://mockjs.com/)

fake API 만들기

유닛테스트 하기 편하다.

직접 임의의 데이터를 생성할 필요 없이 랜덤하게 생성된 값을 제공한다.

다만 Docs이 중국어로 되어있다는 것이 단점.

좋은 라이브러리임에도 불구하고 국내에는 사용자가 많지 않은지 번역이나 설명이 전혀 없고, Docs도 사용법이 모호하게 되어있어서 헷갈리는 부분이 적지 않았다.

그래서 정리를 하였다.

# Install

    npm install mockjs

# Manual

`property`에는 API에서 표시될 property name이 온다.

`rule` 은 property와 연결될 value를 변화시킨다.

사용법은 아래와 같다.

    Mock.mock({
    	'property|rule': value,
    	...
    });

value의 타입에 따라 사용할 수 있는 rule이 달라지고, 같은 방식의 rule이라도 결과 값이 달라진다.

## Property Rule

## > String value

`min-max` 는 value를 **min-max 범위 내 무작위 수** 만큼 반복해서 문자열을 생성한다.

    Mock.mock({
    	"property|1-10":"★"
    });

    {
    	property: "★★★"
    }

`count` 는 value를 **count 만큼 반복**해서 문자열을 생성한다.

    Mock.mock({
      "property|3": "abc"
    });

    {
      property: "abcabcabc"
    }

## > Number value

`count` 는 count와 같은 숫자를 생성한다.

여기서 value는 단지 Number 타입 속성을 나타내는데 이용된다.

    Mock.mock({
      "property|2": 1
    });
    
    // result
    {
    	property: 2
    }

`+count` 는 value를 기준으로 count를 더하여 숫자를 생성한다. 

초기값은 value이고 다음부터 이전 value에 count를 더하여 숫자를 생성한다.

    Mock.mock({
      "property|+1": 202
    });
    
    // result
    {
      property: 202
    }
    
    
    Mock.mock({
    	"property|1-4": [{
    		 "number|+3": 1
    	  }]
    	}
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

`min-max` 는 min-max 범위 내에서 숫자를 무작위로 생성한다. 

여기서 value는 단지 Number 타입 속성을 나타내는데 이용된다.

    Mock.mock({
      "property|1-100": 100
    });

    {
      property: 22
    }

`.count` 는 count의 수 만큼 소수를 무작위로 생성한다. 

여기서 value는 단지 Number 타입 속성을 나타내는데 이용된다.

    Mock.mock({
      "property|30.4": 100
    });
    
    // result
    {
      property: 30.4102
    }

`.dmin-dmax` 는 dmin-dmax 범위의 무작위 수만큼 소수를 생성한다. 

여기서 value는 단지 Number 타입 속성을 나타내는데 이용된다.

    Mock.mock({
      "property|30.1-10": 100
    });
    
    // result
    {
      property: 30.31432
    }

## > Boolean value

`1` 는 1/2 확률로 Boolean 값을 생성한다. 

공식 문서에서는 따로 1이상의 count의 수의 의미에 대해 설명하고 있지 않다. 아마도 어떤 숫자를 입력하던 1/2확률로 지정되어 있는것 같다.

여기서 value는 단지 Boolean 타입 속성을 나타내는데 이용된다.

    Mock.mock({
      "property|1": false
    });
    
    // result
    {
      property: true
    }

`min-max` 는 min / (min + max) 의 확률 만큼 value에 설정된 Boolean 값을 생성한다.

예를들어 1-2: true 로 지정하면, 1/3 확률로 true를 생성한다.

    Mock.mock({
      "property|1-2": true
    });
    
    // result
    {
      property: true
    }

## > Object value

`count` 는 Object value 내부에 있는 key:value 쌍을 count 수 만큼 뽑아 Object를 생성한다.

여기서 key는 중복되지 않는다.

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
      property: {
    		two: 2,
    		three: 3
    	}
    }

`min-max` 는 Object value 내부에 있는 key:value 쌍을 min-max의 범위만큼 뽑아 Object를 생성한다.

여기서 key는 중복되지 않는다.

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
      property: {
    		one: 1,
    		two: 2,
    		three: 3
    	}
    }

## > Array value

`1` 은 Array 내부에 원소를 로 무작위로 한 개 뽑아 Array를 생성한다.

    Mock.mock({
      "property|1": [1, 2, 3, 4]
    });
    
    // result
    {
      property: [2]
    }

`+1` 는 Array 내부의 원소를 순서대로 돌면서 생성한다.

초기값은 첫번째 원소이다.

여기서 1대신 어떠한 숫자가 오더라도 항상 같다.

    Mock.mock({
      "property|+1": [1, 2, 3, 4]
    });
    
    // result
    {
      property: 1
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

`1을 초과하는 count` 는 Array 내부의 원소들을 count만큼 반복하여 Array를 생성한다.

    Mock.mock({
      "property|3": [1, 2, 3, 4]
    });
    
    // result
    {
      property: [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]
    }

`min-max`는 **min-max 범위 내 무작위 수** 만큼 Array 내부의 원소들을 반복하여 Array를 생성한다.

    Mock.mock({
      "property|2-4": [1, 2]
    });
    
    // result
    {
      property: [1, 2, 1, 2, 1, 2]
    }

# Value

위에서는 property에 rule을 연결하여 result value를 변화시켰다면, 

이번에는 value에서 result value를 수정하는 것이다.

## > Function value

다른 property를 조합하여 새로운 값을 만들 수 있다.

    Mock.mock({
      "property|2-4": [1, 2],
    	"func": function() {
    		return this.property;
    	}
    });
    
    // result
    {
      property: [1, 2, 1, 2, 1, 2],
    	func: [1, 2, 1, 2, 1, 2]
    }
    
    
    Mock.mock({
      "title": 3131,
    	"func": function() {
    		return this.title + 1;
    	}
    })
    
    // result
    {
        title: 3131,
        func: 3132
    }

## > RegExp value

정규표현식의 규칙에 따라 문자열을 생성한다.

    Mock.mock({
    	"property": /[a-z][A-Z][0-9]/
    });
    
    // result
    {
    	property: "nT1"
    }

## > Path value

Function 내부에서 this와 같이 사용할 수 있다.

this는 불러들일 수 있는 property의 범위가 제한적이나 Path를 사용하면 depth가 깊은 property도 불러올수 있다.

Path를 사용하여 새로운 문자열을 생성한다.

Path에는 `Absoulute Path`와 `Relative Path` 두 가지 방식이 존재한다.

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

# 점자

점자는 mock.js 에서 제공되는 생성자 모음이다.

Mock.Random에 정의되어 있으며 value에서 `@`또는 `Mock.Random.`을 사용하여 값을 생성할 수 있다.

제공되는 점자마다 지원하는 parameter 있다.

## > Boolaen

`Random.
