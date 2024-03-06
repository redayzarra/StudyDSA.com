export const heapifyCode =
`# Ensures the heap property for a subtree with given root node
def sift_down(array: List[int], heap_size: int, index: int):
    smallest = index
    left = 2 * index + 1
    right = 2 * index + 2

    # Find the smallest among root, left child, and right child
    if left < heap_size and array[left] < array[smallest]:
        smallest = left
    if right < heap_size and array[right] < array[smallest]:
        smallest = right

    # If root is not smallest, swap with the smallest and continue heapifying
    if smallest != index:
        array[index], array[smallest] = array[smallest], array[index] # Swap
        sift_down(array, heap_size, smallest)

# Converts an array into a heap
def heapify(array: List[int]) -> None:
    heap_size = len(array)
    # Start from the last non-leaf node and move towards the root
    for index in range(heap_size // 2 - 1, -1, -1):
        sift_down(array, heap_size, index)`;

export const maxHeapCode =
`# Initial input array
array = [3, 1, 4, 1, 5, 9, 2, 6]

# Negate all values in the array to simulate a max heap
negated_array = [-value for value in array]

# Convert the array into a heap 
maxHeap = heapq.heapify(negated_array)

# You need to negate the output back to original value
largest_value = -heapq.heappop(maxHeap)`;


export const heapCode = 
`class Heap:
    def __init__(self, array: List[int] = None):
        # Initialize the heap using the provided array or as empty
        self.heap = array if array is not None else []
        self.heapify()
    
    def heapify(self):
        # Build the heap to ensure it satisfies the heap property
        heap_size = len(self.heap)
        for index in range(heap_size // 2 - 1, -1, -1):
            self.sift_down(index, heap_size)
    
    def sift_down(self, index: int, heap_size: int):
        # Adjust position of an element at 'index' to maintain the heap property
        smallest = index
        left = 2 * index + 1
        right = 2 * index + 2
        
        # Find the smallest among node and its children
        if left < heap_size and self.heap[left] < self.heap[smallest]:
            smallest = left
        if right < heap_size and self.heap[right] < self.heap[smallest]:
            smallest = right
        
        # If the smallest is not the node, swap it with the smallest and continue
        if smallest != index:
            self.heap[index], self.heap[smallest] = self.heap[smallest], self.heap[index]
            self.sift_down(smallest, heap_size)
    
    def heappush(self, item: int):
        # Add an item to the heap
        self.heap.append(item)
        self.sift_up(len(self.heap) - 1)
    
    def sift_up(self, index: int):
        # Adjust the position of an element at 'index' upwards to maintain heap
        parent = (index - 1) // 2
        while index > 0 and self.heap[index] < self.heap[parent]:
            self.heap[index], self.heap[parent] = self.heap[parent], self.heap[index]
            index = parent
            parent = (index - 1) // 2
    
    def heappop(self):
        # Remove and return the smallest item from the heap
        if len(self.heap) == 1:
            return self.heap.pop()
        smallest = self.heap[0]
        self.heap[0] = self.heap.pop()
        self.sift_down(0, len(self.heap))
        return smallest
    
    def heappushpop(self, item: int):
        # Push a new item on the heap, then pop and return the smallest item
        if self.heap and self.heap[0] < item:
            item, self.heap[0] = self.heap[0], item
            self.sift_down(0, len(self.heap))
        return item
    
    def peek(self):
        # Return the smallest item from the heap without removing it
        return self.heap[0] if self.heap else None`;
