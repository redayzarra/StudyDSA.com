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