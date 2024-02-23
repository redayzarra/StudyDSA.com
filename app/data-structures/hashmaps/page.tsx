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
import { hashmapOperations, setOperations } from "@/data/operationsData";
import { Metadata } from "next";
import {
  chainingHashmap,
  chainingWithLinked,
  collisionsCode,
  deleteChainingCode,
  hashFunctionCode,
  insertChainingCode,
  openAddressingCode,
  openAddressingHashmap,
} from "./_components/hashmapCode";

const HashmapPage = async () => {
  const topic = await getTopicByName("Hashmaps");

  // I will have to change this later
  if (!topic) {
    console.error("Topic not found");
    return <div>Topic not found</div>;
  }

  const definitionChapter = findChapter(topic, "Definition");
  const operationsChapter = findChapter(topic, "Operations");
  const hashingChapter = findChapter(topic, "Hash Function");
  const chainingChapter = findChapter(topic, "Chaining");
  const openChapter = findChapter(topic, "Open Addressing");
  const implementationChapter = findChapter(topic, "Implementation");
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
          Hashmaps are powerful because of their efficiency. They use a{" "}
          <TextLink href="/data-structures/hashmaps#hashFunction">
            hash function
          </TextLink>{" "}
          for fast data searching and insertion. A good hash function spreads
          out the keys to prevent{" "}
          <TextLink href="/data-structures/hashmaps#collisions">
            collisions
          </TextLink>
          , a topic we'll delve into with more detail.
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
          <span className="font-bold">hash functions</span>, a special function
          that takes any input—regardless of its size—and produces a integer
          that we can use as an index. The output, known as a hash code,{" "}
          <span className="font-bold">
            determines where to store the input value in the hashmap{" "}
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
          <CodeText>key</CodeText> (like a name or a word) into an index that
          tells us where to store or find that key in our hashmap. It's
          important to{" "}
          <span className="font-bold">
            apply the modulo operator against the hashmap's size
          </span>{" "}
          to make sure the resulting index will fall inside our hashmap.
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
      </ChapterHeading>

      <ChapterHeading
        id="chaining"
        title="Chaining"
        chapter={chainingChapter}
        chapterId={chainingChapter?.id}
      >
        <p>
          When multiple keys hash to the same index in a hashmap, we face
          collisions. Chaining is a popular and effective strategy to resolve
          these collisions. It allows multiple elements to exist at the same
          location (or "chain") by{" "}
          <span className="font-bold">linking them together in a list</span> (or{" "}
          <TextLink href="/data-structures/linked-lists">linked list</TextLink>
          ).
          <br />
        </p>
        <p>
          <br />
          Imagine a coat check at a busy theater. If two patrons happen to have
          the same ticket number, the attendant might decide to hang the coats
          together on a single hook, one behind the other. Similarly, with
          chaining,{" "}
          <span className="font-bold">
            each index in the hashmap holds a list (or "chain")
          </span>{" "}
          of entries that all hash to that index. <br />
        </p>
        <CodeBlock
          code={insertChainingCode}
          language="python"
          title="insert_Chaining.py"
        />
        <p>
          <br />
          When we want to insert a new key-value pair, we simply add it to the
          list at the computed index (using the hash function). To retrieve or
          delete an item, we search through the list at that index to find the
          exact key we're looking for:
          <br />
        </p>
        <CodeBlock
          code={deleteChainingCode}
          language="python"
          title="delete_Chaining.py"
        />
        <p>
          <br />
          Chaining handles collisions by utilizing extra space, ensuring that
          the hashmap is efficient even as collisions occur. However, for
          chaining to be most effective, the{" "}
          <span className="font-bold">
            hash function should distribute keys as uniformly as possible
          </span>{" "}
          across the hashmap. This minimizes the length of chains and keeps
          operations efficient.
        </p>
        <p>
          <br />
          Let's implement a hashmap with chaining. Chaining allows us to store
          multiple entries at the same index by linking them together:
          <br />
        </p>
        <CodeBlock
          code={chainingHashmap}
          language="python"
          title="Chaining_Hashmap.py"
        />
        <p>
          <br />
          The <CodeText>ChainingHashMap</CodeText> class is initialized with a
          predefined size, defaulting to 10, creating an internal table as a
          list of empty lists. Each list represents a "bucket" where key-value
          pairs are stored, allowing multiple values to be stored at the same
          index, or "chaining."
          <br />
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="openAddressing"
        title="Open Addressing"
        chapter={openChapter}
        chapterId={openChapter?.id}
      >
        <p>
          Open addressing handles collisions in a hashmap by{" "}
          <span className="font-bold">
            finding alternative spots within the hashmap
          </span>{" "}
          for placing the new key-value pair. Unlike chaining, where collisions
          are resolved by adding elements to a list at the index,{" "}
          <span className="font-bold">
            open addressing maintains only one element at each index
          </span>
          . If a collision occurs, the hashmap looks for the next available
          slot.
          <br />
        </p>
        <CodeBlock
          code={openAddressingCode}
          language="python"
          title="OpenAddressing.py"
        />
        <p>
          <br />
          There are several ways open addressing looks for indices: linear
          probing, where the table is searched sequentially; quadratic probing,
          which uses a quadratic function to find the next slot; and double
          hashing, where a second hash function determines the step size for the
          search.
          <br />
        </p>
        <p>
          <br />
          Now let's implement a hashmap with open addressing. Open addressing
          simply finds the next available spot for a value to be stored:
          <br />
        </p>
        <CodeBlock
          code={openAddressingHashmap}
          language="python"
          title="OpenAddressing_Hashmap.py"
        />
        <p>
          <br />
          The <CodeText>find_slot</CodeText> method is crucial for the open
          addressing implementation. It begins at the index determined by the
          hash function and searches linearly (wrapping around to the beginning
          of the array if necessary) until it finds an empty slot or the slot
          where the key already exists. If it loops back to the starting index
          without finding an empty slot, it raises an exception, indicating the
          hashmap is full.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="implementation"
        title="Implementation"
        chapter={implementationChapter}
        chapterId={implementationChapter?.id}
      >
        <p>
          To implement hashmaps, you need a solid understanding of collisions
          and different resolution strategies. The two primary strategies,
          chaining and open addressing, offer unique approaches to managing
          collisions.
          <br />
        </p>
        <p>
          <br />
          My favorite way of implementing hashmaps is chaining with{" "}
          <TextLink href="/data-structures/linked-lists">linked lists</TextLink>
          . Let's go over the code and then I'll explain why linked lists
          significantly improve efficiency and performance:
        </p>
        <CodeBlock
          code={chainingWithLinked}
          language="python"
          title="Hashmap.py"
        />
        <p>
          <br />
          Implementing hashmaps with{" "}
          <span className="font-bold">
            chaining and linked lists significantly enhances efficiency
          </span>
          . Linked lists allow for dynamic space allocation, avoiding costly
          resizing operations (see{" "}
          <TextLink href="/data-structures/arrays#amortizedTime">
            amortized time
          </TextLink>
          ).
          <br />
        </p>
        <p>
          <br />
          They simplify collision resolution by appending new nodes to existing
          chains, ensuring <CodeText>insert</CodeText> and{" "}
          <CodeText>get</CodeText> remain efficient. The{" "}
          <CodeText>delete</CodeText> function is straightforward, we cut off
          unwanted nodes without creating gaps. This approach is scalability and
          efficient, making it a good solution for handling collisions in
          hashmaps.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="sets"
        title="Sets"
        chapter={setsChapter}
        chapterId={setsChapter?.id}
      >
        <p>
          Sets, or hash sets, are a data structure that uses hashing to store
          unique elements efficiently. Unlike hash maps, which store key-value
          pairs,{" "}
          <span className="font-bold">
            sets store individual values, ensuring no duplicates
          </span>
          .<br />
        </p>
        <p>
          <br />
          They offer fast operations for insertion, deletion, and membership
          checks, making them ideal for various applications where duplicate
          entries are not allowed and quick access is required:
        </p>
        <Operations items={setOperations} />
      </ChapterHeading>

      <ChapterHeading id="algorithms" title="Algorithms">
        <Algorithms items={hashmapAlgorithms} />
      </ChapterHeading>

      <ChapterHeading
        id="bestPractices"
        title="Best Practices"
        chapterId={bestPracticesChapter?.id}
      ></ChapterHeading>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Hashmaps",
  description: "",
};

export default HashmapPage;
