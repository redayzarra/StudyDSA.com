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

        // Error handling
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

const PracticePage = async () => {
  const userId = await getUserId();

  const categories: ProblemCategories = {
    "Array / String": [76, 77, 78, 79, 80, 81, 7, 148, 82],
    "Two Pointers": [83, 149, 12, 84, 150],
    "Sliding Window": [85, 86, 87, 88, 151, 152],
    Stacks: [89, 153, 154, 155, 74, 157, 158],
    "Binary Search": [161, 90, 159, 91, 160, 56, 162],
    "Linked Lists": [31, 93, 92, 94, 95, 96, 163, 164, 165, 166, 167],
    Trees: [
      97, 33, 168, 169, 99, 101, 100, 103, 104, 102, 39, 35, 105, 106, 107,
    ],
    "Heaps / Priority Queues": [49, 108, 170, 171, 172, 173, 174],
    Backtracking: [175, 109, 176, 177, 58, 110, 178, 57, 179],
    Tries: [70, 112, 113],
    Graphs: [114, 180, 182, 116, 181, 48, 115, 117, 183, 184, 119, 118, 185],
    "Advanced Graphs": [120, 186, 187, 188, 189, 190],
    "Dynamic Programming - 1D": [
      60, 121, 61, 123, 124, 125, 126, 127, 128, 129, 130, 191,
    ],
    "Dynamic Programming - Multidimensional": [
      63, 64, 66, 192, 193, 194, 195, 196, 197, 198, 199,
    ],
    "Greedy Algorithms": [133, 134, 200, 201, 202, 203, 204, 205],
    Intervals: [135, 136, 137, 138, 72, 206],
    Math: [140, 141, 142, 207, 208, 209, 210, 211],
    "Bit Manipulation": [143, 67, 68, 145, 146, 147, 212],
  };

  const problemsByCategory = await fetchProblemsByCategories(
    categories,
    userId
  );

  const counts = calculateCounts(problemsByCategory);

  return (
    <div>
      <ProblemSetInitializer setName="NeetCode150" counts={counts} />
      <div className="space-y-5 mt-4 md:mt-0">
        <h1
          className={cn(
            "text-4xl md:text-6xl font-bold line-clamp-1",
            font.className
          )}
        >
          NeetCode 150 🚀
        </h1>
        <h2 className="dark:text-muted-foreground line-clamp-2">
          A comprehensive list curated by Navdeep Singh (
          <TextLink href="https://www.youtube.com/@NeetCode" external={true}>
            NeetCode
          </TextLink>
          ). It is an expansion of the{" "}
          <TextLink href="/practice/blind-75">Blind 75</TextLink> list and
          features a blend of beginner-friendly and more challenging problems.
        </h2>
      </div>
      <Separator className="my-4 self-stretch bg-border" />
      <div>
        <ProblemBar
          userId={userId}
          problems={problemsByCategory}
          title="NeetCode 150"
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
  title: "NeetCode 150",
  description: "",
};

export default PracticePage;
