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
`# Example 4 x 5 matrix (m = 4, n = 5)
matrix = [
    [1,  2,  3,  4,  5 ], # Row 0
    [6,  7,  8,  9,  10], # Row 1
    [11, 12, 13, 14, 15], # Row 2
    [16, 17, 18, 19, 20]  # Row 3
]

# Extracting the number of rows and columns
ROWS, COLS = len(matrix), len(matrix[0])
print(f"The matrix has {ROWS} rows and {COLS} columns")`;