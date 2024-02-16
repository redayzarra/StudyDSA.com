export const pointerCodeC = 
  `#include <stdio.h>

  int main() {
    int arr[5] = {10, 20, 30, 40, 50}; // Create an array
    int *ptr = arr; // Create a pointer which now points to &arr[0]

    printf("First element: %d\\n", *ptr);
    ptr++; // Move to the next integer in memory
    printf("Second element: %d\\n", *ptr);
  }`;

export const pointerCodePy = 
  `def reverse(array: List[int]) -> List[int]:
    left = 0 # Left pointer starts at beginning (index 0)
    right = len(array) - 1 # Right pointer starts at the last index 
    
    # While left and right don't cross each other...
    while left < right:
        # Swap the elements
        array[left], array[right] = array[right], array[left]

        # Move towards the middle... left increases while right decreases
        left += 1
        right -= 1

  # Example usage
  my_array = [1, 2, 3, 4, 5]
  reverse(my_array)
  print(my_array)  # Output: [5, 4, 3, 2, 1]`;

export const staticArrayCode = 
  `#include <stdio.h>

  int main() {
      int staticArray[5] = {1, 2, 3, 4, 5}; // A static array of fixed size of 5

      printf("Original array: ");
      for(int i = 0; i < 5; i++) {
          printf("%d ", staticArray[i]);
      }

      // IMPORTANT: This will not work. The array size is only 5
      staticArray[5] = 6; // Attempting to add a sixth element

      // This will lead to bugs and things will break.
      printf("\\nTrying to add a new element at index 5...\\n");
  }`;

export const amortizedTimeCode = 
  `def amortized_time_simulation(n):
    size = 1
    operations = 0
    for i in range(1, n + 1):
        if i > size:
            size *= 2  # Doubling the array's size
            operations += i  # Simulate copying all elements to a new array
        operations += 1  # The append operation itself

    print(f"Total operations: {operations}, Amortized time per operation: {operations / n}")

    # Let's run this simulation for an input size (n) of 1000
    print(amortized_time_simulation(1000))

    # Output: Total operations: 2033, Amortized time per operation: 2.033`;