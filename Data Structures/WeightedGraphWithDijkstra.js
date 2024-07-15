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
        if(this.values.length === 0){
            return removedElement;
        }
        
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
                
                if(swap === null && rightChildPriority < elementPriority ||
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

class WeightedGraph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(this.adjacencyList[vertex]){
            throw "Already added";
        }

        this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2, weight){
        if(!this.adjacencyList[v1] || !this.adjacencyList[v2]){
            throw "Add edge requires two valid vertex";
        }

        if(!this.adjacencyList[v1].includes(v2)){
            this.adjacencyList[v1].push({node: v2 , weight});  
        }
        if(!this.adjacencyList[v2].includes(v1)){
            this.adjacencyList[v2].push({node: v1 , weight});
        }
    }

    removeEdge(v1, v2){
        if(!this.adjacencyList[v1] || !this.adjacencyList[v2]){
            throw "remove edge requires two valid vertex";
        }
        
        this.adjacencyList[v1] = this.adjacencyList[v1].filter((vertex => vertex.node !== v2))
        this.adjacencyList[v2] = this.adjacencyList[v2].filter((vertex => vertex.node !== v1))
        
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            throw "Invalid vertex";
        }

        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex.node);
        }
        
        delete this.adjacencyList[vertex];
    }

    DFSRecursive(vertex){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        
        (function dfs(vertex){
            if(!vertex) return;
            visited[vertex] = true;
            result.push(vertex);

            adjacencyList[vertex].forEach(edge => {
                if(!visited[edge]){
                    dfs(edge);
                }
            });
        })(vertex)
        
        return result;
    }

    DFSIterative(start){
        const result = [];
        const visited = {};
        const stack = [start];
        let vertex;

        while(stack.length){
            vertex = stack.pop();
            
            if(!visited[vertex]){
                result.push(vertex);
                visited[vertex] = true;
                this.adjacencyList[vertex].forEach(neighbor => {
                    if(!visited[neighbor]){
                        stack.push(neighbor);
                    }
                })
            }
        }
        
        return result;
    }

     BFS(start){
        const result = [];
        const visited = {};
        const queue = [start];
        let vertex;
         
        while(queue.length){
            vertex = queue.shift();
            
            if(!visited[vertex]){
                result.push(vertex);
                visited[vertex] = true;
                const neighbors = this.adjacencyList[vertex];
                neighbors.forEach(neighbor => {
                    queue.push(neighbor)
                })
            }
        }
        
        return result;
    }

    dijkstra(start, end){
        const priorityQueue = new PriorityQueue();
        const distances = {};
        const previus = {};
  

        for (let vertex in this.adjacencyList) {
            if(vertex === start){
                distances[vertex] = 0;
                priorityQueue.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                priorityQueue.enqueue(vertex, Infinity);
            }
            previus[vertex] = null;
        }
        
        while(priorityQueue.values.length){
            const smallestPriority = priorityQueue.dequeue();
            if(smallestPriority.value !== end){
                this.adjacencyList[smallestPriority.value].forEach(edge => {
                    const nextNode = edge.node;
                    const distance = distances[smallestPriority.value] + edge.weight;
                    if(distance < distances[nextNode]){
                        distances[nextNode] = distance;
                        previus[nextNode] = smallestPriority.value;
                        priorityQueue.enqueue(nextNode, distance)
                    }
            
                })
                
            } else {
                break;
            }
        }
        
        let current = end;
        let path = [current];
        while(current !== start){
            current = previus[current]
            path.push(current);
        }
        return path.reverse();
    }
}

const g = new WeightedGraph();


g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("B", "E", 3);
g.addEdge("E", "F", 1);



g.dijkstra("A", "E")