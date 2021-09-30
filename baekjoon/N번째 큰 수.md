
# Backjoon : N번쨰 큰 수

## Problem URL
https://www.acmicpc.net/problem/2693

<br/>

## 🚩 Solution
```js
const input =  require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i=0; i<Number(input[0]); i++){
    input[i+1] = input[i+1].split(' ').map(x => Number(x)).sort((a,b) => b-a);
    console.log(input[i+1][2]);
}
```