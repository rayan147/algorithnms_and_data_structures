/**
 * @name MaxBinaryHeap
 * @description it is a binanry tree that the parent node is always greater than
 * its children nodes. it needs to be filled out from left to right
 * @property Parent ,Left Child and Right Child
 * @summary to find the rightChild in an array rc =2n+2 (n is the parent's index value) and for leftChild lc =2n+1
 * @example Parent = 15, rc=2x15+2 and lc=2x15+1
 * @summary to find a Parent from a child node , Parent = Math.floor((n-1)/2) (where n is the current child index value)
 * @example child _index_value = 5, p = Math.floor((5-1)/2)
 * @example [ 1200, 1100, 700, 100, 18 ]
 */


class MaxBinaryHeap {
    constructor(){
        this.properties = []
    }
    /**
     * @description bubbleUp finds the newly insert val and place where it needs to be 
     */
    getNewValueIndex (){
      let indexNewValue = this.properties.length - 1
      return indexNewValue
    }
    getNewValue (){
      const newValue = this.properties[this.getNewValueIndex()]
      return newValue
    }
    bubbleUp (){
        let idx = this.getNewValueIndex()
        let newValue = this.getNewValue()
        let parentNodeIndex,parentNodeValue

        for (const values of this.properties) {
          if(idx > 0){
          parentNodeIndex = Math.floor((idx -1)/2)
          parentNodeValue = this.properties[parentNodeIndex]

          if(newValue <= parentNodeValue) break
          this.properties[parentNodeIndex] = newValue
          this.properties[idx] = parentNodeValue
          idx = parentNodeIndex  
        
        // console.log(parentNodeValue)
        console.log("values",parentNodeValue)
          }
        }
    }
    
    /**
     * @description Push the value in the values property on the heap
     * @param {*} val
     * @function bubbleUp() 
     * @description bubbleUp Bubble the value up to is correct stop
     */
    insert (val){
        this.properties.push(val)
        this.bubbleUp()
      
    }
}

const heap = new MaxBinaryHeap()
heap.insert(100)
heap.insert(700)
heap.insert(1200)
heap.insert(1100)
heap.insert(18)
console.log(heap.properties)