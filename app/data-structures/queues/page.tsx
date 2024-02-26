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
  queueOperations,
} from "@/data/operationsData";
import { Metadata } from "next";
import {
  doublyLinkedList,
  doublyNodeCode,
  dummyNodesCode,
  linkedPointersCode,
  singleNodeCode,
  singlyLinkedList,
} from "../linked-lists/linkedListsCode";

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
          In a linked list implementation of a queue, each node contains the
          data and a reference to the next node in the queue. The queue
          maintains pointers to both the head (front) and tail (rear) of the
          queue to facilitate efficient <CodeText>enqueue</CodeText> and{" "}
          <CodeText>dequeue</CodeText> operations.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="dynamic"
        title="Dynamic Queues"
        chapter={dynamicQueueChapter}
        chapterId={dynamicQueueChapter?.id}
      >
        <p>
          Dynamic queues are implemented with structures that can grow and
          shrink, such as linked lists or resizable arrays. This flexibility
          allows the queue to adapt to runtime demands, accommodating varying
          amounts of data without a fixed size constraint.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="circular"
        title="Circular Queue"
        chapter={circularQueueChapter}
        chapterId={circularQueueChapter?.id}
      >
        <p>
          Circular queues are a variant of queue where the last position is
          connected back to the first, creating a circular structure. This
          design is efficient for space utilization, allowing the queue to wrap
          around and use vacant positions created after{" "}
          <CodeText>dequeue</CodeText> operations.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="deque"
        title="Deque"
        chapter={dequeChapter}
        chapterId={dequeChapter?.id}
      >
        <p>
          Deques (double-ended queues) allow insertion and removal of elements
          from both the front and the rear. This flexibility makes deques a
          versatile data structure for various scenarios where elements need to
          be processed from both ends.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="priority"
        title="Priority Queue"
        chapterId={priorityQueueChapter?.id}
      >
        <p>
          Priority queues are a special type of queue where each element has a
          priority assigned to it. Elements are dequeued according to their
          priority rather than their order in the queue. This structure is
          essential for tasks that need to be processed based on importance
          rather than the order of submission.
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
