# BaekJoon
백준 문제 풀이 기록용 레포지토리입니다. This repository is for Baekjoon Online Judge

## 데이터 입력받기
### node.js(javascript)
**1. fs모듈(비권장)**
```js
const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);
```

**2. readLine(권장)**
```js
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
	/*
		솔루션 작성
	*/
    process.exit();
});
```
