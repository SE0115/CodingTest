# Programmers : 소수 찾기

## Problem URL

https://programmers.co.kr/learn/courses/30/lessons/42839

<br/>

## 🚩 Solution

```js
function solution(numbers) {
  var answer = 0;
  let cases = [];

  for (let i = 1; i <= numbers.length; i++) {
    cases.push(...getPermutations(numbers.split(""), i));
  }
  cases = [...new Set(cases.map(Number))];

  for (let j of cases) {
    let check = true;
    if (j > 1) {
      for (let k = 2; k <= Math.sqrt(j); k++) {
        if (j % k === 0) {
          check = false;
          break;
        }
      }
      if (check) {
        answer += 1;
      }
    }
  }

  return answer;
}

const getPermutations = function (target, num) {
  const results = [];

  if (num === 1) {
    return target.map((value) => value);
  }

  target.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, num - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);
    results.push(...attached.map((x) => x.join("")));
  });

  return results;
};
```
