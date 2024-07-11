class MaxBinaryHeap {
    constructor(){
        this.values = []
    }

    insert(value){
        this.values.push(value);
        
        let i = this.values.length - 1 ;
        let parentIndex =  Math.floor((i - 1) / 2);

        while(this.values[i] > this.values[parentIndex]){
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

    remove(){
        if(!this.values.length){
            return null;
        }
        
        this.swap(this.values, 0, this.values.length-1);
        const removedElement = this.values.pop()
        
        let i = 0;
        let element = this.values[i];
        
        let j = 0;
        while(true){
            let leftI =  Math.floor((i * 2)  + 1);
            let rightI =  Math.floor((i * 2) + 2);
            let leftChild, rightChild;
            let swap = null;
            
            if(leftI < this.values.length){
                leftChild = this.values[leftI];
                if(leftChild > element){
                    swap = leftI
                }
            }

            if(rightI < this.values.length){
                rightChild = this.values[rightI]
                
                if(swap === null && leftChild > element ||
                   swap !== null && rightChild > leftChild
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

const maxBinaryHeap = new MaxBinaryHeap()
maxBinaryHeap.insert(70)
maxBinaryHeap.insert(67)
maxBinaryHeap.insert(65)
maxBinaryHeap.insert(45)
maxBinaryHeap.insert(58)
maxBinaryHeap.insert(40)
maxBinaryHeap.insert(53)
maxBinaryHeap.insert(44)
maxBinaryHeap.insert(15)
maxBinaryHeap.insert(31)


