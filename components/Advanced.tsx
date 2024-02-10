import getAlgorithms from "@/actions/getAlgorithms";
import { Accordion } from "@/components/ui/accordion";
import { arraySkills, disjointSetSkills, segmentTreeSkills } from "@/data/skillsData";
import { PiGraph } from "react-icons/pi";
import { TbBinaryTree, TbVector } from "react-icons/tb";
import Algorithms from "./Algorithms";
import SkillTreeHeading from "./SkillTreeHeading";
import SkillTreeItem from "./SkillTreeItem";

const Advanced = async () => {
  const advancedAlgorithms = await getAlgorithms("advanced");

  return (
    <div className="w-full pb-10 shadow-lg rounded-md bg-slate-200/50 dark:bg-zinc-950/50 border-t-2 border-white dark:border-border px-8 py-4">
      <SkillTreeHeading>Advanced</SkillTreeHeading>
      {/* Advanced Data Structures */}
      <h2 className="font-semibold mt-10 mb-2">Data Structures</h2>
      <div className="grid gap-x-8 grid-cols-1 xm:grid-cols-2">
        {/* First Column */}
        <Accordion type="multiple">
          <SkillTreeItem
            items={segmentTreeSkills}
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
            items={disjointSetSkills}
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

      <h2 className="font-[650] mb-5 mt-10 text-[1.15rem]">Algorithms</h2>
      <Algorithms items={advancedAlgorithms} />
    </div>
  );
};

export default Advanced;
