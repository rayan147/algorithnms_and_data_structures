class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
     constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;    
     }
  insert(value) {
      let node = new Node(value); // create a new node
      if(this.head === null){  // if the list is empty
          this.head = node;    // set the new node as the head
          this.tail = node;     // set the new node as the tail
      }else{                      // if the list is not empty
          this.tail.next = node;  // set the new node as the tail's next
          this.tail = node;     // set the new node as the tail
          this.length++;       // increment the length of the list
      }
  } 
}
/*
head: 1 -> 2 -> 3 -> 4 -> null
tail:  4 -> null
length: 3
[1, 2, 3]

*/

const ll = new LinkedList();
ll.insert(1);
ll.insert(2);
ll.insert(3);
ll.insert(5);
ll.insert(4);
for ( let i = 0; i < ll.length; i++ ) {
    console.log(ll);
    // ll.head = ll.head.next;
}
