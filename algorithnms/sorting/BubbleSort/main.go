package main
import "fmt"
	
func swap(arr []int, i, j int) {
	arr[i], arr[j] = arr[j], arr[i]
}

func bubble_sort(arr []int) []int {
	for i := 0; i < len(arr); i++ { // outer loop for traversing the array
		for j := 0; j < len(arr)-1; j++ { // inner loop for comparing adjacent elements
			if arr[j] > arr[j+1] { // if adjacent elements are not in order
				swap(arr, j, j+1)  // swap them
			}
		}
	}
	return arr  // return sorted array
} 


func main() {
	arr := []int{5, 2, 4, 6, 1, 3}
	bubble_sort(arr)
	fmt.Println(arr)
}