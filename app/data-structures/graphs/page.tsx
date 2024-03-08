import getAlgorithmsByName from "@/actions/algorithms/getAlgorithmsByName";
import findChapter from "@/actions/chapters/findChapter";
import getTopicByName from "@/actions/topics/getTopicByName";
import Algorithms from "@/components/Algorithms";
import ChapterHeading from "@/components/ChapterHeading";
import { CodeText } from "@/components/CodeText";
import Heading from "@/components/Heading";
import Operations from "@/components/Operations";
import { graphOperations } from "@/data/operationsData";
import { Metadata } from "next";

const GraphsPage = async () => {
  const topic = await getTopicByName("Graphs");

  // I will have to change this later
  if (!topic) {
    console.error("Topic not found");
    return <div>Topic not found</div>;
  }

  const definitionChapter = findChapter(topic, "Definition");
  const operationsChapter = findChapter(topic, "Operations");
  const terminologyChapter = findChapter(topic, "Terminology");
  const directionalityChapter = findChapter(topic, "Directionality");
  const adjacencyChapter = findChapter(topic, "Adjacency List");
  const matrixChapter = findChapter(topic, "Matrix");
  const graphTraversalChapter = findChapter(topic, "Graph Traversal");
  const bestPracticesChapter = findChapter(topic, "Best Practices");

  const fetchAlgorithms = [
    "Recursion",
    "Backtracking",
    "Depth-First Search",
    "Breadth-First Search",
    "Dijkstra's Algo.",
    "Floyd-Warshall's Algo.",
    "Kruskal's Algo.",
    "Prim's Algo.",
    "Union Find",
    "Bellman-Ford Algo.",
    "Topological Sort",
    "DAG Shortest Paths",
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
          Graphs are composed of{" "}
          <strong>vertices (or nodes) connected by edges</strong>. Unlike trees,{" "}
          graphs{" "}
          <strong>
            can include cycles and vertices can be connected to any number of
            other vertices.
          </strong>{" "}
          This allows for a more complex network of connections to represent
          relationships.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="operations"
        title="Operations"
        chapterId={operationsChapter?.id}
      >
        <p>
          Graph operations encompass adding and removing vertices or edges,
          checking for connectivity, and finding paths or cycles. Here's
          everything you can do with graphs and their time complexities:
        </p>
        <Operations items={graphOperations} />
        <p>
          The Inverse Ackermann function, denoted as <CodeText>a(n)</CodeText>,
          is a math function that occurs in certain algorithms involving
          disjoint set unions or connectivity checks in graphs. The{" "}
          <strong>Inverse Ackermann function grows very slowly</strong> so when
          algorithms have a complexity of <CodeText>O(a(n))</CodeText> it means
          that these algorithms are{" "}
          <strong>almost as efficient as those running in constant time</strong>
          .
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="terminology"
        title="Terminology"
        chapterId={terminologyChapter?.id}
      >
        <p>
          Essential graph terminology includes vertices, edges, adjacency,
          paths, cycles, connected components, directed and undirected graphs,
          and weighted graphs. Understanding these terms is fundamental for
          graph theory and its applications.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="directionality"
        title="Directionality"
        chapter={directionalityChapter}
        chapterId={directionalityChapter?.id}
      >
        <p>
          Graph directionality refers to whether edges have a direction
          (directed graphs) or not (undirected graphs). In directed graphs,
          edges indicate a one-way relationship, while in undirected graphs,
          edges represent a two-way, mutual connection.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="adjacency"
        title="Adjacency List"
        chapter={adjacencyChapter}
        chapterId={adjacencyChapter?.id}
      >
        <p>
          An adjacency list is a common way to represent graphs, where each
          vertex stores a list of vertices to which it is connected. This method
          is space-efficient for sparse graphs and facilitates easy exploration
          of connected vertices.
        </p>
      </ChapterHeading>

      <ChapterHeading
        chapter={matrixChapter}
        id="matrix"
        title="Matrix"
        chapterId={matrixChapter?.id}
      >
        <p>
          The adjacency matrix is a 2D array representation of a graph where
          rows represent source vertices and columns represent destination
          vertices. Cell values indicate the presence of an edge and, in
          weighted graphs, the weight of the edge.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="traversal"
        title="Graph Traversal"
        chapter={graphTraversalChapter}
        chapterId={graphTraversalChapter?.id}
      >
        <p>
          Graph traversal algorithms, such as Depth-First Search (DFS) and
          Breadth-First Search (BFS), are crucial for exploring graphs. They
          enable the identification of reachable vertices, pathfinding, and the
          discovery of graph properties.
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
          Heaps should be your go-to data structure for keeping track of{" "}
          <CodeText>k</CodeText> smallest (or largest) elements, and supporting
          operations like finding the minimum or maximum element efficiently.
          Here are some tips and tricks for using heaps effectively in coding
          interviews:
        </p>
        <br />

        <ul className="ml-6">
          <li>
            <span className="font-bold">&bull; Min vs Max Heaps:</span> Know
            when to use a min heap or a max heap. Use a min heap when you need
            quick access to the smallest element, and a max heap for the
            largest. This decision impacts the heap's structure and the
            implementation of your solution.
          </li>
          <br />
          <li>
            <span className="font-bold">&bull; Heapify for Efficiency:</span>{" "}
            Whenever you're given an unsorted array that needs to be processed
            element by element according to their priority, start by converting
            it into a heap using the <CodeText>heapify</CodeText> operation.
            This is more efficient than inserting elements one by one.
          </li>
          <br />
          <li>
            <span className="font-bold">
              &bull; Efficiency of <CodeText>heappushpop</CodeText>:
            </span>{" "}
            Using <CodeText>heapq.heappushpop</CodeText> is more efficient than
            separate push and pop operations. It minimizes the number of
            reheapify steps needed by combining both actions into a single
            operation, ideal for maintaining a heap when adding a new element
            and immediately retrieving the smallest element.
          </li>
          <br />
          <li>
            <span className="font-bold">&bull; Keeping Track of Elements:</span>{" "}
            In problems involving the <CodeText>k</CodeText> largest or smallest
            elements, heaps can manage these subsets efficiently. For the{" "}
            <strong>
              <CodeText>k</CodeText> largest, use a min heap
            </strong>
            ; for the{" "}
            <strong>
              <CodeText>k</CodeText> smallest, use a max heap
            </strong>
            . This counterintuitive trick ensures optimal time complexity.
          </li>
          <br />
          <li>
            <span className="font-bold">&bull; Streams of Data:</span> Heaps are
            ideal for problems where data continuously changes, and you need to
            maintain a certain order or priority. Examples include real-time
            data processing, event scheduling, and running median calculations.
          </li>
          <br />
          <li>
            <span className="font-bold">
              &bull; Simulate Max Heap in Python:
            </span>{" "}
            Python's <CodeText>heapq</CodeText> library only provides a min
            heap. To simulate a max heap, negate the values when adding or
            removing from the heap. Remember to negate the value again when
            accessing it.
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

export default GraphsPage;
