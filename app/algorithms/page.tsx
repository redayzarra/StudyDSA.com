import { Metadata } from "next";
import MainChapter from "../(introduction)/_components/MainChapter";
import MainHeading from "../(introduction)/_components/MainHeading";
import AdvancedAlgorithms from "./_components/AdvancedAlgorithms";
import BasicAlgorithms from "./_components/BasicAlgorithms";
import IntermediateAlgorithms from "./_components/IntermediateAlgorithms";
import TextLink from "@/components/TextLink";

const AlgorithmsPage = async () => {
  return (
    <div className="space-y-8">
      <MainHeading
        title="Algorithms"
        description="A step-by-step procedure for solving a problem or accomplishing a task."
      />

      <MainChapter id="definition" title="Definition">
        <p>
          An algorithm is a step-by-step procedure or formula for solving a
          problem. In computer science, algorithms are essential for performing
          calculations, data processing, and automated reasoning tasks.
        </p>
      </MainChapter>

      <BasicAlgorithms />
      <IntermediateAlgorithms />
      <AdvancedAlgorithms />

      <MainChapter id="importance" title="Importance">
        <p>
          Algorithms are important because they optimize the efficiency of
          programs, enabling tasks to be completed quickly and using fewer
          resources. They provide a clear, step-by-step method for solving
          problems, making complex tasks more manageable.
        </p>
        <br />
        <p>
          Efficient algorithms ensure reliable and consistent results, can be
          reused across different projects, and scale well to handle increasing
          amounts of data or users. As the foundation of all computer programs,
          algorithms are crucial for creating effective and reliable software.
        </p>
      </MainChapter>

      <MainChapter id="complexity" title="Complexity">
        <p>
          Algorithm complexity is a measure of the amount of time and/or space
          required by an algorithm for an input of a given size (n). It is often
          expressed using <TextLink href="/big-o">Big-O notation</TextLink>,
          which describes the upper bound of an algorithm&apos;s running time or
          space requirements in the worst-case scenario.
        </p>
        <br />
        <ul className="ml-6">
          <li>
            <span className="font-bold">&bull; Time Complexity: </span>
            This measures the amount of time an algorithm takes to complete as a
            function of the length of the input. It helps in understanding how
            the running time of an algorithm increases with the size of the
            input.
          </li>
          <br />
          <li>
            <span className="font-bold">&bull; Space Complexity: </span>
            This measures the amount of memory an algorithm uses in terms of the
            size of the input. It helps in understanding how the memory
            requirements of an algorithm grow with the size of the input.
          </li>
        </ul>
      </MainChapter>

      <MainChapter id="problemSolving" title="Problem Solving">
        <p>
          Selecting the right algorithm is imporant for solving a problem
          efficiently. Choosing the wrong algorithm can significantly impact the
          performance and scalability of your solution. Here are some key
          factors to consider when choosing an algorithm:
        </p>
        <br />
        <ul className="ml-6">
          <li>
            <span className="font-bold">&bull; Problem Type: </span>
            Different algorithms are suited to different types of problems. For
            example, dynamic programming is ideal for optimization problems,
            where the solution can be broken down into simpler subproblems and
            reused. Understanding the nature of the problem helps in selecting
            an algorithm that can solve it effectively.
          </li>
          <br />
          <li>
            <span className="font-bold">&bull; Data Structure: </span>
            The choice of{" "}
            <TextLink href="/data-structures">data structure</TextLink> can
            significantly affect the performance of an algorithm. Choosing the
            right data structure ensures that the algorithm can perform its
            operations efficiently.
          </li>
          <br />
          <li>
            <span className="font-bold">&bull; Space-Time Tradeoff: </span>
            Consider both the time and space complexity of an algorithm. For
            time-critical applications, an algorithm with a lower time
            complexity is preferred, even if it uses more memory. Similarly, for
            better memory, an algorithm with a lower space complexity may be
            more suitable.
          </li>
          <br />
          <li>
            <span className="font-bold">&bull; Scalability: </span>
            Consider how the algorithm performs as the size of the input data
            grows. An algorithm that works well for small datasets might become
            impractical for larger ones. Make sure that the chosen algorithm can
            scale efficiently with the input size, especially for applications
            expected to handle large volumes of data.
          </li>
          <br />
        </ul>
      </MainChapter>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Algorithms",
  description: "",
};

export default AlgorithmsPage;
