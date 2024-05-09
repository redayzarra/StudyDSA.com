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
import {
  buildingCode,
  lazyCode,
  queryingCode,
  segmentTreeCode,
  updatingCode,
} from "./segmentCode";

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
  const implementationChapter = findChapter(topic, "Implementation");
  const lazyChapter = findChapter(topic, "Lazy Propagation");
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
          Querying a segment tree efficiently retrieves the sum of a range
          within an array. Simply put,{" "}
          <strong>
            traverse down the tree from the root to the relevant leaves
          </strong>{" "}
          that represent the query interval. Since the segment tree is a{" "}
          <TextLink href="/data-structures/trees#binary">binary tree</TextLink>,
          this operation can retrieve sums in <CodeText>O(log n)</CodeText>{" "}
          time, making it significantly faster than a linear approach using a{" "}
          <CodeText>for</CodeText> loop.
        </p>
        <CodeBlock
          code={queryingCode}
          language="python"
          title="Querying_SegmentTrees.py"
        />
        <br />
        <p>
          The <CodeText>query</CodeText> method begins at the root and
          selectively{" "}
          <strong>
            navigates to child nodes that overlap with the desired query range
          </strong>
          . If a segment completely falls within the query range, its sum is
          included in the result. If not, the tree further subdivides into
          smaller segments, efficiently combining the results of overlapping
          nodes.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="updating"
        title="Updating"
        chapter={updatingChapter}
        chapterId={updatingChapter?.id}
      >
        <p>
          Update a segment tree by modifying an element of the{" "}
          <TextLink href="/data-structures/arrays">array</TextLink> and
          reflecting this change throughout the tree. This ensures the{" "}
          <strong>
            segment tree maintains accurate collection of data after array
            elements change
          </strong>
          . To update, the tree modifies the specific leaf node representing the
          array element and <strong>then updates all parent nodes</strong> to
          reflect this change.
        </p>
        <CodeBlock
          code={updatingCode}
          language="python"
          title="Updating_SegmentTrees.py"
        />
        <br />
        <p>
          The <CodeText>update</CodeText> method in the{" "}
          <CodeText>SegmentTree</CodeText> class modifies a single element by{" "}
          <strong>adjusting the value at the corresponding leaf</strong> and
          then recursively recalculating the sum for each parent node up to the
          root. This ensures the tree always represents the correct sums across
          all segments.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="implementation"
        title="Implementation"
        chapterId={implementationChapter?.id}
      >
        <p>
          Constructed from an{" "}
          <TextLink href="/data-structures/arrays">array</TextLink>, a segment
          tree transforms <strong>each array element into a leaf node</strong>{" "}
          and organizes{" "}
          <strong>parent nodes to calculate values from their children</strong>.
          This structure allows for efficient data operations across intervals.
        </p>
        <br />
        <p>
          Query operations use the tree&apos;s structure to efficiently compute sums,
          while updates are seamlessly handled by adjusting an element in the
          array and <strong>propagating this change throughout the tree</strong>
          . This ensures that the data remains consistent and accurately
          represents the current state of the array.
        </p>
        <CodeBlock
          code={segmentTreeCode}
          language="python"
          title="SegmentTrees.py"
        />
        <br />
      </ChapterHeading>

      <ChapterHeading
        id="lazy-propagation"
        title="Lazy Propagation"
        chapter={lazyChapter}
        chapterId={lazyChapter?.id}
      >
        <p>
          Lazy propagation is a technique used in segment trees to{" "}
          <strong>
            defer updates until necessary, optimizing performance for range
            queries
          </strong>
          . Instead of immediately updating all affected nodes upon an update,
          lazy propagation <strong>postpones the update to a later time</strong>
          , only applying it when needed during a query.
        </p>
        {/* <CodeBlock
          code={lazyCode}
          language="python"
          title="Lazy_SegmentTrees.py"
        /> */}
        <br />
        <p>
          The key idea behind lazy propagation is to{" "}
          <strong>
            store pending updates at each node of the segment tree
          </strong>
          . When a range update is performed, instead of immediately updating
          the nodes, the{" "}
          <strong>update is stored as a &quot;lazy&quot; value at the node</strong>.
          During future queries, these lazy updates are applied as needed.
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
          Segment trees should be your go-to tool for solving range query
          problems efficiently in coding interviews. They allow rapid updates
          and queries, making them <strong>great for dynamic data</strong> where
          values change frequently. Here are some essential tips and tricks to
          master segment trees:
        </p>
        <br />
        <ul className="ml-6">
          <li>
            <span className="font-bold">&bull; Rare Case:</span> While segment
            trees are versatile, <strong>they can be overkill</strong> for
            simple calculation functions or when the data doesn&apos;t get updated.
            Use them when you have multiple range queries and dynamic data.
            Segment trees are <strong>almost never used in interviews</strong>.
          </li>
          <br />
          <li>
            <span className="font-bold">&bull; Space Optimization:</span>{" "}
            Represent your segment tree using a flat{" "}
            <TextLink href="/data-structures/arrays">array</TextLink> structure
            to reduce memory overhead and improve cache performance on hardware.
          </li>
          <br />
          <li>
            <span className="font-bold">
              &bull; Iterative vs. Recursive Approach:
            </span>{" "}
            Understand both iterative and recursive builds of segment trees.
            <strong>Iterative can be more space-efficient</strong> while
            recursive is often simpler to implement and understand.
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
