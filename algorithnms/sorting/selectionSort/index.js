/**
 @description find the minimum element in the rest of array and 
 swap it with the current element.
 @summary Big O: O(n2) , space complexity is O(n)
 @use when you need to minimize the swaps.
 * */
let array = [5, 3, 6, 2, 10, 1, 4];
// v1.0.0
const swap =(arr,index1,index2)=>{
   [arr[index1],arr[index2]] = [arr[index2],arr[index1]]
}
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
      swap(arr, i, min);
   }
   return arr;
 }


 // v2.0.0
// const swap = (arr) => (index1) => (index2) => {
//    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
// }

 const selectionSortV2 = (originalArray) => {
   // Clone original array to prevent its modification.
   const arr = [...originalArray];
     let min;
   for (let i = 0; i < arr.length; i++) {
        min = i;
      // Find minimum element in the rest of array.
      for (let j = i + 1; j < arr.length; j++) {
         // console.log(`i: ${arr[i]}, j: ${arr[j]}`);
         if (arr[j] < arr[min]) {
            min = j;
         }
      }
      // Swap the min and current element.
      console.log('*****************')
      console.log(arr)
      console.log('SWAPPING TO :')
      if (i !== min) {
         swap(arr,i,min);
         console.log(arr)
      }
      console.log('*****************')
      // if(i !== min) {
      // swap(arr)(i)(min);
      // }
   }
   return arr;
 }

 
const arrRandom = [5, 3, 6, 2, 10, 1, 4];
console.log(selectionSortV2(arrRandom));