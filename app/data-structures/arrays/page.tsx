import getAlgorithmsById from "@/actions/algorithms/getAlgorithmsById";
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
import { arrayOperations, stackOperations } from "@/data/operationsData";
import { Metadata } from "next";
import {
  amortizedTimeCode,
  pointerCodeC,
  pointerCodePy,
  stackCode,
  staticArrayCode,
} from "./arrayCode";
import getUserId from "@/hooks/server/getUserId";

const ArraysPage = async () => {
  // Fetch the user (if there is one) and the current topic
  const userId = await getUserId();
  const topic = await getTopicById(1);

  // I will have to change this later
  if (!topic) {
    console.error("Topic not found");
    return <div>Topic not found</div>;
  }

  // Uses a simple hashmap so that's fine
  const definitionChapter = findChapter(topic, "Definition");
  const operationsChapter = findChapter(topic, "Operations");
  const pointersChapter = findChapter(topic, "Pointers");
  const staticChapter = findChapter(topic, "Static Arrays");
  const dynamicChapter = findChapter(topic, "Dynamic Arrays");
  const stacksChapter = findChapter(topic, "Stacks");
  const amortizedChapter = findChapter(topic, "Amortized Time");
  const bestPracticesChapter = findChapter(topic, "Best Practices");

  const fetchAlgorithms = [1, 3, 4, 5, 6, 7, 8, 9, 11];

  const arrayAlgorithms = await getAlgorithmsById(fetchAlgorithms);

  return (
    <div className="space-y-8">
      <Heading topic={topic!} />
      <ChapterHeading
        id="definition"
        title="Definition"
        userId={userId}
        chapterId={definitionChapter?.id}
      >
        <p>
          Arrays are a collection of items that are{" "}
          <span className="font-bold">stored contiguously (together)</span> in
          memory and can be accessed with addresses. These items are of the same
          type, and the{" "}
          <span className="font-bold">size of the array is fixed</span> upon
          creation.
        </p>
      </ChapterHeading>
      <ChapterHeading
        id="operations"
        title="Operations"
        userId={userId}
        chapterId={operationsChapter?.id}
      >
        <p>
          Let&apos;s take a closer look at what you can do with arrays. Arrays
          are stored in memory together so inserting or deleting in the middle
          involves moving things around. The following table provides a detailed
          overview of <strong>everything you can do with arrays:</strong>
        </p>
        <Operations items={arrayOperations} />
      </ChapterHeading>

      <ChapterHeading
        id="pointers"
        title="Pointers"
        userId={userId}
        chapter={pointersChapter}
        chapterId={pointersChapter?.id}
      >
        <p>
          Pointers are{" "}
          <span className="font-bold">
            variables that store the memory address
          </span>{" "}
          of another variable. In the context of arrays, pointers are crucial
          because they can be used to directly access and manipulate array
          elements. Let&apos;s take a look at pointers in a language that
          supports them explicitly like C:
          <br />
        </p>
        <CodeBlock code={pointerCodeC} language="c" title="Pointers.c" />
        <p>
          <br />
          This direct access via pointers is what makes arrays efficient,
          especially when it comes to iterating over elements or implementing
          data structures like stacks and queues. Let&apos;s take a look at a
          more complex example of pointers in Python:
          <br />
        </p>
        <CodeBlock code={pointerCodePy} language="python" title="Pointers.py" />
        <ImageBlock
          src="/images/arrays/ArrayPointers.gif"
          alt="Animation of two pointers being used to reverse the elements of an array"
        />
        <p>
          The code above defines a function <CodeText>reverse</CodeText> that
          takes an array of integers and reverses its elements in place, meaning
          the original array is modified without needing extra space for another
          array. It starts with two indexes, <CodeText>left</CodeText> at the
          beginning of the array and <CodeText>right</CodeText> at the end. The
          pointers meet in the middle to swap the elements, which reverses the
          input.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="staticArrays"
        title="Static Arrays"
        userId={userId}
        chapter={staticChapter}
        chapterId={staticChapter?.id}
      >
        <p>
          Static arrays have a fixed size, which is determined at compile time.
          This means the{" "}
          <span className="font-bold">
            amount of memory they occupy is constant
          </span>{" "}
          and known, making them very fast for operations like access. Python
          does not have built-in static arrays which is why I am demonstrating
          static arrays using C:
          <br />
        </p>
        <CodeBlock code={staticArrayCode} language="c" title="StaticArray.c" />
        <p>
          <br />
          However, the fixed size also means that{" "}
          <span className="font-bold">
            once an array is full, you cannot add more elements
          </span>{" "}
          to it, and attempting to do so will result in an error or undefined
          behavior. You don&apos;t need to worry about this in Python, but the
          concepts of static arrays are still imporant to know.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="amortizedTime"
        title="Amortized Time"
        userId={userId}
        chapter={amortizedChapter}
        chapterId={amortizedChapter?.id}
      >
        <p>
          Amortized time analysis gives us an{" "}
          <span className="font-bold">average running time per operation</span>{" "}
          across multiple operations. Although arrays are initialized with a
          fixed size, they may need to be resized—
          <span className="font-bold">typically doubled in size</span>—when
          additional space is required. This resizing involves copying all
          elements to a new, larger array.
          <br />
        </p>

        <CodeBlock code={amortizedTimeCode} title="Amortized_Time.py" />
        <p>
          <br />
          While resizing the array can be costly, amortized analysis reveals
          that the average cost of these operations, including resizings,
          remains low. The simulation above shows that even though some
          operations might be costly, spreading out these costs over many
          appends keeps the process efficient.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="dynamicArrays"
        title="Dynamic Arrays"
        userId={userId}
        chapter={dynamicChapter}
        chapterId={dynamicChapter?.id}
      >
        <p>
          Unlike static arrays,{" "}
          <span className="font-bold">
            dynamic arrays can grow and shrink in size
          </span>{" "}
          at runtime. This flexibility comes at the cost of overhead for keeping
          track of the array&apos;s size and potentially reallocating and
          copying the entire array to a new memory space when resizing.
        </p>
        <br />
        <p>
          Dynamic arrays are implemented in many programming languages as
          built-in types, such as <CodeText>List</CodeText> in Python or{" "}
          <CodeText>ArrayList</CodeText> in Java. It&apos;s important to
          understand the array functions and methods available in your preferred
          programming language.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="stacks"
        title="Stacks"
        chapter={stacksChapter}
        userId={userId}
        chapterId={stacksChapter?.id}
      >
        <p>
          Stacks are a type of data structure that operates on the{" "}
          <span className="font-bold">Last In, First Out (LIFO)</span>{" "}
          principle. Although not a type of array, stacks can be efficiently
          implemented using arrays, taking advantage of the array&apos;s direct
          access to <span className="font-bold">add (push)</span> or{" "}
          <span className="font-bold">remove (pop)</span> elements from the end.
          Given that stacks are implemented using arrays, all supported stack
          operations can be executed in constant time:
          <br />
        </p>
        <Operations items={stackOperations} />
        <p>
          Here&apos;s how to implement stacks in Python, using dynamic arrays
          (lists) to efficiently manage stack operations. For coding interviews,
          use stacks whenever you have elements that depend on the elements that
          came before it.
        </p>
        <CodeBlock code={stackCode} title="Stacks.py" />
        <ImageBlock
          src="/images/arrays/Stacks.gif"
          alt="Animation of stacks and the operations that they support"
        />
      </ChapterHeading>

      <ChapterHeading id="algorithms" title="Algorithms" userId={userId}>
        <Algorithms items={arrayAlgorithms} />
      </ChapterHeading>

      <ChapterHeading
        id="bestPractices"
        title="Best Practices"
        userId={userId}
        chapterId={bestPracticesChapter?.id}
      >
        <p>
          Mastering arrays and stacks is crucial for coding interviews. Here are
          some tips that I learned for using these data structures effectively:
        </p>
        <br />

        <ul className="ml-6">
          <li>
            <span className="font-bold">&bull; Identifying Patterns:</span>{" "}
            Arrays are commonly used in sorting, searching, and iterating over
            data. Arrays are also the most common data structures for storing
            the final result of a problem. For this reason, you need to be
            comfortable with all the common functions and methods for arrays in
            your preferred language.
          </li>
          <br />
          <li>
            <span className="font-bold">&bull; Space-Time Trade-offs:</span>{" "}
            Understand when it&apos;s beneficial to use additional space (like
            creating{" "}
            <TextLink href="/data-structures/hashmaps">hashmaps</TextLink> from
            arrays) to improve time efficiency. This strategy is useful in
            problems involving frequency counting or mapping relationships
            between elements.
          </li>
          <br />
          <li>
            <span className="font-bold">
              &bull; When Elements Depend On Each Other:
            </span>{" "}
            Stacks are ideal for managing matching brackets or parentheses in
            syntax validation problems. This is becuase the current element
            depends on the elements that came before it, a perfect use case for
            using stacks.
          </li>
          <br />
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
          </li>
          <br />
        </ul>
      </ChapterHeading>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Arrays",
  description: "",
};

export default ArraysPage;
