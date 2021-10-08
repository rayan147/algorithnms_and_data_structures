
def swap (arr,i,j): # takes in the array and the two indices
    arr[i], arr[j] = arr[j], arr[i] # swap the elements

def insertionSort(arr):
    n = len(arr) # n is the length of the array
    for i in range(1,n):# loop through the array
        for j in range(i,0,-1): # loop through the array from the back
            if arr[j] < arr[j-1]: # if the element is smaller than the previous element
                swap(arr,j,j-1) # swap the elements
            else:
                break
    return arr # return the sorted array
unSorted = [5,2,4,6,1,3]
print(insertionSort(unSorted))

