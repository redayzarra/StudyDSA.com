export const graphNodeCode = 
`# Definition for a Graph Node (Vertex)
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []`;

export const adjacencyListCode =
`from collections import defaultdict
"""
'defaultdict' is a function in Python that automatically creates a hashmap 
which fills missing keys with a specified default value (int, set, list, etc.)
"""

# Building an adjacency list for directed graph (one-way edge)
def directedGraph(self, edges: List[List[int]]) -> dict:
        hashmap = defaultdict(list)
        for source, destination in edges:
            hashmap[source].append(destination)
        return hashmap
        
# Building an adjacency list for undirected graph (two-way edge)
def undirectedGraph(self, edges: List[List[int]]) -> dict:
        hashmap = defaultdict(list)
        for source, destination in edges:
            hashmap[source].append(destination)
            hashmap[destination].append(source)
        return hashmap`;

export const matrixCode = 
`# Example 4 x 5 matrix (4 rows, 5 columns)
matrix = [
    [1,  2,  3,  4,  5 ], # Row 0
    [6,  7,  8,  9,  10], # Row 1
    [11, 12, 13, 14, 15], # Row 2
    [16, 17, 18, 19, 20]  # Row 3
]

# Extracting the number of rows and columns
ROWS, COLS = len(matrix), len(matrix[0])
print(f"The matrix has {ROWS} rows and {COLS} columns")`;

export const dfsAdjacencyCode = 
`from collections import defaultdict
"""
'defaultdict' is a function in Python that automatically creates a hashmap 
which fills missing keys with a specified default value (int, set, list, etc.)
"""

# Perform DFS on an Adjacency List, given the edges and a starting vertex
def performDFS(edges: List[List[int]], start: int) -> List[int]:
    # Step 1: Building an adjacency list for a directed graph
    hashmap = defaultdict(list)
    for source, destination in edges:
        hashmap[source].append(destination)

    # Step 2: Initialize 'visit' set for visited nodes and 'res' array
    visit = set() 
    res = []       

    # Step 3: Define the DFS function which accepts a single node
    def dfs(node: int) -> bool:
        # If the node is already visited, just return True
        if node in visit:
            return True  
        # If not visited, add it to 'visit' because we are on it right now
        visit.add(node)  
        # For every node that it points to, run DFS on that node
        for friend in hashmap[node]: 
            dfs(friend) 
        # Now that we have processed our current node, add it to 'res'
        res.append(node)
        return True

    # Step 4: Perform DFS from the starting node, return 'res' array
    dfs(start)
    return res`;

export const bfsAdjacencyCode = 
`from collections import defaultdict, deque
"""
'defaultdict' is a function in Python that automatically creates a hashmap 
which fills missing keys with a specified default value (int, set, list, etc.)
"""

# Perform BFS on an Adjacency List, given the edges and a starting vertex
def performBFS(edges: List[List[int]], start: int) -> List[int]:
    # Step 1: Building an adjacency list for a directed graph
    hashmap = defaultdict(list)
    for source, destination in edges:
        hashmap[source].append(destination)
    
    # Step 2: Initialize a queue & set and add our starting index
    queue = deque([start])
    visited = set([start])
    res = []

    # Step 3: Start BFS function which runs while the queue is not empty
    while queue:
        # Get the first node from the queue and add it to 'res'
        node = queue.popleft()
        res.append(node)
        # For every node it points to, add them to our queue & visit
        for friend in hashmap[node]:
            if friend not in visited:
                visited.add(friend) 
                queue.append(friend)
    
    return res`;