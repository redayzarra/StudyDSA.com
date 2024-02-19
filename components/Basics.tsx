import getAlgorithms from "@/actions/algorithms/getAlgorithms";
import { Accordion } from "@/components/ui/accordion";
import { AiOutlineNodeIndex } from "react-icons/ai";
import { MdDataArray, MdDataObject, MdLinearScale } from "react-icons/md";
import Algorithms from "./Algorithms";
import SkillTreeHeading from "./SkillTreeHeading";
import SkillTreeItem from "./SkillTreeItem";
import getChaptersByTopic from "@/actions/chapters/getChapters";
import SkillTreeContainer from "./SkillTreeContainer";

const Basics = async () => {

  // Fetch all the algorithms
  const basicAlgorithms = await getAlgorithms("basic");

  // Fetch all chapters
  const arrayChapters = await getChaptersByTopic("Arrays");
  const linkedListChapters = await getChaptersByTopic("Linked Lists");
  const hashmapChapters = await getChaptersByTopic("Hashmaps");
  const queueChapters = await getChaptersByTopic("Queues");

  return (
    <SkillTreeContainer id="basics">
      <SkillTreeHeading>Basics</SkillTreeHeading>
      {/* The Basics */}
      <h2 className="font-[650] mb-2 text-[1.15rem]">Data Structures</h2>
      <div className="grid gap-x-8 grid-cols-1 xm:grid-cols-2">
        {/* First Column */}
        <Accordion type="multiple">
          {/* Arrays */}
          <SkillTreeItem items={arrayChapters} name="Arrays" value="arrays">
            <MdDataArray size={30} />
          </SkillTreeItem>
          {/* Linked Lists */}
          <SkillTreeItem
            items={linkedListChapters}
            name="Linked Lists"
            value="linkedLists"
          >
            <AiOutlineNodeIndex size={30} />
          </SkillTreeItem>
        </Accordion>

        {/* Second Column */}
        <Accordion type="multiple">
          {/* Hashmaps */}
          <SkillTreeItem
            name="Hashmaps & Sets"
            value="hashmaps"
            items={hashmapChapters}
          >
            <MdDataObject size={30} />
          </SkillTreeItem>
          <SkillTreeItem name="Queues" value="queues" items={queueChapters}>
            <MdLinearScale size={35} />
          </SkillTreeItem>
        </Accordion>
      </div>

      <h2 className="font-[650] mb-5 mt-10 text-[1.15rem]">Algorithms</h2>
      <Algorithms items={basicAlgorithms || []} />
    </SkillTreeContainer>
  );
};

export default Basics;
