export const treeNodeCode = 
`# Definition of a tree node
class TreeNode:
    def __init__(self, value=0, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

# Example: Creating a root node
root = TreeNode(1)`;

export const treeChildrenCode =
`# Adding children to the root node 
root.left = TreeNode(2)  # Left child of the root
root.right = TreeNode(3)  # Right child of the root

# TreeNode 2 and 3 don't have children, so they are also leaf nodes`;

export const treeMeasureCode = 
`# Calculate the depth from root to leaf node; same as height
def depth(root: Optional[TreeNode]) -> int:
    if not root:
        return 0
    
    def dfs(node: Optional[TreeNode]) -> int:
        if not node:
            return 0
        
        left_depth = dfs(node.left)
        right_depth = dfs(node.right)

        return 1 + max(left_depth, right_depth)

    return dfs(root)`;