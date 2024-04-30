export const arrayOperations: { operation: string; time: string; space: string, notes: string }[] = [
  {
    operation: "Append",
    time: "O(1)",
    space: "O(1)",
    notes: "Append means to add at the end. Amortized time is O(1)",
  },
  {
    operation: "Pop",
    time: "O(1)",
    space: "O(1)",
    notes: "Pop means to deleting from the end and returning the result",
  },
  {
    operation: "Access",
    time: "O(1)",
    space: "O(1)",
    notes: "Access retrieves an element at a specific index",
  },
  {
    operation: "Insert",
    time: "O(n)",
    space: "O(1)",
    notes: "Inserting an element in the middle means shifting other elements",
  },
  {
    operation: "Delete",
    time: "O(n)",
    space: "O(1)",
    notes: "Deleting an element from the middle means shifting other elements",
  },
  {
    operation: "Search",
    time: "O(n)",
    space: "O(1)",
    notes: "Without any order, a linear search has to go through every element",
  },
]

export const stackOperations: { operation: string; time: string; space: string, notes: string }[] = [
  {
    operation: "Push",
    time: "O(1)",
    space: "O(1)",
    notes: "Push adds an item to the top of the stack. Amortized time is O(1) because it uses arrays",
  },
  {
    operation: "Pop",
    time: "O(1)",
    space: "O(1)",
    notes: "Pop removes the top item from the stack and returns it",
  },
  {
    operation: "Peek",
    time: "O(1)",
    space: "O(1)",
    notes: "Peek returns the top item without removing it from the stack",
  },
  {
    operation: "Is Empty",
    time: "O(1)",
    space: "O(1)",
    notes: "Checks if the stack is empty. This is a constant time operation as it just checks the list length.",
  },
]

export const hashmapOperations: { operation: string; time: string; space: string, notes: string }[] = [
  {
    operation: "Access",
    time: "O(1)",
    space: "O(1)",
    notes: "Retrieves the value for a given key.",
  },
  {
    operation: "Insert",
    time: "O(1)",
    space: "O(1)",
    notes: "Inserts a key-value pair.",
  },
  {
    operation: "Delete",
    time: "O(1)",
    space: "O(1)",
    notes: "Removes a key-value pair by the key.",
  },
  {
    operation: "Search",
    time: "O(1)",
    space: "O(1)",
    notes: "Checks if a certain key exists.",
  },
]

export const setOperations: { operation: string; time: string; space: string, notes: string }[] = [
  {
    operation: "Add",
    time: "O(1)",
    space: "O(1)",
    notes: "Adds a new element to the set. If the element already exists, nothing happens",
  },
  {
    operation: "Remove",
    time: "O(1)",
    space: "O(1)",
    notes: "Removes an element from the set. If the element does not exist, nothing happens",
  },
  {
    operation: "Search",
    time: "O(1)",
    space: "O(1)",
    notes: "Checks if the set contains a specific element",
  },
  {
    operation: "Size",
    time: "O(1)",
    space: "O(1)",
    notes: "Returns the number of elements in the set",
  },
  {
    operation: "Iterate",
    time: "O(n)",
    space: "O(1)",
    notes: "Iterates over each element in the set",
  },
  {
    operation: "Clear",
    time: "O(n)",
    space: "O(1)",
    notes: "Removes all elements from the set one at a time",
  },
];

export const linkedListOperations: { operation: string; time: string; space: string, notes: string }[] = [
  {
    operation: "Insert",
    time: "O(1)",
    space: "O(1)",
    notes: "Add a list node as long as you have a pointer to the previous node",
  },
  {
    operation: "Delete",
    time: "O(1)",
    space: "O(1)",
    notes: "Removes a list node as long as you have a pointer to the previous node",
  },
  {
    operation: "Access",
    time: "O(n)",
    space: "O(1)",
    notes: "Retrieves an element by its position in the list",
  },
  {
    operation: "Search",
    time: "O(n)",
    space: "O(1)",
    notes: "Finds a specific list node based on a given value",
  },
  {
    operation: "Size",
    time: "O(n)",
    space: "O(1)",
    notes: "Calculates the total number of elements one-by-one",
  }
];

export const queueOperations: { operation: string; time: string; space: string, notes: string }[] = [
  {
    operation: "Enqueue Front",
    time: "O(1)",
    space: "O(1)",
    notes: "Adds an element to the front of the deque",
  },
  {
    operation: "Enqueue Rear",
    time: "O(1)",
    space: "O(1)",
    notes: "Adds an element to the rear of the deque",
  },
  {
    operation: "Dequeue Front",
    time: "O(1)",
    space: "O(1)",
    notes: "Removes an element from the front of the deque",
  },
  {
    operation: "Dequeue Rear",
    time: "O(1)",
    space: "O(1)",
    notes: "Removes an element from the rear of the deque",
  },
  {
    operation: "Peek Front",
    time: "O(1)",
    space: "O(1)",
    notes: "Views the element at the front of the deque without removing it",
  },
  {
    operation: "Peek Rear",
    time: "O(1)",
    space: "O(1)",
    notes: "Views the element at the rear of the deque without removing it",
  },
  {
    operation: "IsEmpty",
    time: "O(1)",
    space: "O(1)",
    notes: "Checks if the deque is empty",
  },
  {
    operation: "Size",
    time: "O(1)",
    space: "O(1)",
    notes: "Returns the number of elements in the deque",
  }
];

export const treeOperations: { operation: string; time: string; space: string; notes: string }[] = [
  {
    operation: "Insert",
    time: "O(log n)",
    space: "O(1)",
    notes: "Insertion ensures balance is maintained, requiring rebalancing if necessary",
  },
  {
    operation: "Delete",
    time: "O(log n)",
    space: "O(1)",
    notes: "Deletion might require rebalancing to maintain tree balance",
  },
  {
  operation: "Search",
  time: "O(n)",
  space: "O(1)",
  notes: "Binary trees don't have a guaranteed order, every node may need to be visited"
  },
  {
    operation: "Depth",
    time: "O(n)",
    space: "O(log n)",
    notes: "Need to visit each node to determine the maximum depth",
  },
]

export const heapOperations: { operation: string; time: string; space: string, notes: string }[] = [
  {
    operation: "Push",
    time: "O(log n)",
    space: "O(1)",
    notes: "Inserting a new element requires re-balancing the heap upwards",
  },
  {
    operation: "Pop",
    time: "O(log n)",
    space: "O(1)",
    notes: "Removes and returns the min (or max) element, requires re-heapifying",
  },
  {
    operation: "Peek",
    time: "O(1)",
    space: "O(1)",
    notes: "Retrieves the min (or max) element without removing it",
  },
  {
    operation: "Heapify",
    time: "O(n)",
    space: "O(1)",
    notes: "Rearranges an array into a heap, done in-place for binary heaps",
  },
  {
    operation: "Delete",
    time: "O(log n)",
    space: "O(1)",
    notes: "Deleting a specific node requires re-heapifying to maintain heap structure",
  },
]

export const graphOperations: { operation: string; time: string; space: string, notes: string }[] = [
  {
    operation: "Add Vertex",
    time: "O(1)",
    space: "O(1)",
    notes: "Adding a vertex is as easy as changing the storage structure (hashmap)",
  },
  {
    operation: "Add Edge",
    time: "O(1)",
    space: "O(1)",
    notes: "Adding an edge between two vertices is straightforward, just change storage",
  },
  {
    operation: "Remove Vertex",
    time: "O(V+E)",
    space: "O(1)",
    notes: "Removal requires deleting edges, affecting the adjacency list/matrix",
  },
  {
    operation: "Remove Edge",
    time: "O(1)",
    space: "O(1)",
    notes: "Edge removal is direct but requires locating the edge",
  },
  {
    operation: "Search",
    time: "O(V+E)",
    space: "O(V)",
    notes: "Exploring nodes/edges, time varies by search type (DFS/BFS)",
  },
  {
    operation: "Check Connectivity",
    time: "O(α(V))",
    space: "O(V)",
    notes: "Determines if two vertices are connected, using Union-Find (with optimizations)",
},
  {
    operation: "Find Path",
    time: "O(V+E)",
    space: "O(V)",
    notes: "Determines path between vertices, complexity depends on search",
  },
]

export const trieOperations: { operation: string; time: string; space: string; notes: string }[] = [
  {
    operation: "Insert",
    time: "O(n)",
    space: "O(n*Σ)",
    notes: "Inserts a word of length 'n', creating new nodes for each character not already present",
  },
  {
    operation: "Search",
    time: "O(n)",
    space: "O(1)",
    notes: "Searches for a word of length 'n', traversing down the Trie",
  },
  {
    operation: "StartsWith",
    time: "O(n)",
    space: "O(1)",
    notes: "Checks if there is any word in the trie that starts with the given prefix of length 'n'",
  },
  {
    operation: "Delete",
    time: "O(n)",
    space: "O(1)",
    notes: "Deletes a word of length 'n' from the Trie",
  },
]

export const unionFindOperations: { operation: string; time: string; space: string; notes: string }[] = [
  {
    operation: "Find",
    time: "O(α(N))",
    space: "O(N)",
    notes: "Determines the set of an element, using path compression for efficiency.",
  },
  {
    operation: "Union",
    time: "O(α(N))",
    space: "O(N)",
    notes: "Merges two sets into one, applying union by rank to maintain a balanced structure.",
  },
  {
    operation: "Connected",
    time: "O(α(N))",
    space: "O(N)",
    notes: "Checks if two elements are in the same set using the find operation.",
  },
  {
    operation: "MakeSet",
    time: "O(1)",
    space: "O(N)",
    notes: "Initializes a new set containing a new element.",
  },
]

export const segmentTreeOperations: { operation: string; time: string; space: string; notes: string }[] = [
  {
    operation: "Build",
    time: "O(n log n)",
    space: "O(n)",
    notes: "Constructs the segment tree from a given array for range queries.",
  },
  {
    operation: "Query",
    time: "O(log n)",
    space: "O(1)",
    notes: "Retrieves collected data over a specified range by traversing segments",
  },
  {
    operation: "Update",
    time: "O(log n)",
    space: "O(1)",
    notes: "Modifies the value of an array element and updates the segments",
  },
  {
    operation: "Lazy Propagation",
    time: "O(log n)",
    space: "O(n)",
    notes: "Optimizes range updates by delaying updates until necessary",
  },
]