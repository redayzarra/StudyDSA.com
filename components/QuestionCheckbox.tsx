import { Checkbox } from "./ui/checkbox"; // Adjust the import path as needed

interface Props {
  className?: string;
}

const QuestionCheckbox = ({ className }: Props) => {
  return <Checkbox className={`rounded-[4px] ${className}`} />;
};

export default QuestionCheckbox;
