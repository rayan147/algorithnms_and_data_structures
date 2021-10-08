const node =(value)=>{
    return{
        value,
        next:null
    }
}

const stack =( )=>{
    let top = null;
    let size = 0;

    const push =(value)=>{
        const newNode = node(value);
        newNode.next = top;
        top = newNode;
        return ++size;
    }
    const pop =()=>{
        if(top){
            const value = top.value;
            top = top.next; // set top to the next node
            size--;
            return value; // return the value of the node
        }
        
        return null;
    }
    const peek =()=>{
        return top ? top.value : null;
    }
    const isEmpty =()=>{
        return top === null;
    }
    const getSize =()=>{
        return size;
    }
    const print =()=>{
        let current = top;
        while(current){
            console.log(current);
            current = current.next;
            
        }
    }

    return{
        push,
        pop,
        peek,
        isEmpty,
        getSize,
        print
    }
}

const s = stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
s.push(6);
s.push(7);
s.pop();
s.print();
