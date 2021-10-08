const Node = (value) => {
    return{
        value: value,
        next: null
    }
}

const Queue = () => {
    let head = null;
    let tail = null;
    let size = 0;
     
    // add to the end of the queue
    const enqueue = (value)=>{
        const newNode = Node(value);
        if(!head){
            head = newNode;
            tail = newNode;
        }
        const oldTail = tail;
        tail = newNode;
        oldTail.next = tail;
        size++;
 
    }
    // remove from the front of the queue and return the value
    const dequeue = () => {
        if(!head){
            return null;
        }
        const oldHead = head;
        head = head.next;
        size--;
        return oldHead.value;
    }
    const print = () => {
        let current = head;
        while(current){
            console.log(current);
            current = current.next;
        }
    }

    return {
        enqueue,
        dequeue,
        print
    }
}
const q = Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
const a = q.dequeue();

q.print();
console.log(a);