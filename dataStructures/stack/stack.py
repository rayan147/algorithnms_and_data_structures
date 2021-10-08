class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class Stack:
    def __init__(self):
        self.head = None
        self.size = 0   
    
    def push(self, value):
        new_node = Node(value)
        new_node.next = self.head
        self.head = new_node
        self.size += 1
        return self.head
    
    def pop(self):
        if self.size == 0:
            return None
        else:
            value = self.head.value
            self.head = self.head.next
            self.size -= 1
            return value
    
s = Stack()
print(s.push(1))
print(s.push(2))

