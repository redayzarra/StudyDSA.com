import { QuestionsTable } from "@/components/QuestionsTable";
import TextLink from "@/components/TextLink";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import getUserId from "@/hooks/server/getUserId";
import getProblems from "@/actions/questions/getProblems";
import ProblemBar from "@/components/ProblemBar";

const font = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

type ProblemCategories = {
  [category: string]: number[];
};

const fetchProblemsByCategories = async (categories: ProblemCategories) => {
  const problems: { [category: string]: any } = {};
  for (const [category, ids] of Object.entries(categories)) {
    try {
      problems[category] = await getProblems(ids);

      // Error handling
    } catch (error) {
      console.error(`Error fetching problems for category: ${category}`, error);
      problems[category] = [];
    }
  }

  return problems;
};

const LeetCode75Page = async () => {
  const userId = await getUserId();

  const categories = {
    "Array / String": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "Two Pointers": [10, 11, 12, 13],
    "Sliding Window": [14, 15, 16, 17],
    "Prefix Sum": [18, 19],
    "Hash Map / Set": [20, 21, 22, 23],
    Stacks: [24, 25, 26],
    Queues: [27, 28],
    "Linked Lists": [31, 29, 30, 32],
    "Binary Tree - DFS": [33, 34, 35, 36, 37, 38],
    "Binary Tree - BFS": [39, 40],
    "Binary Search Tree": [41, 42],
    "Graphs - DFS": [43, 44, 45, 46],
    "Graphs - BFS": [47, 48],
    "Heaps / Priority Queues": [49, 50, 51, 52],
    "Binary Search": [53, 54, 55, 56],
    Backtracking: [57, 58],
    "Dynamic Programming - 1D": [59, 60, 61, 62],
    "Dynamic Programming - Multidimensional": [63, 64, 65, 66],
    "Bit Manipulation": [67, 68, 69],
    Tries: [70, 71],
    Intervals: [72, 73],
    "Monotonic Stacks": [74, 75],
  };

  const problemsByCategory = await fetchProblemsByCategories(categories);

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
          </TextLink>{" "}
          without any hard problems. This list is a great way to introduce
          yourself to the core concepts and get in the rhythm of
          problem-solving.
        </h2>
      </div>
      <Separator className="my-4 self-stretch bg-border" />
      <div className="">
        <ProblemBar userId={userId} problems={problemsByCategory} title="LeetCode 75" />
      </div>
      <div className="w-full mt-4 space-y-12">
        {Object.entries(problemsByCategory)
          .filter(([_, problems]) => problems.length > 0)
          .map(([category, problems]) => (
            <QuestionsTable
              key={category}
              title={category}
              problems={problems}
              userId={userId}
            />
          ))}
      </div>
    </div>
  );
};

export default LeetCode75Page;
