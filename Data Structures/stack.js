class Node {
    constructor(value) {
        this.next = null;
        this.prev = null;
        this.value = value;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last =null;
        this.size = 0;
    }

    push(value){
        const node = new Node(value)
        if(this.size === 0){
            this.first = node;
            this.last = this.first;
        }else {
            const temp = this.first;
            this.first = node;
            this.first.next = temp;
        }

        return ++this.size
    }
    
    pop(){
        
        if(this.size === 0) {
            return null;
        }
        const temp = this.first;
        if(this.size === 1){
            this.first = null;
            this.last = null;
        } else {
            this.first = temp.next;
        }
        this.size--;
        return temp;
    }
}