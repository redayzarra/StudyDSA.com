export const findOperationCode = 
`# Find operation WITHOUT path compression => returns the parent of node
    def find(node: int) -> int:
        # While the current node is not it's own parent...
        while node != par[node]:
            # Set 'node' to it's parent (moving up the tree)
            node = par[node]
        return node`;

export const pathCompressionCode = 
`# Find operation WITH path compression => returns the parent of node
    def find(node: int) -> int:
        # While the current node is not it's own parent...
        while node != par[node]:
            # Path compression => assign parent to the root
            par[node] = par[par[node]]
            # Set 'node' to it's parent (moving up the tree)
            node = par[node]
        return node`;