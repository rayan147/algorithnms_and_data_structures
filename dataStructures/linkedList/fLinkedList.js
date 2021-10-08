const node = (value)=>{
    return {
        value,
        next: null
    }
}
const singlelyLinkedList = ()=>{
      let head = null;
      let tail = null;
      let length = 0;
      return {
            insertNode(value){
                let newNode = node(value);
                if(!head){
                    head = newNode;
                    tail = newNode;
                }else{
                    tail.next = newNode;
                    tail = newNode;
                }
                length++;
            },
            getAt(index){
                if(index < 0 || index >= length){
                    return null;
                }
                let current = head;
                for(let i = 0; i < index; i++){
                    current = current.next;
                }
                return current;
            },
            removeNode(value){},
            


         
      }
}

const s = singlelyLinkedList();
s.add(1);
s.add(2);
s.add(3);
s.add(4);
s.add(5);
console.log(s);

