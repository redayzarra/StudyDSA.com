import getAlgorithmsByName from "@/actions/algorithms/getAlgorithmsByName";
import findChapter from "@/actions/chapters/findChapter";
import getTopicByName from "@/actions/topics/getTopicByName";
import Algorithms from "@/components/Algorithms";
import ChapterHeading from "@/components/ChapterHeading";
import CodeBlock from "@/components/CodeBlock";
import { CodeText } from "@/components/CodeText";
import Heading from "@/components/Heading";
import Operations from "@/components/Operations";
import { trieOperations } from "@/data/operationsData";
import { Metadata } from "next";
import ImageBlock from "@/components/ImageBlock";
import TextLink from "@/components/TextLink";

const UnionFindPage = async () => {
  const topic = await getTopicByName("Union-Find");

  // I will have to change this later
  if (!topic) {
    console.error("Topic not found");
    return <div>Topic not found</div>;
  }

  const definitionChapter = findChapter(topic, "Definition");
  const operationsChapter = findChapter(topic, "Operations");
  const disjointSetsChapter = findChapter(topic, "Disjoint Sets");
  const networkChapter = findChapter(topic, "Network Connectivity");
  const pathChapter = findChapter(topic, "Path Compression");
  const rankChapter = findChapter(topic, "Union by Rank");
  const implementationChapter = findChapter(topic, "Implementation");
  const bestPracticesChapter = findChapter(topic, "Best Practices");

  const fetchAlgorithms = [
    "Depth-First Search",
    "Breadth-First Search",
    "Prim's Algo.",
    "Kruskal's Algo.",
  ];

  const unionFindAlgorithms = await getAlgorithmsByName(fetchAlgorithms);

  return (
    <div className="space-y-8">
      <Heading topic={topic!} />
      <ChapterHeading
        id="definition"
        title="Definition"
        chapterId={definitionChapter?.id}
      >
        <p>
          The Union-Find data structure, also known as Disjoint Set Union (DSU),
          helps manage a collection of disjoint sets, enabling efficient queries
          and updates about whether elements are in the same set or separate
          sets. It's crucial for algorithms that require the partitioning of
          elements into disjoint sets without overlap.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="operations"
        title="Operations"
        chapterId={operationsChapter?.id}
      >
        <p>
          Fundamental operations include <strong>find</strong>, which identifies
          the set an element belongs to, and <strong>union</strong>, which
          merges two sets. These operations enable the dynamic grouping and
          querying of elements, forming the core of the Union-Find's
          functionality.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="disjoint-sets"
        title="Disjoint Sets"
        chapter={disjointSetsChapter}
        chapterId={disjointSetsChapter?.id}
      >
        <p>
          Disjoint Sets represent a collection where each element is part of one
          and only one subset. Union-Find efficiently tracks these sets,
          providing insights into how components of a larger system are
          interconnected or isolated.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="connectivity"
        title="Network Connectivity"
        chapter={pathChapter}
        chapterId={pathChapter?.id}
      >
        <p>
          Applying Union-Find in network connectivity scenarios allows for quick
          determinations of whether points in a network are connected. This
          application is vital for understanding the structure of networks and
          solving connectivity problems.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="path-compression"
        title="Path Compression"
        chapter={networkChapter}
        chapterId={networkChapter?.id}
      >
        <p>
          Path compression is an optimization technique that flattens the
          structure of the tree representing each set, speeding up future
          operations by directly linking nodes to their ultimate parent after a
          find operation.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="union-by-rank"
        title="Union by Rank"
        chapter={rankChapter}
        chapterId={rankChapter?.id}
      >
        <p>
          Union by Rank is another optimization that maintains a balanced tree
          by always attaching the shorter tree to the root of the taller tree
          during union operations. This reduces the overall height of trees,
          improving the efficiency of find operations.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="implementation"
        title="Implementation"
        chapterId={implementationChapter?.id}
      >
        <p>
          Implementing Union-Find involves creating a structure that supports
          efficient find and union operations. Typically, it includes an array
          to track parent relationships between elements, alongside mechanisms
          for path compression and rank by union optimizations.
        </p>
      </ChapterHeading>

      <ChapterHeading id="algorithms" title="Algorithms">
        <Algorithms items={unionFindAlgorithms} />
      </ChapterHeading>

      <ChapterHeading
        id="bestPractices"
        title="Best Practices"
        chapterId={bestPracticesChapter?.id}
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
    </div>
  );
};

export const metadata: Metadata = {
  title: "Union-Find",
  description: "",
};

export default UnionFindPage;
