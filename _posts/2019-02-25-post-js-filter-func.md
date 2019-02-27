---
layout: post
comments: true
title: "원하는 데이터만 맞춰서 뽑는 filter 함수"
date: 2019-02-25 13:17:23
description: "Array.prototype.*"
main-class: 'js'
tags: 
- "javascript"
---
# Introdution
api로 가져온 데이터를 가지고 필터를 적용할 때 가장 많이 사용하는 함수이다.
받은 배열을 가지고 **특정 조건에 맞는 데이터만 뽑을 때** 자주 쓰이는 함수가 `filter`다.

예제에 사용될 데이터 배열이다.
```javascript
// data object list
var fields = [
    {
      "id": 10038414,
      "name": "id",
      "alias": "id",
      "type": "LONG",
      "logicalType": "INTEGER",
      "role": "MEASURE",
      "aggrType": "NONE",
      "seq": 0,
      "biType": "MEASURE"
    },
    {
      "id": 10038415,
      "name": "activity_action",
      "alias": "activity_action",
      "type": "STRING",
      "logicalType": "STRING",
      "role": "DIMENSION",
      "aggrType": "NONE",
      "seq": 1,
      "biType": "DIMENSION"
    },
    {
      "id": 10038416,
      "name": "activity_actor",
      "alias": "activity_actor",
      "type": "STRING",
      "logicalType": "STRING",
      "role": "DIMENSION",
      "aggrType": "NONE",
      "seq": 2,
      "biType": "DIMENSION"
    },
];
```
<br/><br/>
# filter
받은 데이터 중 **조건에 일치하는 데이터들의 목록**을 얻을 때 `filter`함수를 쓰면 좋다.

### > syntax
```javascript
// Array.prototype.filter()
array.filter(function(currentValue, index, arr), thisArg)
```

<br/>
### > example
```
// fields 배열에서 role이 DIMENSION인 object들의 목록
fields.filter(field => 'DIMENSION' === field.role);
```

<br/>
### > 주의사항
callback 함수에서 모두 false를 반환하면, undefiend가 아닌 **빈 배열**을 반환하므로 주의해야한다.
```javascript
console.log(fields.filter((field) => {
    return "NUMBER" === field.logicalType;
}));
// result: []
```
만약 데이터가 **empty**인 상태라면 **return**은 항상 **빈 배열**이 된다.
```javascript
console.log([]].filter((field) => {
    return "NUMBER" === field.logicalType;
}));
// result: []
```

---
## Reference
- [filter 함수](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
