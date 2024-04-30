import getAlgorithmsByName from "@/actions/algorithms/getAlgorithmsByName";
import findChapter from "@/actions/chapters/findChapter";
import getTopicByName from "@/actions/topics/getTopicByName";
import Algorithms from "@/components/Algorithms";
import ChapterHeading from "@/components/ChapterHeading";
import CodeBlock from "@/components/CodeBlock";
import { CodeText } from "@/components/CodeText";
import Heading from "@/components/Heading";
import Operations from "@/components/Operations";
import { segmentTreeOperations, trieOperations } from "@/data/operationsData";
import { Metadata } from "next";
import ImageBlock from "@/components/ImageBlock";
import TextLink from "@/components/TextLink";
import { buildingCode } from "./segmentCode";

const SegmentTreesPage = async () => {
  const topic = await getTopicByName("Segment Trees");

  // I will have to change this later
  if (!topic) {
    console.error("Topic not found");
    return <div>Topic not found</div>;
  }

  const definitionChapter = findChapter(topic, "Definition");
  const operationsChapter = findChapter(topic, "Operations");
  const buildingChapter = findChapter(topic, "Building");
  const queryingChapter = findChapter(topic, "Querying");
  const updatingChapter = findChapter(topic, "Updating");
  const lazyChapter = findChapter(topic, "Lazy Propagation");
  const implementationChapter = findChapter(topic, "Implementation");
  const bestPracticesChapter = findChapter(topic, "Best Practices");

  const fetchAlgorithms = [
    "Intervals",
    "Depth-First Search",
    "Breadth-First Search",
    "1D Dynamic Pro.",
  ];

  const segmentTreesAlgorithms = await getAlgorithmsByName(fetchAlgorithms);

  return (
    <div className="space-y-8">
      <Heading topic={topic!} />
      <ChapterHeading
        id="definition"
        title="Definition"
        chapterId={definitionChapter?.id}
      >
        <p>
          A Segment Tree is a{" "}
          <TextLink href="/data-structures/trees#binary">binary tree</TextLink>{" "}
          used for <strong>storing intervals or segments</strong>. It allows{" "}
          <TextLink href="#querying">querying</TextLink> which segments or
          intervals contain a given point. Segment trees are useful in scenarios
          requiring{" "}
          <strong>frequent updates and queries on a set of intervals</strong>.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="operations"
        title="Operations"
        chapterId={operationsChapter?.id}
      >
        <p>
          The core operations of a Segment Tree include{" "}
          <strong>building</strong> the tree from a given array,{" "}
          <strong>updating</strong> values in the tree to reflect changes in the
          array, and <strong>querying</strong> the tree to obtain data over a
          range.
        </p>
        <Operations items={segmentTreeOperations} />
      </ChapterHeading>

      <ChapterHeading
        id="building"
        title="Building"
        chapter={buildingChapter}
        chapterId={buildingChapter?.id}
      >
        <p>
          Building a segment tree involves constructing a{" "}
          <TextLink href="/data-structures/trees#binary">binary tree</TextLink>{" "}
          where <strong>each leaf represents an element of the array</strong>,
          and <strong>each node stores information</strong> (like sum, minimum,
          or maximum) about the interval or segment it covers. This process
          typically runs in <CodeText>O(n log n)</CodeText> time, setting up the
          structure for efficient future updates and queries.
        </p>
        <CodeBlock
          code={buildingCode}
          language="python"
          title="Building_SegmentTrees.py"
        />
        <br />
        <p>
          The <CodeText>SegmentTree</CodeText> class constructs a segment tree
          from an <TextLink href="/data-structures/arrays">array</TextLink> for
          efficient range queries and updates. First, it{" "}
          <strong>doubles the array size for tree construction</strong>, placing
          each array element in a leaf node. The tree is then{" "}
          <strong>built upward by summing child nodes into their parent</strong>
          , enabling fast operations on array segments in logarithmic time.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="querying"
        title="Querying"
        chapter={queryingChapter}
        chapterId={queryingChapter?.id}
      >
        <p>
          Querying a Segment Tree allows for retrieving aggregated data over a
          specified range in <strong>O(log n)</strong> time. This operation
          traverses the tree, merging the information from relevant segments to
          produce the final result. It's particularly useful for dynamic data
          sets where queries over ranges are frequent.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="updating"
        title="Updating"
        chapter={updatingChapter}
        chapterId={updatingChapter?.id}
      >
        <p>
          Updating the Segment Tree to reflect changes in the underlying data
          set involves modifying one or more leaf nodes and then propagating
          these changes up the tree to ensure all relevant internal nodes have
          the correct aggregated information. This operation maintains the
          tree's integrity, allowing for continuous accurate queries, typically
          executed in <strong>O(log n)</strong> time.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="lazy-propagation"
        title="Lazy Propagation"
        chapterId={lazyChapter?.id}
      >
        <p>
          Lazy Propagation is an optimization technique used in Segment Trees to
          improve the efficiency of updates over a range. When making multiple
          updates, instead of updating each segment individually, lazy
          propagation delays these updates to only when they are needed (during
          a query). This method involves marking the nodes that need updating
          without immediately updating the tree. As a result, both range updates
          and queries can be performed in <strong>O(log n)</strong> time,
          significantly improving performance for large data sets with frequent
          updates and queries.
        </p>
        <p>
          This technique uses an additional array, often called the 'lazy'
          array, to store update information. During a query or a further
          update, the tree nodes are adjusted as necessary by applying these
          pending updates. This approach ensures that the Segment Tree remains
          efficient even as operations scale.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="implementation"
        title="Implementation"
        chapterId={implementationChapter?.id}
      >
        <p>
          Implementing a Segment Tree typically involves a combination of
          recursive and iterative techniques. Below is a basic outline of how a
          Segment Tree can be implemented in code, focusing on the operations of
          building, querying, updating, and incorporating lazy propagation.
        </p>
        <p>
          The implementation requires defining the tree structure, usually in an
          array format where children of a node at index <em>i</em> are found at
          indices <em>2*i</em> and <em>2*i + 1</em>. The tree is initialized by
          building it from the bottom up, starting from the leaves which
          represent the individual elements of the array. Each internal node is
          then calculated as the aggregation (e.g., sum, min, or max) of its
          children nodes.
        </p>
        <p>
          Queries and updates are managed by navigating through the relevant
          segments of the tree, adjusting values and applying any lazy updates
          as needed. The detailed implementation can vary based on the specific
          aggregation function and the nature of the data being managed.
        </p>
        <p>
          For further clarity, providing code snippets in popular programming
          languages like Python or Java can help students understand the
          practical aspects of implementing Segment Trees.
        </p>
      </ChapterHeading>

      <ChapterHeading id="algorithms" title="Algorithms">
        <Algorithms items={segmentTreesAlgorithms} />
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
  title: "Segment Trees",
  description: "",
};

export default SegmentTreesPage;
