import Queue from '../../../dataStructures/queue/queue'



const Graph = ()=>{
    let adjancencyList = new Map()
    const addVertex =(value)=>{
        adjancencyList.set(value,[])
    }

    const bfs = (start )=>{
       const result = []
       const queue = new Queue()
       const visted = new Set()
       let vertex 

       queue.enqueue(start)
       visted.add(start)
       
       while(queue.length){
       vertex  = queue.dequeue()
       result.push(vertex)
       adjancencyList.get(vertex).forEach(neighbor => {
           if(!visted.has(neighbor)){
               visted.add(neighbor)
               queue.enqueue(neighbor)
           }
       });

       }
      return result
    }
    return{
       addVertex,
       bfs
    }
}
const airports = ['Mia', 'NW', 'ATL', 'ORD']
const routes = [
    ['Newark','Miami'],
    ['Atlanta','Newark'],
    ['Atlanta','Miami'],
    ['Miami','Newark'],
    ['Newark','Atlanta']
]

