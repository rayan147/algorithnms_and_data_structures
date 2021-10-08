package main
import "fmt"

func swap(arr []int, i, j int) {
	arr[i], arr[j] = arr[j], arr[i]
}

func insertionSort(arr []int) {
	for i := 1; i < len(arr); i++ {
		for j := i; j > 0; j-- {
			if arr[j] < arr[j-1] {
				swap(arr, j, j-1)
			}
		}
	}
}

func main() {
	arr := []int{4, 5, 6, 3, 22, 1,0}
	insertionSort(arr)
	fmt.Println(arr)
}