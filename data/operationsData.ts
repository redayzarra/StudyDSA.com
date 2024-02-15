export const arrayOperations: { operation: string; time: string; space: string, notes: string }[] = [
  {
    operation: "Append",
    time: "O(1)",
    space: "O(n)",
    notes: "Append means to add at the end. Amortized time is O(1)",
  },
  {
    operation: "Access",
    time: "O(1)",
    space: "O(1)",
    notes: "Access means to retrieve an element at a specific index",
  },
  {
    operation: "Insert",
    time: "O(n)",
    space: "O(n)",
    notes: "Inserting an element in the middle requires shifting other elements",
  },
  {
    operation: "Delete",
    time: "O(n)",
    space: "O(n)",
    notes: "Deleting an element from the middle requires shifting other elements",
  },
  {
    operation: "Search",
    time: "O(n)",
    space: "O(1)",
    notes: "Without any order, a linear search has to go through every element",
  },
]
