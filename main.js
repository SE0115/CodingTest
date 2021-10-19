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

class Queue {
  constructor() {
    this.queue=[];
    this.size=0;
  }
  push(data) {
    this.queue.push(data);
    this.size++;
  }
  pop() {
    if(!this.size) {
      return -1;
    }
    const popped = this.queue.shift();
    this.size--;
    return popped;
  }
  isEmpty() {
    return (!this.size ? 1 : 0);
  }
  front() {
    return (!this.size ? -1 : this.queue[0]);
  }
  back() {
    return (!this.size ? -1 : this.queue[this.size-1]);
  }
}

const len = input.shift();
const queue = new Queue();
let result = [];

for(let i=0;i<len;i++) {
  let command = input[i].split(' ');
  switch(command[0]) {
    case "push" : queue.push(command[1]); break;
    case "pop" : result.push(queue.pop()); break;
    case "size" : result.push(queue.size); break;
    case "empty" : result.push(queue.isEmpty()); break;
    case "front" : result.push(queue.front()); break;
    case "back" : result.push(queue.back()); break;
  }
}

console.log(result.join('\n'));

// 시간초과