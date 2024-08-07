import getAlgorithmsByName from "@/actions/algorithms/getAlgorithmsById";
import getTopicById from "@/actions/topics/getTopicById";
import Algorithms from "@/components/Algorithms";
import ChapterHeading from "@/components/ChapterHeading";
import CodeBlock from "@/components/CodeBlock";
import { CodeText } from "@/components/CodeText";
import Heading from "@/components/Heading";
import ImageBlock from "@/components/ImageBlock";
import Operations from "@/components/Operations";
import TextLink from "@/components/TextLink";
import { trieOperations } from "@/data/operationsData";
import { Metadata } from "next";
import {
  insertionCode,
  prefixCode,
  searchingCode,
  trieCode,
  trieNodeCode,
} from "./triesCode";

const TriesPage = async () => {
  const topic = await getTopicById(8);

  // I will have to change this later
  if (!topic) {
    console.error("Topic not found");
    return <div>Topic not found</div>;
  }

  // Fetch the algorithms for the graphs page
  const fetchAlgorithms = [6, 8, 13, 14];
  const graphAlgorithms = await getAlgorithmsByName(fetchAlgorithms);

  // Define the href we will use for this page
  const href = "/data-structures/tries";

  return (
    <div className="space-y-8">
      <Heading topic={topic!} />
      <ChapterHeading id="definition" title="Definition" href={href}>
        <p>
          Tries, also known as <strong>prefix trees</strong>, are a tree-like
          data structure that allow for efficient lookup times for strings. They{" "}
          <strong>manage strings</strong> by storing them{" "}
          <strong>character-by-character</strong>.
        </p>
      </ChapterHeading>

      <ChapterHeading id="operations" title="Operations" href={href}>
        <p>
          Trie operations include insertion, search, and deletion of words.
          These operations allow tries to efficiently manage words or other
          character sequences, supporting quick lookups, and prefix searches:
        </p>
        <Operations items={trieOperations} />
        <p>
          Tries are used to <strong>store strings or words</strong>, the symbol{" "}
          <CodeText>Σ</CodeText> (Sigma){" "}
          <strong>represents the size of the alphabet being used</strong>.
          Essentially, it tells us how many different characters can appear in
          the strings that the Trie is capable of storing.
        </p>
      </ChapterHeading>

      <ChapterHeading id="nodes" title="Trie Nodes" href={href}>
        <p>
          Each node in a trie{" "}
          <strong>represents a single character from a string</strong> and has
          references to child nodes for consecutive characters (stored in a{" "}
          <TextLink href="/data-structures/hashmaps">hashmap</TextLink>). A trie
          node also <strong>has a flag to indicate the end of a word</strong>.
          This structure saves space and speeds up searches:
        </p>
        <CodeBlock code={trieNodeCode} language="python" title="TrieNodes.py" />
      </ChapterHeading>

      <ChapterHeading id="insertion" title="Inserting in Tries" href={href}>
        <p>
          Inserting a word into a trie means creating a new path of nodes for
          each character in the word, if that path does not already exist.{" "}
          <strong>Starting from the root</strong>, for each character,{" "}
          <strong>move to the next child node</strong> or create a new child
          node if one doesn&apos;t exist, then{" "}
          <strong>mark the final node as the end of a word</strong>.
        </p>
        <ImageBlock
          src="/images/tries/TrieInsertion.jpg"
          alt="Inserting into tries by going down the trie and adding nodes to build the word"
        />
        <CodeBlock
          code={insertionCode}
          language="python"
          title="Insertion.py"
        />
      </ChapterHeading>

      <ChapterHeading id="searching" title="Searching in Tries" href={href}>
        <p>
          Searching for a word in a trie{" "}
          <strong>checks each character of the word against the nodes</strong>,
          starting from the root. If at any point the child node does not exist,
          or if the end of the word is reached without matching the end flag in
          the node, the search returns false; otherwise, it returns true:
        </p>
        <ImageBlock
          src="/images/tries/TrieSearch.jpg"
          alt="Searching words in Tries by going down the child nodes and seeing if we land on node marked as end"
        />
        <CodeBlock
          code={searchingCode}
          language="python"
          title="Searching.py"
        />
      </ChapterHeading>

      <ChapterHeading id="prefixSearch" title="Prefix Search" href={href}>
        <p>
          Finding prefixes in a trie is similar to searching for a whole word
          but we stop at the end of the prefix. If we{" "}
          <strong>
            can follow the characters of the prefix to a node successfully, then
            the prefix exists
          </strong>{" "}
          in the trie:
        </p>
        <ImageBlock
          src="/images/tries/TriePrefix.jpg"
          alt="Searching prefixes by traversing down the children nodes until we reach the end of the prefix"
        />
        <CodeBlock code={prefixCode} language="python" title="FindPrefix.py" />
      </ChapterHeading>

      <ChapterHeading
        id="implementation"
        title="Trie Implementation"
        href={href}
      >
        <p>
          Implementing a trie involves{" "}
          <strong>defining a trie node class with a children map</strong> (to
          store references to child nodes) and a{" "}
          <strong>boolean flag to mark the end of a word</strong>. The trie
          itself is represented by the root node, where all words are accessible
          by <strong>traversing down child nodes</strong> corresponding to each
          character in the word.
        </p>
        <CodeBlock code={trieCode} language="python" title="Tries.py" />
      </ChapterHeading>

      <ChapterHeading
        id="bestPractices"
        title="Best Practices for Tries"
        href={href}
      >
        <p>
          Tries efficiently store and search words or sequences of strings. They
          are useful for tasks involving prefixes, such as autocomplete systems
          or spell checkers. To get the most out of tries in coding interviews,
          here are some essential tips and tricks:
        </p>
        <br />
        <ul className="ml-6">
          <li>
            <span className="font-bold">&bull; Use Hash Maps:</span> When
            dealing with a large alphabet, use hash maps to store children nodes
            instead of fixed-size arrays. This improves space efficiency and
            flexibility, allowing the trie to handle any range of characters.
          </li>
          <br />
          <li>
            <span className="font-bold">
              &bull; Iterative vs. Recursive Implementations:
            </span>{" "}
            Be comfortable with both iterative and recursive implementations of
            trie operations. Recursive approaches are often more intuitive but
            can be inefficient with very deep tries. Iterative implementations,
            while sometimes more complex, can be more efficient.
          </li>
          <br />
          <li>
            <span className="font-bold">
              &bull; Handling Deletions Carefully:
            </span>{" "}
            Implement deletion operations carefully to ensure the trie remains
            consistent. After removing a word, check whether the parent nodes
            have become unnecessary (i.e., they no longer have any children and
            are not end of any word) and remove them as well.
          </li>
          <br />
        </ul>
      </ChapterHeading>

      <ChapterHeading id="algorithms" title="Algorithms" hideBookmark>
        <Algorithms items={graphAlgorithms} />
      </ChapterHeading>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Tries",
  description: "",
};

export default TriesPage;
