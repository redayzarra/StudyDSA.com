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
            showTags={false}
          />
          <QuestionsTable
            title="Two Pointers"
            problems={twoPointersProblems}
            userId={userId}
            showTags={false}
          />
          <QuestionsTable
            title="Sliding Window"
            problems={slidingWindowProblems}
            userId={userId}
            showTags={false}
          />
          <QuestionsTable
            title="Stack"
            problems={stackProblems}
            userId={userId}
            showTags={false}
          />
          <QuestionsTable
            title="Binary Search"
            problems={binarySearchProblems}
            userId={userId}
            showTags={false}
          />
          <QuestionsTable
            title="Linked List"
            problems={linkedlistProblems}
            userId={userId}
            showTags={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Blind75Page;
