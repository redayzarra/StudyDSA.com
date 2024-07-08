import { QuestionsTable } from "@/components/QuestionsTable";
import TextLink from "@/components/TextLink";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import getUserId from "@/hooks/server/getUserId";
import ProblemBar from "@/components/ProblemBar";
import { MasteryLevel, QuestionDifficulty } from "@prisma/client";
import getFilteredProblems from "@/actions/problems/getFilteredProblems";
import { Filters } from "@/types/problems";
import dynamic from "next/dynamic";

// Use dynamic import for ProblemSetInitializer to reduce initial bundle size
const ProblemSetInitializer = dynamic(() => import("@/components/ProblemSetInitializer"), { ssr: false });

const font = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

type ProblemCategories = Record<string, number[]>;

const parseFilters = (searchParams: { [key: string]: string | string[] | undefined }): Filters => {
  const completed = ((searchParams.completed as string)?.split(",") || [])
    .filter((c): c is "complete" | "incomplete" => c === "complete" || c === "incomplete");

  const difficulty = ((searchParams.difficulty as string)?.split(",") || [])
    .filter((d): d is QuestionDifficulty => ["Easy", "Medium", "Hard"].includes(d));

  const status = ((searchParams.status as string)?.split(",") || [])
    .filter((s): s is MasteryLevel => ["Practicing", "Review", "Mastered", "Challenging"].includes(s));

  return { completed, difficulty, status };
};

const fetchProblemsByCategories = async (
  categories: ProblemCategories,
  filters: Filters,
  userId: string | undefined
): Promise<Record<string, Awaited<ReturnType<typeof getFilteredProblems>>>> => {
  const problemPromises = Object.entries(categories).map(async ([category, ids]) => {
    try {
      const problems = await getFilteredProblems(ids, userId, filters);
      return [category, problems] as const;
    } catch (error) {
      console.error(`Error fetching problems for category: ${category}`, error);
      return [category, []] as const;
    }
  });

  const problemEntries = await Promise.all(problemPromises);
  return Object.fromEntries(problemEntries);
};

const calculateCounts = (
  problemsByCategory: Record<string, Awaited<ReturnType<typeof getFilteredProblems>>>
): Record<QuestionDifficulty, number> => {
  return Object.values(problemsByCategory).reduce(
    (counts, problems) => {
      problems.forEach((problem) => {
        counts[problem.difficulty]++;
      });
      return counts;
    },
    { Easy: 0, Medium: 0, Hard: 0 }
  );
};

const PracticePage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const userId = await getUserId();
  const filters = parseFilters(searchParams);

  const categories: ProblemCategories = {
    "Array / String": [76, 77, 78, 79, 80, 81, 7, 148, 82],
    "Two Pointers": [83, 84, 12, 149, 150],
    "Sliding Window": [85, 86, 87, 88, 151, 152],
    Stacks: [89, 153, 154, 155, 74, 157, 158],
    "Binary Search": [90, 91, 159, 160, 161, 56, 162],
    "Linked Lists": [31, 92, 93, 94, 95, 96, 163, 164, 165, 166, 167],
    Trees: [
      97, 33, 35, 39, 99, 100, 101, 102, 103, 104, 105, 106, 107, 168, 169,
    ],
    "Heaps / Priority Queues": [49, 108, 170, 171, 172, 173, 174],
    Backtracking: [57, 58, 109, 110, 175, 176, 177, 178, 179],
    Tries: [70, 112, 113],
    Graphs: [48, 114, 115, 116, 117, 118, 119, 180, 181, 182, 183, 184, 185],
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

  const problemsByCategory = await fetchProblemsByCategories(categories, filters, userId);
  const counts = calculateCounts(problemsByCategory);

  return (
    <div>
      <ProblemSetInitializer setName="NeetCode150" counts={counts} />

      <div className="space-y-5 mt-4 md:mt-0">
        <h1 className={cn("text-4xl md:text-6xl font-bold", font.className)}>
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

export default PracticePage;
