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

const LeetCode75Page = async () => {
  const userId = await getUserId();
  
  // Fetching problems in groups
  const arrayProblems = await getProblems([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const twoPointersProblems = await getProblems([10, 11, 12, 13]);
  const slidingWindowProblems = await getProblems([14, 15, 16, 17]);
  const prefixSumProblems = await getProblems([18, 19]);
  const hashmapProblems = await getProblems([20, 21, 22, 23]);
  const stackProblems = await getProblems([24, 25, 26]);
  const queueProblems = await getProblems([27, 28]);
  const linkedlistProblems = await getProblems([31, 29, 30, 32]);
  const dfsProblems = await getProblems([33, 34, 35, 36, 37, 38]);
  const bfsProblems = await getProblems([39, 40]);
  const binarySearchTreeProblems = await getProblems([41, 42]);
  const graphDFSProblems = await getProblems([43, 44, 45, 46]);
  const graphBFSProblems = await getProblems([47, 48]);
  const heapProblems = await getProblems([49, 50, 51, 52]);
  const binarySearchProblems = await getProblems([53, 54, 55, 56]);
  const backtrackingProblems = await getProblems([57, 58]);
  const oneDProblems = await getProblems([59, 60, 61, 62]);
  const multiDPProblems = await getProblems([63, 64, 65, 66]);
  const bitProblems = await getProblems([67, 68, 69]);
  const trieProblems = await getProblems([70, 71]);
  const intervalsProblems = await getProblems([72, 73]);
  const monoStackProblems = await getProblems([74, 75]);


  return (
    <div className="">
      <div className="space-y-5 mt-4 md:mt-0">
        <h1 className={cn("text-4xl md:text-6xl font-bold", font.className)}>
          LeetCode 75 🎯
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
            title="Prefix Sum"
            problems={prefixSumProblems}
            userId={userId}
            showTags={false}
          />
          <QuestionsTable
            title="Hash Map / Set"
            problems={hashmapProblems}
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
            title="Queue"
            problems={queueProblems}
            userId={userId}
            showTags={false}
          />
          <QuestionsTable
            title="Linked List"
            problems={linkedlistProblems}
            userId={userId}
            showTags={false}
          />
          <QuestionsTable
            title="Binary Tree - DFS"
            problems={dfsProblems}
            userId={userId}
            showTags={false}
          />
          <QuestionsTable
            title="Binary Tree - BFS"
            problems={bfsProblems}
            userId={userId}
            showTags={false}
          />
          <QuestionsTable
            title="Binary Search Tree"
            problems={binarySearchTreeProblems}
            userId={userId}
            showTags={false}
          />
          <QuestionsTable
            title="Graphs - DFS"
            problems={graphDFSProblems}
            userId={userId}
            showTags={false}
          />
          <QuestionsTable
            title="Graphs - BFS"
            problems={graphBFSProblems}
            userId={userId}
            showTags={false}
          />
          <QuestionsTable
            title="Heap / Priority Queue"
            problems={heapProblems}
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
            title="Backtracking"
            problems={backtrackingProblems}
            userId={userId}
            showTags={false}
          />
          <QuestionsTable
            title="DP - 1D"
            problems={oneDProblems}
            userId={userId}
            showTags={false}
          />
          <QuestionsTable
            title="DP - Multidimensional"
            problems={multiDPProblems}
            userId={userId}
            showTags={false}
          />
          <QuestionsTable
            title="Bit Manipulation"
            problems={bitProblems}
            userId={userId}
            showTags={false}
          />
          <QuestionsTable
            title="Trie"
            problems={trieProblems}
            userId={userId}
            showTags={false}
          />
          <QuestionsTable
            title="Intervals"
            problems={intervalsProblems}
            userId={userId}
            showTags={false}
          />
          <QuestionsTable
            title="Monotonic Stack"
            problems={monoStackProblems}
            userId={userId}
            showTags={false}
          />
        </div>
      </div>
    </div>
  );
};

export default LeetCode75Page;
