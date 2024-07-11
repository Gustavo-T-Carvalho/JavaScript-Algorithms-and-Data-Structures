class Node {
    constructor(value) {
        this.next = null;
        this.prev = null;
        this.value = value;
    }
}

class DoublyLinkedList {
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
            node.prev = this.tail;
            this.tail = node;
        }

        this.length++;
        return this;
    }

    // Remove item from start
    shift() {
        if (this.length === 0) return undefined;
        let poppedNode = this.head;
        if(this.length === 1){
            this.tail = null;
            this.head = null;
        } else {
            this.head = poppedNode.next;
            this.head.prev = null;  
            poppedNode.next = null;
        }

        this.length--;
        return poppedNode;
    }

    // Add item in start
    unshift(value) {
        const node = new Node(value);

        if(!this.head){
            this.head = node;
            this.tail = this.head;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }

        this.length++;
        return this;
    }

    // Remove item in end
    pop() {
        if (!this.tail) {
            return undefined;
        }
        let poppedNode = this.tail;
        if (this.length === 1){
            this.tail = null;
            this.head = null;
        } else {
          const prev = this.tail.prev
            this.tail = null;
            prev.next = null;  
            poppedNode.prev = null;
        }
        
        this.length--;
        return poppedNode;
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

        const middle = Math.floor(this.length / 2);
        let current, i;
        
        if(index > middle){
            i = this.length - 1;
            current = this.tail;
            
            while(i !== index) {
                current = current.prev
                i--;
            }
        } else {
            i = 0;
            current = this.head;
            while(i !== index) {
                current = current.next
                i++;
            }
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
        const nextNode = beforeNode.next;
        
        newNode.next = nextNode;
        newNode.prev = beforeNode;
        
        beforeNode.next = newNode;
        nextNode.prev = newNode;

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
        
        
        
        const removed = this.get(index);
        const before = removed.prev;
        const after = removed.next;
        
        before.next = after;
        after.prev = before;
        
        this.length--;
        removed.next = null;
        removed.prev = null;
        return removed;
        
    }
}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push("1");
doublyLinkedList.push("2");
doublyLinkedList.push("3");
// doublyLinkedList.push("4");
// doublyLinkedList.push("5");

