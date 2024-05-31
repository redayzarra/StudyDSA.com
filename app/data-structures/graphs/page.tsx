import getAlgorithmsByName from "@/actions/algorithms/getAlgorithmsById";
import findChapter from "@/actions/chapters/findChapter";
import Algorithms from "@/components/Algorithms";
import ChapterHeading from "@/components/ChapterHeading";
import CodeBlock from "@/components/CodeBlock";
import { CodeText } from "@/components/CodeText";
import Heading from "@/components/Heading";
import Operations from "@/components/Operations";
import { graphOperations } from "@/data/operationsData";
import { Metadata } from "next";
import {
  adjacencyListCode,
  bfsAdjacencyCode,
  bfsMatrixCode,
  dfsAdjacencyCode,
  dfsMatrixCode,
  graphNodeCode,
  matrixCode,
} from "./graphCode";
import ImageBlock from "@/components/ImageBlock";
import TextLink from "@/components/TextLink";
import getTopicById from "@/actions/topics/getTopicById";

const GraphsPage = async () => {
  const topic = await getTopicById(7);

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

  const fetchAlgorithms = [6, 8, 13, 14, 17, 19, 20, 21, 22, 23, 24];

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
          checking for connectivity, and finding paths or cycles. Here&apos;s
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
          <strong>almost as efficient as running in constant time</strong>.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="terminology"
        title="Graph Terminology"
        chapter={terminologyChapter}
        chapterId={terminologyChapter?.id}
      >
        <p>
          Graphs are made up of vertices and edges.{" "}
          <strong>Vertices represent nodes in a graph</strong>, each can
          containing values (or data), while{" "}
          <strong>edges are connections</strong> between these nodes, defining
          the connections among them.{" "}
          <strong>Vertices maintain a list of their adjacent neighbors</strong>,
          which are other nodes directly connected to them through edges:
        </p>
        <CodeBlock
          code={graphNodeCode}
          language="python"
          title="GraphNodes.py"
        />
        <br />
        <p>
          Vertices are <strong>adjacent</strong> if there is an edge directly
          connecting them. A <strong>path</strong> in a graph is a sequence of
          vertices where each consecutive vertex is connected by an edge.{" "}
          <strong>Cycles</strong> are paths that{" "}
          <strong>start and end at the same vertex</strong>:
        </p>

        <ImageBlock
          src="/images/graphs/GraphTerms.jpg"
          alt="Graph key terms like vertices, edges, loops, and cycles"
        />

        <p>
          Another important aspect of graphs is <strong>weight</strong>. In{" "}
          <TextLink href="/data-structures/weighted-graphs">
            weighted graphs
          </TextLink>
          , edges have weights assigned to them, which can{" "}
          <strong>represent quantities</strong> like distance, cost, or
          capacity. This allows for algorithms that find the shortest path or
          create a minimum spanning tree.
        </p>

        <ImageBlock
          src="/images/graphs/WeightedGraph.jpg"
          alt="Weighted graph with weights on edges, includes cycles"
        />

        <p>
          A <strong>connected component</strong> is a portion of the graph where{" "}
          <strong>vertices are connected by paths</strong>. In directed graphs,
          a <strong>strongly connected component</strong> is where every{" "}
          <strong>vertex is reachable from every other vertex</strong> in the
          component.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="directionality"
        title="Directionality"
        chapter={directionalityChapter}
        chapterId={directionalityChapter?.id}
      >
        <p>
          Graph directionality is when edges have a direction (
          <strong>directed graphs</strong>) or not (undirected graphs). In
          directed graphs,
          <strong> edges indicate a one-way relationship</strong>, while in
          <strong> undirected graphs, edges represent a two-way</strong>, mutual
          connection.
        </p>
        <ImageBlock
          src="/images/graphs/GraphDirectionality.jpg"
          alt="Directed graphs have edges that point a certain direction, while undirected graphs have two-way edges"
        />
      </ChapterHeading>

      <ChapterHeading
        id="adjacencyList"
        title="Adjacency List"
        chapter={adjacencyChapter}
        chapterId={adjacencyChapter?.id}
      >
        <p>
          <strong>Adjacency lists are a way to represent graphs</strong>, where
          each vertex stores a list of other vertices directly connected by
          edges. Typically{" "}
          <strong>
            implemented as a{" "}
            <TextLink href="/data-structures/hashmaps">hashmap</TextLink>
          </strong>
          , where <strong>keys are vertices</strong> and{" "}
          <strong>values are a list of adjacent vertices</strong>. This
          structure is a flexible way to represent the relationships within the
          graph.
        </p>

        <br />
        <p>
          Adjacency lists are typically{" "}
          <strong>built from a given list of edges</strong>, where each edge in
          the list is represented as a{" "}
          <strong>pair of vertices indicating an edge</strong> from one vertex
          to another. Each edge is a list containing two items: the{" "}
          <CodeText>source</CodeText> vertex and the{" "}
          <CodeText>destination</CodeText> vertex.
        </p>
        <CodeBlock
          code={adjacencyListCode}
          language="python"
          title="AdjacencyList.py"
        />
      </ChapterHeading>

      <ChapterHeading
        chapter={matrixChapter}
        id="matrix"
        title="Matrix"
        chapterId={matrixChapter?.id}
      >
        <p>
          A <strong>matrix is a two-dimensional array</strong> that forms a
          rectangle of cells, organized into <strong>rows and columns</strong>.
          The individual items in a matrix are called elements or{" "}
          <strong>cells</strong>. The <strong>dimensions of a matrix</strong>{" "}
          are defined by the <strong>number of rows and columns</strong> it
          contains. A matrix with <CodeText>m</CodeText> rows and{" "}
          <CodeText>n</CodeText> columns is called a <CodeText>m × n</CodeText>{" "}
          matrix:
        </p>
        <CodeBlock code={matrixCode} language="python" title="Matrix.py" />
        <br />
        <p>
          In graph theory, an{" "}
          <strong>adjacency matrix is a way to represent connections</strong>{" "}
          between nodes in a graph. It <strong>always forms a square</strong>{" "}
          matrix where each element indicates whether a pair of vertices is
          directly connected by an edge. The{" "}
          <strong>rows and columns correspond to the vertices</strong> of the
          graph.
        </p>
        <ImageBlock
          src="/images/graphs/AdjacencyMatrix.jpg"
          alt="An adjacency matrix is full of zeroes and ones to indicate the presence of an edge between two vertices."
        />
        <p>
          Adjacency matrices are extremely{" "}
          <strong>inefficient and should be avoided</strong>. They
          <strong> consume a large amount of memory</strong> to store many zero
          values, which represent absent edges between most pairs of vertices.
          Operations like adding or removing can be{" "}
          <strong>computationally expensive</strong> because we need to resize
          and update large portions of the matrix.{" "}
          <strong>Use adjacency lists</strong>.
        </p>
      </ChapterHeading>

      <ChapterHeading
        id="traversal"
        title="Graph Traversal"
        chapter={graphTraversalChapter}
        chapterId={graphTraversalChapter?.id}
      >
        <p>
          Graph traversal algorithms, such as{" "}
          <TextLink href="/algorithms/depth-first-search">
            Depth-First Search
          </TextLink>{" "}
          (DFS) and{" "}
          <TextLink href="/algorithms/breadth-first-search">
            Breadth-First Search
          </TextLink>{" "}
          (BFS), are necessary for exploring graphs. Understanding how to
          implement and apply these algorithms for different graph
          representations—specifically, adjacency lists and matrices—is
          important for graph problems.
        </p>
        <br />
        <p>
          <strong>DFS for Adjacency Lists: </strong>DFS explores as far as
          possible along one branch before backtracking. This is implemented
          using <TextLink href="/algorithms/recursion">recursion</TextLink> (or
          a stack). In adjacency lists, DFS begins at a selected node, marking
          it as visited using a{" "}
          <TextLink href="/data-structures/hashmaps#sets">hashset</TextLink>. It
          then recursively visits unvisited neighboring nodes, exploring the
          graph&apos;s depth before backtracking to explore new branches:
        </p>
        <CodeBlock
          code={dfsAdjacencyCode}
          language="python"
          title="DFS_AdjacencyList.py"
        />
        <br />
        <p>
          <strong>BFS for Adjacency Lists: </strong>BFS explores the graph level
          by level, starting from a selected node. It uses a{" "}
          <TextLink href="/data-structures/queues">queue</TextLink> to keep
          track of the order in which to visit nodes. For adjacency lists, BFS
          visits each unvisited neighbor of a node, marks it as visited, and
          adds its adjacent nodes to the queue. This process is repeated until
          the queue is empty, so that all connected nodes are visited in
          increasing distance from the starting node:
        </p>
        <CodeBlock
          code={bfsAdjacencyCode}
          language="python"
          title="BFS_AdjacencyList.py"
        />
        <br />
        <p>
          <strong>DFS for Matrices: </strong>DFS selects an unvisited node and
          explores as far along a branch as possible, similar to the process
          with adjacency lists. However, instead of iterating over a list of
          neighbors, the algorithm checks the matrix in all four directions to
          find the next unvisited node to explore:
        </p>
        <CodeBlock
          code={dfsMatrixCode}
          language="python"
          title="DFS_Matrix.py"
        />
        <br />
        <p>
          <strong>BFS for Matrices: </strong>BFS starts from a given cell (or
          node) and explores all its neighboring cells first, before moving to
          the next level. To implement BFS on a matrix, we typically use a{" "}
          <TextLink href="/data-structures/queues">queue</TextLink> to keep
          track of the cells to visit (implemented using{" "}
          <TextLink href="/data-structures/hashmaps#sets">hashset</TextLink>)
          next:
        </p>
        <CodeBlock
          code={bfsMatrixCode}
          language="python"
          title="BFS_Matrix.py"
        />
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
              Dijkstra&apos;s
            </TextLink>
            , <TextLink href="/algorithms/astar-algorithm">A* search</TextLink>,
            or{" "}
            <TextLink href="/algorithms/floyd-warshalls-algorithm">
              Floyd-Warshall
            </TextLink>
            , depending on whether you&apos;re dealing with weighted or
            unweighted, and directed or undirected graphs.
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
