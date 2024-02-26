export const queueNodesCode = 
`# Definition for a queue node
class Node:
    def __init__(self, value = None, next = None):
        self.value = value
        self.next = None
        
# Queue implementation using linked list nodes
class Queue:
    def __init__(self):
        self.left = None  # Front dummy node of the queue
        self.right = None  # Rear dummy node of the queue`;


export const circularQueueCode = 
`# Definition of a queue node
class Node:
    def __init__(self, value=None):
        self.value = value
        self.next = None

# Circular queue implemented using linked lists
class CircularQueue:
    def __init__(self, capacity: int):
        self.left = None  # Head of the queue
        self.right = None  # Tail of the queue
        self.capacity = capacity
        self.size = 0

    def isFull(self) -> bool:
        # Check if the queue has reached its capacity
        return self.size == self.capacity

    def isEmpty(self) -> bool:
        # Check if the queue is empty
        return self.size == 0

    def enqueue(self, value) -> bool:
        # If the queue is full, do not add the element and return False
        if self.isFull():
            return False

        # If the queue is empty, set both left and right pointers to the new node
        newNode = Node(value)
        if self.isEmpty():
            self.left = self.right = newNode
            self.right.next = self.left  # Make it circular
        # If the queue is not empty, add the new node and update pointers
        else:
            self.right.next = newNode
            self.right = newNode
            self.right.next = self.left  # Make it circular
        self.size += 1
        return True 

    def dequeue(self):
        # If the queue is empty, return None
        if self.isEmpty():
            return None

        # If there's only one element, set both pointers to None
        removedValue = self.left.value
        if self.left == self.right:
            self.left = self.right = None
        # If there are multiple elements, move the head pointer forward
        else:
            self.left = self.left.next
            self.right.next = self.left
        self.size -= 1
        return removedValue 

    def peek(self):    
        # If the queue is empty, return None
        if self.isEmpty():
            return None
        return self.left.value`;