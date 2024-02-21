import getAlgorithmsByName from "@/actions/algorithms/getAlgorithmsByName";
import findChapter from "@/actions/chapters/findChapter";
import getTopicByName from "@/actions/topics/getTopicByName";
import ChapterHeading from "@/components/ChapterHeading";
import Heading from "@/components/Heading";
import Operations from "@/components/Operations";
import {
  hashmapOperations
} from "@/data/operationsData";
import { Metadata } from "next";

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

  const arrayAlgorithms = await getAlgorithmsByName(fetchAlgorithms);

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
    </div>
  );
};

export const metadata: Metadata = {
  title: 'Hashmaps',
  description: ""
};

export default HashmapPage;
