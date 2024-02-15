import findChapter from "@/actions/chapters/findChapter";
import getTopicByName from "@/actions/topics/getTopicByName";
import ChapterHeading from "@/components/ChapterHeading";
import Heading from "@/components/Heading";
import Operations from "@/components/Operations";
import { arrayOperations } from "@/data/operationsData";

const ArraysPage = async () => {
  const topic = await getTopicByName("Arrays");

  // I will have to change this later
  if (!topic) {
    console.error("Topic not found");
    return <div>Topic not found</div>;
  }

  const definitionChapter = findChapter(topic, "Definition");

  return (
    <div className="space-y-8">
      <Heading topic={topic!} />
      <ChapterHeading id="#definition" title="Definition">
        <p>
          Arrays are a collection of items that are{" "}
          <span className="font-bold">
            stored contiguously (stored together)
          </span>{" "}
          in memory and can be accessed with addresses. These items are of the
          same type, and the{" "}
          <span className="font-bold">size of the array is fixed</span> upon
          creation.
        </p>
      </ChapterHeading>
      <ChapterHeading id="#operations" title="Operations">
        <p>
          Let's take a closer look at what you can do with arrays. Arrays are
          stored in memory together so inserting or deleting in the middle
          involves moving things around. The following table provides a detailed
          overview of everything you can do with arrays:
        </p>
      </ChapterHeading>
      <Operations items={arrayOperations}></Operations>
      <ChapterHeading id="#pointers" title="Pointers">
        <p>
          Pointers are variables that store the memory address of another
          variable. In the context of arrays, pointers are crucial because they
          can be used to directly access and manipulate array elements.
          <br />
          <br />
          This direct access via pointers is what makes arrays efficient,
          especially when it comes to iterating over elements or implementing
          data structures like stacks and queues.
        </p>
      </ChapterHeading>

      <ChapterHeading id="#staticArrays" title="Static Arrays">
        <p>
          Static arrays have a fixed size, which is determined at compile time.
          This means the{" "}
          <span className="font-bold">
            amount of memory they occupy is constant
          </span>{" "}
          and known, making them very fast for operations like access.
          <br />
          <br />
          However, the fixed size also means that once an array is full, you
          cannot add more elements to it, and attempting to do so will result in
          an error or undefined behavior.
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
    </div>
  );
};

export default ArraysPage;
