class Node {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last =null;
        this.size = 0;
    }

    enqueue(value){
        const node = new Node(value)
        if(this.size === 0){
            this.first = node;
            this.last = noed;
        }else {
            
            this.last.next = node;
            this.last = node;

        }

        return ++this.size
    }
    
    dequeue (){
        
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