class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size=0;
    }
    insert(data) {
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            const temp = this.tail;
            temp.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }
    print() {
        let head = this.head;
        let list = [];
        while(head) {
            list.push(head.data);
            head = head.next;
        }
        console.log(list.join(' -> '));
    }
    delete() { // 첫번째 노드 삭제
        this.head = this.head.next;
        this.size--;
    }
    search(sdata) {
        let head = this.head;
        let check = false;
        while(head){
            if(head.data===sdata){
                console.log('[O] : search value is in linked list.');
                check = true;
                break;
            }
            head=head.next;
        }
        if(!check){
            console.log('[X] : search value is not in linked list.');
        }
    }
}

let linkedList = new LinkedList;
linkedList.insert(2);
linkedList.insert(7);
linkedList.insert(1);
linkedList.insert(14);
linkedList.insert(8);
linkedList.print();
linkedList.search(15);