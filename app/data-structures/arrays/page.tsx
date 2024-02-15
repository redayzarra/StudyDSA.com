import findChapter from "@/actions/chapters/findChapter";
import getTopicByName from "@/actions/topics/getTopicByName";
import ChapterHeading from "@/components/ChapterHeading";
import Heading from "@/components/Heading";
import Operations from "@/components/Operations";
import { arrayOperations } from "@/data/operationsData";

const ArraysPage = async () => {
  const topic = await getTopicByName("Arrays");

  // I will have to change this later
  if (!topic) {
    console.error("Topic not found");
    return <div>Topic not found</div>;
  }

  const definitionChapter = findChapter(topic, "Definition");

  return (
    <div className="space-y-8">
      <Heading topic={topic!} />
      <ChapterHeading id="#definition" title="Definition">
        Arrays are a collection of items that are stored contiguously (stored
        together) in memory and can be accessed with addresses. These items are
        of the same type, and the size of the array is fixed upon creation.
      </ChapterHeading>
      <ChapterHeading id="#operations" title="Operations">
        Let's take a closer look at what you can do with arrays. Arrays are
        stored in memory together so inserting or deleting in the middle
        involves moving things around. The following table provides a
        detailed overview of everything you can do with arrays:
      </ChapterHeading>
      <Operations items={arrayOperations}></Operations>
      <ChapterHeading id="#pointers" title="Pointers">
        
      </ChapterHeading>
    </div>
  );
};

export default ArraysPage;
