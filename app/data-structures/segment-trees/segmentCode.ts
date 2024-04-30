export const buildingCode = 
`class SegmentTree:
    def __init__(self, array):
        # Initialize the tree with empty values
        self.length = len(array)
        self.tree = [0] * (2 * self.length)
        # Build the segment tree
        self.build_segment_tree(array)

    def build_segment_tree(self, array):
        # Insert leaf nodes in tree
        for i in range(self.length):
            self.tree[self.length + i] = array[i]
        # Build the tree by calculating parents
        for i in range(self.length - 1, 0, -1):
            self.tree[i] = self.tree[i * 2] + self.tree[i * 2 + 1]`;

export const queryingCode = 
`class SegmentTree:
    def __init__(self, array):
        # Initialize the tree with empty values
        self.length = len(array)
        self.tree = [0] * (2 * self.length)
        # Build the segment tree
        self.build_segment_tree(array)

    def build_segment_tree(self, array):
        # Insert leaf nodes in tree
        for i in range(self.length):
            self.tree[self.length + i] = array[i]
        # Build the tree by calculating parents
        for i in range(self.length - 1, 0, -1):
            self.tree[i] = self.tree[i * 2] + self.tree[i * 2 + 1]

    def query(self, left, right):
        # Range sum query from index left to right
        res = 0
        left += self.length  # Adjust index to leaf level
        right += self.length
        while left < right:
            if left % 2:  # If left is odd
                res += self.tree[left]
                left += 1
            if right % 2:  # If right is odd
                right -= 1
                res += self.tree[right]
            left //= 2
            right //= 2
        return res`;

export const updatingCode = 
`class SegmentTree:
    def __init__(self, array):
        # Initialize the tree with empty values
        self.length = len(array)
        self.tree = [0] * (2 * self.length)
        # Build the segment tree
        self.build_segment_tree(array)

    def build_segment_tree(self, array):
        # Insert leaf nodes in tree
        for i in range(self.length):
            self.tree[self.length + i] = array[i]
        # Build the tree by calculating parents
        for i in range(self.length - 1, 0, -1):
            self.tree[i] = self.tree[i * 2] + self.tree[i * 2 + 1]

    def query(self, left, right):
        # Range sum query from index left to right
        res = 0
        left += self.length  # Adjust index to leaf level
        right += self.length
        while left < right:
            if left % 2:  # If left is odd
                res += self.tree[left]
                left += 1
            if right % 2:  # If right is odd
                right -= 1
                res += self.tree[right]
            left //= 2
            right //= 2
        return res
    
    def update(self, index, value):
        # Start from the corresponding leaf node
        index += self.length
        self.tree[index] = value
        # Update all ancestors of the node
        while index > 1:
            index //= 2
            self.tree[index] = self.tree[2 * index] + self.tree[2 * index + 1]`;