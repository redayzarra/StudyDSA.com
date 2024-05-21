import getAlgorithms from "@/actions/algorithms/getAlgorithms";
import Algorithms from "@/components/Algorithms";
import SkillTreeContainer from "@/components/SkillTreeContainer";
import SkillTreeHeading from "@/components/SkillTreeHeading";

const BasicAlgorithms = async () => {

  // Fetch all the algorithms
  const basicAlgorithms = await getAlgorithms("basic");

  return (
    <SkillTreeContainer id="basics">
      <SkillTreeHeading>Basics</SkillTreeHeading>
      <Algorithms items={basicAlgorithms || []} />
    </SkillTreeContainer>
  );
};

export default BasicAlgorithms;
