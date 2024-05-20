export const bigOAlgorithmsCode = 
  `def amortized_time_simulation(n: int):
    size = 1
    operations = 0
    for i in range(1, n + 1):
        if i > size:
            size *= 2  #  Doubling the array's size
            operations += i  #  Simulate copying all elements to a new array
        operations += 1  #  The append complexity itself

    print(f"Total operations: {operations}, Amortized notation: {operations / n}")

    #  Let's run this simulation for an input size (n) of 1000
    print(amortized_time_simulation(1000)) 
    
    #  Output: Total operations: 2033, Amortized notation per complexity: 2.033`;

export const notations: { complexity: string; notation: string; rank: string, notes: string }[] = [
  {
    complexity: "Constant",
    notation: "O(1)",
    rank: "#1",
    notes: "Fastest complexity; the operation takes the same amount of time regardless of input size.",
  },
  {
    complexity: "Logarithmic",
    notation: "O(log n)",
    rank: "#2",
    notes: "The operation time increases logarithmically, making it efficient for large inputs.",
  },
  {
    complexity: "Linear",
    notation: "O(n)",
    rank: "#3",
    notes: "The operation time increases directly proportional to the input size.",
  },
  {
    complexity: "Linearithmic",
    notation: "O(n log n)",
    rank: "#4",
    notes: "Common in efficient sorting algorithms; combines linear and logarithmic growth.",
  },
  {
    complexity: "Quadratic",
    notation: "O(n^2)",
    rank: "#5",
    notes: "The operation time increases quadratically; often seen with nested loops.",
  },
  {
    complexity: "Cubic",
    notation: "O(n^3)",
    rank: "#6",
    notes: "The operation time increases cubically; common in algorithms with triple nested loops.",
  },
  {
    complexity: "Exponential",
    notation: "O(2^n)",
    rank: "#7",
    notes: "The operation time doubles with each additional input; very inefficient for large inputs.",
  },
  {
    complexity: "Factorial",
    notation: "O(n!)",
    rank: "#8",
    notes: "The operation time grows factorially; typically seen in problems involving permutations.",
  },
]

export const easyExample = `def print_elements(arr):
    for i in range(len(arr)):
        print(arr[i])`;

export const harderExample = `def minEatingSpeed(self, piles: List[int], h: int) -> int:
    left, right = 1, max(piles)
    res = 0

    while left <= right:
        mid = (left + right) // 2
        hours = 0

        for pile in piles:
            hours += math.ceil(pile / mid)
        
        if hours > h:
            left = mid + 1
        else:
            res = mid 
            right = mid - 1

    return res`;

export const challengingExample = `def permute(self, nums: List[int]) -> List[List[int]]:
    res = []
    subset = []

    def dfs(index: int) -> None:
        if not (index < len(nums)):
            res.append(subset[:])
            return
        
        for num in nums:
            if num not in subset:
                subset.append(num)
                dfs(index + 1)
                subset.pop()
        return
    
    dfs(0)
    return res`;