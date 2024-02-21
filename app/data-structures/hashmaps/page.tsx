import getAlgorithmsByName from "@/actions/algorithms/getAlgorithmsByName";
import findChapter from "@/actions/chapters/findChapter";
import getTopicByName from "@/actions/topics/getTopicByName";
import ChapterHeading from "@/components/ChapterHeading";
import CodeBlock from "@/components/CodeBlock";
import Heading from "@/components/Heading";
import Operations from "@/components/Operations";
import { hashmapOperations } from "@/data/operationsData";
import { Metadata } from "next";
import { collisionsCode, hashFunctionCode } from "./_components/hashmapCode";
import { CodeText } from "@/components/CodeText";

const HashmapPage = async () => {
  const topic = await getTopicByName("Hashmaps");

  // I will have to change this later
  if (!topic) {
    console.error("Topic not found");
    return <div>Topic not found</div>;
  }

  const definitionChapter = findChapter(topic, "Definition");
  const operationsChapter = findChapter(topic, "Operations");
  const implementationChapter = findChapter(topic, "Implementation");
  const hashingChapter = findChapter(topic, "Hash Function");
  const chainingChapter = findChapter(topic, "Chaining");
  const openChapter = findChapter(topic, "Open Addressing");
  const setsChapter = findChapter(topic, "Sets");
  const bestPracticesChapter = findChapter(topic, "Best Practices");

  const fetchAlgorithms = [
    "Two Pointers",
    "Sliding Window",
    "Recursion",
    "1D Dynamic Pro.",
  ];

  const hashmapAlgorithms = await getAlgorithmsByName(fetchAlgorithms);

  return (
    <div className="space-y-8">
      <Heading topic={topic!} />
      <ChapterHeading
        id="definition"
        title="Definition"
        chapterId={definitionChapter?.id}
      >
        <p>
          A hashmap, or a hash table, is a data structure that{" "}
          <span className="font-bold">stores data in key-value pairs</span>.
          Just as you search for a word in a language dictionary to find its
          definition, in a hashmap, you use a{" "}
          <span className="font-bold">
            unique key to both store and retrieve data
          </span>
          . Each piece of data is paired with a unique key, forming a key-value
          pair.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="operations"
        title="Operations"
        chapterId={operationsChapter?.id}
      >
        <p>
          Hashmaps are powerful because of their efficiency. They use a hash
          function for fast data searching and insertion. A good hash function
          spreads out the keys to prevent "collisions," a topic we'll delve into
          with more detail.
          <br />
        </p>
        <p>
          <br />
          It's also important to note that{" "}
          <span className="font-bold">hashmaps are unordered</span>, which means
          they are not suitable for problems requiring sorted data. The
          following table provides a detailed overview of{" "}
          <span className="font-bold">
            everything you can do with hashmaps:
          </span>
        </p>
        <Operations items={hashmapOperations} />
      </ChapterHeading>

      <ChapterHeading
        id="hashFunction"
        title="Hash Function"
        chapter={hashingChapter}
        chapterId={hashingChapter?.id}
      >
        <p>
          Hashmaps are powered by{" "}
          <span className="font-bold">hash function</span>, a special function
          that takes any input—regardless of its size—and produces a fixed-size
          string of bytes. The output, known as a{" "}
          <span className="font-bold">
            hash code, determines where to store the input value in the hashmap{" "}
          </span>
          .
          <br />
        </p>
        <p>
          <br />
          This process allows hashmaps to achieve incredibly fast data retrieval
          and insertion, as it can directly access the storage location without
          needing to search through all the data.
          <br />
        </p>
        <CodeBlock
          code={hashFunctionCode}
          language="python"
          title="HashFunction.py"
        />
        <p>
          <br />
          The hash function I've shown is a basic example of how to turn the{" "}
          <CodeText>key</CodeText> (like a name or a word) into a number{" "}
          <CodeText>hash_val</CodeText> that tells us where to store or find
          that string in our hashmap.
          <br />
        </p>
        <p>
          <br />A good hash function is crucial for{" "}
          <span className="font-bold">
            spreading out keys evenly across the hashmap
          </span>
          . This even distribution helps minimize the chances of{" "}
          <span className="font-bold">"collisions"</span>—occurrences where{" "}
          <span className="font-bold">
            different keys produce the same output hash value
          </span>
          .
          <br />
        </p>
      </ChapterHeading>

      <ChapterHeading id="collisions" title="Collisions">
        <p>
          Collisions occur when two{" "}
          <span className="font-bold">
            different keys are hashed to the same index
          </span>
          . Imagine two people mistakenly assigned the same seat in a movie
          theater; similarly, when two pieces of data are directed to the same
          spot in a hashmap, we need a way to accommodate both without losing
          any information.
          <br />
        </p>
        <CodeBlock
          code={collisionsCode}
          language="python"
          title="Collisions.py"
        />
        <p>
          <br />
          To address collisions, hashmaps use solutions like{" "}
          <span className="font-bold">chaining or open addressing</span>,
          ensuring that even when collisions occur, the data remains accessible
          and secure. Let's delve into both solutions in more detail.
        </p>
        <br />
      </ChapterHeading>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Hashmaps",
  description: "",
};

export default HashmapPage;
