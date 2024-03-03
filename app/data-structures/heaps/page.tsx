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
import { arrayOperations, linkedListOperations } from "@/data/operationsData";
import { Metadata } from "next";

const HeapsPage = async () => {
  const topic = await getTopicByName("Heaps");

  // I will have to change this later
  if (!topic) {
    console.error("Topic not found");
    return <div>Topic not found</div>;
  }

  const definitionChapter = findChapter(topic, "Definition");
  const operationsChapter = findChapter(topic, "Operations");
  const structureChapter = findChapter(topic, "Structure Property");
  const sortedChapter = findChapter(topic, "Sorted Property");
  const heapifyChapter = findChapter(topic, "Heapify");
  const minMaxChapter = findChapter(topic, "Min/Max Heaps");
  const implementationChapter = findChapter(topic, "Implementation");
  const bestPracticesChapter = findChapter(topic, "Best Practices");

  const fetchAlgorithms = [
    "Sorting",
    "Dijkstra's Algo.",
    "Prim's Algo.",
    "Two-Heaps Pattern",
  ];

  const heapsAlgorithms = await getAlgorithmsByName(fetchAlgorithms);

  return (
    <div className="space-y-8">
       <Heading topic={topic!} />
      <ChapterHeading
        id="definition"
        title="Definition"
        chapterId={definitionChapter?.id}
      >
        <p>
          Heaps are a type of binary tree where each parent node is either greater than or equal to (in a max heap) or less than or equal to (in a min heap) its child nodes. Unlike binary search trees, heaps are not sorted but do follow this specific property to efficiently support priority queue operations.
        </p>
      </ChapterHeading>
      <ChapterHeading
        id="operations"
        title="Operations"
        chapterId={operationsChapter?.id}
      >
        <p>
          Heaps primarily support two key operations: inserting a new element and removing the top element. These operations are designed to maintain the heap property, ensuring that the heap is correctly updated and balanced.
        </p>
        <Operations items={arrayOperations} />
      </ChapterHeading>
      <ChapterHeading
        id="structureProperty"
        title="Structure Property"
        chapter={structureChapter}
        chapterId={structureChapter?.id}
      >
        <p>
          The structure property of heaps ensures that they are always complete binary trees. This means all levels of the tree are fully filled except possibly for the last level, which is filled from left to right. This structure is crucial for the efficient implementation of heaps.
        </p>
      </ChapterHeading>
      <ChapterHeading
        id="sortedProperty"
        title="Sorted Property"
        chapter={sortedChapter}
        chapterId={sortedChapter?.id}
      >
        <p>
          While heaps do not store elements in a strictly sorted order, the heap property ensures that the path from any node to the root node will always be sorted. This property allows for efficient access to the heap's maximum or minimum element.
        </p>
      </ChapterHeading>
      <ChapterHeading
        id="heapify"
        title="Heapify"
        chapter={heapifyChapter}
        chapterId={heapifyChapter?.id}
      >
        <p>
          The heapify process transforms an unorganized array of elements into a heap by iteratively applying the heap property from the bottom up. It's a key operation for building heaps and for heap sort algorithms.
        </p>
      </ChapterHeading>
      <ChapterHeading
        id="minMax"
        title="Min/Max Heaps"
        chapter={minMaxChapter}
        chapterId={minMaxChapter?.id}
      >
        <p>
          Heaps come in two forms: min heaps, where the parent is less than or equal to its children, and max heaps, where the parent is greater. This distinction dictates how elements are prioritized and accessed during heap operations.
        </p>
      </ChapterHeading>

       <ChapterHeading
        id="implementation"
        title="Implementation"
        chapterId={implementationChapter?.id}
      >
        <p>
          Heaps are a type of binary tree where each parent node is either greater than or equal to (in a max heap) or less than or equal to (in a min heap) its child nodes. Unlike binary search trees, heaps are not sorted but do follow this specific property to efficiently support priority queue operations.
        </p>
      </ChapterHeading>

      <ChapterHeading id="algorithms" title="Algorithms">
        <Algorithms items={heapsAlgorithms} />
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
            Don't limit your practice to doubly linked lists just because they
            are easier to work with. Try problems with singly and doubly linked
            lists to see how it affects the time and space complexity.
          </li>
          <br />
        </ul>
        <br />
      </ChapterHeading>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Heaps",
  description: "",
};

export default HeapsPage;