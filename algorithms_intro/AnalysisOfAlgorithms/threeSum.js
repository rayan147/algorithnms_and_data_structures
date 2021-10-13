

const threeSum = (arr)=>{
    const N = arr.length;
    let result = 0;

    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            for (let k = j + 1; k < N; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    result++;
                }
            }
        }
    }
    return result;
} 
console.log(threeSum([-1, 0, 1, 2, -1, -4]));