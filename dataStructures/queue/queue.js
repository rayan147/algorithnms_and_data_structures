class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
//FIFO
//adding to the end and removing from the begining 
/**
 * insertion O(1)
 * removel   O(1)
 * searching O(n)
 * access    O(n)
 */
class Queue {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    enqueue(value){
      const newNode = new Node(value)
      if(!this.head){
          this.head = newNode
          this.tail = newNode
      }
      this.tail.next = newNode
      this.tail = newNode
      return ++this.length
    }
    dequeue(){
        if(!this.head) return null
        const temp = this.head
        if(this.head === this.tail){
            this.tail= null
        }
        this.head = this.head.next
        this.length++
        return temp.value
    }
}

export default Queue





