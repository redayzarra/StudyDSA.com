import getAlgorithmsByName from "@/actions/algorithms/getAlgorithmsById";
import findChapter from "@/actions/chapters/findChapter";
import getTopicById from "@/actions/topics/getTopicById";
import Algorithms from "@/components/Algorithms";
import ChapterHeading from "@/components/ChapterHeading";
import CodeBlock from "@/components/CodeBlock";
import { CodeText } from "@/components/CodeText";
import Heading from "@/components/Heading";
import ImageBlock from "@/components/ImageBlock";
import Operations from "@/components/Operations";
import TextLink from "@/components/TextLink";
import { heapOperations } from "@/data/operationsData";
import { Metadata } from "next";
import { heapCode, heapifyCode, maxHeapCode } from "./heapsCode";

const HeapsPage = async () => {
  const topic = await getTopicById(6);

  // I will have to change this later
  if (!topic) {
    console.error("Topic not found");
    return <div>Topic not found</div>;
  }

  const definitionChapter = findChapter(topic, "Definition");
  const operationsChapter = findChapter(topic, "Operations");
  const structureChapter = findChapter(topic, "Structure Property");
  const heapPropertyChapter = findChapter(topic, "Heap Property");
  const heapifyChapter = findChapter(topic, "Heapify");
  const minMaxChapter = findChapter(topic, "Min/Max Heaps");
  const implementationChapter = findChapter(topic, "Implementation");
  const bestPracticesChapter = findChapter(topic, "Best Practices");

  const fetchAlgorithms = [7, 16, 17, 21];

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
          Heaps are a type of binary tree where{" "}
          <strong>
            each parent node is either less than or equal to (in a min heap) its
            children
          </strong>
          . Unlike binary search trees, heaps are not sorted but do follow this
          specific <TextLink href="#property">property</TextLink> to efficiently
          support{" "}
          <TextLink href="/data-structures/queues#priority">
            priority queue
          </TextLink>{" "}
          operations.
        </p>
      </ChapterHeading>
      <ChapterHeading
        id="operations"
        title="Operations"
        chapterId={operationsChapter?.id}
      >
        <p>
          Heaps primarily support two key operations:{" "}
          <strong>inserting a new element and removing the top element</strong>.
          These operations are designed to maintain the heap property, ensuring
          that the heap is correctly updated and balanced:
        </p>
        <Operations items={heapOperations} />
      </ChapterHeading>
      <ChapterHeading
        id="structure"
        title="Structure Property"
        chapter={structureChapter}
        chapterId={structureChapter?.id}
      >
        <p>
          The structure property of heaps ensures that{" "}
          <strong>they are always complete binary trees</strong>. This means
          <strong>
            {" "}
            all levels of the tree are fully filled except maybe the last level
          </strong>
          , which is <strong>filled from left to right</strong>.
        </p>
        <ImageBlock
          src="/images/heaps/StructureProperty.jpg"
          alt="Captain america"
        />
        <p>
          This structural property not only ensures a{" "}
          <strong>balanced distribution of nodes</strong> but also{" "}
          <strong>guarantees an optimal height</strong>, allowing for efficient
          operations. The completeness of the heap also optimizes storage by
          eliminating the need for pointers typically required in trees,
          allowing heaps to be efficiently implemented using arrays.
        </p>
      </ChapterHeading>
      <ChapterHeading
        id="property"
        title="Heap Property"
        chapter={heapPropertyChapter}
        chapterId={heapPropertyChapter?.id}
      >
        <p>
          The heap property states that each{" "}
          <strong>
            parent node&apos;s value is less than or equal to the values of its
            children (in a min heap)
          </strong>
          . While heaps do not store elements in a strictly sorted order, the
          heap property ensures that{" "}
          <strong>
            the path from any node to the root node will always be sorted
          </strong>
          . This property allows for efficient access to the heap&apos;s maximum
          or minimum element.
        </p>
        <ImageBlock src="/images/heaps/HeapProperty.jpg" alt="Heap Property" />
      </ChapterHeading>
      <ChapterHeading
        id="heapify"
        title="Heapify"
        chapter={heapifyChapter}
        chapterId={heapifyChapter?.id}
      >
        <p>
          The heapify function is a fundamental operation for converting any
          array into a heap structure. This process{" "}
          <strong>rearranges the elements of the array to satisfy the</strong>{" "}
          <TextLink href="#property">heap property</TextLink>, ensuring that for
          every node the value of the node is not less than the value of its
          parent, <strong>forming a min heap</strong>.
        </p>
        <br />
        <p>
          Starting from the last non-leaf node all the way up to the root node,
          the process applies the <CodeText>sift-down</CodeText> operation. This
          ensures that each subtree satisfies the heap property before finally{" "}
          <strong>transforming the entire array into a heap</strong>:
        </p>
        <CodeBlock code={heapifyCode} language="python" title="Heapify.py" />
        <p>
          <br />
          The <CodeText>siftDown</CodeText> method is important in the{" "}
          <CodeText>heapify</CodeText> process. It compares the parent node with
          its children to ensure the heap property is maintained, swapping the
          nodes when necessary. This{" "}
          <strong>function continues until the subtree</strong> rooted at the
          node being sifted down <strong>satisfies the heap property</strong>.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="minMax"
        title="Min/Max Heaps"
        chapter={minMaxChapter}
        chapterId={minMaxChapter?.id}
      >
        <p>
          Heaps come in two primary forms:{" "}
          <span className="font-bold">min heaps</span>, where the parent node is
          less than or equal to its children, and{" "}
          <span className="font-bold">max heaps</span>, where the parent node is
          greater than or equal to its children.{" "}
          <strong>Min heaps are for accessing the the smallest element</strong>,
          such as scheduling tasks based on their priority level where the
          lowest value indicates the highest priority.{" "}
          <strong>Max heaps are for accessing the largest element</strong>.
        </p>
        <ImageBlock
          src="/images/heaps/MinMaxHeaps.jpg"
          alt="A diagram showing the differences between min and max heaps"
        />
        <p>
          When you are{" "}
          <strong>
            maintaining a collection of the <CodeText>k</CodeText> elements
          </strong>
          , using heaps will help you keep track of the smallest or largest{" "}
          <CodeText>k</CodeText> elements.{" "}
          <strong>
            A min heap keeps track of the <CodeText>k</CodeText> largest
            elements
          </strong>{" "}
          by ensuring that the smallest of these <CodeText>k</CodeText> elements
          is always at the root.{" "}
          <strong>
            A max heap is used to maintain the
            <CodeText>k</CodeText> smallest elements
          </strong>
          :
        </p>
        <ImageBlock
          src="/images/heaps/KElements.jpg"
          alt="A diagram showing that min heaps keep track of the largest k elements, while max heaps keep track of the smallest k elements"
        />
        <p>
          <strong>In Python, heaps are implemented as a min heap</strong>. This
          is a problem when a max heap is required. To create a max heap in
          Python, a common workaround involves{" "}
          <strong>negating the values</strong> before adding them to the heap.
          By negating each value, the heap&apos;s property is inverted:{" "}
          <strong>
            the largest elements (when negative are now the smallest) bubble up
            to the root of the heap
          </strong>
          . When{" "}
          <strong>
            accessing these elements, their values are negated again
          </strong>{" "}
          to restore their original value.
        </p>
        <CodeBlock code={maxHeapCode} language="python" title="MaxHeap.py" />
      </ChapterHeading>

      <ChapterHeading
        id="implementation"
        title="Implementation"
        chapterId={implementationChapter?.id}
      >
        <p>
          Heaps efficiently organize data for priority-based access, with min
          heaps accessing the smallest element and max heaps the largest. Now
          let&apos;s implement a min heap using what we learned. Key operations
          include heapify, inserting elements, and extracting the highest (or
          lowest) priority item:
        </p>
        <CodeBlock code={heapCode} language="python" title="Heap.py" />
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
          Heaps should be your go-to data structure for keeping track of{" "}
          <CodeText>k</CodeText> smallest (or largest) elements, and supporting
          operations like finding the minimum or maximum element efficiently.
          Here are some tips and tricks for using heaps effectively in coding
          interviews:
        </p>
        <br />

        <ul className="ml-6">
          <li>
            <span className="font-bold">&bull; Min vs Max Heaps:</span> Know
            when to use a min heap or a max heap. Use a min heap when you need
            quick access to the smallest element, and a max heap for the
            largest. This decision impacts the heap&apos;s structure and the
            implementation of your solution.
          </li>
          <br />
          <li>
            <span className="font-bold">&bull; Heapify for Efficiency:</span>{" "}
            Whenever you&apos;re given an unsorted array that needs to be
            processed element by element according to their priority, start by
            converting it into a heap using the <CodeText>heapify</CodeText>{" "}
            operation. This is more efficient than inserting elements one by
            one.
          </li>
          <br />
          <li>
            <span className="font-bold">
              &bull; Efficiency of <CodeText>heappushpop</CodeText>:
            </span>{" "}
            Using <CodeText>heapq.heappushpop</CodeText> is more efficient than
            separate push and pop operations. It minimizes the number of
            reheapify steps needed by combining both actions into a single
            operation, ideal for maintaining a heap when adding a new element
            and immediately retrieving the smallest element.
          </li>
          <br />
          <li>
            <span className="font-bold">&bull; Keeping Track of Elements:</span>{" "}
            In problems involving the <CodeText>k</CodeText> largest or smallest
            elements, heaps can manage these subsets efficiently. For the{" "}
            <strong>
              <CodeText>k</CodeText> largest, use a min heap
            </strong>
            ; for the{" "}
            <strong>
              <CodeText>k</CodeText> smallest, use a max heap
            </strong>
            . This counterintuitive trick ensures optimal time complexity.
          </li>
          <br />
          <li>
            <span className="font-bold">&bull; Streams of Data:</span> Heaps are
            ideal for problems where data continuously changes, and you need to
            maintain a certain order or priority. Examples include real-time
            data processing, event scheduling, and running median calculations.
          </li>
          <br />
          <li>
            <span className="font-bold">
              &bull; Simulate Max Heap in Python:
            </span>{" "}
            Python&apos;s <CodeText>heapq</CodeText> library only provides a min
            heap. To simulate a max heap, negate the values when adding or
            removing from the heap. Remember to negate the value again when
            accessing it.
          </li>
          <br />
        </ul>
      </ChapterHeading>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Heaps",
  description: "",
};

export default HeapsPage;
