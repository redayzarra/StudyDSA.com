import ProblemStats from "./ProblemStats";
import QuestionsTabs from "./QuestionsTabs";
import { ScrollArea } from "./ui/scroll-area";

const TableOfProblems = () => {

  return (
    <ScrollArea className="h-full mt-2 pr-6 py-4 w-[250px] overflow-visible">
      <div className="space-y-6">
        <ProblemStats />
        <QuestionsTabs />
      </div>
    </ScrollArea>
  );
};

export default TableOfProblems;
