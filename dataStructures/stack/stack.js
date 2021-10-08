class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}
// LIFO
// adding/removing from the begining of the list
/**
 * insertion O(1)
 * removel   O(1)
 * searching O(n)
 * access    O(n)
 */
class Stack {
    constructor() {
        this.top = null
        this.length = 0
    }
    push(value){
       
        const newNode = new Node(value)
        newNode.next = this.top
        this.top = newNode
       
        return ++this.length
    }
    pop(){
        if(!this.top) return null
        const temp = this.top
        this.top = this.top.next
        this.length--
        return temp.value
    }
}

const s = new Stack()
const pushed = s.push(1)
console.log(pushed)
s.push(10)
s.push(20)
s.push(30)

const popped = s.pop()
console.log(popped)

console.log(s)