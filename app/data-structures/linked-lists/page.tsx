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
import { arrayOperations, linkedListOperations, stackOperations } from "@/data/operationsData";
import { Metadata } from "next";

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
  const singlyChapter = findChapter(topic, "Singly Linked List");
  const doublyChapter = findChapter(topic, "Doubly Linked List");
  const implementationChapter = findChapter(topic, "Implementation");
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
          lists are <span className="font-bold">not stored contiguously</span>{" "}
          in memory. They are efficient for insertion and deletion of elements
          without reallocating or reorganizing the entire data structure.
          <br />
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
          the entire structure. Each list node contains a reference (or{" "}
          <TextLink href="/data-structures/linked-lists#pointers">
            pointer
          </TextLink>
          ) to the next node, meaning you can access any node as long as you
          have a pointer to it.
          <br />
        </p>
        <p>
          <br />
          Here is everything you can do with linked lists:
        </p>
        <Operations items={linkedListOperations} />
      </ChapterHeading>

      <ChapterHeading
        id="pointers"
        title="Pointers"
        chapterId={pointersChapter?.id}
      >
        <p>
          <br /></p>
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
