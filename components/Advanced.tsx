import getAlgorithms from "@/actions/algorithms/getAlgorithms";
import { Accordion } from "@/components/ui/accordion";
import { PiGraph } from "react-icons/pi";
import { TbBinaryTree, TbVector } from "react-icons/tb";
import Algorithms from "./Algorithms";
import SkillTreeHeading from "./SkillTreeHeading";
import SkillTreeItem from "./SkillTreeItem";
import getChaptersByTopic from "@/actions/chapters/getChapters";

const Advanced = async () => {
  // Fetch algorithms
  const advancedAlgorithms = await getAlgorithms("advanced");

  // Fetch chapters
  const dagChapters = await getChaptersByTopic("Directed Acyclic Graphs");
  const weightedChapters = await getChaptersByTopic("Weighted Graphs");
  const disjointChapters = await getChaptersByTopic("Disjoint Sets");
  const segmentChapters = await getChaptersByTopic("Segment Trees");

  return (
    <div className="w-full pb-10 shadow-lg rounded-md bg-slate-200/50 dark:bg-zinc-950/50 border-t-2 border-white dark:border-border px-8 py-4">
      <SkillTreeHeading>Advanced</SkillTreeHeading>
      {/* Advanced Data Structures */}
      <h2 className="font-semibold mt-10 mb-2">Data Structures</h2>
      <div className="grid gap-x-8 grid-cols-1 xm:grid-cols-2">
        {/* First Column */}
        <Accordion type="single" defaultValue="dag" collapsible>
          <SkillTreeItem
            items={dagChapters}
            name="Directed Acyclic Graphs"
            value="dag"
          >
            <TbVector size={28} />
          </SkillTreeItem>
          <SkillTreeItem
            items={weightedChapters}
            name="Weighted Graphs"
            value="weightedGraphs"
          >
            <TbVector size={28} />
          </SkillTreeItem>
        </Accordion>

        {/* Second Column */}
        <Accordion type="single" defaultValue="disjointSet" collapsible>
          <SkillTreeItem
            name="Disjoint Sets"
            value="disjointSet"
            items={disjointChapters}
          >
            <PiGraph size={30} />
          </SkillTreeItem>
          <SkillTreeItem
            items={segmentChapters}
            name="Segment Trees"
            value="segmentTrees"
          >
            <TbBinaryTree size={30} />
          </SkillTreeItem>
        </Accordion>
      </div>

      <h2 className="font-[650] mb-5 mt-10 text-[1.15rem]">Algorithms</h2>
      <Algorithms items={advancedAlgorithms} />
    </div>
  );
};

export default Advanced;
