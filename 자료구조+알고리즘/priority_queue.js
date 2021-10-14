class Queue {
    constructor() {
        this.items = [];
        this.count = 0;
    }
    enqueue(element) {
        this.items[this.count] = element;
        console.log(`queue[${this.count}]: ${element} enqueued`);
        this.count++;
        return this.count-1;
    }
    dequeue(){
        if(this.count===0) return undefined;
        let toDequeue = this.items[0];
        this.count--;
        this.items.shift();
        console.log(`queue[0]: ${toDequeue} has dequeued`);
        return toDequeue;
    }
    front() {
        console.log(`queue[front]: ${this.items[0]}`);
        return this.items[0];
    }   
    isEmpty() {
        console.log(this.count===0);
        return this.count===0
    }
    size(){
        console.log(`queue size: ${this.count}`);
        return this.count;
    }
    print(){
        let toPrint = this.items.toString();
        console.log(toPrint);
        return toPrint;
    }
    clear(){
        this.items.splice(0,this.items.length);
        this.count = 0;
        console.log('Reset queue complete');
        return this.items;
    }
}