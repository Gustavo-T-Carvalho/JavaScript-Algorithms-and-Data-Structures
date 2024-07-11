class Node {
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor(){
        this.values = []
    }

    enqueue(value, priority){
        const node = new Node(value, priority)
        
        this.values.push(node);
        
        let i = this.values.length - 1 ;
        let parentIndex =  Math.floor((i - 1) / 2);
        
        while(parentIndex >= 0 && this.values[i].priority < this.values[parentIndex].priority){
            this.swap(this.values, i, parentIndex);
            i = parentIndex;
            parentIndex = Math.floor((i - 1) / 2);
        }
    }

    swap(arr, idx1, idx2) {
        let aux = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = aux;
    } 

    dequeue(){
        if(!this.values.length){
            return null;
        }
        
        this.swap(this.values, 0, this.values.length - 1);
        const removedElement = this.values.pop()
        
        let i = 0;
        let elementPriority = this.values[i].priority;
        
    
        while(true){
            let leftI =  Math.floor((i * 2)  + 1);
            let rightI =  Math.floor((i * 2) + 2);
            let leftChildPriority, rightChildPriority;
            let swap = null;
            
            if(leftI < this.values.length){
                leftChildPriority = this.values[leftI].priority;
                if(leftChildPriority < elementPriority){
                    swap = leftI
                }
            }

            if(rightI < this.values.length){
                rightChildPriority = this.values[rightI].priority
                
                if(swap === null && leftChildPriority < elementPriority ||
                   swap !== null && rightChildPriority < leftChildPriority
                  ) {
                    swap = rightI
                }
            }
            if(swap){
                this.swap(this.values, i, swap);
                i = swap;
            } else {
                break;
            }
        }

        return removedElement;
        
    }
}

const priorityQueue = new PriorityQueue()
priorityQueue.enqueue("Broken arm", 2)
priorityQueue.enqueue("Broken Leg", 3)
priorityQueue.enqueue("Covid", 4)
priorityQueue.enqueue("Headache", 5)
priorityQueue.enqueue("Heartache", 1)




