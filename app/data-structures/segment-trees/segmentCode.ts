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