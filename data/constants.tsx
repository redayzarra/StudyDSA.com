  import { AiOutlineNodeIndex, AiOutlineFunction } from 'react-icons/ai';
import { MdOutlineMoreTime, MdDataArray, MdDataObject, MdLinearScale } from 'react-icons/md';
import { TbTargetArrow, TbBinaryTree, TbVector, TbBinaryTree2 } from 'react-icons/tb';
import { FaArrowUpRightDots } from 'react-icons/fa6';
import { PiGraph } from 'react-icons/pi';

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
    title: "Hashmaps & Sets",
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
