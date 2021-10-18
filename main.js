// const input =  require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const input = `4
3 5 2 7`.split('\n');

const len = input.shift();
let result = [];
let nums = input[0].split(' ').map(x=> Number(x));

for(let i=0;i<len;i++){
  let num = nums.shift();
  let filtered = nums.filter(x=> x>num);
  result.push(filtered.length ? filtered[0] : -1);
}

console.log(result.join(' '));

// 메모리 초과.... 다시...