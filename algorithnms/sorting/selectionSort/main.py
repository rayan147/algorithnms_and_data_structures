
def swap (arr, i, j):
   arr[i], arr[j] = arr[j], arr[i]





def selectionSort (arr):
    for i in range(len(arr)):
        min_index = i
        for j in range(i+1, len(arr)):
            print('arr[i]', arr[i], 'arr[j]', arr[j])
            if arr[j] < arr[min_index]:
                min_index = j
        swap(arr, i, min_index)
    return arr

print(selectionSort([5,2,4,6,1,3]))