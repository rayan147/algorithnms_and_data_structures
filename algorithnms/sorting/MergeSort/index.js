
/**
 * 
 * @param {*} arr1 
 * @param {*} arr2 
 * @example [8,47,9,1,2,3,4,5,6,7]
 * 
 */
const merge = (arr1, arr2) => {
    let result = [];
    let right = 0;
    let left = 0;
    for (let i = 0; i < arr1.length + arr2.length; i++) { // loop through the array
        if (arr1[left] < arr2[right] || right >= arr2.length) { 
             console.log('arr1[left]', arr1[left])
            // if the left array is smaller than the right array or the right array is empty
            result.push(arr1[left]); // push the left array into the result array
            left++; // increment the left array
        }
        else {
            console.log('arr2[right]', arr2[right])
            result.push(arr2[right]); // push the right array into the result array
            right++; // increment the right array
        }
    }
    console.log('result', result);
    return result;

}

const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid)); // slice the array from 0 to mid
    let right = mergeSort(arr.slice(mid)); // slice the array from mid to the end
    return merge(left, right); // merge the left and right array
}
console.log(mergeSort([8, 47, 9, 1, 2, 3, 4, 5, 6, 7]));