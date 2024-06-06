import getProblems from "@/actions/questions/getProblems";
import { QuestionsTable } from "@/components/QuestionsTable";
import QuestionsTabs from "@/components/QuestionsTabs";
import TextLink from "@/components/TextLink";
import { Separator } from "@/components/ui/separator";
import getUserId from "@/hooks/server/getUserId";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

const Blind75Page = async () => {
  const userId = await getUserId();

  // Fetching problems in groups
  const arrayProblems = await getProblems([76, 77, 78, 79, 80, 81, 7, 82]);
  const twoPointersProblems = await getProblems([83, 84, 12]);
  const slidingWindowProblems = await getProblems([85, 15, 86, 88]);
  const stackProblems = await getProblems([89]);
  const binarySearchProblems = await getProblems([90, 91]);
  const linkedlistProblems = await getProblems([31, 92, 93, 94, 95, 96]);
  const treesProblems = await getProblems([97, 33, 99, 100, 101, 102, 103, 104, 105, 106, 107]);
  const heapsProblems = await getProblems([108]);
  const backtrackingProblems = await getProblems([109, 110]);
  const triesProblems = await getProblems([70, 112, 113]);
  const graphsProblems = await getProblems([114, 115, 116, 117, 118, 119]);
  const advancedProblems = await getProblems([120]);
  const onedprogrammingProblems = await getProblems([121, 61, 123, 124, 125, 126, 127, 128, 129, 130]);
  const twodprogrammingProblems = await getProblems([31, 92, 93, 94, 95, 96]);
  const greedyProblems = await getProblems([133, 134]);
  const intervalsProblems = await getProblems([135, 136, 137, 138, 72]);
  const mathProblems = await getProblems([140, 141, 142]);
  const bitProblems = await getProblems([143, 67, 145, 146, 147]);

  return (
    <div className="">
      <div className="space-y-5 mt-4 md:mt-0">
        <h1 className={cn("text-4xl md:text-6xl font-bold", font.className)}>
          Blind 75 🧠
        </h1>
        <h2 className="dark:text-muted-foreground line-clamp-2">
          A beginner-friendly list curated by{" "}
          <TextLink
            href="https://leetcode.com/studyplan/leetcode-75/"
            external={true}
          >
            LeetCode
          </TextLink>
          . This list is a great way to introduce yourself to the core concepts
          and get in the rhythm of problem-solving.
        </h2>
      </div>
      <Separator className="my-4 self-stretch bg-border" />
      <div className="grid grid-cols-1 transition-all md:grid-cols-[1fr_5fr] gap-x-3">
        <div className="mt-4 hidden md:block">
          <QuestionsTabs />
        </div>
        <div className="w-full mt-4 space-y-12">
          <QuestionsTable
            title="Array / String"
            problems={arrayProblems}
            userId={userId}
          />
          <QuestionsTable
            title="Two Pointers"
            problems={twoPointersProblems}
            userId={userId}
          />
          <QuestionsTable
            title="Sliding Window"
            problems={slidingWindowProblems}
            userId={userId}
          />
          <QuestionsTable
            title="Stack"
            problems={stackProblems}
            userId={userId}
          />
          <QuestionsTable
            title="Binary Search"
            problems={binarySearchProblems}
            userId={userId}
          />
          <QuestionsTable
            title="Linked List"
            problems={linkedlistProblems}
            userId={userId}
          />
          <QuestionsTable
            title="Trees"
            problems={treesProblems}
            userId={userId}
          />
          <QuestionsTable
            title="Heap"
            problems={heapsProblems}
            userId={userId}
          />
          <QuestionsTable
            title="Backtracking"
            problems={backtrackingProblems}
            userId={userId}
          />
          <QuestionsTable
            title="Tries"
            problems={triesProblems}
            userId={userId}
          />
          <QuestionsTable
            title="Graphs"
            problems={graphsProblems}
            userId={userId}
          />
          <QuestionsTable
            title="Advanced Graphs"
            problems={advancedProblems}
            userId={userId}
          />
          <QuestionsTable
            title="1D Dynamic Programming"
            problems={onedprogrammingProblems}
            userId={userId}
          />
          <QuestionsTable
            title="2D Dynamic Programming"
            problems={twodprogrammingProblems}
            userId={userId}
          />
          <QuestionsTable
            title="Greedy Algorithms"
            problems={greedyProblems}
            userId={userId}
          />
          <QuestionsTable
            title="Intervals"
            problems={intervalsProblems}
            userId={userId}
          />
          <QuestionsTable
            title="Math"
            problems={mathProblems}
            userId={userId}
          />
          <QuestionsTable
            title="Bit Manipulation"
            problems={bitProblems}
            userId={userId}
          />
        </div>
      </div>
    </div>
  );
};

export default Blind75Page;
