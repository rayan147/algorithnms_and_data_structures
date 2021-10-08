package main

import (
	"hash/maphash"
	"fmt"
)


func graph(){
	adjencencyList := maphash()
	
	 fmt.Print(adjencencyList)
}


func main(){
     graph()
}