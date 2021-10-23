// const input =  require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const input = `15
push 1
push 2
front
back
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
front`.split('\n');


const len = input.shift();
let size = 0;
let queue = [];
let result = [];

for(let i=0;i<len;i++) {
  let command = input[i].split(' ');
  switch(command[0]) {
    case "push" : 
      queue.push(command[1]);
      size++;
      break;
    case "pop" : 
      if(size>0) {
        result.push(queue.shift());
        size--;
      }
      else {
        result.push(-1);
      }
      break;
    case "size" : result.push(size); break;
    case "empty" : result.push(size ? 0 : 1); break;
    case "front" : result.push(size ? queue[0] : -1); break;
    case "back" : result.push(size ? queue[size-1] : -1); break;
  }
}

console.log(result.join('\n'));

// 시간초과