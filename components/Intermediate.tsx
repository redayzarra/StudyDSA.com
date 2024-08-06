import getChaptersByTopic from "@/actions/chapters/getChapters";
import { Accordion } from "@/components/ui/accordion";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { TbBinaryTree, TbBinaryTree2, TbVector } from "react-icons/tb";
import SkillTreeContainer from "./SkillTreeContainer";
import SkillTreeHeading from "./SkillTreeHeading";
import SkillTreeItem from "./SkillTreeItem";

const Intermediate = async () => {
  // Fetch chapters
  const treeChapters = await getChaptersByTopic(5);
  const heapChapters = await getChaptersByTopic(6);
  const graphChapters = await getChaptersByTopic(7);
  const trieChapters = await getChaptersByTopic(8);

  return (
    <SkillTreeContainer id="intermediate">
      <SkillTreeHeading>Intermediate</SkillTreeHeading>
      {/* Intermediate Data Structrues */}
      <div className="grid gap-x-8 grid-cols-1 xm:grid-cols-2">
        {/* First Column */}
        <Accordion type="multiple">
          {/* Trees */}
          <SkillTreeItem items={treeChapters} name="Trees" value="trees">
            <TbBinaryTree size={30} />
          </SkillTreeItem>
          {/* Graphs */}
          <SkillTreeItem items={graphChapters} name="Graphs" value="graphs">
            <TbVector size={28} />
          </SkillTreeItem>
        </Accordion>

        {/* Second Column */}
        <Accordion type="multiple">
          {/* Heaps */}
          <SkillTreeItem name="Heaps" value="heaps" items={heapChapters}>
            <FaArrowUpRightDots size={26} />
          </SkillTreeItem>
          {/* Tries */}
          <SkillTreeItem name="Tries" value="tries" items={trieChapters}>
            <TbBinaryTree2 size={28} />
          </SkillTreeItem>
        </Accordion>
      </div>
    </SkillTreeContainer>
  );
};

export default Intermediate;
