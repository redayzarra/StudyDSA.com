import { Accordion } from "@/components/ui/accordion";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { TbBinaryTree, TbBinaryTree2, TbVector } from "react-icons/tb";
import Algorithms from "./Algorithms";
import SkillTreeHeading from "./SkillTreeHeading";
import SkillTreeItem from "./SkillTreeItem";
import getAlgorithms from "@/actions/algorithms/getAlgorithms";
import getChaptersByTopic from "@/actions/chapters/getChapters";

const Intermediate = async () => {
  // Fetch algorithms
  const intermediateAlgorithms = await getAlgorithms("intermediate");

  // Fetch chapters
  const treeChapters = await getChaptersByTopic("Trees");
  const graphChapters = await getChaptersByTopic("Graphs");
  const heapChapters = await getChaptersByTopic("Heaps");
  const trieChapters = await getChaptersByTopic("Tries");

  return (
    <div className="w-full pb-10 shadow-lg rounded-md bg-slate-200/50 dark:bg-zinc-950/50 border-t-2 border-white dark:border-border px-8 py-4">
      <SkillTreeHeading>Intermediate</SkillTreeHeading>
      {/* Intermediate Data Structrues */}
      <h2 className="font-semibold mt-10 mb-2">Data Structures</h2>
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

      <h2 className="font-[650] mb-5 mt-10 text-[1.15rem]">Algorithms</h2>
      <Algorithms items={intermediateAlgorithms} />
    </div>
  );
};

export default Intermediate;
