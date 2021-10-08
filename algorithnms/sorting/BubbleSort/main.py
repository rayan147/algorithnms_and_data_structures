
def swap(arr, i, j):
    arr[i], arr[j] = arr[j], arr[i]

def bubble_sort(arr):
    n = len(arr) # get the length of the array
    for i in range(n): # iterate through the array
        no_swap = True # no swap has been made
        for j in range(0, n-i-1): # iterate through the array from the beginning to the end
            if arr[j] > arr[j+1]: # if the current element is greater than the next element
                swap(arr, j, j+1) # swap the elements
                no_swap = False  # a swap has been made
    return arr
unsorted_arr = [5, 2, 4, 6, 1, 3]
print(bubble_sort(unsorted_arr))