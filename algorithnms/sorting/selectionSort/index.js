/**
 @description 
 @summary Big O: O(n2) , space complexity is O(n)
 * */
let array = [5, 3, 6, 2, 10, 1, 4];
// v1.0.0
 const selectionSortV1 = (originalArray) => {
   // Clone original array to prevent its modification.
   const arr = [...originalArray];

   for (let i = 0; i < arr.length; i++) {
      let min = i;
      // Find minimum element in the rest of array.
      for (let j = i + 1; j < arr.length; j++) {
         if (arr[j] < arr[min]) {
            min = j;
         }
      }
      // Swap the min and current element.
      const temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
   }
   return arr;
 }


 // v2.0.0
 const swap =(arr, i, min) => {
    const temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }

 const selectionSortV2 = (originalArray) => {
   // Clone original array to prevent its modification.
   const arr = [...originalArray];

   for (let i = 0; i < arr.length; i++) {
      let min = i;
      // Find minimum element in the rest of array.
      for (let j = i + 1; j < arr.length; j++) {
         if (arr[j] < arr[min]) {
            min = j;
         }
      }
      // Swap the min and current element.
      swap(arr, i, min)
   }
   return arr;
 }

 
 // v3.0.0
 const swapV3 =(arr,firstLoopIndex,min) => {
    const temp = arr[firstLoopIndex];
    arr[firstLoopIndex] = arr[min];
    arr[min] = temp;
  }


 const selectionSortV3 = (originalArray) => {
     if(originalArray.length === null || originalArray.length <= 0) return originalArray;
   // Clone original array to prevent its modification.
   const arr = [...originalArray];
   // Step 1: Set the index of the minimum element to the first index.
   let min = 0;
   for (let [firstLoopIndex,_] of arr.entries()) {
       /* 
        *@iterations:
      index 0. [ 5, 3,  6,  2, 10, 1, 4]
                 m = 5
      index 1. [ 3, 5,  6,  2, 10, 1, 4]
                    m = 5 
       */
         min = firstLoopIndex;
         // Step 2: Find the minimum element in the rest of array.
         for (let secondLoopIndex = firstLoopIndex + 1; secondLoopIndex < arr.length; secondLoopIndex++) {
    /* 
         *@iterations:
         index 0. [ 5, 3,  6,  2, 10, 1, 4]
                    m=5,  shis  
         index 1. [ 3, 5,  6,  2, 10, 1, 4]
                    m=5,  s=6
         index 2. [ 3, 5,  6,  2, 10, 1, 4]
                           m=5,  s=2
       */
            if (arr[secondLoopIndex] < arr[min]) {
                /**
                 * @iterations:
                 * 0. Is 3 less than 5?  set m = 3
                 * 1. Is 6 less than 5?  No , keep m = 5
                 */
               min = secondLoopIndex;
            }
         }
         // Step 3: Swap the min and current element.
          /**
                 * @iterations:
                 * index 0. swap 5 and 3 [ 3, 5,  6,  2, 10, 1, 4]
                 * index 1. no swap [ 3, 5,  6,  2, 10, 1, 4]
                 */
      swapV3(arr,firstLoopIndex, min);
   }
   
   return arr;
 }
 console.log(selectionSortV3(array));