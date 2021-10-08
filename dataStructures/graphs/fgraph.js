// the graph
const qraph = ()=>{
    const adjancencyList = new Map();
    return {
        addVertex(vertex){
            adjancencyList.set(vertex, []);
        },
        addEdge(vertex1, vertex2){
            adjancencyList.get(vertex1).push(vertex2);
            adjancencyList.get(vertex2).push(vertex1);
        },
        removeEdge(vertex1, vertex2){
            adjancencyList.get(vertex1).splice(adjancencyList.get(vertex1).indexOf(vertex2), 1);
            adjancencyList.get(vertex2).splice(adjancencyList.get(vertex2).indexOf(vertex1), 1);
        },
        removeVertex(vertex){
            adjancencyList.get(vertex).forEach(v => this.removeEdge(vertex, v));
            adjancencyList.delete(vertex);
        },
        getAdjancencyList(){
            return adjancencyList;
        },
        getVertices(){
            return Array.from(adjancencyList.keys());
        },
        getNeighbors(vertex){
            return adjancencyList.get(vertex);
        },
        toString(){
            return adjancencyList.toString();
        },
        size(){
            return adjancencyList.size;
        },
        isEmpty(){
            return adjancencyList.size === 0;
        },
        dfs(start){
            const result = [];
            const visited = new Set();
            const adjancencyList = this.getAdjancencyList();
            (function dfs(vertex){
                if(!vertex) return null;
               if( visited.has(vertex)) {
                   result.push(vertex);
               }
                
                adjancencyList.get(vertex).forEach(neighbor => {
                    if(!visited.has(neighbor)){
                        visited.add(neighbor);
                        return dfs(neighbor);
                    }
                });
            })(start);
            return result;
        },
        bfs(start){
            const result = [];
            const queue = [start];
            const visited = new Set();
            visited.has(start);
        
            while(queue.length){
                const vertex = queue.shift();
                result.push(vertex);
                this.getNeighbors(vertex).forEach(neighbor => {
                    if(!visited.has(neighbor)){
                        visited.add(neighbor);
                        queue.push(neighbor);
                    }
                });
            }
            return result;
        }

}};
// Airports are represented by strings.
 const airportCodes = ['SFO', 'JFK', 'NRT', 'LAX', 'LHR'];

 //Routes 
    const routes = [
        ['SFO', 'JFK'],
        ['SFO', 'LAX'],
        ['JFK', 'NRT'],
        ['LAX', 'LHR']
    ];
// Create a graph of airports
const graph = new qraph();
airportCodes.forEach(airportCode => graph.addVertex(airportCode));
routes.forEach(([airport1, airport2]) => graph.addEdge(airport1, airport2));
console.log(graph.getAdjancencyList());
console.log(graph.getVertices());

console.log(graph.dfs('SFO'));
console.log(graph.toString());
  