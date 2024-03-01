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

export const subTreeCode = 
`# Check to see if a subRoot leads to a valid subtree
def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
    # If root is None, then it's impossible to have a subtree
    if not root:
        return False
    # If the subRoot is None or helper function is valid, return True
    if not subRoot or self.isSameTree(root, subRoot):
        return True

    # Helper function to check if left or right subtree of root is valid
    return (self.isSubtree(root.left, subRoot) or
            self.isSubtree(root.right, subRoot))

# Check to see if the root and subRoot form the same tree
def isSameTree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
    # If both root and subRoot are None, then that's okay
    if not root and not subRoot:
        return True
    # If root or subRoot is None or have different values, they aren't the same
    if not root or not subRoot or root.val != subRoot.val:
        return False
    
    # Traverse both root and subRoot children at the same time
    return (self.isSameTree(root.left, subRoot.left) and 
            self.isSameTree(root.right, subRoot.right))`;

export const diameterCode = 
`def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
    # Base case: the root doesn't exist then diameter is 0
    if not root:
        return 0
    res = 0  # Global variable: the final result (diameter)

    # Setup DFS: Calculate the depth, use that to update 'res'
    def dfs(root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        
        # Left and right results from dfs function (depth)
        left = dfs(root.left)
        right = dfs(root.right)

        # Update global variable 'res' based on left and right results
        nonlocal res
        if (left + right) > res:
            res = (left + right)
        
        # Add the depth of current node and the max of left or right path
        return 1 + max(left, right)

    # Call DFS to update 'res', we don't care about the result of DFS
    dfs(root)
    return res`;