export const queueNodesCode = 
`# Definition for a queue node
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
        
# Queue implementation using linked list nodes
class Queue:
    def __init__(self):
        self.head = None  # Front dummy node of the queue
        self.tail = None  # Rear dummy node of the queue`;