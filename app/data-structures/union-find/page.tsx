import getAlgorithmsByName from "@/actions/algorithms/getAlgorithmsById";
import getTopicById from "@/actions/topics/getTopicById";
import Algorithms from "@/components/Algorithms";
import ChapterHeading from "@/components/ChapterHeading";
import CodeBlock from "@/components/CodeBlock";
import { CodeText } from "@/components/CodeText";
import Heading from "@/components/Heading";
import Operations from "@/components/Operations";
import TextLink from "@/components/TextLink";
import { unionFindOperations } from "@/data/operationsData";
import { Metadata } from "next";
import {
  findOperationCode,
  pathCompressionCode,
  unionBySizeCode,
  unionFindImplementation,
} from "./unionFindCode";

const UnionFindPage = async () => {
  const topic = await getTopicById(9);

  // I will have to change this later
  if (!topic) {
    console.error("Topic not found");
    return <div>Topic not found</div>;
  }

  // Fetch the algorithms for union-find page
  const fetchAlgorithms = [13, 14, 21, 22];
  const unionFindAlgorithms = await getAlgorithmsByName(fetchAlgorithms);

  // Define the href we will use for this page
  const href = "/data-structures/union-find";

  return (
    <div className="space-y-8">
      <Heading topic={topic!} />
      <ChapterHeading id="definition" title="Definition" href={href}>
        <p>
          Union-Find, also known as Disjoint Set Union (DSU), manages a
          collection of <TextLink href="#disjointSets">disjoint sets</TextLink>,
          allowing for efficient queries and updates about{" "}
          <strong>whether elements are in the same set or not</strong>.
        </p>
      </ChapterHeading>

      <ChapterHeading id="operations" title="Operations" href={href}>
        <p>
          Union-Find supports two fundamental operations: <strong>find</strong>,
          which identifies the set an element belongs to, and{" "}
          <strong>union</strong>, which merges two sets into one. These
          operations are dynamic, meaning they{" "}
          <strong>can be performed at any time</strong> after the graph&apos;s
          initial construction:
        </p>
        <Operations items={unionFindOperations} />
        <p>
          The Inverse Ackermann function, <CodeText>O(α(N))</CodeText>, is a
          time complexity that <strong>grows extremely slowly</strong>, so much
          so that for all practical programming purposes,{" "}
          <strong>it&apos;s almost constant</strong>. This means algorithms with
          this complexity are highly efficient, even for very large input sizes.
        </p>
      </ChapterHeading>

      <ChapterHeading id="disjointSets" title="Disjoint Sets" href={href}>
        <p>
          A disjoint set, also known as a <strong>set of sets</strong>, is a
          collection where{" "}
          <strong>each node belongs to exactly one subset</strong>, ensuring no
          overlap between these subsets. Union-Find provides an efficient method
          to manage these disjoint sets.
        </p>
        <br />
        <p>
          One of the key challenges Union-Find addresses is the{" "}
          <strong>dynamic nature of disjoint sets</strong>. As elements can be
          grouped or regrouped over time, maintaining an efficient and quick
          access to these sets becomes difficult, especially in graph algorithms
          where connectivity changes.
        </p>
        <br />
        <p>
          Union-Find, with optimizations such as{" "}
          <TextLink href="#pathCompression">path compression</TextLink> and{" "}
          <TextLink href="#unionSize">union by size</TextLink>, significantly
          improves the efficiency of these operations. Path compression flattens
          the structure of the sets, making future find operations faster by
          directly connecting nodes to their root. Union by size ensures that
          the smaller set is always merged into the larger one, preventing the
          formation of long chains that can slow down find operations.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="connectivity"
        title="Network Connectivity"
        href={href}
      >
        <p>
          Network connectivity problems often ask us to{" "}
          <strong>
            find out whether two elements are part of the same subset or if a
            path exists between them
          </strong>
          . Union-Find simplifies this process by maintaining information about
          connected components within a network.
        </p>
        <br />
        <p>
          Union-Find can handle large networks by efficiently{" "}
          <strong>grouping nodes into sets of connected components</strong>.
          When a new connection between two nodes is introduced, Union-Find can
          quickly{" "}
          <strong>
            update the corresponding sets using the union operation
          </strong>
          . Checking if two nodes are connected is as simple as verifying if
          they belong to the same set, which can be easily done with the find
          operation.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="pathCompression"
        title="Path Compression"
        href={href}
      >
        <p>
          Path compression is an optimization technique which{" "}
          <strong>reduces the depth of Union-Find</strong>. By minimizing the
          number of hops required to reach the root of each node, path
          compression speeds up the the <strong>find</strong> operations.
        </p>
        <br />
        <p>
          Just out of curiosity, let&apos;s take a look at the Union-Find{" "}
          <CodeText>find</CodeText> operation{" "}
          <strong>without path compression</strong>. The code below will run at{" "}
          <CodeText>O(n)</CodeText> time complexity:
        </p>
        <CodeBlock
          code={findOperationCode}
          language="python"
          title="FindOperation.py"
        />
        <br />
        <p>
          Path compression{" "}
          <strong>
            works by changing the structure of the Union-Find tree
          </strong>{" "}
          during each find operation. When we need a node&apos;s parent from the{" "}
          <CodeText>find</CodeText> operation, path compression ensures that{" "}
          <strong>
            {" "}
            each node along the path to the root is directly linked to the root
            itself
          </strong>
          . This adjustment is made dynamically, ensuring that future queries
          for any of these nodes will require far fewer steps to ascertain their
          set representative.
        </p>
        <br />
        <p>
          <strong>Path compression is just a simple modification</strong> to the{" "}
          <CodeText>find</CodeText> operation. Instead of traversing up the tree
          to find the root, the <CodeText>find</CodeText> operation{" "}
          <strong>
            reassigns the parent of each traversed node to point directly to the
            root
          </strong>
          . This can be done by adding one simple line to the{" "}
          <CodeText>find</CodeText> function, resulting in a tree that is much
          flatter and more efficient to work with:
        </p>
        <CodeBlock
          code={pathCompressionCode}
          language="python"
          title="PathCompression.py"
        />
        <br />
        <p>
          The benefits of path compression are noticeable in large numbers of
          elements and operations. By ensuring that{" "}
          <strong>trees remain shallow</strong>, path compression guarantees
          that the amortized time complexity of <CodeText>find</CodeText>{" "}
          approaches <CodeText>O(log n)</CodeText> in the worst case and is
          closer to <CodeText>O(α(n))</CodeText>, the inverse Ackermann
          function, for most practical purposes.
        </p>
      </ChapterHeading>

      <ChapterHeading id="unionSize" title="Union by Size" href={href}>
        <p>
          Union by Size is an optimization technique that{" "}
          <strong>maintains a balanced tree structure</strong> during union
          operations. This ensures that the tree&apos;s height is minimized for
          future find operations. The <CodeText>size</CodeText> in this context{" "}
          <strong>represents the tree&apos;s height</strong>, and during a union
          operation, the{" "}
          <strong>
            tree with the smaller size is merged into the tree with the larger
            size
          </strong>
          .
        </p>
        <br />
        <p>
          Union by Size can be adapted to use a{" "}
          <strong>
            <CodeText>size</CodeText> array for tracking each set&apos;s size
            instead of size
          </strong>
          . Initially, every element forms a set of size one. During a union
          operation,{" "}
          <strong>
            the smaller set&apos;s root is linked to the larger set&apos;s root
          </strong>
          , optimizing the set&apos;s structure for future{" "}
          <CodeText>find</CodeText> operations. If sets are equal in size, one
          becomes the root of the combined set, which then updates its size to
          the total of both:
        </p>
        <CodeBlock
          code={unionBySizeCode}
          language="python"
          title="UnionBySize.py"
        />
        <br />
        <p>
          {" "}
          This size-based approach, a variant of the traditional size method,
          ensures the Union-Find&apos;s efficiency, returning{" "}
          <CodeText>True</CodeText> for merging separate sets and{" "}
          <CodeText>False</CodeText> if already connected.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="implementation"
        title="Union-Find Implementation"
        href={href}
      >
        <p>
          Implement Union-Find by{" "}
          <strong>creating an array to track parent relationships</strong>{" "}
          between elements. Use an additional array, often referred to as{" "}
          <strong>
            <CodeText>size</CodeText>
          </strong>
          , to keep track of <strong>the number of elements in each set</strong>
          . This <CodeText>size</CodeText> array plays an important role during
          the union process:
        </p>
        <CodeBlock
          code={unionFindImplementation}
          language="python"
          title="Union-Find.py"
        />
      </ChapterHeading>

      <ChapterHeading
        id="bestPractices"
        title="Best Practices for Union-Find"
        href={href}
      >
        <p>
          Union-Find is a great tool for solving problems related to disjoint
          sets, connectivity, and clustering in coding interviews. To use
          Union-Find efficiently, here are some great tips and tricks:
        </p>
        <br />
        <ul className="ml-6">
          <li>
            <span className="font-bold">
              &bull; Understand Union-Find Conceptually:
            </span>{" "}
            Grasp the core concepts of Union-Find, including how it manages
            disjoint sets, and the significance of its <CodeText>find</CodeText>{" "}
            and <CodeText>union</CodeText> operations. A solid understanding
            will enable you to apply it to a wide range of problems.
          </li>
          <br />
          <li>
            <span className="font-bold">
              &bull; Optimize with Path Compression:
            </span>{" "}
            Always implement path compression with your{" "}
            <CodeText>find</CodeText> operation. This simple optimization
            dramatically improves the efficiency of Union-Find,{" "}
            <strong>making the time complexity nearly constant</strong> for each
            operation.
          </li>
          <br />
          <li>
            <span className="font-bold">&bull; Use Union by Size or Size:</span>{" "}
            Use union by size (size) to keep the data structure&apos;s trees as
            flat as possible. This strategy minimizes the depth of trees and
            optimizes find operations.
          </li>
          <br />
          <li>
            <span className="font-bold">
              &bull; Identify Union-Find Applications:
            </span>{" "}
            Recognize problems where Union-Find can be applied, such as
            determining connected components in a network, checking for cycles
            in an undirected graph, or solving dynamic connectivity issues.
          </li>
          <br />
        </ul>
      </ChapterHeading>

      <ChapterHeading id="algorithms" title="Algorithms" hideBookmark>
        <Algorithms items={unionFindAlgorithms} />
      </ChapterHeading>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Union-Find",
  description: "",
};

export default UnionFindPage;
