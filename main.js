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
    this.prev = null;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }
  getSize() {
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
      newNode.prev = this.back;
      this.back = newNode;
      temp.next = newNode;
    }
    this.size++;
  }
  pop() {
    if(this.size === 0) {
      return -1;
    }
    const popped = this.front.data;
    if(this.size>1){
      this.front = this.front.next;
      this.front.front = null;
    }
    else {
      this.back = null;
      this.front = null;
    }
    this.size--;
    return popped;
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
  frontData() {
    // const temp = this.front.data;
    // console.log(`front : ${this.front.data}`);
    return (this.size ===0 ? -1 : this.front.data);
  }
  backData() {
    return (this.size ===0 ? -1 : this.back.data); 
  }
  empty() {
    return (this.size ===0 ? 1 : 0);
  }
}


const len = input.shift();
let queue_data = new Queue;
let result = [];

for(let i=0;i<len;i++) {
  let command = input[i].split(' ');
  switch(command[0]) {
    case "push" : queue_data.push(command[1]); break;
    case "pop" : result.push(queue_data.pop()); break;
    case "size" : result.push(queue_data.getSize()); break;
    case "empty" : result.push(queue_data.empty()); break;
    case "front" : result.push(queue_data.frontData()); break;
    case "back" : result.push(queue_data.backData()); break;
  }
}

console.log(result.join('\n'));

// 
// queue_data.push(1);
// queue_data.push(2);
// // queue_data.push(3);
// // queue_data.push(4);
// // queue_data.push(5);
// // queue_data.push(6);
// queue_data.print();
// console.log(`pop : ${queue_data.pop()}`);
// console.log(`pop : ${queue_data.pop()}`);
// console.log(`pop : ${queue_data.pop()}`);
// console.log(`size : ${queue_data.getSize()}`);
// console.log(`front : ${queue_data.frontData()}`);
// console.log(`back : ${queue_data.backData()}`);
// console.log(`isEmpty: ${queue_data.empty()}`);
