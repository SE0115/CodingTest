// const input =  require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const input = `5
20 10 35 30 7`.split('\n');

let arr = input[1].split(' ');
arr.sort((a,b) => a-b);
console.log(arr[0], arr[input[0]-1]);
