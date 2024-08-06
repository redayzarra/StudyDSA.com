import getChaptersByTopic from "@/actions/chapters/getChapters";
import { Accordion } from "@/components/ui/accordion";
import { PiGraph } from "react-icons/pi";
import { TbBinaryTree } from "react-icons/tb";
import SkillTreeContainer from "./SkillTreeContainer";
import SkillTreeHeading from "./SkillTreeHeading";
import SkillTreeItem from "./SkillTreeItem";

const Advanced = async () => {
  // Fetch chapters
  const unionFindChapters = await getChaptersByTopic(9);
  const segmentChapters = await getChaptersByTopic(10);

  return (
    <SkillTreeContainer id="advanced">
      <SkillTreeHeading>Advanced</SkillTreeHeading>
      {/* Advanced Data Structures */}
      <div className="grid gap-x-8 grid-cols-1 xm:grid-cols-2">
        {/* First Column */}
        <Accordion type="multiple">
          <SkillTreeItem
            name="Union Find"
            value="unionFind"
            items={unionFindChapters}
          >
            <PiGraph size={30} />
          </SkillTreeItem>
        </Accordion>

        {/* Second Column */}
        <Accordion type="multiple">
          <SkillTreeItem
            items={segmentChapters}
            name="Segment Trees"
            value="segmentTrees"
          >
            <TbBinaryTree size={30} />
          </SkillTreeItem>
        </Accordion>
      </div>
    </SkillTreeContainer>
  );
};

export default Advanced;
