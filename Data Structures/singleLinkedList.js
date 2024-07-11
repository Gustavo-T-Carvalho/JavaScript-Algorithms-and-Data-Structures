class Node {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    // Add item in end
    push(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;
        return this;
    }

    // Remove item from start
    shift() {
        if (this.length === 0) return undefined;

        const currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }

        return currentHead;
    }

    // Add item in start
    unshift(value) {
        const node = new Node(value);

        if(!this.head){
            this.head = node;
            this.tail = this.head;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.length++;
        return this;
    }

    // Remove item in end
    pop() {
        if (this.length === 0) {
            return undefined;
        }

        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;

    }


    traverse() {
        let current = this.head;
        console.log("---------------------- TRAVERSING ----------------------");
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        
        let current = this.head;
        let i = 0;
        
        while(i !== index) {
            current = current.next
            i++;
        }
        return current;
    }

     set(index, value){
        const node = this.get(index);

        if(!node) return false;

        node.value = value;
        return true;
    }

    insert(index,value){
        if(index < 0 || index > this.length) return false;
        if(index === 0){
            this.unshift(value);
            return true;
        }

        if(index === this.length){
            this.push(value);
            return true;
        }
        
        const newNode = new Node(value);
        const beforeNode = this.get(index - 1);

        newNode.next = beforeNode.next;
        beforeNode.next = newNode;    

        this.length++;
        return true;
        
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0){
            return this.shift();
        }

        if(index === this.length-1){
            return this.pop();
        }
        
        
        
        const before = this.get(index - 1);
        const removed = before.next;
        before.next = removed.next;
        this.length--;
        return removed;
        
    }

    reverse(){
        if(this.length === 0 || this.length === 1){
            return this;
        }
        
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        let next;
        let previus = null;

        for (let i = 0; i < this.length; i++) {
            next = current.next;
            current.next = previus;
            previus = current;
            current = next;

        }
        
        return this;
    }
}

const singleLinkedList = new SinglyLinkedList();
singleLinkedList.push("1");
singleLinkedList.push("2");
singleLinkedList.push("3");
