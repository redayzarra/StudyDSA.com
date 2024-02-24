export const linkedPointersCode = 
`def insert_at_beginning(self, head: 'ListNode', new_value: int):
        new_node = ListNode(new_value)
        new_node.next = head  # Point new node to current head
        head = new_node  # Update head to new node`;