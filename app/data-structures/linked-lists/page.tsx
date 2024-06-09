import getAlgorithmsByName from "@/actions/algorithms/getAlgorithmsById";
import findChapter from "@/actions/chapters/findChapter";
import getTopicById from "@/actions/topics/getTopicById";
import Algorithms from "@/components/Algorithms";
import ChapterHeading from "@/components/ChapterHeading";
import CodeBlock from "@/components/CodeBlock";
import { CodeText } from "@/components/CodeText";
import Heading from "@/components/Heading";
import Operations from "@/components/Operations";
import TextLink from "@/components/TextLink";
import { linkedListOperations } from "@/data/operationsData";
import { Metadata } from "next";
import {
  doublyLinkedList,
  doublyNodeCode,
  dummyNodesCode,
  linkedPointersCode,
  singleNodeCode,
  singlyLinkedList,
} from "./linkedListsCode";
import ImageBlock from "@/components/ImageBlock";

const LinkedListsPage = async () => {
  const topic = await getTopicById(2);

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

  const fetchAlgorithms = [1, 2, 3, 6];

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
          <TextLink href="#listNodes">list nodes</TextLink>, each pointing to
          the next node with a pointer. Unlike{" "}
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
          <TextLink href="#pointers">pointer</TextLink>) to the next node,
          meaning you can access any node as long as you have a pointer to it:{" "}
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
          title="Pointers.py"
        />
        <ImageBlock
          src="/images/linked-lists/AddingNodeToBeginning.gif"
          alt="Animation of linked lists and pointers used to add new list node"
        />
        <p>
          The example above shows how to insert a new{" "}
          <CodeText>ListNode</CodeText> after the head of a linked list. It
          starts by creating a new list node with the given{" "}
          <CodeText>value</CodeText>. Then, it sets this new node&apos;s{" "}
          <CodeText>next</CodeText> pointer to the node after{" "}
          <CodeText>head</CodeText>. Finally, <CodeText>head</CodeText>&apos;s
          next pointer is set to the <CodeText>new_node</CodeText> effectively
          placing the new node at the front.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="listNodes"
        title="List Nodes"
        chapter={listNodesChapter}
        chapterId={listNodesChapter?.id}
      >
        <p>
          List Nodes are the building blocks for linked lists. They store both
          the data (value) and the pointer to the next node. In singly linked
          lists, the <CodeText>ListNode</CodeText> class stores just a value and
          a pointer to the next node:
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
        title="Sentinel Nodes"
        chapterId={sentinelsChapter?.id}
      >
        <p>
          Sentinel nodes, or dummy nodes, are a strategy for using linked lists
          conveniently. These{" "}
          <span className="font-bold">
            dummy nodes do not hold any relevant data
          </span>{" "}
          but simplify operations by providing a non-null reference. Using dummy
          nodes eliminates the need for special edge cases to handle inserting
          or deleting at the beginning or the end of the list.
        </p>
        <CodeBlock
          code={dummyNodesCode}
          language="python"
          title="Sentinels.py"
        />
        <ImageBlock
          src="/images/linked-lists/SentinelNodes.gif"
          alt="Animation of linked lists and sentinel nodes used to add a new node"
        />
        <p>
          By initializing the list with two dummy nodes,{" "}
          <CodeText>self.left</CodeText> and <CodeText>self.right</CodeText>,
          which are the head and tail sentinels, we no longer need to handle
          edge cases for operations. These sentinel nodes form a fixed boundary
          around the linked list.
        </p>
      </ChapterHeading>

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
          Linked lists are important to understand because they are the
          foundation for many other data structures, including{" "}
          <TextLink href="/data-structures/hashmaps#implementation">
            hashmaps
          </TextLink>{" "}
          and <TextLink href="/data-structures/queues">queues</TextLink>. Here
          are essential tips and tricks for linked lists:
        </p>
        <br />

        <ul className="ml-6">
          <li>
            <span className="font-bold">&bull; Mastering Pointers:</span>{" "}
            Understanding pointers is crucial for traversing and manipulating
            linked lists. Understand how to safely advance pointers, and insert
            or remove nodes without losing track of the list. Use dummy nodes to
            avoid handling annoying edge cases.
          </li>
          <br />
          <li>
            <span className="font-bold">&bull; Understanding Dummy Nodes:</span>{" "}
            Practice using dummy nodes to simplify edge cases, especially at the
            beginning and end of the list. Try to solve problems again, with and
            without the use of dummy nodes.
          </li>
          <br />
          <li>
            <span className="font-bold">&bull; Recognizing Patterns:</span>{" "}
            Identifying problems that linked lists can naturally solve, such as
            cycle detection, reversing a list, etc. Rememeber that linked lists
            are useful for inserting and deleting anywhere as long as we have
            the pointer.
          </li>
          <br />
          <li>
            <span className="font-bold">
              &bull; Tackling Recursive Problems:
            </span>{" "}
            Linked lists are naturally good with{" "}
            <TextLink href="/algorithms/recursion">recursive</TextLink>{" "}
            solutions. Be comfortable with recursion for operations like
            reversal, and understand how it impacts space complexity.
          </li>
          <br />
          <li>
            <span className="font-bold">&bull; Practice with Variants:</span>{" "}
            Don&apos;t limit your practice to doubly linked lists just because
            they are easier to work with. Try problems with singly and doubly
            linked lists to see how it affects the time and space complexity.
          </li>
          <br />
        </ul>
        <br />
      </ChapterHeading>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Linked Lists",
  description: "",
};

export default LinkedListsPage;
