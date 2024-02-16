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
