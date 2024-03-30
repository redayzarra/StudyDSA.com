const { PrismaClient } = require("@prisma/client");
const database = new PrismaClient();

const basicAlgorithms = [
  {
    title: "Two Pointers",
    href: "/",
    description: "Maintain a pair of pointers to carry out logic efficiently, often used in sorted arrays or linked lists.",
  },
  {
    title: "Fast & Slow Pointers",
    href: "/",
    description: "Utilize two pointers at different speeds to solve problems like cycle detection in a sequence.",
  },
  {
    title: "Sliding Window",
    href: "/",
    description: "Apply a window that slides over data to find subsets meeting a condition, useful for contiguous sequences.",
  },
  {
    title: "Binary Search",
    href: "/",
    description: "Divide and conquer approach to search sorted data, significantly reducing search time.",
  },
  {
    title: "Prefix Sums",
    href: "/",
    description: "Precompute sums of arrays to quickly calculate sum of ranges.",
  },
  {
    title: "Recursion",
    href: "/",
    description: "Start with base case and take a leap of faith to solve these problems",
  },
  {
    title: "Sorting",
    href: "/",
    description: "Organize data in a specific order, foundational for many algorithms and applications.",
  },
  {
    title: "Backtracking",
    href: "/",
    description: "Explore all options and backtrack to find all possible solutions, used in puzzles like Sudoku.",
  },
  {
    title: "1D Dynamic Pro.",
    href: "/",
    description: "Break problems down into simpler subproblems and storing results to avoid recomputation.",
  },
  {
    title: "Greedy",
    href: "/",
    description: "Optimize for the best solution step by step, choosing the most beneficial option at each stage without reconsidering.",
  },
  {
    title: "Intervals",
    href: "/",
    description: "Work with ranges or periods, solving problems such as overlaps, merging intervals, and scheduling.",
  },
  {
    title: "Bit Operations",
    href: "/",
    description: "Using bitwise operators for efficient problem-solving, ideal for optimizing time and space.",
  },
];

const intermediateAlgorithms = [
  {
    title: "Depth-First Search",
    href: "/",
    description: "Explore as far as possible along branches before backtracking, applicable to trees and graphs.",
  },
  {
    title: "Breadth-First Search",
    href: "/",
    description: "Explore all neighbors at the present depth prior to moving on to the nodes at the next depth level.",
  },
  {
    title: "2D Dynamic Pro.",
    href: "/",
    description: "Solve problems by breaking them down into simpler subproblems in a two-dimensional space, often used for grid-based problems.",
  },
  {
    title: "Two-Heaps Pattern",
    href: "/",
    description: "Manage two heaps to solve problems like finding the median of a data stream efficiently.",
  },
  {
  title: "Dijkstra's Algo.",
  href: "/",
  description: "Find the shortest paths from a single source node to all other nodes in a weighted graph.",
  },
  {
  title: "A* Search Algo.",
  href: "/",
  description: "Traverse the graph to find the most efficient path between two nodes, optimizing for shortest distance or cost.",
  },
  {
  title: "Floyd-Warshall's Algo.",
  href: "/",
  description: "Find the shortest paths between all pairs of vertices in a weighted graph, with positive and negative edges.",
  },
  {
    title: "Bellman-Ford Algo.",
    href: "/",
    description: "Finding the shortest paths from a single source vertex to all other vertices in a weighted graph, even with negative weights.",
  },
];

const advancedAlgorithms = [
  {
    title: "Prim's Algo.",
    href: "/",
    description: "Construct a minimum spanning tree for a weighted, undirected graph, ensuring minimal total edge weight.",
  },
  {
  title: "Kruskal's Algo.",
  href: "/",
  description: "Build a minimum spanning tree by selecting the shortest edges without forming a cycle.",
  },
  {
    title: "Topological Sort",
    href: "/",
    description: "Ordering the vertices in a directed graph where for each directed edge from vertex A to vertex B, vertex A comes before B in the ordering.",
  },
  {
    title: "DAG Shortest Path",
    href: "/",
    description: "Utilizes topological sorting of DAGs to find the shortest paths from a single source vertex to all other vertices in the graph efficiently.",
  },
];

const algorithms = [
  // Basic algorithms
  ...basicAlgorithms.map(algo => ({ ...algo, difficulty: "basic" })),

  // Intermediate algorithms
  ...intermediateAlgorithms.map(algo => ({ ...algo, difficulty: "intermediate" })),

  // Advanced algorithms
  ...advancedAlgorithms.map(algo => ({ ...algo, difficulty: "advanced" })),
];

async function algoSeed() {
  // Delete all existing algorithms
  await database.algorithm.deleteMany({});

  // Seed the database
  for (const algo of algorithms) {
    await database.algorithm.create({
      data: algo,
    });
  }

  console.log(`${algorithms.length} algorithms have been inserted.`);
}

algoSeed()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await database.$disconnect();
  });