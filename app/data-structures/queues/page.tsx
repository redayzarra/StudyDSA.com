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
import { queueNodesCode } from "./queueCode";

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
          <TextLink href="/algorithms/bfs">BFS</TextLink>.
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
          <TextLink href="/data-structures/linked-lists#sentinels">
            dummy nodes
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
          Dynamic queues are a type of <span className="font-bold">queue that can grow and shrink</span>, such as{" "}
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
          queues are useful in scenarios where the size of the queue is known in advance and remains constant,
          leading to a straightforward and efficient solution for managing data
          in a FIFO (First In, First Out) manner.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="circular"
        title="Circular Queue"
        chapter={circularQueueChapter}
        chapterId={circularQueueChapter?.id}
      >
        <p>
          Circular queues are a variant of queues where the{" "}
          <span className="font-bold">
            last position is connected back to the first
          </span>
          , creating a circular structure. This design is efficient for space
          utilization, allowing the queue to wrap around and use vacant
          positions created after <CodeText>dequeue</CodeText> operations.
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
      </ChapterHeading>

      <ChapterHeading
        id="priority"
        title="Priority Queue"
        chapter={priorityQueueChapter}
        chapterId={priorityQueueChapter?.id}
      >
        <p>
          Priority queue is a type of data structure where each element has a
          priority assigned to it. Elements are <CodeText>dequeue</CodeText>{" "}
          according to their priority rather than their order in the queue. This
          structure is essential for tasks that need to be processed based on
          importance rather than the order of submission.
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
          Understanding and implementing queues efficiently requires a grasp of
          their underlying principles, such as choosing the appropriate type of
          queue for a given problem, managing memory effectively in dynamic
          queues, and leveraging circular queues to optimize space.
          Additionally, when using priority queues or deques, it's crucial to
          understand the specific use cases and performance implications.
        </p>
      </ChapterHeading>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Queues",
  description: "",
};

export default QueuePage;
