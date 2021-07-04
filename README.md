### Algorithnms and Data Structures 
it is a collections of algorithnms and data structures that I am currently learning.
These implementations will be in javascript or python.

please feel free to add improvements .

### What is space in JS
 
 the space complexity is the space required by the algorithm in RAM .

 Rule of Thumb in Javascript 

Most primitives are constanst space 0(1) **booleans,numbers,underfined,null**

string, require 0(n) space **where n is the length of the string**
Arrays and objects are 0(n) as well becuase its input grows


#### For Example
 ```javascript
  function sum(arr){
      let total = 0;  // this takes space
      for (let val of arr){ // val takes space
          total += val      // notice the actual loop takes time CPU ,not time
      }
      return tatal  // takes space
  }
```
it is **0(1)**  

 ```javascript
  function double(arr){
      let newArr = [];  // this takes space
      for (let val of arr){ // val takes space
          newArr.push(2 * val)      // notice the actual loop takes time CPU ,not time
      }
      return newArr  // takes space
  }
```
it is **0(n)** 