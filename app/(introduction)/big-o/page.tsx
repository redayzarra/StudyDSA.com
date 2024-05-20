import { Metadata } from "next";
import MainChapter from "../_components/MainChapter";
import MainHeading from "../_components/MainHeading";
import {
  bigOAlgorithmsCode,
  challengingExample,
  easyExample,
  harderExample,
  notations,
} from "./bigCode";
import CodeBlock from "@/components/CodeBlock";
import { arrayOperations } from "@/data/operationsData";
import Notations from "../../../components/Notations";
import ImageBlock from "@/components/ImageBlock";
import { CodeText } from "@/components/CodeText";
import TextLink from "@/components/TextLink";

const BigOPage = async () => {
  return (
    <div className="space-y-8">
      <MainHeading
        title="Big O Notation"
        description="A mathematical notation to describe the performance and complexity of algorithms."
      />

      <MainChapter id="definition" title="Definition">
        <p>
          Big O notation is used to describe an algorithm&apos;s{" "}
          <strong>performance</strong> or complexity,{" "}
          <strong>focusing on the most significant factors</strong> affecting
          its execution time or space.
        </p>
      </MainChapter>

      <MainChapter id="notation" title="Notations">
        <p>
          Understanding different notations is necessary for analyzing and
          comparing the efficiency of algorithms. The following table provides a
          detailed overview of common Big-O notations you will encounter:
        </p>
        <Notations items={notations} />
        <p>
          These notations help in predicting{" "}
          <strong>how the performance of an algorithm changes</strong> with the
          size of the input. By understanding and recognizing these patterns,
          developers can make informed decisions about which algorithms and data
          structures to use based on the specific requirements and constraints
          of their applications.
        </p>
        <ImageBlock
          src="/images/big-o/Notations.jpg"
          alt="Graph of different time complexities in comparison"
        />
      </MainChapter>

      <MainChapter id="analyzing" title="Analyzing Algorithms">
        <p>To determine the complexity of an algorithm, follow these steps:</p>
        <br />
        <ol className="ml-6">
          <li>
            <span className="font-bold">Identify: </span>
            Look for the basic operations in the algorithm that contribute to
            its running time. These are the fundamental steps the algorithm
            takes, such as comparisons, assignments, arithmetic operations, and
            loops.
          </li>
          <br />
          <li>
            <span className="font-bold">Scaling: </span>
            Determine how the execution time of these operations scales with the
            input size. Analyze how the number of basic operations changes as
            the size of the input increases. A helpful trick is to ask yourself:{" "}
            <span className="italic">
              &quot;What about an input size of a billion?&quot;
            </span>
          </li>
          <br />
          <li>
            <span className="font-bold">Significance: </span>
            Focus on the most significant term and ignore constant factors and
            less significant terms. In Big-O notation, we are concerned with the
            term that grows the fastest as the input size increases because it
            dominates the overall time complexity.
          </li>
          <br />
          <li>
            <span className="font-bold">Worst-case Scenario: </span>
            Analyze the algorithm&apos;s performance in the worst-case scenario.
            Big-O notation typically describes the upper bound of an algorithm&apos;s
            running time, representing the longest time it could take to
            complete. This helps in understanding the maximum resources
            required.
          </li>
        </ol>
      </MainChapter>

      <MainChapter id="easy-example" title="Easy Example">
        <p>
          Let&apos;s consider a simple example to understand how to analyze the time
          complexity of different algorithms. The code below shows a loop that
          iterates through an array of size <CodeText>n</CodeText>:
        </p>
        <CodeBlock
          code={easyExample}
          language="python"
          title="EasyExample.py"
        />
        <br />
        <p>
          Let&apos;s apply the <TextLink href="/big-o#analyzing">steps</TextLink> we
          discussed earlier and walk through the code step-by-step:
        </p>
        <br />
        <ol className="ml-6">
          <li>
            <span className="font-bold">Identify:</span> The basic operation in
            this algorithm is the loop that iterates through the array and
            prints each element. The primary operations are the iteration (loop
            control) and the print statement.
          </li>
          <br />
          <li>
            <span className="font-bold">Scaling:</span> The loop runs once for
            each element in the array, so if the array has n elements, the loop
            will execute n times. This means the execution time scales linearly
            with the input size. If the input size were a billion, the loop
            would still run a billion times.
          </li>
          <br />
          <li>
            <span className="font-bold">Significance:</span> The most
            significant term here is n, representing the number of iterations.
            Constant factors, such as the time taken to print each element, are
            less significant and can be ignored in Big-O notation.
          </li>
          <br />
          <li>
            <span className="font-bold">Worst-case Scenario:</span> The
            worst-case scenario is the same as the best-case scenario for this
            simple loop: the loop will always run n times. Therefore, the time
            complexity in the worst-case scenario is O(n).
          </li>
          <br />
        </ol>
        <p>
          <strong>Answer:</strong> The loop runs <CodeText>n</CodeText> times,
          so the time complexity is <CodeText>O(n)</CodeText>.
        </p>
      </MainChapter>

      <MainChapter id="harder-example" title="Harder Example">
        <p>
          This example demonstrates using{" "}
          <TextLink href="/algorithms/binary-search">binary search</TextLink> to
          find the minimum eating speed such that all piles are eaten within a
          given number of hours:
        </p>
        <CodeBlock
          code={harderExample}
          language="python"
          title="HarderExample.py"
        />
        <br />
        <p>
          To determine the time complexity of this algorithm, follow these{" "}
          <TextLink href="/big-o#analyzing">steps</TextLink>:
        </p>
        <br />
        <ol className="ml-6">
          <li>
            <span className="font-bold">Identify:</span> The basic operations in
            this algorithm include the{" "}
            <TextLink href="/algorithms/binary-search">binary search</TextLink>{" "}
            loop, the calculation of total hours for a given speed, and the
            comparison operations to adjust the search range.
          </li>
          <br />
          <li>
            <span className="font-bold">Scaling:</span> We know that binary
            search runs in <CodeText>O(log m)</CodeText> time, where{" "}
            <CodeText>m</CodeText> is the range from 1 to the maximum number of
            piles. For each iteration of the binary search, the algorithm
            calculates the total hours required, which involves iterating
            through all piles, taking <CodeText>O(n)</CodeText> time where n is
            the number of piles. Thus, the total time complexity is{" "}
            <CodeText>O(n log m)</CodeText>.
          </li>
          <br />
          <li>
            <span className="font-bold">Significance:</span> The most
            significant term here is the product of the binary search complexity
            <CodeText>(log m)</CodeText> and the iteration through the piles{" "}
            <CodeText>(n)</CodeText>. Constant factors and less significant
            terms are ignored in Big-O notation.
          </li>
          <br />
          <li>
            <span className="font-bold">Worst-case Scenario:</span> The
            worst-case scenario is when the binary search runs its maximum
            number of iterations, and each iteration requires scanning through
            all the piles. The time complexity in the worst-case scenario
            remains <CodeText>O(n log m)</CodeText>.
          </li>
          <br />
        </ol>
        <p>
          <strong>Answer:</strong> The binary search runs in{" "}
          <CodeText>O(log m</CodeText>) time, and for each iteration, it scans
          all piles in <CodeText>O(n)</CodeText> time. This results in a total
          time complexity of <CodeText>O(n log m)</CodeText>.
        </p>
      </MainChapter>

      <MainChapter id="challenging-example" title="Challenging Example">
        <p>
          This example demonstrates generating all permutations of a list of
          numbers using{" "}
          <TextLink href="/algorithms/depth-first-search">
            depth-first search
          </TextLink>
          :
        </p>
        <CodeBlock
          code={challengingExample}
          language="python"
          title="ChallengingExample.py"
        />
        <br />
        <p>
          To determine the time complexity of this algorithm, follow these{" "}
          <TextLink href="/big-o#analyzing">steps</TextLink>:
        </p>
        <br />
        <ol className="ml-6">
          <li>
            <span className="font-bold">Identify:</span> The basic operations in
            this algorithm include the{" "}
            <TextLink href="/algorithms/depth-first-search">
              depth-first search
            </TextLink>{" "}
            (DFS) recursion and the iteration over the numbers in the list to
            build permutations.
          </li>
          <br />
          <li>
            <span className="font-bold">Scaling:</span> The DFS function
            explores all possible permutations of the input list. For each
            position in the list, it tries every number that hasn&apos;t been used
            yet, leading to <CodeText>n!</CodeText> (factorial of n)
            permutations. Thus, the DFS function is called{" "}
            <CodeText>O(n!)</CodeText> times, and within each call, it performs
            operations that take <CodeText>O(n</CodeText>) time.
          </li>
          <br />
          <li>
            <span className="font-bold">Significance:</span> The most
            significant term here is the product of the number of permutations
            <CodeText>(n!)</CodeText> and the operations within each DFS call{" "}
            <CodeText>(n)</CodeText>. Constant factors and less significant
            terms are ignored in Big-O notation. Therefore, the time complexity
            is <CodeText>O(n * n!)</CodeText>.
          </li>
          <br />
          <li>
            <span className="font-bold">Worst-case Scenario:</span> The
            worst-case scenario for this algorithm involves generating all
            permutations for the input list, which is also the typical scenario.
            The time complexity in the worst-case scenario is{" "}
            <CodeText>O(n * n!)</CodeText>.
          </li>
          <br />
        </ol>
        <p>
          <strong>Answer:</strong> The DFS function runs in{" "}
          <CodeText>O(n * n!)</CodeText> time because it generates all possible
          permutations of the input list and performs operations for each
          permutation.
        </p>
      </MainChapter>

      <MainChapter id="best-practices" title="Best Practices">
        <p>
          When working with algorithms, keep the following tips in mind to
          optimize their performance:
        </p>
        <br />
        <ul className="ml-6">
          <li>
            <span className="font-bold">Understand the problem:</span> Clearly
            define the problem and identify the requirements before choosing an
            algorithm. Break down the problem, consider edge cases, and ensure
            you understand the input and output requirements.
          </li>
          <br />
          <li>
            <span className="font-bold">Choose the right data structures:</span>{" "}
            Selecting the right data structures can significantly impact the
            efficiency of your algorithm. For example, using a hash map can
            reduce the time complexity of search operations from{" "}
            <CodeText>O(n)</CodeText> to <CodeText>O(1)</CodeText>.
          </li>
          <br />
          <li>
            <span className="font-bold">Base Cases:</span>
            Ensure that your algorithm handles base cases first. Base cases
            are the simplest, smallest instances of the problem, and they help
            prevent infinite recursion or iterations.
          </li>
          <br />
          <li>
            <span className="font-bold">Space-Time Tradeoff:</span> Consider the
            trade-offs between time and space complexity, and choose the
            approach that best suits your needs. Sometimes, using more memory
            can reduce the time complexity, or vice versa.
          </li>
          <br />
        </ul>
      </MainChapter>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Big O Notation",
  description: "",
};

export default BigOPage;
