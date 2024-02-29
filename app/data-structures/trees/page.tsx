import getAlgorithmsByName from "@/actions/algorithms/getAlgorithmsByName";
import findChapter from "@/actions/chapters/findChapter";
import getTopicByName from "@/actions/topics/getTopicByName";
import Algorithms from "@/components/Algorithms";
import ChapterHeading from "@/components/ChapterHeading";
import CodeBlock from "@/components/CodeBlock";
import { CodeText } from "@/components/CodeText";
import Heading from "@/components/Heading";
import Operations from "@/components/Operations";
import TextLink from "@/components/TextLink";
import { arrayOperations, treeOperations } from "@/data/operationsData";
import { Metadata } from "next";

const TreesPage = async () => {
  const topic = await getTopicByName("Trees");

  // I will have to change this later
  if (!topic) {
    console.error("Topic not found");
    return <div>Topic not found</div>;
  }

  const definitionChapter = findChapter(topic, "Definition");
  const operationsChapter = findChapter(topic, "Operations");
  const terminologyChapter = findChapter(topic, "Terminology");
  const treeTraversalChapter = findChapter(topic, "Tree Traversal");
  const binaryTreeChapter = findChapter(topic, "Binary Tree");
  const binarySearchTreeChapter = findChapter(topic, "Binary Search Tree");
  const advancedChapter = findChapter(topic, "Advanced Trees");
  const bestPracticesChapter = findChapter(topic, "Best Practices");

  const fetchAlgorithms = [
    "Recursion",
    "Backtracking",
    "Depth-First Search",
    "Breadth-First Search",
    "Dijkstra's Algo.",
    "Prim's Algo.",
    "Union Find",
    "Kruskal's Algo.",
  ];

  const treeAlgorithms = await getAlgorithmsByName(fetchAlgorithms);

  return (
    <div className="space-y-8">
      <Heading topic={topic!} />
      <ChapterHeading
        id="definitionTree"
        title="Definition"
        chapterId={definitionChapter?.id}
      >
        <p>
          Trees are nodes connected in a hierarchy, where each node can point to
          one or more nodes below it, starting from a single{" "}
          <span className="font-bold">top node known as the root</span>. Each
          connection represents a parent-child relationship. Trees{" "}
          <span className="font-bold">do not contain cycles</span>, ensuring
          there is one clear path from the root to any node.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="operations"
        title="Operations"
        chapterId={operationsChapter?.id}
      >
        <p>
          Tree operations vary in complexity based on the tree's balance. A{" "}
          <span className="font-bold">
            balanced tree, where nodes are evenly distributed
          </span>
          , allows for operations in <CodeText>O(log n)</CodeText> time. In
          contrast, unbalanced trees, resembling a linked list, increase
          operation complexity to <CodeText>O(n)</CodeText> since more nodes
          need to be traversed.
        </p>
        <br />
        <p>
          Let's take a look at the time and space complexities of operations
          supported by a balanced tree:
        </p>
        <Operations items={treeOperations} />
        <p>
          The rationale behind the <CodeText>O(log n)</CodeText> complexity is
          that the binary tree is balanced. At the root, the entire dataset of{" "}
          <CodeText>n</CodeText> nodes is visible. As you move to the next level
          (left or right child) the number of visible nodes halves to{" "}
          <CodeText>n/2</CodeText>. This halving process continues with each
          level descended, essentially narrowing down the dataset.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="terminology"
        title="Terminology"
        chapter={terminologyChapter}
        chapterId={terminologyChapter?.id}
      >
        <p>
          Understanding tree terminology is crucial for working with trees.
          Terms include "root", "node", "parent", "child", "leaf", "subtree",
          "depth", "height", and more. Each term has a specific meaning that
          helps in the understanding and manipulation of tree structures.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="traversal"
        title="Tree Traversal"
        chapter={treeTraversalChapter}
        chapterId={treeTraversalChapter?.id}
      >
        <p>
          Traversing a tree involves visiting all the nodes of the tree and
          performing an operation (like printing the node). The major tree
          traversal algorithms are Preorder, Inorder, Postorder, and Level Order
          Traversal.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="binary"
        title="Binary Tree"
        chapter={binaryTreeChapter}
        chapterId={binaryTreeChapter?.id}
      >
        <p>
          A binary tree is a tree data structure in which each node has at most
          two children, referred to as the left child and the right child. It is
          a specialized form of a tree where every node has two or fewer
          children.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="binarySearch"
        title="Binary Search Tree"
        chapter={binarySearchTreeChapter}
        chapterId={binarySearchTreeChapter?.id}
      >
        <p>
          A Binary Search Tree (BST) is a type of binary tree where the nodes
          are arranged in order: for each node, all elements in the left subtree
          are less than the node, and all the elements in the right subtree are
          greater than the node. This property makes binary search trees
          efficient for operations like search, insert, and delete.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="advanced"
        title="Advanced Trees"
        chapter={advancedChapter}
        chapterId={advancedChapter?.id}
      >
        <p>
          Advanced trees, such as AVL trees, Red-Black trees, Segment trees, and
          B-trees, are designed to provide efficient search, insert, and delete
          operations by automatically maintaining tree balance.
        </p>
      </ChapterHeading>

      <ChapterHeading id="algorithms" title="Algorithms">
        <Algorithms items={treeAlgorithms} />
      </ChapterHeading>

      <ChapterHeading
        id="bestPractices"
        title="Best Practices"
        chapterId={bestPracticesChapter?.id}
      >
        <p>
          Queues are the best data structure for managing data in a first-in,
          first-out (FIFO) manner. They are useful for maintaining order and are
          the foundations for complex algorithms. Here are some essential tips
          and tricks for mastering queues:
        </p>
        <br />

        <ul className="ml-6">
          <li>
            <span className="font-bold">&bull; Queues in your language:</span>{" "}
            Familiarize yourself with queues in your preferred programming
            language. Make sure you know the built-in functions and libraries
            designed for queues. Understand the fundamental operations such as{" "}
            <CodeText>enqueue</CodeText> (add), <CodeText>dequeue</CodeText>{" "}
            (remove), <CodeText>peek</CodeText> (view the front item without
            removal), and <CodeText>isEmpty</CodeText>.
          </li>
          <br />
          <li>
            <span className="font-bold">
              &bull; Using Queues in Algorithms:
            </span>{" "}
            Understand how queues can optimize solutions in breadth-first search
            (BFS) for traversing graphs or trees, implementing caching
            algorithms like LRU (Least Recently Used), or in round-robin
            scheduling.
          </li>
          <br />
          <li>
            <span className="font-bold">
              &bull; Recognizing Queue Problems:
            </span>{" "}
            Identify problems where queues can simplify the solution, such as in
            level order traversal of trees, or in implementing a buffer for data
            streams. Anytime you need to store data to access it again, in
            order, queues are your best friend.
          </li>
          <br />
          <li>
            <span className="font-bold">&bull; Experimenting with Deques:</span>{" "}
            Deques (double-ended queues) allow insertion and removal at both
            ends. Practice using deques in scenarios that require flexible
            access, such as sliding window problems or palindrome checking.
          </li>
          <br />
        </ul>
      </ChapterHeading>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Trees",
  description: "",
};

export default TreesPage;
