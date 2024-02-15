import findChapter from "@/actions/chapters/findChapter";
import getTopicByName from "@/actions/topics/getTopicByName";
import Definition from "@/components/Definition";
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
    <div className="space-y-6">
      <Heading topic={topic!} />
      <Definition id="#definition" chapter={definitionChapter}>
        Arrays are a collection of items that are stored contiguously (stored
        together) in memory and can be accessed with addresses. These items are
        of the same type, and the size of the array is fixed upon creation.
      </Definition>
      <Operations items={arrayOperations}>
        A closer look at what you can do with arrays. The following table
        provides a detailed overview of everything you can do with arrays.
      </Operations>
    </div>
  );
};

export default ArraysPage;
