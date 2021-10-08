def binary_search(arr,item):
    low = 0
    high = len(arr) - 1
    if low > high:
        return -1
    mid = (low + high)//2
    if arr[mid] == item:
        return mid
    elif arr[mid] > item:
        return binary_search(arr,item,low,mid-1)
    else:
        return binary_search(arr,item,mid+1,high)
    

print(binary_search([1,2,3,4,5,6,7,8,9,10],5))