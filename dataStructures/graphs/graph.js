class Graph {
    
    constructor() {
        // store the nodes and edges in two separate arrays
        this.adjancencyList = new Map();
    }
    addVertex(vertex) {
        if (!this.adjancencyList.has(vertex)) this.adjancencyList.set(vertex, []);
    }
    addEdge(vertex1, vertex2) {
        // if either vertex doesn't exist, add it to the graph first    
        this.adjancencyList.get(vertex1).push(vertex2);
        this.adjancencyList.get(vertex2).push(vertex1);
    }
    removeEdge(vertex1, vertex2) {
        this.adjancencyList.get(vertex1).splice(this.adjancencyList.get(vertex1).indexOf(vertex2), 1);
        this.adjancencyList.get(vertex2).splice(this.adjancencyList.get(vertex2).indexOf(vertex1), 1); 
      
    }
    removeVertex(vertex) {
        while (this.adjancencyList.size > 0) {
            const adjacentVertex = this.adjancencyList.get(vertex).pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        this.adjancencyList.delete(vertex);
    }
}

const g = new Graph();
g.addVertex('Tokyo');
g.addVertex('London');
g.addVertex('Rome');
g.addVertex('Paris');
g.addVertex('Berlin');
g.addVertex('New York');
g.addEdge('Tokyo', 'London');
g.addEdge('Tokyo', 'Rome');
g.addEdge('London', 'Paris');
g.addEdge('Paris', 'Berlin');
g.addEdge('Berlin', 'New York');
g.addEdge('Rome', 'New York');
g.removeEdge('Rome', 'New York')

console.log(g);