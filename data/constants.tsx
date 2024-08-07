import { AiOutlineNodeIndex, AiOutlineFunction } from "react-icons/ai";
import {
  MdOutlineMoreTime,
  MdDataArray,
  MdDataObject,
  MdLinearScale,
} from "react-icons/md";
import {
  TbTargetArrow,
  TbBinaryTree,
  TbVector,
  TbBinaryTree2,
} from "react-icons/tb";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { PiGraph } from "react-icons/pi";

// Exporting all the constants
export const introPages = [
  {
    title: "Data Structures",
    href: "/data-structures",
    icon: <AiOutlineNodeIndex size={20} />,
  },
  {
    title: "Algorithms",
    href: "/algorithms",
    icon: <AiOutlineFunction size={20} />,
  },
  {
    title: "Big-O Notation",
    href: "/big-o",
    icon: <MdOutlineMoreTime size={20} />,
  },
  {
    title: "Practice",
    href: "/practice",
    icon: <TbTargetArrow size={20} />,
  },
];

export const dataStructurePages = [
  {
    title: "Arrays",
    href: "/data-structures/arrays",
    icon: <MdDataArray size={20} />,
  },
  {
    title: "Linked Lists",
    href: "/data-structures/linked-lists",
    icon: <AiOutlineNodeIndex size={20} />,
  },
  {
    title: "Hashmaps",
    href: "/data-structures/hashmaps",
    icon: <MdDataObject size={20} />,
  },
  {
    title: "Queues",
    href: "/data-structures/queues",
    icon: <MdLinearScale size={20} />,
  },
  {
    title: "Trees",
    href: "/data-structures/trees",
    icon: <TbBinaryTree size={20} />,
  },
  {
    title: "Graphs",
    href: "/data-structures/graphs",
    icon: <TbVector size={20} />,
  },
  {
    title: "Heaps",
    href: "/data-structures/heaps",
    icon: <FaArrowUpRightDots size={20} />,
  },
  {
    title: "Tries",
    href: "/data-structures/tries",
    icon: <TbBinaryTree2 size={20} />,
  },
  {
    title: "Union-Find",
    href: "/data-structures/union-find",
    icon: <PiGraph size={20} />,
  },
  {
    title: "Segment Trees",
    href: "/data-structures/segment-trees",
    icon: <TbBinaryTree size={20} />,
  },
];

export const algorithmPages = [
  {
    title: "Two Pointers",
    href: "/algorithms/two-pointers",
  },
  {
    title: "Fast & Slow Pointers",
    href: "/algorithms/fast-and-slow",
  },
  {
    title: "Sliding Window",
    href: "/algorithms/sliding-window",
  },
  {
    title: "Binary Search",
    href: "/algorithms/binary-search",
  },
  {
    title: "Prefix Sums",
    href: "/algorithms/prefix-sums",
  },
  {
    title: "Recursion",
    href: "/algorithms/recursion",
  },
  {
    title: "Sorting",
    href: "/algorithms/sorting",
  },
  {
    title: "Backtracking",
    href: "/algorithms/backtracking",
  },
  {
    title: "1D Dynamic Pro.",
    href: "/algorithms/1d-dynamic-programming",
  },
  {
    title: "Greedy",
    href: "/algorithms/greedy",
  },
  {
    title: "Intervals",
    href: "/algorithms/intervals",
  },
  {
    title: "Bit Operations",
    href: "/algorithms/bit-operations",
  },
  {
    title: "Depth-First Search",
    href: "/algorithms/depth-first-search",
  },
  {
    title: "Breadth-First Search",
    href: "/algorithms/breadth-first-search",
  },
  {
    title: "2D Dynamic Pro.",
    href: "/algorithms/2d-dynamic-programming",
  },
  {
    title: "Two-Heaps Pattern",
    href: "/algorithms/two-heaps",
  },
  {
    title: "Dijkstra's Algo.",
    href: "/algorithms/dijkstras",
  },
  {
    title: "A* Search Algo.",
    href: "/algorithms/a-star",
  },
  {
    title: "Floyd-Warshall's Algo.",
    href: "/algorithms/floyd-warshalls",
  },
  {
    title: "Bellman-Ford Algo.",
    href: "/algorithms/bellman-ford",
  },
  {
    title: "Prim's Algo.",
    href: "/algorithms/prims",
  },
  {
    title: "Kruskal's Algo.",
    href: "/algorithms/kruskals",
  },
  {
    title: "Topological Sort",
    href: "/algorithms/topological-sort",
  },
  {
    title: "DAG Shortest Path",
    href: "/algorithms/dag-shortest-path",
  },
];

export const problemPages = [
  {
    title: "Blind 75",
    href: "/practice/blind-75",
  },
  {
    title: "LeetCode 75",
    href: "/practice/leetcode-75",
  },
  // {
  //   title: "Top 100 Liked",
  //   href: "/practice/top-100-liked",
  // },
  {
    title: "NeetCode 150",
    href: "/practice",
  },
  // {
  //   title: "Top Interview 150",
  //   href: "/practice/top-interview-150",
  // },
];

export const arrayPages = [
  {
    title: "Array Pointers",
    href: "/data-structures/arrays#pointers",
  },
  {
    title: "Static Arrays",
    href: "/data-structures/arrays#staticArrays",
  },
  {
    title: "Amortized Time",
    href: "/data-structures/arrays#amortizedTime",
  },
  {
    title: "Dynamic Arrays",
    href: "/data-structures/arrays#dynamicArrays",
  },
  {
    title: "Stacks",
    href: "/data-structures/arrays#stacks",
  },
];

export const linkedListPages = [
  {
    title: "Linked List Pointers",
    href: "/data-structures/linked-lists#pointers",
  },
  {
    title: "Linked List Nodes",
    href: "/data-structures/linked-lists#listNodes",
  },
  {
    title: "Sentinel Nodes",
    href: "/data-structures/linked-lists#sentinelNodes",
  },
  {
    title: "Singly Linked List",
    href: "/data-structures/linked-lists#singlyLinked",
  },
  {
    title: "Doubly Linked List",
    href: "/data-structures/linked-lists#doublyLinked",
  },
];

export const hashmapPages = [
  {
    title: "Hash Function",
    href: "/data-structures/hashmaps#hashFunction",
  },
  {
    title: "Hashmap Collisions",
    href: "/data-structures/hashmaps#collisions",
  },
  {
    title: "Hashmap Chaining",
    href: "/data-structures/hashmaps#chaining",
  },
  {
    title: "Open Addressing",
    href: "/data-structures/hashmaps#openAddressing",
  },
  {
    title: "Hashmap Implementation",
    href: "/data-structures/hashmaps#implementation",
  },
  {
    title: "Sets",
    href: "/data-structures/hashmaps#sets",
  },
];

export const queuePages = [
  {
    title: "Queue Nodes",
    href: "/data-structures/queues#nodes",
  },
  {
    title: "Dynamic Queues",
    href: "/data-structures/queues#dynamic",
  },
  {
    title: "Circular Queues",
    href: "/data-structures/queues#circular",
  },
  {
    title: "Deque",
    href: "/data-structures/queues#deque",
  },
];

export const treePages = [
  {
    title: "Tree Terminology",
    href: "/data-structures/trees#terminology",
  },
  {
    title: "Tree Traversal",
    href: "/data-structures/trees#traversal",
  },
  {
    title: "Binary Tree",
    href: "/data-structures/trees#binary",
  },
  {
    title: "Binary Search Tree",
    href: "/data-structures/trees#binarySearch",
  },
  {
    title: "Advanced Trees",
    href: "/data-structures/trees#advanced",
  },
];

export const graphPages = [
  {
    title: "Graph Terminology",
    href: "/data-structures/graphs#terminology",
  },
  {
    title: "Graph Directionality",
    href: "/data-structures/graphs#directionality",
  },
  {
    title: "Adjacency List",
    href: "/data-structures/graphs#adjacencyList",
  },
  {
    title: "Matrix",
    href: "/data-structures/graphs#matrix",
  },
  {
    title: "Graph Traversal",
    href: "/data-structures/graphs#traversal",
  },
];

export const heapPages = [
  {
    title: "Heap Structure Property",
    href: "/data-structures/heaps#structure",
  },
  {
    title: "Heaps Order Property",
    href: "/data-structures/heaps#property",
  },
  {
    title: "Heapify",
    href: "/data-structures/heaps#heapify",
  },
  {
    title: "Min/Max Heaps",
    href: "/data-structures/heaps#minMax",
  },
  {
    title: "Heap Implementation",
    href: "/data-structures/heaps#implementation",
  },
];

export const triePages = [
  {
    title: "Trie Nodes",
    href: "/data-structures/tries#nodes",
  },
  {
    title: "Inserting in Tries",
    href: "/data-structures/tries#insertion",
  },
  {
    title: "Searching in Tries",
    href: "/data-structures/tries#searching",
  },
  {
    title: "Prefix Search",
    href: "/data-structures/tries#prefixSearch",
  },
  {
    title: "Trie Implementation",
    href: "/data-structures/tries#implementation",
  },
];

export const unionFindPages = [
  {
    title: "Disjoint Sets",
    href: "/data-structures/union-find#disjointSets",
  },
  {
    title: "Network Connectivity",
    href: "/data-structures/union-find#connectivity",
  },
  {
    title: "Path Compression",
    href: "/data-structures/union-find#pathCompression",
  },
  {
    title: "Union by Size",
    href: "/data-structures/union-find#unionSize",
  },
  {
    title: "Union-Find Implementation",
    href: "/data-structures/union-find#implementation",
  },
];

export const segmentTreePages = [
  {
    title: "Building Segment Trees",
    href: "/data-structures/segment-trees#building",
  },
  {
    title: "Querying Segment Trees",
    href: "/data-structures/segment-trees#querying",
  },
  {
    title: "Updating Segment Trees",
    href: "/data-structures/segment-trees#updating",
  },
  {
    title: "Segment Tree Implementation",
    href: "/data-structures/segment-trees#implementation",
  },
  {
    title: "Lazy Propagation",
    href: "/data-structures/segment-trees#lazyPropagation",
  },
];
