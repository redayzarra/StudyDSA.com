export const queueNodesCode = 
`# Definition for a queue node
class Node:
    def __init__(self, value = None, next = None):
        self.value = value
        self.next = next
        
# Queue implementation using linked list nodes
class Queue:
    def __init__(self):
        self.left = None  # Front of the queue
        self.right = None  # Rear of the queue`;


export const circularQueueCode = 
`# Definition of a queue node
class Node:
    def __init__(self, value = None, next = None):
        self.value = value
        self.next = next

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

export const dequeCode = 
`# Definition of a deque node
class Node:
    def __init__(self, value = None, next = None, prev = None):
        self.value = value  # Value stored in the node
        self.next = next    # Pointer to the next node in the deque
        self.prev = prev    # Pointer to the previous node in the deque

# Deque implemented using a doubly linked list
class Deque:
    def __init__(self):
        self.left = None  # Front of the deque
        self.right = None  # Rear of the deque
        self.size = 0 

    def isEmpty(self) -> bool:
        # Check if the deque is empty
        return self.size == 0

    def addFront(self, value):
        # Add a new value to the front of the deque
        newNode = Node(value)
        if self.isEmpty():
            # If the deque is empty, newNode is both left and right
            self.left = self.right = newNode
        else:
            # Link the new node with the current front and update left
            newNode.next = self.left
            self.left.prev = newNode
            self.left = newNode
        self.size += 1

    def addRear(self, value):
        # Add a new value to the rear of the deque
        newNode = Node(value)
        if self.isEmpty():
            # If the deque is empty, newNode is both left and right
            self.left = self.right = newNode
        else:
            # Link the new node with the current rear and update right
            self.right.next = newNode
            newNode.prev = self.right
            self.right = newNode
        self.size += 1

    def removeFront(self):
        # Remove the value from the front of the deque
        if self.isEmpty():
            return None

        removedValue = self.left.value
        if self.left == self.right:
            # If there's only one element, clear both left and right
            self.left = self.right = None
        else:
            # Move left to the next node and clear the previous link
            self.left = self.left.next
            self.left.prev = None
        self.size -= 1
        return removedValue

    def removeRear(self):
        # Remove the value from the rear of the deque
        if self.isEmpty():
            return None

        removedValue = self.right.value
        if self.left == self.right:
            # If there's only one element, clear both left and right
            self.left = self.right = None
        else:
            # Move right to the previous node and clear the next link
            self.right = self.right.prev
            self.right.next = None
        self.size -= 1
        return removedValue

    def peekFront(self):
        # Return the value at the front of the deque without removing it
        if self.isEmpty():
            return None
        return self.left.value

    def peekRear(self):
        # Return the value at the rear of the deque without removing it
        if self.isEmpty():
            return None
        return self.right.value`;