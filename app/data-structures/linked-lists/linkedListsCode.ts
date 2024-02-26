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

export const dummyNodesCode = 
`# Definition of a doubly linked list
class ListNode:
    def __init__(self, val = None, prev = None, next = None):
        self.val = val
        self.prev = prev
        self.next = next

class DoublyLinkedList:
    def __init__(self):
        # Left and right dummy nodes surround the linked list
        self.left = ListNode(0)
        self.right = ListNode(0)

        # Connecting the dummy nodes 
        self.left.next = self.right
        self.right.prev = self.left

    def getHead(self) -> Optional[ListNode]:
        # Set cur to the head which comes after left dummy node
        cur = self.left.next
        # If there is no head and cur is at right node, return None instead
        if cur == self.right:
            return None
        return cur`;

export const singlyLinkedList = 
`# Definition of a singly list node
class ListNode:
    def __init__(self, val = None, next = None):
        self.val = val
        self.next = next

class SinglyLinkedList:
    def __init__(self):
        self.head = None

    def get(self, index: int) -> int:
        # Traverse until index or end of list
        cur = self.head
        while cur and index > 0:
            index -= 1
            cur = cur.next
        # Return value if node exists
        if cur:
            return cur.val
        # Return -1 if node doesn't exist
        return -1

    def addAtHead(self, val: int) -> None:
        # Insert new node at head
        node = ListNode(val, self.head)
        self.head = node

    def addAtTail(self, val: int) -> None:
        # If list is empty, new node becomes head
        node = ListNode(val)
        if not self.head:
            self.head = node
            return
        # If not empty, traverse to the end of list
        cur = self.head
        while cur.next:
            cur = cur.next
        # Link new node as the last node
        cur.next = node

    def addAtIndex(self, index: int, val: int) -> None:
        # If index is 0, add at head
        if index == 0:
            self.addAtHead(val)
            return
        # Traverse to one node before the target index
        cur = self.head
        for _ in range(index - 1):
            if not cur:
                return
            cur = cur.next
        # Insert new node if not beyond list bounds
        if cur:
            node = ListNode(val, cur.next)
            cur.next = node

    def deleteAtIndex(self, index: int) -> None:
        # If index is 0, remove head node
        if index == 0 and self.head:
            self.head = self.head.next
            return
        # Traverse to one node before the target index
        cur = self.head
        for _ in range(index - 1):
            if not cur:
                return
            cur = cur.next
        # Remove node if not beyond list bounds
        if cur and cur.next:
            cur.next = cur.next.next`;

export const doublyLinkedList = 
`# Definition of a doubly linked list node
class ListNode:
    def __init__(self, val=None, prev=None, next=None):
        self.val = val
        self.prev = prev
        self.next = next

class DoublyLinkedList:
    def __init__(self):
        # Initialize sentinel head and tail nodes
        self.left = ListNode(0)
        self.right = ListNode(0)
        # Connect sentinel head and tail
        self.left.next = self.right
        self.right.prev = self.left

    def get(self, index: int) -> int:
        # Traverse from left sentinel node
        cur = self.left.next
        while cur and index > 0:
            index -= 1
            cur = cur.next
        # Check if node is not a sentinel and index is correct
        if cur and index == 0 and cur != self.right:
            return cur.val
        return -1

    def addAtHead(self, val: int) -> None:
        # Insert new node right after left sentinel
        node, prev, next = ListNode(val), self.left, self.left.next
        # Adjust pointers to include new node
        prev.next = next.prev = node
        node.next = next
        node.prev = prev

    def addAtTail(self, val: int) -> None:
        # Insert new node right before right sentinel
        node, prev, next = ListNode(val), self.right.prev, self.right
        # Adjust pointers to include new node
        prev.next = next.prev = node
        node.next = next
        node.prev = prev

    def addAtIndex(self, index: int, val: int) -> None:
        # Traverse to target index or end of list
        cur = self.left.next
        while cur and index > 0:
            index -= 1
            cur = cur.next
        # If valid index, insert new node
        if cur and index == 0:
            node, prev, next = ListNode(val), cur.prev, cur
            prev.next = next.prev = node
            node.next = next
            node.prev = prev

    def deleteAtIndex(self, index: int) -> None:
        # Traverse to target index
        cur = self.left.next
        while cur and index > 0:
            index -= 1
            cur = cur.next
        # If valid index and not a sentinel, remove node
        if cur and index == 0 and cur != self.right:
            prev, next = cur.prev, cur.next
            prev.next = next
            next.prev = prev`;