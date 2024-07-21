import getProblems from "@/actions/problems/getProblems";
import ProblemBar from "@/components/ProblemBar";
import ProblemSetInitializer from "@/components/ProblemSetInitializer";
import { QuestionsTable } from "@/components/QuestionsTable";
import TextLink from "@/components/TextLink";
import { Separator } from "@/components/ui/separator";
import getUserId from "@/hooks/server/getUserId";
import { cn } from "@/lib/utils";
import { ProblemWithProgress } from "@/types/problems";
import { QuestionDifficulty } from "@prisma/client";
import { Metadata } from "next";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

type ProblemCategories = Record<string, number[]>;

const fetchProblemsByCategories = async (
  categories: ProblemCategories,
  userId: string | undefined
): Promise<Record<string, ProblemWithProgress[]>> => {
  const problemPromises = Object.entries(categories).map(
    async ([category, ids]) => {
      try {
        const problems = await getProblems(ids, userId);
        return [category, problems] as const;
      } catch (error) {
        console.error(
          `Error fetching problems for category: ${category}`,
          error
        );
        return [category, []] as const;
      }
    }
  );

  const problemEntries = await Promise.all(problemPromises);
  return Object.fromEntries(problemEntries);
};

const calculateCounts = (
  problemsByCategory: Record<string, ProblemWithProgress[]>
): {
  total: Record<QuestionDifficulty, number>;
  completed: Record<QuestionDifficulty, number>;
} => {
  const counts = Object.values(problemsByCategory).reduce(
    (counts, problems) => {
      problems.forEach((problem) => {
        counts.total[problem.difficulty]++;
        if (problem.progress?.isComplete) {
          counts.completed[problem.difficulty]++;
        }
      });
      return counts;
    },
    {
      total: { Easy: 0, Medium: 0, Hard: 0 },
      completed: { Easy: 0, Medium: 0, Hard: 0 },
    }
  );
  return counts;
};

const Blind75Page = async () => {
  const userId = await getUserId();

  const categories: ProblemCategories = {
    "Array / String": [76, 77, 78, 79, 80, 81, 7, 82],
    "Two Pointers": [83, 84, 12],
    "Sliding Window": [85, 86, 87, 88],
    Stacks: [89],
    "Binary Search": [90, 91],
    "Linked Lists": [31, 92, 93, 94, 95, 96],
    Trees: [97, 33, 99, 100, 101, 102, 103, 104, 105, 106, 107],
    "Heaps / Priority Queues": [108],
    Backtracking: [109, 110],
    Tries: [70, 112, 113],
    Graphs: [114, 115, 116, 117, 118, 119],
    "Advanced Graphs": [120],
    "Dynamic Programming - 1D": [
      121, 61, 123, 124, 125, 126, 127, 128, 129, 130,
    ],
    "Dynamic Programming - Multidimensional": [63, 64],
    "Greedy Algorithms": [133, 134],
    Intervals: [135, 136, 137, 138, 72],
    Math: [140, 141, 142],
    "Bit Manipulation": [143, 67, 145, 146, 147],
  };

  const problemsByCategory = await fetchProblemsByCategories(
    categories,
    userId
  );
  const counts = calculateCounts(problemsByCategory);

  return (
    <div>
      <ProblemSetInitializer setName="Blind75" counts={counts} />
      <div className="space-y-5 mt-4 md:mt-0">
        <h1 className={cn("text-4xl md:text-6xl font-bold", font.className)}>
          Blind 75 🛠️
        </h1>
        <h2 className="dark:text-muted-foreground line-clamp-2">
          The infamous list of essential coding problems by a Meta tech lead on{" "}
          <TextLink
            href="https://www.teamblind.com/post/new-year-gift---curated-list-of-top-75-leetcode-questions-to-save-your-time-OaM1orEU"
            external={true}
          >
            Blind
          </TextLink>
          . This list is designed to help software engineers efficiently master
          the fundamental concepts and patterns needed for technical interviews.
        </h2>
      </div>
      <Separator className="my-4 self-stretch bg-border" />
      <div>
        <ProblemBar
          userId={userId}
          problems={problemsByCategory}
          title="Blind 75"
        />
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

export const metadata: Metadata = {
  title: "Blind 75",
  description: "",
};

export default Blind75Page;
