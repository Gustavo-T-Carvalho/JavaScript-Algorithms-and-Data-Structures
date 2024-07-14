class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(this.adjacencyList[vertex]){
            throw "Already added";
        }

        this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2){
        if(!this.adjacencyList[v1] || !this.adjacencyList[v2]){
            throw "Add edge requires two valid vertex";
        }

        if(!this.adjacencyList[v1].includes(v2)){
            this.adjacencyList[v1].push(v2);  
        }
        if(!this.adjacencyList[v2].includes(v1)){
            this.adjacencyList[v2].push(v1);
        }
    }

    removeEdge(v1, v2){
        if(!this.adjacencyList[v1] || !this.adjacencyList[v2]){
            throw "remove edge requires two valid vertex";
        }

        if(this.adjacencyList[v1].includes(v2)){
            this.adjacencyList[v1] = this.adjacencyList[v1].filter((vertex => vertex !== v2))
        }
        if(this.adjacencyList[v2].includes(v1)){
            this.adjacencyList[v2] = this.adjacencyList[v2].filter((vertex => vertex !== v1))
        }
        
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            throw "Invalid vertex";
        }

        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
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
}

const g = new Graph();
// g.addVertex("Tokyo");
// g.addVertex("São Paulo");
// g.addVertex("Buenos Aires");
// g.addVertex("Santiago");
// g.addVertex("New York");
// g.addVertex("Berlin");
// g.addVertex("London");
// g.addVertex("Beijing");



// g.addEdge("Tokyo", "São Paulo");
// g.addEdge("Buenos Aires", "São Paulo");
// g.addEdge("Santiago", "Buenos Aires");
// g.addEdge("Santiago", "Buenos Aires");
// g.addEdge("São Paulo", "New York");
// g.addEdge("Tokyo", "New York");
// g.addEdge("Beijing", "New York");
// g.addEdge("Tokyo", "London");

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

g.DFSRecursive("A")