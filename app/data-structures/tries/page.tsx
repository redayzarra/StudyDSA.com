import getAlgorithmsByName from "@/actions/algorithms/getAlgorithmsByName";
import findChapter from "@/actions/chapters/findChapter";
import getTopicByName from "@/actions/topics/getTopicByName";
import Algorithms from "@/components/Algorithms";
import ChapterHeading from "@/components/ChapterHeading";
import CodeBlock from "@/components/CodeBlock";
import { CodeText } from "@/components/CodeText";
import Heading from "@/components/Heading";
import Operations from "@/components/Operations";
import { graphOperations, trieOperations } from "@/data/operationsData";
import { Metadata } from "next";
import ImageBlock from "@/components/ImageBlock";
import TextLink from "@/components/TextLink";

const TriesPage = async () => {
  const topic = await getTopicByName("Tries");

  // I will have to change this later
  if (!topic) {
    console.error("Topic not found");
    return <div>Topic not found</div>;
  }

  const definitionChapter = findChapter(topic, "Definition");
  const operationsChapter = findChapter(topic, "Operations");
  const trieNodesChapter = findChapter(topic, "Trie Nodes");
  const insertionChapter = findChapter(topic, "Insertion");
  const searchingChapter = findChapter(topic, "Searching");
  const prefixesChapter = findChapter(topic, "Finding Prefixes");
  const implementationChapter = findChapter(topic, "Implementation");
  const bestPracticesChapter = findChapter(topic, "Best Practices");

  const fetchAlgorithms = [
    "Recursion",
    "Backtracking",
    "Depth-First Search",
    "Breadth-First Search",
  ];

  const graphAlgorithms = await getAlgorithmsByName(fetchAlgorithms);

  return (
    <div className="space-y-8">
      <Heading topic={topic!} />
      <ChapterHeading
        id="definition"
        title="Definition"
        chapterId={definitionChapter?.id}
      >
        <p>
          Tries, also known as <strong>prefix trees</strong>, are a tree-like
          data structure that allow for efficient lookup times for strings. They{" "}
          <strong>manage strings</strong> by storing them{" "}
          <strong>character-by-character</strong>.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="operations"
        title="Operations"
        chapterId={operationsChapter?.id}
      >
        <p>
          Trie operations include insertion, search, and deletion of words.
          These operations allow tries to efficiently manage sets of words or
          other character sequences, supporting quick lookups, and prefix
          searches:
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

      <ChapterHeading
        id="nodes"
        title="Trie Nodes"
        chapter={trieNodesChapter}
        chapterId={trieNodesChapter?.id}
      >
        <p>
          Each node in a trie represents a single character from a string and
          maintains references to child nodes for subsequent characters. A node
          may also have a flag to indicate the end of a word. This structure
          allows for the compact representation of overlapping prefixes, saving
          space and speeding up searches.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="insertion"
        title="Insertion"
        chapter={insertionChapter}
        chapterId={insertionChapter?.id}
      >
        <p>
          Inserting a word into a trie involves creating a new path of nodes for
          each character in the word, if that path does not already exist.
          Starting from the root, for each character, move to the corresponding
          child node or create a new child node if one doesn't exist, marking
          the final node as the end of a word.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="searching"
        title="Searching"
        chapter={searchingChapter}
        chapterId={searchingChapter?.id}
      >
        <p>
          Searching for a word in a trie checks each character of the word
          against the nodes, starting from the root. If at any point the
          required child node does not exist, or the end of the word is reached
          without matching the end of a word flag in the node, the search
          returns false; otherwise, it returns true.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="findingPrefix"
        title="Finding Prefixes"
        chapter={prefixesChapter}
        chapterId={prefixesChapter?.id}
      >
        <p>
          Finding prefixes in a trie is similar to searching for a whole word
          but stops at the end of the prefix. If the traversal can follow the
          characters of the prefix to a node successfully, then the prefix
          exists in the trie. This operation is foundational for autocomplete
          suggestions and prefix-based searches.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="implementation"
        title="Implementation"
        chapter={implementationChapter}
        chapterId={implementationChapter?.id}
      >
        <p>
          Implementing a trie typically involves defining a trie node class with
          a children map (to store references to child nodes) and a boolean flag
          to mark the end of a word. The trie itself is represented by the root
          node, from which all words are accessible by traversing down child
          references corresponding to each character in the words.
        </p>
      </ChapterHeading>

      <ChapterHeading id="algorithms" title="Algorithms">
        <Algorithms items={graphAlgorithms} />
      </ChapterHeading>

      <ChapterHeading
        id="bestPractices"
        title="Best Practices"
        chapterId={bestPracticesChapter?.id}
      >
        <p>
          Graphs are incredibly flexible data structures that can represent
          complex relationships which is why they are popular in coding
          interviews. Here are some essential tips and tricks for solving
          graph-related questions:
        </p>
        <br />
        <ul className="ml-6">
          <li>
            <span className="font-bold">&bull; Use Adjacency Lists:</span>{" "}
            Understand the different ways of representing graphs from a given
            list of edges, such as adjacency lists and adjacency matrices.
            However, <strong>do not use an adjacency matrix</strong> for solving
            graph problems. They are really inefficient and are only used for a
            specific use-case.{" "}
            <strong>Adjacency lists are a much better option</strong> for
            representing a graph.
          </li>
          <br />
          <li>
            <span className="font-bold">
              &bull; Master Traversal Algorithms:
            </span>{" "}
            <TextLink href="/algorithms/depth-first-search">
              Depth-First Search
            </TextLink>{" "}
            (DFS) and{" "}
            <TextLink href="/algorithms/breadth-first-search">
              Breadth-First Search
            </TextLink>{" "}
            (BFS) are necessary algorithms for graph traversal. Know when to use
            each technique.{" "}
            <strong>BFS is excellent for finding the shortest path </strong>
            in unweighted graphs, while{" "}
            <strong>DFS can be used to explore all possible paths</strong>.
          </li>
          <br />
          <li>
            <span className="font-bold">&bull; Cycle Detection:</span> Use a
            version of{" "}
            <TextLink href="/algorithms/topological-sort">
              topological sort
            </TextLink>{" "}
            for detecting cycles in a graph, especially for directed graphs.
            Cycle detection is important for problems involving scheduling,
            prerequisites, and deadlock detection. Understanding how to
            implement
            <strong> cycle detection with DFS (topological sort)</strong> can be
            very useful.
          </li>
          <br />
          <li>
            <span className="font-bold">&bull; Connected Components:</span> Use{" "}
            <TextLink href="/algorithms/union-find">Union-Find</TextLink>{" "}
            (Disjoint Set Union) for finding connected components in a graph.
            This is good for clustering, network analysis, and{" "}
            <strong>simplifying graph structures</strong>.
          </li>
          <br />
          <li>
            <span className="font-bold">&bull; Graphs for Pathfinding:</span>{" "}
            For problems involving finding paths or connectivity, use graph
            algorithms like{" "}
            <TextLink href="/algorithms/dijkstras-algorithm">
              Dijkstra's
            </TextLink>
            , <TextLink href="/algorithms/astar-algorithm">A* search</TextLink>,
            or{" "}
            <TextLink href="/algorithms/floyd-warshalls-algorithm">
              Floyd-Warshall
            </TextLink>
            , depending on whether you're dealing with weighted or unweighted,
            and directed or undirected graphs.
          </li>
          <br />
        </ul>
      </ChapterHeading>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Graphs",
  description: "",
};

export default TriesPage;
