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