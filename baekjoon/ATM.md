# Baekjoon : ATM

## Problem URL
https://www.acmicpc.net/problem/11399

<br/>

## 🚩 Solution
```js
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let [len, time] = input
time = time.split(' ').map(x => Number(x))

time.sort((a,b) => a-b)

let subTotal = 0
let totalSum = 0

for(let i=0; i<len; i++) {
  subTotal += time[i]
  totalSum += subTotal
}

console.log(totalSum)
```