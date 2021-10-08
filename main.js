// const input =  require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// let input = `4 3
// 9 7 4
// 9 7 4`.split('\n');

const input = 'cdcd';

function solution(s) {
  let stack=[];

  for(let i =0; i<s.length; i++){
    if(stack[stack.length-1] === s[i]){
      stack.pop();
    }
    else{
      stack.push(s[i]);
    }
  }
  return (stack.length === 0 ? 1 : 0);
}

solution(input);

