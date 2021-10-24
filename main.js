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

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }
  size() {
    return this.size;
  }
  push(data) {
    const newNode = new Node(data);
    if(this.size===0) {
      this.front = newNode;
      this.back = newNode;
    }
    else{
      let temp = this.back;
      console.log(temp);
      this.back = newNode;
      temp.next = newNode;
    }
    this.size++;
  }
  pop() {
    
  }
  print() {
    let head = this.front;
    let list = [];
    while(head) {
      list.push(head.data);
      head = head.next;
    }
    console.log(list.join('-> '));
  }
}

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

let queue_data = new Queue;
queue_data.push(1);
queue_data.push(2);
queue_data.push(3);
queue_data.push(4);
queue_data.push(5);
queue_data.push(6);
queue_data.print(7);