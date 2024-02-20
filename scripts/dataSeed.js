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
    href: "/",
    description: "It's like that Spider-Man meme where they are all pointing to each other",
  },
  {
    title: "Operations",
    href: "/",
    description: "Here's everything you can do with linked lists and their complexities",
  },
  {
    title: "Implementation",
    href: "/",
    description: "You implement a linked list with a 'Node' class that has pointers and values",
  },
  {
    title: "Pointers",
    href: "/",
    description: "Nodes have pointers which point to the previous or next node",
  },
  {
    title: "Singly Linked List",
    href: "/",
    description: "Think of a treasure hunt, each clue leads to the next until the end",
  },
  {
    title: "Doubly Linked List",
    href: "/",
    description: "Think of this as a two-way street, you can go to previous or next node",
  },
  {
    title: "Algorithms",
    href: "/",
    description: "These are common algorithms you need to know for linked lists",
  },
  {
    title: "Best Practices",
    href: "/",
    description: "The most efficient way of using linked lists and avoiding pitfalls",
  },
]

const hashmapSkills = [
  {
    title: "Definition",
    href: "/",
    description: "Hashmaps store unique key-value pairs and sets hate duplicates",
  },
  {
    title: "Operations",
    href: "/",
    description: "Here's everything you can do with hashmap and sets",
  },
  {
    title: "Implementation",
    href: "/",
    description: "They're like a metal can, they can only fit a certain amount",
  },
  {
    title: "Hash Function",
    href: "/",
    description: "Just converts input into something unique",
  },
  {
    title: "Chaining",
    href: "/",
    description: "They're basically balloons, you can keep adding to them",
  },
  {
    title: "Sets",
    href: "/",
    description: "They hate duplicates and searching in them is really efficient",
  },
  {
    title: "Algorithms",
    href: "/",
    description: "These are all the common algorithms for hashmaps and sets",
  },
  {
    title: "Best Practices",
    href: "/",
    description: "The best way to use hashmaps and sets for efficiency",
  },
]

const queueSkills = [
  {
    title: "Definition",
    href: "/",
    description: "FIFO - meaning it's first come, first served",
  },
  {
    title: "Operations",
    href: "/",
    description: "Here's everything you can do with queues",
  },
  {
    title: "Implementation",
    href: "/",
    description: "Think of a line at the bank, the earliest one goes first",
  },
  {
    title: "Circular Queue",
    href: "/",
    description: "Efficiently uses space by connecting the last positition back to the first",
  },
  {
    title: "Priority Queue",
    href: "/",
    description: "Each element has a priority meaning you can access elements based on that",
  },
  {
    title: "Deque",
    href: "/",
    description: "Double-ended meaning you can insert and delete at the front and the rear",
  },
  {
    title: "Algorithms",
    href: "/",
    description: "These are all the common algorithms for queues",
  },
  {
    title: "Best Practices",
    href: "/",
    description: "This is the best way to use queues for best time and memory complexity",
  },
]

const treeSkills = [
  {
    title: "Definition",
    href: "/",
    description: "Think of them like an upside-down tree in real life, roots are at the top",
  },
  {
    title: "Operations",
    href: "/",
    description: "Here's everything you can do with trees based on their representation",
  },
  {
    title: "Implementation",
    href: "/",
    description: "Trees have nodes that are connected to other children nodes",
  },
  {
    title: "Terminology",
    href: "/",
    description: "These are some terms for trees that you should know to make life easier",
  },
  {
    title: "Binary Tree",
    href: "/",
    description: "As the name suggests, the nodes can only have up to two children",
  },
  {
    title: "Binary Seach Tree",
    href: "/",
    description: "A binary tree where left must be smaller than root, right must be bigger",
  },
  {
    title: "Algorithms",
    href: "/",
    description: "These are all the common algorithms for trees that you should know",
  },
  {
    title: "Best Practices",
    href: "/",
    description: "This is the most efficient way to use trees",
  },
]

const graphSkills = [
  {
    title: "Definition",
    href: "/",
    description: "Graphs consist on nodes that are connected to each other with edges",
  },
  {
    title: "Operations",
    href: "/",
    description: "Here's everything you can do with graphs based on the representation",
  },
  {
    title: "Implementation",
    href: "/",
    description: "There are many ways to represent graphs based on the problem",
  },
  {
    title: "Directionality",
    href: "/",
    description: "If graph edges are directional, they point from one node to another",
  },
  {
    title: "Matrix",
    href: "/",
    description: "Usually represented by arrays, they basically form a rectangle of nodes",
  },
  {
    title: "Adjacency List",
    href: "/",
    description: "Each node has a list of it's neighbors, most common representation",
  },
  {
    title: "Algorithms",
    href: "/",
    description: "These are all the common algorithms for graphs that you need to know",
  },
  {
    title: "Best Practices",
    href: "/",
    description: "This is the best way to use graphs based on their representations",
  },
]

const heapSkills = [
  {
    title: "Definition",
    href: "/",
    description: "They are basically binary trees with a specific order and structure",
  },
  {
    title: "Operations",
    href: "/",
    description: "Here's everything you can do with heaps",
  },
  {
    title: "Implementation",
    href: "/",
    description: "Heaps have to maintain their order and structure even if they change",
  },
  {
    title: "Order & Structure",
    href: "/",
    description: "Looking under the hood of how heaps maintain their order and structure",
  },
  {
    title: "Heapify",
    href: "/",
    description: "This is how an unordered array of numbers turns into a ordered heap",
  },
  {
    title: "Min/Max Heap",
    href: "/",
    description: "Here's how you can use min and max heaps most efficiently",
  },
  {
    title: "Algorithms",
    href: "/",
    description: "These are all the common algorithms for heaps that you need to know",
  },
  {
    title: "Best Practices",
    href: "/",
    description: "This is the best way to use heaps for best time and space complexity",
  },
]

const trieSkills = [
  {
    title: "Definition",
    href: "/",
    description: "They are known as prefix trees because they form words & prefixes",
  },
  {
    title: "Operations",
    href: "/",
    description: "Here's everything you can do with tries",
  },
  {
    title: "Implementation",
    href: "/",
    description: "Each node in the trie must store the children and if the word is reached",
  },
  {
    title: "Insertion",
    href: "/",
    description: "To insert into a trie we essentially follow the letters and add to the gaps",
  },
  {
    title: "Searching",
    href: "/",
    description: "You can find words by simply following the letters and checking if it's marked",
  },
  {
    title: "Finding Prefixes",
    href: "/",
    description: "You can follow the letters as long as they satisfy the prefix",
  },
  {
    title: "Algorithms",
    href: "/",
    description: "These are all the common algorithms for tries or prefix trees",
  },
  {
    title: "Best Practices",
    href: "/",
    description: "This is the most efficient way of using tries",
  },
]

const segmentTreeSkills = [
  {
    title: "Definition",
    href: "/",
    description: "Just divide an array into halves until you can't, then add them up",
  },
  {
    title: "Operations",
    href: "/",
    description: "Here's everything you can do with segment trees and their complexities",
  },
  {
    title: "Implementation",
    href: "/",
    description: "They are represented by binary trees and each node contains a lot of info",
  },
  {
    title: "Building",
    href: "/",
    description: "Divide the array by half and put each half in the left and right children",
  },
  {
    title: "Querying",
    href: "/",
    description: "You simply have to traverse down the tree to build the range you need",
  },
  {
    title: "Updating",
    href: "/",
    description: "You need to find the leaf node to fetch the index of the element",
  },
  {
    title: "Algorithms",
    href: "/",
    description: "These are all the common algorithms for segment trees",
  },
  {
    title: "Best Practices",
    href: "/",
    description: "The best way to use segment trees for time complexity",
  },
]

const disjointSetSkills = [
  {
    title: "Definition",
    href: "/",
    description: "Think of these as separate groups of friends in highschool",
  },
  {
    title: "Operations",
    href: "/",
    description: "All the ways to build, find, and merge these friends, without any drama",
  },
  {
    title: "Implementation",
    href: "/",
    description: "Use a special tree where each friend points to the 'leader' of friend group",
  },
  {
    title: "Network Connectivity",
    href: "/",
    description: "Checking if two people are in the same friend circle or strangers",
  },
  {
    title: "Path Compression",
    href: "/",
    description: "While checking, link everyone directly to the 'big boss' to speed up future checks",
  },
  {
    title: "Union by Rank",
    href: "/",
    description: "Keep things balanced by adding the smaller group to the bigger one",
  },
  {
    title: "Algorithms",
    href: "/",
    description: "Here are the most common algorithms for disjoint sets",
  },
  {
    title: "Best Practices",
    href: "/",
    description: "The most efficient way of using disjoint sets efficiently",
  },
]

const weightedGraphSkills = [
  {
    title: "Definition",
    href: "/",
    description: "Imagine a city map where roads have different lengths or speed limits",
  },
  {
    title: "Operations",
    href: "/",
    description: "Here's everything you can do with weighted graphs and their complexities",
  },
  {
    title: "Implementation",
    href: "/",
    description: "The easiest way is to implement weighted graphs using adjacency lists",
  },
  {
    title: "Shortest Path",
    href: "/",
    description: "Similar to finding the quickest or least congested route from work like a GPS",
  },
  {
    title: "Minimum Spanning Tree",
    href: "/",
    description: "Least-busy network of roads that allows travel between all the city spots",
  },
  {
    title: "Cycle Detection",
    href: "/",
    description: "Here's how to ensure that there are no cycles in the weighted graph",
  },
  {
    title: "Algorithms",
    href: "/",
    description: "These are all the common algorithms you should know for weighted graphs",
  },
  {
    title: "Best Practices",
    href: "/",
    description: "The best way to use weighted graphs for maximum efficiency",
  },
]

const dagSkills = [
  {
    title: "Definition",
    href: "/",
    description: "Imagine a to-do list, where some tasks need to happen before others",
  },
  {
    title: "Operations",
    href: "/",
    description: "Here's everything you can do with DAG's and their complexities",
  },
  {
    title: "Implementation",
    href: "/",
    description: "You can easily implement them using adjacency lists",
  },
  {
    title: "Topological Sorting",
    href: "/",
    description: "Similar to creating a checklist for ensuring the right order",
  },
  {
    title: "Longest/Shortest Path",
    href: "/",
    description: "Finding the quickest or longest way from one node to another",
  },
  {
    title: "Dependency Resolution",
    href: "/",
    description: "Figuring out which tasks must be completed before others can start",
  },
  {
    title: "Algorithms",
    href: "/",
    description: "The most common algorithms for DAG's and their complexities",
  },
  {
    title: "Best Practices",
    href: "/",
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
      href: "/",
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
      href: "/linked-lists",
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
      href: "/hashmaps",
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
      href: "/queues",
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
      href: "/trees",
      chapters: {
        create: treeSkills,
      },
    },
  });

  // Graphs
  await database.topic.create({
    data: {
      title: "Graphs",
      description: "Nodes connected by edges to represent networks.",
      href: "/graphs",
      chapters: {
        create: graphSkills,
      },
    },
  });

  // Heaps
  await database.topic.create({
    data: {
      title: "Heaps",
      description: "A specialized tree-based data structure that satisfies the heap property.",
      href: "/heaps",
      chapters: {
        create: heapSkills,
      },
    },
  });

  // Tries
  await database.topic.create({
    data: {
      title: "Tries",
      description: "A kind of search tree used to store a dynamic set or associative array.",
      href: "/tries",
      chapters: {
        create: trieSkills,
      },
    },
  });

  // Directed Acyclic Graphs (DAGs)
  await database.topic.create({
    data: {
      title: "Directed Acyclic Graphs",
      description: "Graphs with directed edges and no cycles, useful for modeling processes with dependencies.",
      href: "/directed-acyclic-graphs",
      chapters: {
        create: dagSkills,
      },
    },
  });

  // Disjoint Sets
  await database.topic.create({
    data: {
      title: "Disjoint Sets",
      description: "A data structure that keeps track of a set of elements partitioned into a number of disjoint (non-overlapping) subsets.",
      href: "/disjoint-sets",
      chapters: {
        create: disjointSetSkills,
      },
    },
  });

  // Weighted Graphs
  await database.topic.create({
    data: {
      title: "Weighted Graphs",
      description: "Graphs where each edge has an associated weight, representing the cost to move from one vertex to another.",
      href: "/weighted-graphs",
      chapters: {
        create: weightedGraphSkills,
      },
    },
  });

  // Segment Trees
  await database.topic.create({
    data: {
      title: "Segment Trees",
      description: "A tree data structure for storing intervals or segments.",
      href: "/segment-trees",
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
