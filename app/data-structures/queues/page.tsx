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
import { queueOperations } from "@/data/operationsData";
import { Metadata } from "next";
import { circularQueueCode, dequeCode, queueNodesCode } from "./queueCode";

const QueuePage = async () => {
  const topic = await getTopicByName("Queues");

  // I will have to change this later
  if (!topic) {
    console.error("Topic not found");
    return <div>Topic not found</div>;
  }

  const definitionChapter = findChapter(topic, "Definition");
  const operationsChapter = findChapter(topic, "Operations");
  const queueNodesChapter = findChapter(topic, "Queue Nodes");
  const dynamicQueueChapter = findChapter(topic, "Dynamic Queues");
  const circularQueueChapter = findChapter(topic, "Circular Queues");
  const dequeChapter = findChapter(topic, "Deques");
  const priorityQueueChapter = findChapter(topic, "Priority Queues");
  const bestPracticesChapter = findChapter(topic, "Best Practices");

  const fetchAlgorithms = [
    "Two Pointers",
    "Sliding Window",
    "Recursion",
    "Backtracking",
    "Depth-First Search",
    "Breadth-First Search",
    "Dijkstra's Algo.",
    "Topological Sort",
  ];

  const queueAlgorithms = await getAlgorithmsByName(fetchAlgorithms);

  return (
    <div className="space-y-8">
      <Heading topic={topic!} />
      <ChapterHeading
        id="definitionQueue"
        title="Definition"
        chapterId={definitionChapter?.id}
      >
        <p>
          A queue is a linear data structure that follows a{" "}
          <span className="font-bold">First In, First Out (FIFO)</span>{" "}
          principle. It's like standing in line at a store; the first person in
          line is the first to be served. Queues are common in computing for
          managing tasks, data streams, and graph algorithms like{" "}
          <TextLink href="/algorithms/breadth-first-search">BFS</TextLink>.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="operationsQueue"
        title="Operations"
        chapterId={operationsChapter?.id}
      >
        <p>
          Queues support operations that allow them to be an efficient FIFO data
          structure. The primary operations include:{" "}
          <CodeText>enqueue</CodeText>, <CodeText>dequeue</CodeText>, and{" "}
          <CodeText>peek</CodeText>. Here is everything you can do with queues
          and their complexities:
        </p>
        <Operations items={queueOperations} />
      </ChapterHeading>

      <ChapterHeading
        id="nodes"
        title="Queue Nodes"
        chapter={queueNodesChapter}
        chapterId={queueNodesChapter?.id}
      >
        <p>
          Queues are best implemented by{" "}
          <TextLink href="/data-structures/linked-lists">linked lists</TextLink>
          . Linked lists provide constant time operations for insertion and
          deletion at the front and rear. In a linked list implementation of a
          queue, each node contains the data and a reference to the next node in
          the queue:
        </p>
        <CodeBlock
          code={queueNodesCode}
          language="python"
          title="QueueNodes.py"
        />
        <br />
        <p>
          The queue maintains two{" "}
          <TextLink href="/data-structures/linked-lists#pointers">
            pointers
          </TextLink>{" "}
          at the head (front) and tail (rear) of the queue for efficient{" "}
          <CodeText>enqueue</CodeText> and <CodeText>dequeue</CodeText>{" "}
          operations.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="dynamic"
        title="Dynamic Queues"
        chapter={dynamicQueueChapter}
        chapterId={dynamicQueueChapter?.id}
      >
        <p>
          Dynamic queues are a type of{" "}
          <span className="font-bold">queue that can grow and shrink</span>,
          such as{" "}
          <TextLink href="/data-structures/linked-lists">linked lists</TextLink>{" "}
          or{" "}
          <TextLink href="/data-structures/arrays#dynamicArrays">
            dynamic arrays
          </TextLink>
          . Since we are implementing our queue using a linked list, it
          classifies as a dynamic queue meaning it is{" "}
          <span className="font-bold">not stored contiguously in memory.</span>{" "}
          Dynamic queues provide significant advantages in terms of memory
          utilization and scalability, since we don't need to frequently
          reallocate memory.
        </p>
        <br />
        <p>
          In contrast,{" "}
          <span className="font-bold">
            fixed queues have a specified capacity
          </span>
          , setting a limit on the number of elements they can hold. Fixed
          queues are useful in scenarios where the size of the queue is known in
          advance and remains constant, leading to a straightforward and
          efficient solution for managing data in a FIFO (First In, First Out)
          manner.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="circular"
        title="Circular Queue"
        chapter={circularQueueChapter}
        chapterId={circularQueueChapter?.id}
      >
        <p>
          Circular queues are a variant of fixed queues where the{" "}
          <span className="font-bold">
            last position is connected back to the first
          </span>
          , creating a circular structure. This design is efficient for space
          utilization, allowing the queue to wrap around and use vacant
          positions created after <CodeText>dequeue</CodeText> operations:
        </p>
        <CodeBlock
          code={circularQueueCode}
          language="python"
          title="CircularQueues.py"
        />
        <p>
          <br />
          The implementation above is a circular queue using a linked list
          structure, where the queue has a fixed maximum capacity. The main
          components are two pointers (<CodeText>left</CodeText> for the head
          and <CodeText>right</CodeText> for the tail of the queue) and a{" "}
          <CodeText>size</CodeText> counter to track the number of elements in
          the queue.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="deque"
        title="Deque"
        chapter={dequeChapter}
        chapterId={dequeChapter?.id}
      >
        <p>
          Deques (<span className="font-bold">double-ended queues</span>) allow{" "}
          <span className="font-bold">
            insertion and removal of elements from both the front and the rear
          </span>
          . This flexibility makes deques a versatile data structure for various
          scenarios where elements need to be processed from both ends.
        </p>
        <CodeBlock code={dequeCode} language="python" title="Deques.py" />
        <p>
          <br />
          The flexibility and efficiency of deques for operations at both ends,
          is powered by an underlying{" "}
          <TextLink href="/data-structures/linked-lists#doubly">
            doubly linked list
          </TextLink>{" "}
          that allows bidirectional traversal and manipulation.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="priority"
        title="Priority Queue"
        chapter={priorityQueueChapter}
        chapterId={priorityQueueChapter?.id}
      >
        <p>
          Priority queue{" "}
          <span className="font-bold">is an abstract data type</span> where each
          element has a priority assigned to it. Elements are accessed according
          to their priority rather than their order in the data structure.
        </p>
        <br />
        <p>
          While it's possible to implement a priority queue using simple queues,
          they can often fall short in terms of efficiency, particularly for
          operations such as insertion and removal of elements based on
          priority. A{" "}
          <TextLink href="/data-structures/heaps">binary heap</TextLink>, on the
          other hand,{" "}
          <span className="font-bold">
            is the best data structure for this purpose
          </span>
          .
        </p>
        <br />
        <p>
          I am adding this section to simply clarify that: Priority queues are
          more a concept than actual queues. They are best implemented with
          heaps.
        </p>
      </ChapterHeading>

      <ChapterHeading id="algorithms" title="Algorithms">
        <Algorithms items={queueAlgorithms} />
      </ChapterHeading>

      <ChapterHeading
        id="bestPracticesQueue"
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
            designed for queues. Understand the fundamental operations such as {" "}
            <CodeText>enqueue</CodeText> (add), <CodeText>dequeue</CodeText> (remove), <CodeText>peek</CodeText> (view the front item without
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
            streams. Anytime you need to store data to access it again, in order, queues are your best friend.
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
  title: "Queues",
  description: "",
};

export default QueuePage;
