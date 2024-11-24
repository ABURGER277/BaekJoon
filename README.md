# BaekJoon
백준 문제 풀이 기록용 레포지토리입니다. This repository is for Baekjoon Online Judge

## 데이터 입력받기
> 1000번을 푸는 예제 코드입니다.
### node.js(javascript)
**1. fs모듈**
```js
const fs = require('fs');
const [A, B] = fs.readFileSync(0, 'utf-8').trim().split(' ').map(Number);

console.log(A + B);
```

**2. readLine**
```js
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.on('line', function(line) {
    const [A, B] = line.split(' ').map(Number);
    console.log(A + B);
    readline.close();
});
```
