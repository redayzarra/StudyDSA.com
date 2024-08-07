import getChaptersByTopic from "@/actions/chapters/getChapters";
import { Accordion } from "@/components/ui/accordion";
import { AiOutlineNodeIndex } from "react-icons/ai";
import { MdDataArray, MdDataObject, MdLinearScale } from "react-icons/md";
import SkillTreeContainer from "./SkillTreeContainer";
import SkillTreeHeading from "./SkillTreeHeading";
import SkillTreeItem from "./SkillTreeItem";

const Basics = async () => {
  // Fetch all chapters
  const arrayChapters = await getChaptersByTopic(1);
  const linkedListChapters = await getChaptersByTopic(2);
  const hashmapChapters = await getChaptersByTopic(3);
  const queueChapters = await getChaptersByTopic(4);

  return (
    <SkillTreeContainer id="basics">
      <SkillTreeHeading>Basics</SkillTreeHeading>
      {/* The Basics */}
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
    </SkillTreeContainer>
  );
};

export default Basics;
