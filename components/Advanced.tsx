import getAlgorithms from "@/actions/algorithms/getAlgorithms";
import { Accordion } from "@/components/ui/accordion";
import { PiGraph } from "react-icons/pi";
import { TbBinaryTree } from "react-icons/tb";
import Algorithms from "./Algorithms";
import SkillTreeHeading from "./SkillTreeHeading";
import SkillTreeItem from "./SkillTreeItem";
import getChaptersByTopic from "@/actions/chapters/getChapters";
import SkillTreeContainer from "./SkillTreeContainer";

const Advanced = async () => {
  // Fetch algorithms
  const advancedAlgorithms = await getAlgorithms("advanced");

  // Fetch chapters
  const unionFindChapters = await getChaptersByTopic("Union Find");
  const segmentChapters = await getChaptersByTopic("Segment Trees");

  return (
    <SkillTreeContainer id="advanced">
      <SkillTreeHeading>Advanced</SkillTreeHeading>
      {/* Advanced Data Structures */}
      <h2 className="font-[650] mb-2 text-[1.15rem]">Data Structures</h2>
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

      <h2 className="font-[650] mb-5 mt-10 text-[1.15rem]">Algorithms</h2>
      <Algorithms items={advancedAlgorithms} />
    </SkillTreeContainer>
  );
};

export default Advanced;
