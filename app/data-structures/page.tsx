import { Metadata } from "next";
import MainChapter from "../(introduction)/_components/MainChapter";
import MainHeading from "../(introduction)/_components/MainHeading";
import TextLink from "@/components/TextLink";
import Basics from "@/components/Basics";
import Intermediate from "@/components/Intermediate";
import Advanced from "@/components/Advanced";

const DataStructuresPage = async () => {
  return (
    <div className="space-y-8">
      <MainHeading
        title="Data Structures"
        description="Special storage formats for organizing and managing data efficiently"
      />

      <MainChapter id="definition" title="Definition">
        <p>
          Data structures are specialized storage formats for organizing,
          processing, retrieving, and storing data. They allow for efficient
          access and modification of data, making it possible to run complex
          computations and tasks.
        </p>
      </MainChapter>

      <Basics />
      <Intermediate />
      <Advanced />

      <MainChapter id="with-algorithms" title="With Algorithms">
        <p>
          Data structures and <TextLink href="/algorithms">algorithms</TextLink> are like two sides of the same coin in
          computer science. While data structures deal with the organization and
          storage of data, algorithms are all about the steps and rules to
          process that data efficiently. Here are the some examples of data
          structures and algorithms that work well together:
        </p>
        <br />
        <ul className="ml-6">
          <li>
            <span className="font-bold">
              &bull; Sorting Algorithms + Arrays:{" "}
            </span>
            Sorting algorithms like{" "}
            <TextLink href="/algorithms/sorting#mergeSort">MergeSort</TextLink>{" "}
            are designed to work efficiently with arrays.{" "}
            <TextLink href="/data-structures/arrays">Arrays</TextLink> provide a
            contiguous block of memory, making it easier for these algorithms to
            access and sort elements.
          </li>
          <br />
          <li>
            <span className="font-bold">
              &bull; Searching Algorithms + Trees:{" "}
            </span>
            <TextLink href="/data-structures/trees#binarySearch">
              Binary Search Trees
            </TextLink>{" "}
            (BSTs) are a great example where data structures and algorithms work
            together. Algorithms like{" "}
            <TextLink href="/algortithms/binary-search">binary search</TextLink>{" "}
            are designed to take advantage of the BST&apos;s properties, making
            searches extremely efficient.
          </li>
          <br />
          <li>
            <span className="font-bold">&bull; Graph Algorithms: </span>
            <TextLink href="/data-structures/graphs">Graphs</TextLink> are used
            in algorithms like{" "}
            <TextLink href="/algorithms/dijkstras">Dijkstra&apos;s</TextLink> for
            finding the shortest path, or algorithms for detecting cycles in a
            network. These algorithms are tailored to navigate the nodes and
            edges of graphs efficiently.
          </li>
        </ul>
      </MainChapter>

      <MainChapter
        id="classification"
        title="Classification of Data Structures"
      >
        <p>
          Data structures can be classified based on various characteristics.
          Understanding these classifications helps in selecting the right data
          structure for a given problem, ensuring optimal performance and
          efficiency.
        </p>
        <br />

        <ol className="ml-6">
          <li>
            <span className="font-bold">
              &bull; Primitive Data Structures:{" "}
            </span>
            These are the most basic data structures, such as integers, floats,
            characters, and pointers. They directly operate upon the machine
            instructions.
          </li>
          <br />
          <li>
            <span className="font-bold">
              &bull; Non-Primitive Data Structures:{" "}
            </span>
            These are more complex and can be divided into linear and non-linear
            data structures. Examples include arrays, lists, stacks, queues,
            trees, and graphs.
          </li>
        </ol>

        <br />
        <ol className="ml-6">
          <li>
            <span className="font-bold">&bull; Linear Data Structures: </span>
            In these structures, data elements are arranged sequentially or
            linearly, where each element is connected to its previous and next
            element. Examples include arrays, linked lists, stacks, and queues.
          </li>
          <br />
          <li>
            <span className="font-bold">
              &bull; Non-Linear Data Structures:{" "}
            </span>
            Data elements are not in sequence. Examples include trees and
            graphs. These structures are used to represent hierarchical
            relationships.
          </li>
        </ol>
        <br />

        <ol className="ml-6">
          <li>
            <span className="font-bold">&bull; Static Data Structures: </span>
            These structures have a fixed size. Once the size is allocated, it
            cannot be changed. Examples include arrays and structures.
          </li>
          <br />
          <li>
            <span className="font-bold">&bull; Dynamic Data Structures: </span>
            These structures can grow or shrink in size as needed. Examples
            include linked lists, stacks, and queues that use dynamic memory
            allocation.
          </li>
        </ol>
      </MainChapter>

      <MainChapter id="choosing" title="Choosing the Right Data Structure">
        <p>
          Selecting the appropriate data structure is crucial for optimizing
          performance and ensuring efficient data management. Several factors
          should be considered when choosing a data structure for a particular
          application.
        </p>
        <br />

        <ol className="ml-6">
          <li>
            <span className="font-bold">&bull; Data Size and Structure: </span>
            The amount of data and its organization are fundamental in deciding
            the data structure. For example, large datasets might benefit from
            data structures that allow efficient search and retrieval.
          </li>
          <br />
          <li>
            <span className="font-bold">&bull; Frequency of Operations: </span>
            Consider how often different operations (insertion, deletion,
            access) will be performed. Data structures like hash tables are
            ideal for frequent search operations, while linked lists may be
            better for frequent insertions and deletions.
          </li>
          <br />
          <li>
            <span className="font-bold">&bull; Performance Requirements: </span>
            Evaluate the performance needs of your application. If speed is
            critical, choose a data structure that offers the best time
            complexity for the most common operations. For instance, trees and
            graphs may offer better performance for hierarchical data.
          </li>
        </ol>
        <br />
      </MainChapter>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Data Structures",
  description: "",
};

export default DataStructuresPage;
