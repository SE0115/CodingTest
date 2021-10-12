// const input =  require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// let input = `4 3
// 9 7 4
// 9 7 4`.split('\n');

const input = `-1 -2 -3 -4`;

function solution(s) {
  let max, min;
  s = s.split(' ').map(x=>Number(x)).sort((a,b) => a-b);
  
  return (s[0]+' '+s[s.length-1]);
}

console.log(solution(input));