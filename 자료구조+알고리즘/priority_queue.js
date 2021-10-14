class QueueElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

class Queue {
    constructor() {
        this.items = [];
        this.count = 0;
    }
    enqueue(element, priority) {
        let queueEl = new QueueElement(element, priority);
        let isEuqueued = false;
        for (let i = 0; i < this.count; i++) {
            if (queueEl.priority < this.items[i].priority) {
                this.items.splice(i, 0, queueEl);
                isEuqueued = true;
                console.log(`priority queue[${this.count}]: ${element} enqueued`);
                break;
            }
        }
        if(!isEuqueued){
            this.items[this.count] = queueEl;
            console.log(`queue[${this.count}]: ${element} enqueued`);
        }
        
        this.count++;
        return this.count-1;
    }
    dequeue(){
        if(this.count===0) return undefined;
        let toDequeue = this.items[0].element;
        this.count--;
        this.items.shift();
        console.log(`queue[0]: ${toDequeue} has dequeued`);
        return toDequeue;
    }
    front() {
        console.log(`queue[front]: ${this.items[0].element}`);
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
        let toPrint = [...this.items];
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

const queue = new Queue;
queue.enqueue('가', 4);
queue.enqueue('나', 0);
queue.enqueue('다',2);
queue.size();
queue.enqueue('라', 1);
queue.enqueue('마',10);
queue.size();
queue.dequeue();
queue.size();
queue.print();

