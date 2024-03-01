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
    # Base case: If there is no root, then depth is 0
    if not root:
        return 0
    
    # Setup DFS: Calculate the depth and return it
    def dfs(node: Optional[TreeNode]) -> int:
        if not node:
            return 0
        
        # 'Left' is the result of the left subtree (max depth)
        left = dfs(node.left)
        # 'Right' is the result of the right subtree (max depth)
        right = dfs(node.right)

        # Add the depth of current node (1) to the max of left or right
        return 1 + max(left, right)

    # Call DFS (which calculates the depth of any node) on root
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

# Check to see if the node and subRoot form the same tree
def isSameTree(self, node: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
    # If both node and subRoot are None, then that's okay
    if not node and not subRoot:
        return True
    # If node or subRoot is None or have different values, they aren't the same
    if not node or not subRoot or node.val != subRoot.val:
        return False
    
    # Traverse both node and subRoot children at the same time
    return (self.isSameTree(node.left, subRoot.left) and 
            self.isSameTree(node.right, subRoot.right))`;

export const diameterCode = 
`def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
    # Base case: the root doesn't exist then diameter is 0
    if not root:
        return 0
        
    # Setup DFS: Calculate the depth, then update global variable 'res'
    res = 0 
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

export const preorderCode = 
`# Preorder Traversal: The sequence is root, left, right.
def preorder_traversal(root: Optional[TreeNode]):
    if not root:
        return

    # Setup DFS: Print the current node value, then go left to right
    res = []
    def dfs(node: Optional[TreeNode]) -> None:
        if not node:
            return
        # Process the node first, then go down left and right subtree
        res.append(node.val)
        dfs(node.left)
        dfs(node.right)
        
    dfs(root)
    return res`;

export const inorderCode = 
`# Inorder Traversal: The sequence is left, root, right.
def inorder_traversal(root: Optional[TreeNode]):
    if not root:
        return
    # Setup DFS: Go down to left subtree, print node value, then go to right
    res = []
    def dfs(node: Optional[TreeNode]) -> None:
        if not node:
            return
        # Go down left subtree, process node, then go down right subtree
        dfs(node.left)
        res.append(node.val)
        dfs(node.right)
    
    dfs(root)
    return res`;

export const postorderCode = 
`# Postorder Traversal: The sequence is left, right, root.
def postorder_traversal(root: Optional[TreeNode]):
    if not root:
        return
    
    # Setup DFS: Go down to left subtree, then go to right, finally add value
    res = []
    def dfs(node: Optional[TreeNode]) -> None:
        if not node:
            return 
        # Go down left subtree, then right, finally process node 
        dfs(node.left)
        dfs(node.right)
        res.append(node.val)
    
    dfs(root)
    return res`;

export const levelOrderCode = 
`# Level Order Traversal: print all the values of the tree, level by level
def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
    # Base case: If the root doesn't exist, return empty array
    if not root:
        return []

    # Initialize queue and populate it with the root 
    q = collections.deque()
    q.append(root)
    
    # Setup BFS: While the queue has elements, add elements to res level-by-level
    res = []
    while q:
        # Each for loop represents one level of the tree
        level = []
        for i in range(len(q)):
            # Get the next node in line and add it's value to level
            node = q.popleft()
            level.append(node.val)

            # If the node has left or right children, add that otherwise move on
            if node.left:
                q.append(node.left)
            if node.right:
                q.append(node.right)

        # Once we've processed a level, add the entire level to 'res'
        res.append(level)
    return res`;

export const binaryTreeCode = 
`# Definition of a tree node
class TreeNode:
    def __init__(self, value=0, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right
        
class BinaryTree:
    def __init__(self):
        self.root = TreeNode()

    # Finding the maximum path inside a binary tree
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        # Base case: If root doesn't exist, it's value is 0
        if not root:
            return 0

        # Setup DFS: Calculate the total value of subtrees and update 'res'
        res = -math.inf
        def dfs(node: Optional[TreeNode]) -> int:
            if not node:
                return 0
            
            # Take the max of left and right subtree to ensure it's not negative
            left = max(dfs(node.left), 0)
            right = max(dfs(node.right), 0)

            # Update global variable 'res' to the new max path if there is one
            nonlocal res
            res = max(res, left + node.val + right)

            # Return the value of current node and the max of left and right
            return node.val + max(left, right)
        
        # We don't care about the result of DFS, DFS is only for updating 'res'
        dfs(root)
        return res`;

export const binarySearchTreeCode = 
`# Definition of a tree node
class TreeNode:
    def __init__(self, value=0, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

class BinarySearchTree:
    def __init__(self):
        self.root = TreeNode()
        
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        # Setup DFS - Inorder Traversal: go to left, process node, then go right
        res = None
        def dfs(root: Optional[TreeNode]) -> None:
            # Base case: If we reach a leaf node, then just return
            if not root:
                return None
            
            # Go down the left subtree first
            dfs(root.left)

            # Nonlocal variables k and res, when k hits zero... update res
            nonlocal k, res
            k -= 1
            if k == 0:
                res = root.val
            
            # Now work your way back down the right subtree
            dfs(root.right)
            return
        
        dfs(root)
        return res`;