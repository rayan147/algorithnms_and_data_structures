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
it is **0(n)** because the space that is being taken up it is directly proportional to the input **arr**

### What is Big O?
It shows how an algorithm scales based on input size.


![  Big 0]
(https://i.stack.imgur.com/WcBRI.png)

#### O(n2): known as Quadratic complexity

* 1 item: 1 operations
* 10 items: 100 operations
* 100 items: 10,000 operations
* Notice that the number of items increases by a factor of 10, but the time increases by a factor of 102. Basically, n=10 and so O(n2) gives us the scaling factor n2 which is 102.

#### O(n): known as Linear complexity

* 1 item: 1 second
* 10 items: 10 seconds
* 100 items: 100 seconds
* This time the number of items increases by a factor of 10, and so does the time. n=10 and so O(n)'s scaling factor is 10.

#### O(1): known as Constant complexity

* 1 item: 1 operations
* 10 items: 1 operations
* 100 items: 1 operations
The number of items is still increasing by a factor of 10, but the scaling factor of O(1) is always 1.

#### O(log n): known as Logarithmic complexity

* 1 item: 1 operations
* 10 items: 2 operations
* 100 items: 3 operations
* 1000 items: 4 operations
* 10,000 items: 5 operations
The number of computations is only increased by a log of the input value. So in this case, assuming each computation takes 1 second, the log of the input n is the time required, hence log n.

That's the gist of it. They reduce the maths down so it might not be exactly n2 or whatever they say it is, but that'll be the dominating factor in the scaling.