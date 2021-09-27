const log = (conext)=> console.log(conext)

 // [1,2,3,4,5,6,7,8,9,10]

class MinBinaryHeap {
   constructor(){
      this.heap = [1,2,3,4,15,16,17,28,29,210]
   }
   /**
   * @returns heap size
   */
   size(){
      return this.heap.length
   }

  /**
  * @param {index}
  * @returns leftChildIndex
  */
   getLeftChildIndex(index){
     return 2*index + 1
   }

   /**
   * @param {index}
   * @returns rightChildIndex
   */
   getRightChildIndex(index){
     return 2*index + 2
   }

   /**
   * @param {index}
   * @returns parentIndex
   */
   getParentIndex(index){
     return Math.floor((index-1)/2)
   }
    /**
   * @param {index}
   * @returns true||false
   */
   hasLeftChild(index){
     return this.getLeftChildIndex(index) < this.size()
   }

    /**
   * @param {index}
   * @returns true||false
   */
   hasRightChild(index){
     return this.getRightChildIndex(index) < this.size()
   }


    /**
   * @param {index}
   * @returns true||false
   */
   hasParent(index){
     return this.getParentIndex(index) >= 0
   }


    /**
   * @param {index}
   * @returns leftChid value in the heap
   */
   leftChild(index){
     return this.heap[this.getLeftChildIndex(index)]
   }

    /**
   * @param {index}
   * @returns rightChid value in the heap
   */
   righChild(index){
     return this.heap[this.getRightChildIndex(index)]
   }

  // swap two values in the heap
  #swap(index1, index2){
    let temp = this.heap[index1] // holder for the first value
    this.heap[index1] = this.heap[index2] // swap first and second values
    this.heap[index2] = temp // swap back
  }

   /**
   * @param {index}
   * @returns parent value in the heap
   */
   parent(index){
     return this.heap[this.getParentIndex(index)]
   }
    

    /**
   * @returns min value
   */
   getMin(){    
   if(this.size === 0)
      return null
   return this.heap[0]
   }
}

const minBinaryHeap = new MinBinaryHeap()
log(minBinaryHeap.heap[minBinaryHeap.size()-1])
