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
        <p></p>
      </ChapterHeading>

      <ChapterHeading
        id="operations"
        title="Operations"
        chapterId={operationsChapter?.id}
      ></ChapterHeading>

      <ChapterHeading
        id="building"
        title="Building"
        chapter={buildingChapter}
        chapterId={buildingChapter?.id}
      >
        <p></p>
      </ChapterHeading>

      <ChapterHeading
        id="querying"
        title="Querying"
        chapter={queryingChapter}
        chapterId={queryingChapter?.id}
      ></ChapterHeading>

      <ChapterHeading
        id="updating"
        title="Updating"
        chapter={updatingChapter}
        chapterId={updatingChapter?.id}
      >
        <p></p>
      </ChapterHeading>

      <ChapterHeading
        id="lazy-propagation"
        title="Lazy Propagation"
        chapter={lazyChapter}
        chapterId={lazyChapter?.id}
      ></ChapterHeading>

      <ChapterHeading
        id="implementation"
        title="Implementation"
        chapterId={implementationChapter?.id}
      ></ChapterHeading>

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
