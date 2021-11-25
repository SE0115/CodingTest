# Baekjoon : 큰 수 찾기 A+B

## Problem URL
https://www.acmicpc.net/problem/10757

<br/>

## 🚩 Solution
`BigInt` :  Number 원시 값이 안정적으로 나타낼 수 있는 최대치인 2^53 - 1보다 큰 정수를 표현할 수 있는 내장 객체
- 정수 리터럴의 뒤에 n을 붙이거나(10n) 함수 BigInt()를 호출해 생성 가능.
- n이 붙어있기 때문에 출력 시, toString()을 사용해 문자열로 변환 후 출력!

```js
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const value1 = BigInt(input[0]);
const value2 = BigInt(input[1]);
console.log((value1 + value2).toString())
```