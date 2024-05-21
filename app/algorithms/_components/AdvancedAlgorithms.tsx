import getAlgorithms from "@/actions/algorithms/getAlgorithms";
import Algorithms from "@/components/Algorithms";
import SkillTreeContainer from "@/components/SkillTreeContainer";
import SkillTreeHeading from "@/components/SkillTreeHeading";

const AdvancedAlgorithms = async () => {

  // Fetch all the algorithms
  const advancedAlgorithms = await getAlgorithms("advanced");

  return (
    <SkillTreeContainer id="intermediate">
      <SkillTreeHeading>Advanced</SkillTreeHeading>
      <Algorithms items={advancedAlgorithms || []} />
    </SkillTreeContainer>
  );
};

export default AdvancedAlgorithms;
