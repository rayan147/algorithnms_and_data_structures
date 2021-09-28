/**
 * @name BubbleSort
 * @description Bubble Sort is a simple sorting algorithm
 *  that works by repeatedly stepping through the list to be sorted,
 * comparing each pair of adjacent items and 
 * swapping them if they are in the wrong order . the largest value bubbles
 *  to the top.
 * @param {Array} arr - The array to be sorted
 * @returns {Array} - The sorted array
 */

const swap = (arr) => (index1) => (index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            console.log(arr, arr[i], arr[j+1]);
            if (arr[j] > arr[j + 1]) {
                swap(arr)(j)(j + 1);
            }
        }
    }
    return arr;
}

const arr = [5, 3, 4, 1, 2];
console.log(bubbleSort(arr));
