export const findOperationCode = 
`def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
    # Setup Union-Find - 'par' keeps track of node's parents
    par = [i for i in range(len(edges) + 1)]

    # Find operation WITHOUT path compression => returns the node's root
    def find(node: int) -> int:
        # While the current node is not it's own parent...
        while node != par[node]:
            # Set 'node' to it's parent (moving up the tree)
            node = par[node]
        return node`;

export const pathCompressionCode = 
`def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
    # Setup Union-Find - 'par' keeps track of node's parents
    par = [i for i in range(len(edges) + 1)]

    # Find operation WITH path compression => returns the node's root
    def find(node: int) -> int:
        while node != par[node]:
            par[node] = par[par[node]] # Path compression
            node = par[node]
        return node`;

export const unionByRankCode = 
`def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
    # Setup Union-Find - 'size' keeps track of node's size
    size = [1] * (len(edges) + 1)

    # Union by Rank - Return false if the nodes are already connnected
    def union(node1: int, node2: int) -> bool:
        # Find the roots of the given nodes using 'find' function
        p1, p2 = find(node1), find(node2)

        # If roots are the same => they're part of the same set (connected)
        if p1 == p2:
            return False

        # Union by Rank - using size to merge the two unique sets
        if size[p1] > size[p2]:
            par[p2] = p1
            size[p1] += size[p2]
        else:
            par[p1] = p2
            size[p2] += size[p1]
        
        # Return true to indicate that the two sets are merged
        return True`;

export const unionFindImplementation = 
`def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
    # Setup Union-Find - 'par' and 'size' for info on every node
    par = [i for i in range(len(edges) + 1)]
    size = [1] * (len(edges) + 1)

    # Find operation WITH path compression => returns the node's root
    def find(node: int) -> int:
        while node != par[node]:
            par[node] = par[par[node]] # Path compression
            node = par[node]
        return node
    
    # Union by Rank - Return false if the nodes are already connnected
    def union(node1: int, node2: int) -> bool:
        # Find the roots of the given nodes
        p1, p2 = find(node1), find(node2)

        # If roots are the same => they're part of the same set (connected)
        if p1 == p2:
            return False

        # Union by Rank - using size to merge the two unique sets
        if size[p1] > size[p2]:
            par[p2] = p1
            size[p1] += size[p2]
        else:
            par[p1] = p2
            size[p2] += size[p1]
        
        # Return true to indicate that the two sets are merged
        return True`;