import { AiOutlineFunction, AiOutlineNodeIndex } from "react-icons/ai";
import { TbSlash } from "react-icons/tb";

interface Props {
  type: "algorithm" | "dataStructure";
  completed: number;
  total: number;
}

const iconSize = 25;

const Progress = ({ type, completed, total }: Props) => {
  return (
    <div className="flex items-center">
      {type === "dataStructure" ? (
        <>
          <AiOutlineNodeIndex size={iconSize} className="mr-1.5" />
          <span className="font-medium">Data Structures: </span>
        </>
      ) : (
        <>
          <AiOutlineFunction size={iconSize} className="mr-1.5" />
          <span className="font-medium">Algorithms: </span>
        </>
      )}
      <div className="ml-2 font-bold text-lg text-muted-foreground flex items-center">
        <span className="text-yellow-500 dark:text-primary">{completed}</span>
        <TbSlash className="mx-0.5" />
        {total}
      </div>
    </div>
  );
};

export default Progress;
