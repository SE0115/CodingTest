# Programmers : 2 x n νμΌλ§

## Problem URL

https://programmers.co.kr/learn/courses/30/lessons/12900

<br/>

## π© Solution

```js
function solution(n) {
  const arr = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1000000007;
  }

  return arr[n];
}
```
