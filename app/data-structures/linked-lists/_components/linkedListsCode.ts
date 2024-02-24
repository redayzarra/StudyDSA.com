export const linkedPointersCode = 
`def insert_at_beginning(self, head: 'ListNode', new_value: int):
        new_node = ListNode(new_value)
        new_node.next = head  # Point new node to current head
        head = new_node  # Update head to new node`;

export const singleNodeCode = 
`# ListNode class for Singly Linked List
class ListNode:
    def __init__(self, val: int = None, next = None):
        self.val = val
        self.next = next`;

export const doublyNodeCode = 
`# ListNode class for Doubly Linked List
class ListNode:
    def __init__(self, val: int = None, prev = None, next = None):
        self.val = val
        self.prev = prev
        self.next = next`;