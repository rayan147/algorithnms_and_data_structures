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

/**
 * @method insert,peek,delete,isEmpty
*/
class MaxBinaryHeap {
    constructor(){
        this.heap = []
    }
    /**
     * @description bubbleUp finds the newly insert val and place where it needs to be 
     *@returns the new value index
     */
    getNewValueIndex (){
      let indexNewValue = this.heap.length - 1
      return indexNewValue
    }
    /**
     * 
     * @returns the newly inserted value
     */
    
    getNewValue (){
      const newValue = this.heap[this.getNewValueIndex()]
      return newValue
    }
    bubbleUp (){
        let idx = this.getNewValueIndex()
        let newValue = this.getNewValue()
        let parentNodeIndex,parentNodeValue
  
          while(idx > 0){
          parentNodeIndex = Math.floor((idx -1)/2)
          parentNodeValue = this.heap[parentNodeIndex]

          if(newValue <= parentNodeValue) break
          this.heap[parentNodeIndex] = newValue
          this.heap[idx] = parentNodeValue
          idx = parentNodeIndex   
        }
    }
     /**
     * 
     * @returns the heap array
     */
    
    print(){
    console.log(this.heap.slice(0))
    }

    /**
     * @returns the size of the heap
     */

    size (){
     return this.heap.length
    }
/**
     * @returns true or false
     */
    isEmpty (){
      return this.size() === 0
    }
    /**
     * @description Push the value in the values property on the heap
     * @param {*} val
     * @function bubbleUp() 
     * @description bubbleUp Bubble the value up to is correct stop
     */
    insert (val){
        this.heap.push(val)
        this.bubbleUp()
      
    }
    
    bubbleDown (){
      let idx = 0 
      const length = this.size()
      const element = this.heap[idx]
      let leftChild,rightChildIdx
     
       while(true){
       let  leftChildIdx = 2 * idx + 1 
      let   rightChild = 2 * idx + 2 
        let swap = null
        if(leftChildIdx < length){
           leftChild = this.heap[leftChildIdx]
           if(leftChild > element){
              swap = leftChildIdx
           }
        }
        if(rightChildIdx < length){
           rightChild = this.heap[rightChildIdx]
           if(
             (swap === null && rightChild > element) || 
             (swap !== null && rightChild > leftChild)){
               swap = rightChildIdx
           }
        }
         if(swap === null) break
         this.heap[idx] =this.heap[swap]
         this.heap[swap] = element
         idx = swap
       }
    }
    extractMax(){
      const max = this.heap[0]
      const end = this.heap.pop()
      if(this.heap.length > 0 ){
     this.heap[0] = end
      this.bubbleDown()
      }
     
       return max
 
     }
}

const heap = new MaxBinaryHeap()
heap.insert(100)
heap.insert(110)
heap.insert(120)
heap.insert(130)
heap.insert(30)
heap.insert(300)
// heap.extractMax()
// heap.extractMax()
console.log(heap.heap)