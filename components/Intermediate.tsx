import { Accordion } from "@/components/ui/accordion";
import {
  arraySkills,
  graphSkills,
  hashmapSkills,
  heapSkills,
  linkedSkills,
  queueSkills,
  segmentSkills,
  treeSkills,
  trieSkills,
} from "@/data/skillsData";
import { AiOutlineNodeIndex } from "react-icons/ai";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { MdDataArray, MdDataObject, MdLinearScale } from "react-icons/md";
import { TbBinaryTree, TbBinaryTree2, TbVector } from "react-icons/tb";
import SkillTreeHeading from "./SkillTreeHeading";
import SkillTreeItem from "./SkillTreeItem";
import { PiGraph } from "react-icons/pi";

const Intermediate = () => {
  return (
    <div className="w-full shadow-lg rounded-md bg-slate-200/50 dark:bg-zinc-950/50 border-t-2 border-white dark:border-border px-8 py-4">
      <SkillTreeHeading>Intermediate</SkillTreeHeading>
      {/* Intermediate Data Structrues */}
      <h2 className="font-semibold mt-10 mb-2">Data Structures</h2>
      <div className="grid gap-x-8 grid-cols-1 xm:grid-cols-2">
        {/* First Column */}
        <Accordion type="multiple">
          {/* Trees */}
          <SkillTreeItem items={treeSkills} name="Trees" value="trees">
            <TbBinaryTree size={30} />
          </SkillTreeItem>
          {/* Graphs */}
          <SkillTreeItem items={graphSkills} name="Graphs" value="graphs">
            <TbVector size={28} />
          </SkillTreeItem>
        </Accordion>

        {/* Second Column */}
        <Accordion type="multiple">
          {/* Heaps */}
          <SkillTreeItem name="Heaps" value="heaps" items={heapSkills}>
            <FaArrowUpRightDots size={26} />
          </SkillTreeItem>
          {/* Tries */}
          <SkillTreeItem name="Tries" value="tries" items={trieSkills}>
            <TbBinaryTree2 size={28} />
          </SkillTreeItem>
        </Accordion>
      </div>

      {/* Advanced Data Structures */}
      <h2 className="font-semibold mt-10 mb-2">Algorithms</h2>
      <div className="grid gap-x-8 grid-cols-1 xm:grid-cols-2">
        {/* First Column */}
        <Accordion type="multiple">
          <SkillTreeItem
            items={segmentSkills}
            name="Segment Trees"
            value="segmentTrees"
          >
            <TbBinaryTree size={30} />
          </SkillTreeItem>
          <SkillTreeItem
            items={arraySkills}
            name="Weighted Graphs"
            value="weightedGraphs"
          >
            <TbVector size={28} />
          </SkillTreeItem>
        </Accordion>

        {/* Second Column */}
        <Accordion type="multiple">
          <SkillTreeItem
            name="Disjoint Sets"
            value="hashmaps"
            items={linkedSkills}
          >
            <PiGraph size={30} />
          </SkillTreeItem>
          <SkillTreeItem
            items={arraySkills}
            name="Directed Acyclic Graphs"
            value="weightedGraphs"
          >
            <TbVector size={28} />
          </SkillTreeItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Intermediate;
