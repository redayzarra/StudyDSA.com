import { QuestionsTable } from "@/components/QuestionsTable";
import QuestionsTabs from "@/components/QuestionsTabs";
import TextLink from "@/components/TextLink";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import getUserId from "@/hooks/server/getUserId";
import getProblems from "@/actions/questions/getProblems";

const font = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

const LeetCode75Page = async () => {
  const userId = await getUserId();
  const fetchProblems = ["Two Sum", "Add Two Numbers"];

  const neetCodeProblems = await getProblems(fetchProblems);

  return (
    <div className="">
      <div className="space-y-5 mt-4 md:mt-0">
        <h1 className={cn("text-4xl md:text-6xl font-bold", font.className)}>
          NeetCode 150 🚀
        </h1>
        <h2 className="dark:text-muted-foreground line-clamp-2">
          A comprehensive list curated by Navdeep Singh (
          <TextLink href="https://www.youtube.com/@NeetCode">NeetCode</TextLink>
          ). It is an expansion of the{" "}
          <TextLink href="/practice/blind-75">Blind 75</TextLink> list and
          features more beginner-friendly problems.
        </h2>
      </div>
      <Separator className="my-4 self-stretch bg-border" />
      <div className="grid grid-cols-1 transition-all md:grid-cols-[1fr_5fr] gap-x-3">
        <div className="mt-4 hidden md:block">
          <QuestionsTabs />
        </div>
        <div className="w-full mt-4 space-y-12">
          <QuestionsTable title="Array / String" problems={neetCodeProblems} userId={userId} showTags={false}/>
          {/* <QuestionsTable title="Two Pointers" problems={neetCodeProblems} userId={userId} showTags={false}/>
          <QuestionsTable title="Sliding Window" problems={neetCodeProblems} userId={userId} showTags={false}/>
          <QuestionsTable title="Prefix Sum" problems={neetCodeProblems} userId={userId} showTags={false}/>
          <QuestionsTable title="Hash Map / Set" problems={neetCodeProblems} userId={userId} showTags={false}/>
          <QuestionsTable title="Stack" problems={neetCodeProblems} userId={userId} showTags={false}/>
          <QuestionsTable title="Queue" problems={neetCodeProblems} userId={userId} showTags={false}/>
          <QuestionsTable title="Linked List" problems={neetCodeProblems} userId={userId} showTags={false}/>
          <QuestionsTable title="Binary Tree - DFS" problems={neetCodeProblems} userId={userId} showTags={false}/>
          <QuestionsTable title="Binary Tree - BFS" problems={neetCodeProblems} userId={userId} showTags={false}/>
          <QuestionsTable title="Binary Search Tree" problems={neetCodeProblems} userId={userId} showTags={false}/>
          <QuestionsTable title="Graphs - DFS" problems={neetCodeProblems} userId={userId} showTags={false}/>
          <QuestionsTable title="Graphs - BFS" problems={neetCodeProblems} userId={userId} showTags={false}/>
          <QuestionsTable title="Heap / Priority Queue" problems={neetCodeProblems} userId={userId} showTags={false}/>
          <QuestionsTable title="Binary Search" problems={neetCodeProblems} userId={userId} showTags={false}/>
          <QuestionsTable title="Backtracking" problems={neetCodeProblems} userId={userId} showTags={false}/>
          <QuestionsTable title="DP - 1D" problems={neetCodeProblems} userId={userId} showTags={false}/>
          <QuestionsTable title="DP - Multidimensional" problems={neetCodeProblems} userId={userId} showTags={false}/>
          <QuestionsTable title="Bit Manipulation" problems={neetCodeProblems} userId={userId} showTags={false}/>
          <QuestionsTable title="Trie" problems={neetCodeProblems} userId={userId} showTags={false}/>
          <QuestionsTable title="Intervals" problems={neetCodeProblems} userId={userId} showTags={false}/>
          <QuestionsTable title="Monotonic Stack" problems={neetCodeProblems} userId={userId} showTags={false}/> */}
        </div>
      </div>
    </div>
  );
};

export default LeetCode75Page;
