const MaxBinaryHeap = ()=>{
    const values = []


const bubbleUp = () => {
    let idx= values.length - 1
    const newValue = values[idx]
    let parentNodeIndex,parentNodeValue

    while (idx > 0) {
      parentNodeIndex = Math.floor((idx -1)/2)
      parentNodeValue = values[parentNodeIndex]
      if(newValue <= parentNodeValue) break
      values[parentNodeIndex] = newValue
      values[idx] = parentNodeValue
      idx = parentNodeIndex  
      }
    
}
const insert = (val) =>{
    bubbleUp()
    return   values.push(val) 
   }
const v = () =>{
    return   values 
   }

    return {
       insert, 
       v
    } 
}
const m = MaxBinaryHeap()
console.log(m.insert(1))
console.log(m.insert(10))
console.log(m.insert(18))
console.log(m.insert(180))
console.log(m.insert(190))
console.log(m.v())
