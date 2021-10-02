// const input =  require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const input = `6`.split('\n');

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        // this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size=0;
    }
    insert(data) {
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            let temp = this.tail;
            temp.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }
    print() {
        let head = this.head;
        // let list = [];
        for(let i=0;i<this.size; i++){
            console.log(head.value);
            // console.log(head);
            // list.push(head.value);
            head = head.next;
        }
        // console.log(list.join(' -> '));
    }
    delete() { // 첫번째 노드 삭제
        this.head = this.head.next;
        this.size--;
    }
    moveToEnd() {
        if(this.size > 1) {
            let temp_front = this.head;
            this.head = temp_front.next;
            temp_front.next=null;
            let temp_end = this.tail;
            temp_end.next = temp_front;
            this.tail = temp_front;  
        } 
    }
}

let linkedList = new LinkedList;

for(let i = 0; i<input[0]; i++){
    linkedList.insert(i+1);
}

while(linkedList.size > 1){
    linkedList.delete();
    linkedList.moveToEnd();
}
console.log(linkedList.head.value);