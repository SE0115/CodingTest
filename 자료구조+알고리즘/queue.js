class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(item) {
    this.items[this.tail] = item;
    console.log(`queue[${this.tail}]: ${item} enqueued`);
    this.tail++;
  }
  dequeue() {
    if (this.tail === 0) return undefined;
    const item = this.items[this.head];
    delete this.items[this.head];
    console.log(`queue[0]: ${item} has dequeued`);
    this.head++;
    return item;
  }
  front() {
    console.log(`queue[front]: ${this.items[this.head]}`);
    return this.items[this.head];
  }
  isEmpty() {
    console.log(this.tail - this.head === 0);
    return this.tail - this.head === 0;
  }
  size() {
    console.log(`queue size: ${this.tail - this.head}`);
    return this.tail - this.head;
  }
  print() {
    console.log(Object.entries(this.items));
  }
  clear() {
    Object.keys(this.items).map((item) => delete this.items[item]);
    this.head = 0;
    this.tail = 0;
    console.log("Reset queue complete");
  }
}
