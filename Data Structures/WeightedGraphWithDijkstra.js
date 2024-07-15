class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        this.values.push({val, priority});
        this.sort()
    }
    dequeue(){
        return this.values.shift();
    }
    sort(){
        this.values.sort((a,b) => a.priority - b.priority)
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
        const distances = {};
        const previus = {};
        
        Object.keys(this.adjacencyList).forEach(key => distances[key] = Infinity)
        const priorityQueue = new PriorityQueue();
        distances[start] = 0;

        Object.keys(distances).forEach(vertex => {
            priorityQueue.enqueue(vertex, distances[vertex]);
            previus[vertex] = null;
        })

        while(priorityQueue.values.length){
            const current = priorityQueue.values.shift();

            if(current.val !== end){
                
                this.adjacencyList[current.val].forEach(edge => {
                    const distance = distances[current.val] + edge.weight;
                    if(distance < distances[edge.node]){
                        distances[edge.node] = distance;
                        previus[edge.node] = current.val;
                        priorityQueue.enqueue(edge.node, distance)
                    }
            
                })
            } else {
                break;
            }
        }
            console.log(distances);
        
        console.log(previus);
        
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



g.dijkstra("A", "B")