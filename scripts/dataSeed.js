const { PrismaClient } = require("@prisma/client");
const database = new PrismaClient();

const arraySkills = [
  {
    title: "Definition",
    href: "/data-structures/arrays",
    description: "You just store stuff in a line, it's quite literally a list of stuff",
  },
  {
    title: "Operations",
    href: "/data-structures/arrays#operations",
    description: "Here's everything you can do with arrays and their complexities",
  },
  {
    title: "Pointers",
    href: "/data-structures/arrays#pointers",
    description: "They point to stuff instead of storing data",
  },
  {
    title: "Static Arrays",
    href: "/data-structures/arrays#staticArrays",
    description: "They're like a metal can, they can only fit a certain amount",
  },
  {
    title: "Amortized Time",
    href: "/data-structures/arrays#amortizedTime",
    description: "The average time to run operations despite some being expensive",
  },
  {
    title: "Dynamic Arrays",
    href: "/data-structures/arrays#dynamicArrays",
    description: "They're basically balloons, you can keep adding to them with no worries",
  },
  {
    title: "Stacks",
    href: "/data-structures/arrays#stacks",
    description: "LIFO - meaning you can quickly access the most recent one",
  },
  {
    title: "Best Practices",
    href: "/data-structures/arrays#bestPractices",
    description: "The most efficient way of using arrays and avoiding pitfalls",
  },
]

const linkedListSkills = [
  {
    title: "Definition",
    href: "/data-structures/linked-lists",
    description: "It's like that Spider-Man meme where they are all pointing to each other",
  },
  {
    title: "Operations",
    href: "/data-structures/linked-lists#operations",
    description: "Here's everything you can do with linked lists and their complexities",
  },
  {
    title: "Pointers",
    href: "/data-structures/linked-lists#pointers",
    description: "Nodes have pointers which point to the previous or next node",
  },
  {
    title: "List Nodes",
    href: "/data-structures/linked-lists#listNodes",
    description: "These are building blocks for linked lists which store data & pointers",
  },
  {
    title: "Sentinel Nodes",
    href: "/data-structures/linked-lists#sentinels",
    description: "A strategy you can use to avoid annoying edge cases by using dummy nodes",
  },
  {
    title: "Singly Linked List",
    href: "/data-structures/linked-lists#singly",
    description: "Think of a treasure hunt, each clue leads to the next until the end",
  },
  {
    title: "Doubly Linked List",
    href: "/data-structures/linked-lists#doubly",
    description: "Think of this as a two-way street, you can go to previous or next node",
  },
  {
    title: "Best Practices",
    href: "/data-structures/linked-lists#bestPractices",
    description: "The most efficient way of using linked lists and avoiding pitfalls",
  },
]

const hashmapSkills = [
  {
    title: "Definition",
    href: "/data-structures/hashmaps",
    description: "Hashmaps store unique key-value pairs and sets hate duplicates",
  },
  {
    title: "Operations",
    href: "/data-structures/hashmaps#operations",
    description: "Here's everything you can do with hashmap and sets",
  },
  {
    title: "Hash Function",
    href: "/data-structures/hashmaps#hashFunction",
    description: "A function that converts any input into an index within the hashmap",
  },
  {
    title: "Chaining",
    href: "/data-structures/hashmaps#chaining",
    description: "Resolving collisions by storing muliple key-val pairs at the same index",
  },
  {
    title: "Open Addressing",
    href: "/data-structures/hashmaps#openAddressing",
    description: "Resolving collisions by finding another open slot for a new key-val pair",
  },
  {
    title: "Implementation",
    href: "/data-structures/hashmaps#implementation",
    description: "Here's how you can implement a hashmaps from scratch",
  },
  {
    title: "Sets",
    href: "/data-structures/hashmaps#sets",
    description: "They hate duplicates and searching in them is really efficient",
  },
  {
    title: "Best Practices",
    href: "/data-structures/hashmaps#bestPractices",
    description: "The best way to use hashmaps and sets for efficiency",
  },
]

const queueSkills = [
  {
    title: "Definition",
    href: "/data-structures/queues",
    description: "FIFO - meaning you can easily access the oldest (or first) value",
  },
  {
    title: "Operations",
    href: "/data-structures/queues#operations",
    description: "Here's everything you can do with queues",
  },
  {
    title: "Queue Nodes",
    href: "/data-structures/queues#nodes",
    description: "These are the building blocks for queues implemented using linked lists",
  },
  {
    title: "Dynamic Queues",
    href: "/data-structures/queues#dynamic",
    description: "A type of queue that does not need to be resized as it grows",
  },
  {
    title: "Circular Queues",
    href: "/data-structures/queues#circular",
    description: "A type of queue where all the nodes are connected in a circle",
  },
  {
    title: "Deques",
    href: "/data-structures/queues#deque",
    description: "Double-ended meaning you can insert and delete at the front and the rear",
  },
  {
    title: "Priority Queues",
    href: "/data-structures/queues#priority",
    description: "A data type that can be implemented with queues for ordering data",
  },
  {
    title: "Best Practices",
    href: "/data-structures/queues#bestPractices",
    description: "This is the best way to use queues for best time and memory complexity",
  },
]

const treeSkills = [
  {
    title: "Definition",
    href: "/data-structures/trees",
    description: "Think of them like an upside-down tree in real life, roots are at the top",
  },
  {
    title: "Operations",
    href: "/data-structures/trees#operations",
    description: "Here's everything you can do with trees based on their representation",
  },
  {
    title: "Terminology",
    href: "/data-structures/trees#terminology",
    description: "These are some terms for trees that you should know to solve problems",
  },
  {
    title: "Tree Traversal",
    href: "/data-structures/trees#traversal",
    description: "Exploring tree nodes in different orders to access or modify their data",
  },
  {
    title: "Binary Tree",
    href: "/data-structures/trees#binary",
    description: "As the name suggests, the nodes can only have up to two children",
  },
  {
    title: "Binary Search Tree",
    href: "/data-structures/trees#binarySearch",
    description: "A binary tree where left must be smaller than root, right must be bigger",
  },
  {
    title: "Advanced Trees",
    href: "/data-structures/trees#advanced",
    description: "Taking a look at AVL, Red-Black, and B-trees for balanced tree operations",
  },
  {
    title: "Best Practices",
    href: "/data-structures/trees#bestPractices",
    description: "Here's the best tips and tricks for using trees in interviews",
  },
]

const graphSkills = [
  {
    title: "Definition",
    href: "/data-structures/graphs",
    description: "Graphs consist on nodes that are connected to each other with edges",
  },
  {
    title: "Operations",
    href: "/data-structures/graphs#operations",
    description: "Here's everything you can do with graphs based on the representation",
  },
  {
    title: "Terminology",
    href: "/data-structures/graphs#terminology",
    description: "Key terms like vertices, edges, weighted, and directed graphs",
  },
  {
    title: "Directionality",
    href: "/data-structures/graphs#directionality",
    description: "If graph edges are directional, they point from one node to another",
  },
  {
    title: "Adjacency List",
    href: "/data-structures/graphs#adjacencyList",
    description: "Each node has a list of it's neighbors, most common representation",
  },
  {
    title: "Matrix",
    href: "/data-structures/graphs#matrix",
    description: "Usually represented by arrays, they basically form a rectangle of nodes",
  },
  {
    title: "Graph Traversal",
    href: "/data-structures/graphs#traversal",
    description: "Using DFS and BFS methods for navigating different type of graphs",
  },
  {
    title: "Best Practices",
    href: "/data-structures/graphs#bestPractices",
    description: "This is the best way to use graphs based on their representations",
  },
]

const heapSkills = [
  {
    title: "Definition",
    href: "/data-structures/heaps",
    description: "They are basically binary trees with a specific order and structure",
  },
  {
    title: "Operations",
    href: "/data-structures/heaps#operations",
    description: "Here's everything you can do with heaps",
  },
  {
    title: "Structure Property",
    href: "/data-structures/heaps#structure",
    description: "Heaps follow a rule which ensures that they are always a complete tree",
  },
  {
    title: "Heap Property",
    href: "/data-structures/heaps#property",
    description: "The primary rule that all children nodes must be greater than parent",
  },
  {
    title: "Heapify",
    href: "/data-structures/heaps#heapify",
    description: "This is how an unordered array of numbers turns into a ordered heap",
  },
  {
    title: "Min/Max Heaps",
    href: "/data-structures/heaps#minMax",
    description: "Here's how you can use min and max heaps most efficiently",
  },
  {
    title: "Implementation",
    href: "/data-structures/heaps#implementation",
    description: "Heaps have to maintain their order and structure even if they change",
  },
  {
    title: "Best Practices",
    href: "/data-structures/heaps#bestPractices",
    description: "This is the best way to use heaps for best time and space complexity",
  },
]

const trieSkills = [
  {
    title: "Definition",
    href: "/data-structures/tries",
    description: "They are known as prefix trees because they form words & prefixes",
  },
  {
    title: "Operations",
    href: "/data-structures/tries#operations",
    description: "Here's everything you can do with tries",
  },
  {
    title: "Trie Nodes",
    href: "/data-structures/tries#nodes",
    description: "Each node in the trie must store the children and if we are at the end",
  },
  {
    title: "Insertion",
    href: "/data-structures/tries#insertion",
    description: "To insert into a trie, we essentially follow the letters and add to the gaps",
  },
  {
    title: "Searching",
    href: "/data-structures/tries#searching",
    description: "You can find words by simply following the letters and checking if it's marked",
  },
  {
    title: "Finding Prefixes",
    href: "/data-structures/tries#findingPrefix",
    description: "You can follow the letters as long as they satisfy the prefix",
  },
  {
    title: "Implementation",
    href: "/data-structures/tries#implementation",
    description: "Implement tries using hashmaps and nodes to form a tree-like structure",
  },
  {
    title: "Best Practices",
    href: "/data-structures/tries#bestPractices",
    description: "This is the most efficient way of using tries",
  },
]

const segmentTreeSkills = [
  {
    title: "Definition",
    href: "/data-structures/",
    description: "Just divide an array into halves until you can't, then add them up",
  },
  {
    title: "Operations",
    href: "/data-structures/",
    description: "Here's everything you can do with segment trees and their complexities",
  },
  {
    title: "Implementation",
    href: "/data-structures/",
    description: "They are represented by binary trees and each node contains a lot of info",
  },
  {
    title: "Building",
    href: "/data-structures/",
    description: "Divide the array by half and put each half in the left and right children",
  },
  {
    title: "Querying",
    href: "/data-structures/",
    description: "You simply have to traverse down the tree to build the range you need",
  },
  {
    title: "Updating",
    href: "/data-structures/",
    description: "You need to find the leaf node to fetch the index of the element",
  },
  {
    title: "Algorithms",
    href: "/data-structures/",
    description: "These are all the common algorithms for segment trees",
  },
  {
    title: "Best Practices",
    href: "/data-structures/",
    description: "The best way to use segment trees for time complexity",
  },
]

const disjointSetSkills = [
  {
    title: "Definition",
    href: "/data-structures/",
    description: "Think of these as separate groups of friends in highschool",
  },
  {
    title: "Operations",
    href: "/data-structures/",
    description: "All the ways to build, find, and merge these friends, without any drama",
  },
  {
    title: "Implementation",
    href: "/data-structures/",
    description: "Use a special tree where each friend points to the 'leader' of friend group",
  },
  {
    title: "Network Connectivity",
    href: "/data-structures/",
    description: "Checking if two people are in the same friend circle or strangers",
  },
  {
    title: "Path Compression",
    href: "/data-structures/",
    description: "While checking, link everyone directly to the 'big boss' to speed up future checks",
  },
  {
    title: "Union by Rank",
    href: "/data-structures/",
    description: "Keep things balanced by adding the smaller group to the bigger one",
  },
  {
    title: "Algorithms",
    href: "/data-structures/",
    description: "Here are the most common algorithms for disjoint sets",
  },
  {
    title: "Best Practices",
    href: "/data-structures/",
    description: "The most efficient way of using disjoint sets efficiently",
  },
]

const weightedGraphSkills = [
  {
    title: "Definition",
    href: "/data-structures/",
    description: "Imagine a city map where roads have different lengths or speed limits",
  },
  {
    title: "Operations",
    href: "/data-structures/",
    description: "Here's everything you can do with weighted graphs and their complexities",
  },
  {
    title: "Implementation",
    href: "/data-structures/",
    description: "The easiest way is to implement weighted graphs using adjacency lists",
  },
  {
    title: "Shortest Path",
    href: "/data-structures/",
    description: "Similar to finding the quickest or least congested route from work like a GPS",
  },
  {
    title: "Minimum Spanning Tree",
    href: "/data-structures/",
    description: "Least-busy network of roads that allows travel between all the city spots",
  },
  {
    title: "Cycle Detection",
    href: "/data-structures/",
    description: "Here's how to ensure that there are no cycles in the weighted graph",
  },
  {
    title: "Algorithms",
    href: "/data-structures/",
    description: "These are all the common algorithms you should know for weighted graphs",
  },
  {
    title: "Best Practices",
    href: "/data-structures/",
    description: "The best way to use weighted graphs for maximum efficiency",
  },
]

const dagSkills = [
  {
    title: "Definition",
    href: "/data-structures/",
    description: "Imagine a to-do list, where some tasks need to happen before others",
  },
  {
    title: "Operations",
    href: "/data-structures/",
    description: "Here's everything you can do with DAG's and their complexities",
  },
  {
    title: "Implementation",
    href: "/data-structures/",
    description: "You can easily implement them using adjacency lists",
  },
  {
    title: "Topological Sorting",
    href: "/data-structures/",
    description: "Similar to creating a checklist for ensuring the right order",
  },
  {
    title: "Longest/Shortest Path",
    href: "/data-structures/",
    description: "Finding the quickest or longest way from one node to another",
  },
  {
    title: "Dependency Resolution",
    href: "/data-structures/",
    description: "Figuring out which tasks must be completed before others can start",
  },
  {
    title: "Algorithms",
    href: "/data-structures/",
    description: "The most common algorithms for DAG's and their complexities",
  },
  {
    title: "Best Practices",
    href: "/data-structures/",
    description: "The best way to use DAG's in the most efficient time and space",
  },
]

async function dataSeed() {
  // Delete all topics and chapters first - onDelete cascade is on
  await database.topic.deleteMany({});

  // Arrays
  await database.topic.create({
    data: {
      title: "Arrays",
      description: "A linear data structure for storing elements.",
      href: "/data-structures/arrays",
      chapters: {
        create: arraySkills,
      },
    },
  });

  // Linked Lists
  await database.topic.create({
    data: {
      title: "Linked Lists",
      description: "Data elements connected together via links.",
      href: "/data-structures/linked-lists",
      chapters: {
        create: linkedListSkills,
      },
    },
  });

  // Hashmaps
  await database.topic.create({
    data: {
      title: "Hashmaps",
      description: "Key-value pairs for efficient data lookup.",
      href: "/data-structures/hashmaps",
      chapters: {
        create: hashmapSkills,
      },
    },
  });

  // Queues
  await database.topic.create({
    data: {
      title: "Queues",
      description: "FIFO data structure for ordered processing.",
      href: "/data-structures/queues",
      chapters: {
        create: queueSkills,
      },
    },
  });

  // Trees
  await database.topic.create({
    data: {
      title: "Trees",
      description: "Hierarchical data structure for representing relationships.",
      href: "/data-structures/trees",
      chapters: {
        create: treeSkills,
      },
    },
  });
  
  // Heaps
  await database.topic.create({
    data: {
      title: "Heaps",
      description: "A special binary tree that satisfies the requirements of a priority queue.",
      href: "/data-structures/heaps",
      chapters: {
        create: heapSkills,
      },
    },
  });
  
    // Graphs
    await database.topic.create({
      data: {
        title: "Graphs",
        description: "Nodes connected by edges to represent networks.",
        href: "/data-structures/graphs",
        chapters: {
          create: graphSkills,
        },
      },
    });

  // Tries
  await database.topic.create({
    data: {
      title: "Tries",
      description: "A kind of search tree used to store a dynamic set or associative array.",
      href: "/data-structures/tries",
      chapters: {
        create: trieSkills,
      },
    },
  });

  // // Directed Acyclic Graphs (DAGs)
  // await database.topic.create({
  //   data: {
  //     title: "Directed Acyclic Graphs",
  //     description: "Graphs with directed edges and no cycles, useful for modeling processes with dependencies.",
  //     href: "/data-structures/directed-acyclic-graphs",
  //     chapters: {
  //       create: dagSkills,
  //     },
  //   },
  // });

  // Disjoint Sets
  await database.topic.create({
    data: {
      title: "Disjoint Sets",
      description: "A data structure that keeps track of a set of elements partitioned into a number of disjoint (non-overlapping) subsets.",
      href: "/data-structures/disjoint-sets",
      chapters: {
        create: disjointSetSkills,
      },
    },
  });

  // // Weighted Graphs
  // await database.topic.create({
  //   data: {
  //     title: "Weighted Graphs",
  //     description: "Graphs where each edge has an associated weight, representing the cost to move from one vertex to another.",
  //     href: "/data-structures/weighted-graphs",
  //     chapters: {
  //       create: weightedGraphSkills,
  //     },
  //   },
  // });

  // Segment Trees
  await database.topic.create({
    data: {
      title: "Segment Trees",
      description: "A tree data structure for storing intervals or segments.",
      href: "/data-structures/segment-trees",
      chapters: {
        create: segmentTreeSkills,
      },
    },
  });

  // Log the total number of topics added
  const totalTopics = await database.topic.count();
  console.log(`${totalTopics} topics have been added.`);
}

dataSeed()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await database.$disconnect();
  });
