import getChaptersByTopic from "@/actions/chapters/getChapters";
import { Accordion } from "@/components/ui/accordion";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { TbBinaryTree, TbBinaryTree2, TbVector } from "react-icons/tb";
import SkillTreeContainer from "./SkillTreeContainer";
import SkillTreeHeading from "./SkillTreeHeading";
import SkillTreeItem from "./SkillTreeItem";
import getUserId from "@/hooks/server/getUserId";

const Intermediate = async () => {
  // Fetch the userId
  const userId = await getUserId();

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
          <SkillTreeItem
            userId={userId}
            items={treeChapters}
            name="Trees"
            value="trees"
          >
            <TbBinaryTree size={30} />
          </SkillTreeItem>
          {/* Graphs */}
          <SkillTreeItem
            userId={userId}
            items={graphChapters}
            name="Graphs"
            value="graphs"
          >
            <TbVector size={28} />
          </SkillTreeItem>
        </Accordion>

        {/* Second Column */}
        <Accordion type="multiple">
          {/* Heaps */}
          <SkillTreeItem
            name="Heaps"
            value="heaps"
            userId={userId}
            items={heapChapters}
          >
            <FaArrowUpRightDots size={26} />
          </SkillTreeItem>
          {/* Tries */}
          <SkillTreeItem
            name="Tries"
            value="tries"
            userId={userId}
            items={trieChapters}
          >
            <TbBinaryTree2 size={28} />
          </SkillTreeItem>
        </Accordion>
      </div>
      {/* 
      <h2 className="font-[650] mb-5 mt-10 text-[1.15rem]">Algorithms</h2>
      <Algorithms userId={userId} items={intermediateAlgorithms} /> */}
    </SkillTreeContainer>
  );
};

export default Intermediate;
