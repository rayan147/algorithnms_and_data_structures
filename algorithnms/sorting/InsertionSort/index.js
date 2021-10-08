/**
 * @name InsertionSort
 * @description Insertion Sort is a simple sorting algorithm 
 * that works the way we sort playing cards in our hands. or Builds up 
 * the array by gradually creating larger and larger sorted subarrays
 * @param {Array} arr - The array to be sorted
 * @returns {Array} - The sorted array
 *  
 */

const swap = (arr) => (index1)=>(index2)=>{
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

const insertionSort = (arr) => {
    for(let i = 1; i < arr.length; i++){
        for(let j = i; j > 0; j--){
            console.log(`arr[j]:${arr[j]} arr[j-1]:${arr[j-1]}`)
            if(arr[j] < arr[j-1]){
                swap(arr)(j)(j-1)
                console.log(arr)
            }
        }
    }
    return arr
}

console.log(insertionSort([5,2,1,3,4]))