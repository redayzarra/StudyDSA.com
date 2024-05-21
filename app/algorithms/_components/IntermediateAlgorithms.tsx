import getAlgorithms from "@/actions/algorithms/getAlgorithms";
import Algorithms from "@/components/Algorithms";
import SkillTreeContainer from "@/components/SkillTreeContainer";
import SkillTreeHeading from "@/components/SkillTreeHeading";

const IntermediateAlgorithms = async () => {

  // Fetch all the algorithms
  const intermediateAlgorithms = await getAlgorithms("intermediate");

  return (
    <SkillTreeContainer id="intermediate">
      <SkillTreeHeading>Intermediate</SkillTreeHeading>
      <Algorithms items={intermediateAlgorithms || []} />
    </SkillTreeContainer>
  );
};

export default IntermediateAlgorithms;
