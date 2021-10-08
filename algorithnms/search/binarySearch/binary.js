const binarySearch = (arr, target) => {
    let low = 0;
    let high = arr.length - 1;
    if (arr.length === 0 || low > high) 
        return -1;
    
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) 
        return mid;
    
    if (arr[mid] > target) 
        return binarySearch(arr.slice(0, mid), target);
    
    if (arr[mid] < target) 
        return binarySearch(arr.slice(mid + 1), target);
    
};

const binarySearchV2 = (arr,target)=>{
    let left = 0
    let right = arr.length -1
    let mid
    while (arr.length){
        mid = Math.floor((left + right )/ 2)
        if (arr[mid] === target) return mid
        if(arr[mid] > target){
            right = mid++ 

        }
        if (arr[mid] < target){
            left = mid--
        }
     
    }
    return -1
}
console.log(binarySearchV2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],1));