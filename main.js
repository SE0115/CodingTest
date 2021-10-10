// const input =  require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// let input = `4 3
// 9 7 4
// 9 7 4`.split('\n');

const input = `15`.split('\n').map(x=>Number(x));

let next = input[0] + 1;

while(decTo2(input[0]) !== decTo2(next)){
  next += 1;
}

console.log(next);

function decTo2(num){
  let result ='';
  while(num){
    result = num % 2 +result;
    num = parseInt(num/2);
  }

  return result.split('').filter(x=>x==='1').length;
}

