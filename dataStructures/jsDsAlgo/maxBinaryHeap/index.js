/**
 * @name MaxBinaryHeap
 * @description it is a binanry tree that the parent node is always greater than
 * its children nodes. it needs to be filled out from left to right
 * @property Parent ,Left Child and Right Child
 * @summary to find the rightChild in an array rc =2n+2 (n is the parent's index value) and for leftChild lc =2n+1
 * @example Parent = 15, rc=2x15+2 and lc=2x15+1
 * @summary to find a Parent from a child node , Parent = Math.floor((n-1)/2) (where n is the current child index value)
 * @example child _index_value = 5, p = Math.floor((5-1)/2)
 */


class MaxBinaryHeap {
    constructor(){
        this.properties = [41,39,33,18,27,12]
    }
    /**
     * @description bubbleUp finds the newly insert val and place where it needs to be 
     */
    bubbleUp (){
        let indexNewValue = this.properties.length - 1 
        const newValue = this.properties[indexNewValue]
        let parentNodeIndex,parentNodeValue
        for (const values of this.properties) {
          if(indexNewValue > 0){
          parentNodeIndex = Math.floor((indexNewValue -1)/2)
          parentNodeValue = this.properties[parentNodeIndex]

          if(newValue <= parentNodeValue) break
          this.properties[parentNodeIndex] = newValue
          this.properties[indexNewValue] = parentNodeValue
          indexNewValue = parentNodeIndex
        
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
heap.insert(55)
heap.insert(551)
heap.insert(1)
heap.insert(189)
console.log(heap)