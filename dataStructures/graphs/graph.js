class Graph {
    
    constructor() {
        // store the nodes and edges in two separate arrays
        this.adjancencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjancencyList[vertex]) this.adjancencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2) {
        // if either vertex doesn't exist, add it to the graph first    
        this.adjancencyList[vertex1].push(vertex2);
        this.adjancencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2) {
        this.adjancencyList[vertex1] = this.adjancencyList[vertex1].filter(v => v !== vertex2);
        this.adjancencyList[vertex2] = this.adjancencyList[vertex2].filter(v => v !== vertex1);
    }
    removeVertex(vertex) {
        while (this.adjancencyList[vertex].length) {
            const adjacentVertex = this.adjancencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjancencyList[vertex];
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
g.removeEdge('Tokyo', 'London');
g.removeVertex('Rome');
console.log(g);