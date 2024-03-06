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