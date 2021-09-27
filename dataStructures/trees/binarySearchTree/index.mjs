/** 
 * @name  BinarySearchTree
 * @class BinarySearchTree
 * @class Node 
 * @description it is binary search tree that has at most two children node per parent node
 * and the left child node is smaller than the parent node 
 * and the right child node is bigger than the parent node.
 * **/
 class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  
 insert (value){
   if(this.root === null) {
     this.root = new Node(value);
     return
   }
   function recurive(node) {
     if (node === null) {
       return
     }
     if (value < node.value) {
       recursive(node.left);
     }
     else if (value > node.value) {
       recursive(node.right);
     } 
    
     else {
       return
     }
    recurive(this.root); 
   } 
   
 }

  search(value) {
    let current = this.root;
    while (current !== null) {
      if (value < current.value) {
        current = current.left;
      }
      else if (value > current.value) {
        current = current.right;
      }
      else {
        return current;
      }
    }
    return null;
  }

  delete(value) {
    let current = this.root;
    let parent = null;
    while (current !== null) {
      if (value < current.value) {
        parent = current;
        current = current.left;
      }
      else if (value > current.value) {
        parent = current;
        current = current.right;
      }
      else {
        break;
      }
    }
    if (current === null) {
      return;
    }
    if (current.left === null) {
      if (parent === null) {
        this.root = current.right;
      }
      else {
        if (value < parent.value) {
          parent.left = current.right;
        }
        else {
          parent.right = current.right;
        }
      }
    }
    else if (current.right === null) {
      if (parent === null) {
        this.root = current.left;
      }
      else {
        if (value < parent.value) {
          parent.left = current.left;
        }
        else {
          parent.right = current.left;
        }
      }
    }
    else {
  }
}
}



const bst = new BST();
bst.insert(5);
bst.insert(10);
bst.insert(20);

const b = JSON.stringify(bst);
console.log({bst});