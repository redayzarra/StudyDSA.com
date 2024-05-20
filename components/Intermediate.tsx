import { Accordion } from "@/components/ui/accordion";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { TbBinaryTree, TbBinaryTree2, TbVector } from "react-icons/tb";
import Algorithms from "./Algorithms";
import SkillTreeHeading from "./SkillTreeHeading";
import SkillTreeItem from "./SkillTreeItem";
import getAlgorithms from "@/actions/algorithms/getAlgorithms";
import getChaptersByTopic from "@/actions/chapters/getChapters";
import SkillTreeContainer from "./SkillTreeContainer";

const Intermediate = async () => {
  // Fetch algorithms
  const intermediateAlgorithms = await getAlgorithms("intermediate");

  // Fetch chapters
  const treeChapters = await getChaptersByTopic("Trees");
  const graphChapters = await getChaptersByTopic("Graphs");
  const heapChapters = await getChaptersByTopic("Heaps");
  const trieChapters = await getChaptersByTopic("Tries");

  return (
    <SkillTreeContainer id="intermediate">

      <SkillTreeHeading>Intermediate</SkillTreeHeading>
      {/* Intermediate Data Structrues */}
      <h2 className="font-[650] mb-2 text-[1.15rem]">Data Structures</h2>
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
{/* 
      <h2 className="font-[650] mb-5 mt-10 text-[1.15rem]">Algorithms</h2>
      <Algorithms items={intermediateAlgorithms} /> */}
    </SkillTreeContainer>
  );
};

export default Intermediate;
