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
import {
  binarySearchTreeCode,
  binaryTreeCode,
  diameterCode,
  inorderCode,
  levelOrderCode,
  postorderCode,
  preorderCode,
  subTreeCode,
  treeChildrenCode,
  treeMeasureCode,
  treeNodeCode,
} from "./treeCode";

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
          <strong>top node known as the root</strong>. Each edge, or connection,
          represents a parent-child relationship. Trees{" "}
          <strong>do not contain cycles</strong>, ensuring there is one clear
          path from the root to any node. If there are <CodeText>N</CodeText>{" "}
          nodes, then{" "}
          <strong>
            there will be at most <CodeText>N - 1</CodeText> edges
          </strong>
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="operations"
        title="Operations"
        chapterId={operationsChapter?.id}
      >
        <p>
          Tree operations vary in complexity based on the tree's balance. A{" "}
          <strong>balanced tree, where nodes are evenly distributed</strong>,
          allows for operations in <CodeText>O(log n)</CodeText> time. In
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
          At the heart of a trees is the <strong>node</strong>, an individual{" "}
          <strong>
            element that holds data and can have links to left or right children
          </strong>
          , creating a system of relationships. The <strong>root</strong> is the
          topmost node, serving as{" "}
          <strong>the origin from which all other nodes descend</strong>.
        </p>
        <CodeBlock code={treeNodeCode} language="python" title="TreeNode.py" />
        <br />
        <p>
          This hierarchical structure ensures that each node (except the root)
          has a single parent node it directly descends from, while any node can
          be a parent as long as it has at least one child node connected to it.{" "}
          <strong>Nodes without any children are called leaves</strong>, marking
          the bottom of the tree.
        </p>
        <CodeBlock
          code={treeChildrenCode}
          language="python"
          title="NodeChildren.py"
        />
        <br />
        <p>
          The structure of a tree can be measured by the depth and height.{" "}
          <strong>
            Depth is the number of edges on the path from the root to a specific
            node
          </strong>
          , helping identify the level of that node within the overall
          structure.{" "}
          <strong>
            Height measures the longest path from a node down to a leaf
          </strong>
          , with the height of the main tree being the height of the root node.
        </p>
        <CodeBlock
          code={treeMeasureCode}
          language="python"
          title="Calculate_Depth.py"
        />
        <br />
        <p>
          The <strong>diameter</strong> of a tree represents the{" "}
          <strong>longest path between any two nodes</strong> in the tree. This{" "}
          <strong>path may or may not pass through the root</strong>.
          Calculating the diameter involves finding the height of left and right
          subtrees for each node and adding them together to find the maximum
          path length across the tree.
        </p>
        <CodeBlock code={diameterCode} language="python" title="Diameter.py" />
        <br />
        <p>
          <strong>Subtrees represent smaller sections of the main tree</strong>.
          Each subtree starts with a node and consists of all its descendants.
          Subtrees are trees themselves, which makes{" "}
          <TextLink href="/algorithms/recursion">recursion</TextLink> the best
          way to traverse trees.
        </p>
        <CodeBlock code={subTreeCode} language="python" title="Subtree.py" />
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
          traversal algorithms are Preorder, Inorder, and Postorder which use{" "}
          <TextLink href="/algorithms/depth-first-search">
            Depth-First Search
          </TextLink>{" "}
          (DFS). Level Order Traversal uses{" "}
          <TextLink href="/algorithms/breadth-first-search">
            Breadth-First Search
          </TextLink>{" "}
          (BFS) since we can only process nodes one level at a time.
        </p>
        <br />
        <p>
          <strong>Preorder Traversal</strong> is defined by{" "}
          <strong>visiting each node before its children</strong>. The process
          visits the nodes in a <strong>root-left-right </strong>sequence. This
          approach is useful for creating a copy of the tree or representing the
          tree in a way that reflects the hierarchy of operations in an
          expression.
        </p>
        <CodeBlock
          code={preorderCode}
          language="python"
          title="Preorder_Traversal.py"
        />
        <br />
        <p>
          <strong>Inorder Traversal</strong> visits the nodes in a{" "}
          <strong>left-root-right</strong> sequence. This means that for every
          node, the traversal first visits the left child, then the node itself,
          and finally the right child. Inorder traversal is particularly useful
          for{" "}
          <TextLink href="/data-structures/trees#binarySearch">
            binary search trees
          </TextLink>{" "}
          (BSTs), as it{" "}
          <strong>retrieves the nodes in their sorted order</strong>.
        </p>
        <CodeBlock
          code={inorderCode}
          language="python"
          title="Inorder_Traversal.py"
        />
        <br />
        <p>
          <strong>Postorder Traversal</strong> is processing the{" "}
          <strong>root node after its children</strong>. The traversal sequence
          is <strong>left-right-root</strong>, giving it the name "post" order
          traversal. Postorder is great for when you need to delete nodes and
          resources since it ensures that child nodes are processed before their
          respective parent nodes.
        </p>
        <CodeBlock
          code={postorderCode}
          language="python"
          title="Postorder_Traversal.py"
        />
        <br />
        <p>
          <strong>Level Order Traversal</strong>, also known as{" "}
          <TextLink href="/algorithms/breadth-first-search">
            Breadth-First Search
          </TextLink>{" "}
          (BFS), <strong>visits nodes level by level</strong>, starting from the
          root. This method traverses the tree top-down and is{" "}
          <strong>implemented using a</strong>{" "}
          <TextLink href="/data-structures/queues">queue</TextLink>. Level order
          traversal is beneficial for finding the shortest path or processing a
          tree in layers.
        </p>
        <CodeBlock
          code={levelOrderCode}
          language="python"
          title="Level_Order_Traversal.py"
        />
      </ChapterHeading>

      <ChapterHeading
        id="binary"
        title="Binary Tree"
        chapter={binaryTreeChapter}
        chapterId={binaryTreeChapter?.id}
      >
        <p>
          Before we jump into the implementation of a binary tree, let's
          summarize what we have gone over. A binary tree is a tree data
          structure where each node <strong>has at most two children</strong>,
          referred to as the left child and the right child.
        </p>
        <br />
        <p>
          Binary <strong>trees have no cycles</strong>, and if there are{" "}
          <strong>
            <CodeText>N</CodeText> nodes then trees can have at most{" "}
            <CodeText>N - 1</CodeText> edges
          </strong>
          . We start from the root, the top-most node, and traverse our way down
          using different traversal methods. Let's take a look at one
          implementation of a binary tree:
        </p>
        <CodeBlock
          code={binaryTreeCode}
          language="python"
          title="BinaryTree.py"
        />
        <br />
        <p>
          The main idea of the example above is using{" "}
          <TextLink href="/algorithms/depth-first-search">
            Depth-First Search{" "}
          </TextLink>
          (DFS) to explore each node, calculating the sum of paths from leaf to
          root. The important part is using a{" "}
          <strong>non-local variable (res)</strong>, which{" "}
          <strong>
            keeps track of the maximum path sum seen during the traversal
          </strong>
          . The DFS function's primary role is to{" "}
          <strong>update res with the highest sum of any path found</strong>.
          The actual return value of DFS is only to help calculate the path sum.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="binarySearch"
        title="Binary Search Tree"
        chapter={binarySearchTreeChapter}
        chapterId={binarySearchTreeChapter?.id}
      >
        <p>
          A Binary Search Tree (BST) is a special kind of binary tree that uses
          a <strong>sorted arrangement of nodes</strong>. Every node on the left
          subtree{" "}
          <strong>
            (the left child) has a value smaller than its parent node
          </strong>
          . Meanwhile, every node on the right side{" "}
          <strong>(the right child) has a value larger</strong> than its parent.
        </p>
        <br />
        <p>
          This sorted property increases the efficiency of search, insertion,
          and deletion operations. By allowing these operations to skip over
          half of the tree, it mirrors the principles of{" "}
          <TextLink href="/algorithms/binary-search">binary search</TextLink>,
          speeding up data management tasks.
        </p>
        <CodeBlock
          code={binarySearchTreeCode}
          language="python"
          title="BinarySearchTree.py"
        />
        <br />
        <p>
          Inorder traversal is important here because it{" "}
          <strong>naturally processes nodes in ascending order</strong>, given
          the properties of a BST where left children are smaller and right
          children are larger than their parent nodes. Using nonlocal variables{" "}
          <CodeText>k</CodeText> and <CodeText>res</CodeText> is crucial since{" "}
          <CodeText>k</CodeText> is decremented with each visited node,{" "}
          <strong>acting as a countdown to the kth element</strong>. Once{" "}
          <CodeText>k</CodeText> reaches zero, it means that we've reached the
          kth smallest element, and <CodeText>res</CodeText>{" "}
          <strong>is updated with the node's value</strong>.
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
