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

const font = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

type ProblemCategories = {
  [category: string]: number[];
};

const Blind75Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const userId = await getUserId();

  const parseFilters = (searchParams: {
    [key: string]: string | string[] | undefined;
  }): Filters => {
    const completed = (
      (searchParams.completed as string)?.split(",") || []
    ).filter((c) => c === "complete" || c === "incomplete") as (
      | "complete"
      | "incomplete"
    )[];

    const difficulty = (
      (searchParams.difficulty as string)?.split(",") || []
    ).filter((d) =>
      ["Easy", "Medium", "Hard"].includes(d)
    ) as QuestionDifficulty[];

    const status = ((searchParams.status as string)?.split(",") || []).filter(
      (s) => ["Practicing", "Review", "Mastered", "Challenging"].includes(s)
    ) as MasteryLevel[];

    return { completed, difficulty, status };
  };

  const filters = parseFilters(searchParams);

  const categories = {
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

  const fetchProblemsByCategories = async (
    categories: ProblemCategories,
    filters: Filters,
    userId: string | undefined
  ) => {
    const problems: {
      [category: string]: Awaited<ReturnType<typeof getFilteredProblems>>;
    } = {};

    for (const [category, ids] of Object.entries(categories)) {
      try {
        // Pass filters to getFilteredProblems for server-side filtering
        problems[category] = await getFilteredProblems(ids, userId, filters);
      } catch (error) {
        console.error(
          `Error fetching problems for category: ${category}`,
          error
        );
        problems[category] = [];
      }
    }
    return problems;
  };

  const problemsByCategory = await fetchProblemsByCategories(
    categories,
    filters,
    userId
  );

  return (
    <div className="">
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
      <div className="">
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

export default Blind75Page;
