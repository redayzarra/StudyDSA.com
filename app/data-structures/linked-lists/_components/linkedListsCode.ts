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
        cur = self.head
        while cur and index > 0:
            index -= 1
            cur = cur.next
        if cur:
            return cur.val
        return -1

    def addAtHead(self, val: int) -> None:
        node = ListNode(val, self.head)
        self.head = node

    def addAtTail(self, val: int) -> None:
        node = ListNode(val)
        if not self.head:
            self.head = node
            return
        cur = self.head
        while cur.next:
            cur = cur.next
        cur.next = node

    def addAtIndex(self, index: int, val: int) -> None:
        if index == 0:
            self.addAtHead(val)
            return
        cur = self.head
        for _ in range(index - 1):
            if not cur:
                return
            cur = cur.next
        if cur:
            node = ListNode(val, cur.next)
            cur.next = node

    def deleteAtIndex(self, index: int) -> None:
        if index == 0 and self.head:
            self.head = self.head.next
            return
        cur = self.head
        for _ in range(index - 1):
            if not cur:
                return
            cur = cur.next
        if cur and cur.next:
            cur.next = cur.next.next`;

export const doublyLinkedList = 
`# Definition of a doubly linked list
class ListNode:
    def __init__(self, val = None, prev = None, next = None):
        self.val = val
        self.prev = prev
        self.next = next

class DoublyLinkedList:
    def __init__(self):
        self.left = ListNode(0)
        self.right = ListNode(0)

        self.left.next = self.right
        self.right.prev = self.left

    def get(self, index: int) -> int:
        cur = self.left.next
        while cur and index > 0:
            index -= 1
            cur = cur.next
        if cur and index == 0 and cur != self.right:
            return cur.val
        return -1

    def addAtHead(self, val: int) -> None:
        node, prev, next = ListNode(val), self.left, self.left.next
        prev.next = next.prev = node

        node.next = next
        node.prev = prev

    def addAtTail(self, val: int) -> None:
        node, prev, next = ListNode(val), self.right.prev, self.right
        prev.next = next.prev = node

        node.next = next
        node.prev = prev

    def addAtIndex(self, index: int, val: int) -> None:
        cur = self.left.next
        while cur and index > 0:
            index -= 1
            cur = cur.next
        if cur and index == 0:
            node, prev, next = ListNode(val), cur.prev, cur
            prev.next = next.prev = node
            
            node.next = next
            node.prev = prev

    def deleteAtIndex(self, index: int) -> None:
        cur = self.left.next
        while cur and index > 0:
            index -= 1
            cur = cur.next
            
        if cur and index == 0 and cur != self.right:
            prev, next = cur.prev, cur.next
            prev.next = next
            next.prev = prev`;