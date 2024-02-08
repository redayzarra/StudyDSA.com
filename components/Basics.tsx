import { Accordion } from "@/components/ui/accordion";
import { basicAlgorithms } from "@/data/algoData";
import {
  arraySkills,
  hashmapSkills,
  linkedSkills,
  queueSkills,
} from "@/data/skillsData";
import { AiOutlineNodeIndex } from "react-icons/ai";
import { MdDataArray, MdDataObject, MdLinearScale } from "react-icons/md";
import Algorithms from "./Algorithms";
import SkillTreeHeading from "./SkillTreeHeading";
import SkillTreeItem from "./SkillTreeItem";

const Basics = () => {
  return (
    <div className="w-full shadow-lg rounded-md bg-slate-200/50 dark:bg-zinc-950/50 border-t-2 border-white dark:border-border px-8 py-4">
      <SkillTreeHeading>Basics</SkillTreeHeading>
      {/* The Basics */}
      <h2 className="font-[650] mb-2 text-[1.15rem]">Data Structures</h2>
      <div className="grid gap-x-8 grid-cols-1 xm:grid-cols-2">
        {/* First Column */}
        <Accordion type="multiple">
          {/* Arrays */}
          <SkillTreeItem items={arraySkills} name="Arrays" value="arrays">
            <MdDataArray size={30} />
          </SkillTreeItem>
          {/* Linked Lists */}
          <SkillTreeItem
            items={linkedSkills}
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
            items={hashmapSkills}
          >
            <MdDataObject size={30} />
          </SkillTreeItem>
          <SkillTreeItem name="Queues" value="queues" items={queueSkills}>
            <MdLinearScale size={35} />
          </SkillTreeItem>
        </Accordion>
      </div>

      <h2 className="font-[650] mb-5 mt-10 text-[1.15rem]">Algorithms</h2>
      <Algorithms items={basicAlgorithms} />
    </div>
  );
};

export default Basics;