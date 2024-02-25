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
import {
  arrayOperations,
  linkedListOperations,
  stackOperations,
} from "@/data/operationsData";
import { Metadata } from "next";
import {
  doublyLinkedList,
  doublyNodeCode,
  linkedPointersCode,
  singleNodeCode,
  singlyLinkedList,
} from "./_components/linkedListsCode";

const LinkedListsPage = async () => {
  const topic = await getTopicByName("Linked Lists");

  // I will have to change this later
  if (!topic) {
    console.error("Topic not found");
    return <div>Topic not found</div>;
  }

  const definitionChapter = findChapter(topic, "Definition");
  const operationsChapter = findChapter(topic, "Operations");
  const pointersChapter = findChapter(topic, "Pointers");
  const listNodesChapter = findChapter(topic, "List Nodes");
  const sentinelsChapter = findChapter(topic, "Sentinel Nodes");
  const singlyChapter = findChapter(topic, "Singly Linked List");
  const doublyChapter = findChapter(topic, "Doubly Linked List");
  const bestPracticesChapter = findChapter(topic, "Best Practices");

  const fetchAlgorithms = [
    "Fast & Slow Pointers",
    "Sliding Window",
    "Recursion",
    "Backtracking",
  ];

  const linkedListAlgorithms = await getAlgorithmsByName(fetchAlgorithms);

  return (
    <div className="space-y-8">
      <Heading topic={topic!} />
      <ChapterHeading
        id="definitionLinkedList"
        title="Definition"
        chapterId={definitionChapter?.id}
      >
        <p>
          A linked list is a linear collection of elements, called{" "}
          <TextLink href="/data-structures/linked-lists#listNodes">
            list nodes
          </TextLink>
          , each pointing to the next node with a pointer. Unlike{" "}
          <TextLink href="/data-structures/arrays">arrays</TextLink>, linked
          lists are{" "}
          <span className="font-bold">not stored contiguously in memory.</span>{" "}
          They are efficient for insertion and deletion of elements without
          reallocating or reorganizing the entire data structure.
        </p>
      </ChapterHeading>
      <ChapterHeading
        id="operations"
        title="Operations"
        chapterId={operationsChapter?.id}
      >
        <p>
          Linked lists stand out for their efficient insertions and deletions.
          They can easily expand without the need for reallocation or copying
          the entire structure.{" "}
        </p>{" "}
        <p>
          <br />
          Each list node contains a reference (or{" "}
          <TextLink href="/data-structures/linked-lists#pointers">
            pointer
          </TextLink>
          ) to the next node, meaning you can access any node as long as you
          have a pointer to it:{" "}
        </p>
        <Operations items={linkedListOperations} />
      </ChapterHeading>

      <ChapterHeading
        id="pointers"
        title="Pointers"
        chapter={pointersChapter}
        chapterId={pointersChapter?.id}
      >
        <p>
          Pointers are crucial for constructing linked lists, allowing each node
          to connect to the next. Linked lists efficiently perform insertions
          and deletions by simply updating links between nodes, without needing
          to shift elements like in{" "}
          <TextLink href="/data-structures/arrays#operations">arrays</TextLink>.
        </p>
        <CodeBlock
          code={linkedPointersCode}
          language="python"
          title="LinkedLists_Pointers.py"
        />
        <br />
        <p>
          The example above shows how to insert a new <CodeText>ListNode</CodeText> at the beginning of a
          linked list. It starts by creating a new list node with the given{" "}
          <CodeText>value</CodeText>. Then, it sets this new node's{" "}
          <CodeText>next</CodeText> pointer to the current{" "}
          <CodeText>head</CodeText> of the list, effectively placing the new
          node at the front.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="listNodes"
        title="List Nodes"
        chapter={listNodesChapter}
        chapterId={listNodesChapter?.id}
      >
        <p>
          List Nodes are the building blocks for linked lists. They store both the
          data (value) and the pointer to the next node. In
          singly linked lists, the <CodeText>ListNode</CodeText> class stores
          just a value and a pointer to the next node:
        </p>
        <CodeBlock
          code={singleNodeCode}
          language="python"
          title="Singly_ListNode.py"
        />
        <br />
        <p>
          For doubly linked lists, the <CodeText>ListNode</CodeText> class also
          includes a <CodeText>prev</CodeText> pointer, linking back to the
          previous node, which allows bidirectional traversal:
        </p>
        <CodeBlock
          code={doublyNodeCode}
          language="python"
          title="Doubly_ListNode.py"
        />
        <br />
        <p>
          List nodes can also be used to store other data alongside values, such
          as keys. You can use linked lists efficiently for operations like
          insertion or deletion when you have direct access to the nodes.{" "}
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="sentinels"
        title="Sentinels Nodes"
        chapter={sentinelsChapter}
        chapterId={sentinelsChapter?.id}
      ></ChapterHeading>

      <ChapterHeading
        id="singly"
        title="Singly Linked List"
        chapter={singlyChapter}
        chapterId={singlyChapter?.id}
      >
        <p>
          Singly linked lists are built with list nodes, where each{" "}
          <CodeText>ListNode</CodeText> stores data and a pointer to the next
          node. This means that singly linked lists cannot traverse backwards to
          previous nodes, you can only move your pointer forward:
        </p>
        <CodeBlock
          code={singlyLinkedList}
          language="python"
          title="Singly_LinkedList.py"
        />
        <p>
          <br />
          To use singly linked lists correctly make sure you have access to
          nodes that come before the target node. Otherwise you will need to
          traverse the linked list to find the correct node.{" "}
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="doubly"
        title="Doubly Linked List"
        chapter={doublyChapter}
        chapterId={doublyChapter?.id}
      >
        <p>
          Doubly linked lists are an upgrade to singly linked lists because they
          store an additional pointer in each list node. This extra pointer
          links to the previous node, enabling traversal in both forward and
          backwards.{" "}
        </p>
        <br />
        <p>
          Each node in a <CodeText>ListNode</CodeText> stores data, a pointer to
          the previous node, and a pointer to the next node:
        </p>
        <CodeBlock
          code={doublyLinkedList}
          language="python"
          title="Doubly_LinkedList.py"
        />
        <p>
          <br />
          This two-way capability makes doubly linked lists great for problems
          that require backward traversal. However, to correcly use doubly
          linked lists, manage both <CodeText>next</CodeText> and{" "}
          <CodeText>prev</CodeText> pointers carefully to maintain the list.
        </p>
      </ChapterHeading>

      <ChapterHeading id="algorithms" title="Algorithms">
        <Algorithms items={linkedListAlgorithms} />
      </ChapterHeading>

      <ChapterHeading
        id="bestPractices"
        title="Best Practices"
        chapterId={bestPracticesChapter?.id}
      >
        <p>
          Mastering arrays and stacks is crucial for coding interviews. Here are
          some tips that I learned for using these data structures effectively:
          <br />
          <br />
        </p>

        <ul className="ml-6">
          <li>
            <span className="font-bold">&bull; Identifying Patterns:</span>{" "}
            Arrays are commonly used in sorting, searching, and iterating over
            data. Arrays are also the most common data structures for storing
            the final result of a problem. For this reason, you need to be
            comfortable with all the common functions and methods for arrays in
            your preferred language.
            <br />
            <br />
          </li>
          <li>
            <span className="font-bold">&bull; Space-Time Trade-offs:</span>{" "}
            Understand when it's beneficial to use additional space (like
            creating{" "}
            <TextLink href="/data-structures/hashmaps">hashmaps</TextLink> from
            arrays) to improve time efficiency. This strategy is useful in
            problems involving frequency counting or mapping relationships
            between elements.
            <br />
            <br />
          </li>
          <li>
            <span className="font-bold">
              &bull; When Elements Depend On Each Other:
            </span>{" "}
            Stacks are ideal for managing matching brackets or parentheses in
            syntax validation problems. This is becuase the current element
            depends on the elements that came before it, a perfect use case for
            using stacks.
            <br />
            <br />
          </li>
          <li>
            <span className="font-bold">
              &bull; Navigating Through Recursion:
            </span>{" "}
            For recursive problem solutions, stacks are perfect for an iterative
            approach. They allow you to maintain state across different levels
            of <TextLink href="/algorithms/recursion">recursion</TextLink>. By
            pushing temporary data onto the stack as you descend and popping it
            off as you backtrack, you effectively mimic the call stack mechanism
            of recursion.
            <br />
            <br />
          </li>
        </ul>
      </ChapterHeading>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Linked Lists",
  description: "",
};

export default LinkedListsPage;
