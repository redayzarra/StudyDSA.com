import getTopicByName from "@/actions/topics/getTopicByName";
import Heading from "@/components/Heading";
import { redirect } from "next/navigation";
import { TiArrowRight } from "react-icons/ti";

const ArraysPage = async () => {
  const topic = await getTopicByName("Arrays");

  return (
    <div className="">
      <Heading topic={topic!} />
    </div>
  );
};

export default ArraysPage;
