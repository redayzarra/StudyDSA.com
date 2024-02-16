import getAlgorithmsByName from "@/actions/algorithms/getAlgorithmsByName";
import getTopicByName from "@/actions/topics/getTopicByName";
import Algorithms from "@/components/Algorithms";
import ChapterHeading from "@/components/ChapterHeading";
import CodeBlock from "@/components/CodeBlock";
import Heading from "@/components/Heading";
import Operations from "@/components/Operations";
import { arrayOperations } from "@/data/operationsData";
import {
  amortizedTimeCode,
  pointerCodeC,
  pointerCodePy,
  staticArrayCode,
} from "./_components/arrayCode";
import { CodeText } from "@/components/CodeText";

const ArraysPage = async () => {
  const topic = await getTopicByName("Arrays");

  // I will have to change this later
  if (!topic) {
    console.error("Topic not found");
    return <div>Topic not found</div>;
  }

  // const definitionChapter = findChapter(topic, "Definition");

  const fetchAlgorithms = [
    "Two Pointers",
    "Sliding Window",
    "Binary Search",
    "Prefix Sums",
    "Recursion",
    "Sorting",
    "Backtracking",
    "1D Dynamic Pro.",
    "Kadane's Algo.",
  ];

  const arrayAlgorithms = await getAlgorithmsByName(fetchAlgorithms);

  return (
    <div className="space-y-8">
      <Heading topic={topic!} />
      <ChapterHeading id="#definition" title="Definition">
        <p>
          Arrays are a collection of items that are{" "}
          <span className="font-bold">stored contiguously (together)</span> in
          memory and can be accessed with addresses. These items are of the same
          type, and the{" "}
          <span className="font-bold">size of the array is fixed</span> upon
          creation.
        </p>
      </ChapterHeading>
      <ChapterHeading id="#operations" title="Operations">
        <p>
          Let's take a closer look at what you can do with arrays. Arrays are
          stored in memory together so inserting or deleting in the middle
          involves moving things around. The following table provides a detailed
          overview of{" "}
          <span className="font-bold">everything you can do with arrays:</span>
        </p>
      </ChapterHeading>
      <Operations items={arrayOperations} />

      <ChapterHeading id="#pointers" title="Pointers">
        <p>
          Pointers are{" "}
          <span className="font-bold">
            variables that store the memory address
          </span>{" "}
          of another variable. In the context of arrays, pointers are crucial
          because they can be used to directly access and manipulate array
          elements. Let's take a look at pointers in a language that supports
          them explicitly like C:
          <br />
        </p>
        <CodeBlock code={pointerCodeC} language="c" title="Pointers.c" />
        <p>
          <br />
          This direct access via pointers is what makes arrays efficient,
          especially when it comes to iterating over elements or implementing
          data structures like stacks and queues. Let's take a look at a more
          complex example of pointers in Python:
          <br />
        </p>
        <CodeBlock code={pointerCodePy} language="python" title="Pointers.py" />
        <p>
          <br />
          The code above defines a function <CodeText>reverse</CodeText> that
          takes an array of integers and reverses its elements in place, meaning
          the original array is modified without needing extra space for another
          array. It starts with two indexes, <CodeText>left</CodeText> at the
          beginning of the array and <CodeText>right</CodeText> at the end. The
          pointers meet in the middle to swap the elements, which reverses the
          input.
          <br />
          <br />
          By using indexes to directly access and modify array elements, this
          approach mimics pointer manipulation in lower-level languages.
          Pointers are going to be a crucial concept for you to understand, I
          suggest playing with the code above on your own.
        </p>
      </ChapterHeading>

      <ChapterHeading id="#staticArrays" title="Static Arrays">
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
          behavior. You don't need to worry about this in Python, but the
          concepts of static arrays are still imporant to know.
        </p>
      </ChapterHeading>

      <ChapterHeading id="#amortizedTime" title="Amortized Time">
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

      <ChapterHeading id="#dynamicArrays" title="Dynamic Arrays">
        <p>
          Unlike static arrays,{" "}
          <span className="font-bold">
            dynamic arrays can grow and shrink in size
          </span>{" "}
          at runtime. This flexibility comes at the cost of overhead for keeping
          track of the array's size and potentially reallocating and copying the
          entire array to a new memory space when resizing.
          <br />
          <br />
          Dynamic arrays are implemented in many programming languages as
          built-in types, such as lists in Python or ArrayLists in Java,
          providing a versatile tool for managing collections of elements.
        </p>
      </ChapterHeading>

      <ChapterHeading id="#stacks" title="Stacks">
        <p>
          Stacks are a type of data structure that operates on the{" "}
          <span className="font-bold">Last In, First Out (LIFO)</span>{" "}
          principle. Although not a type of array, stacks can be efficiently
          implemented using arrays, taking advantage of the array's direct
          access to <span className="font-bold">add (push)</span> or{" "}
          <span className="font-bold">remove (pop)</span> elements from the end.
          <br />
          <br />
          Stacks are fundamental in various computing tasks, including function
          call management in programming languages. For coding interviews, use
          them whenever you have elements that depend on the elements that came
          before it.
        </p>
      </ChapterHeading>

      <ChapterHeading id="#algorithms" title="Algorithms">
        <Algorithms items={arrayAlgorithms} />
      </ChapterHeading>

      <ChapterHeading
        id="#bestPractices"
        title="Best Practices"
      ></ChapterHeading>
    </div>
  );
};

export default ArraysPage;
