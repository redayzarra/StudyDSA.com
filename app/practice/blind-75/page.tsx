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

const Blind75Page = async () => {
  const userId = await getUserId();

  const categories = {
    "Array / String": [76, 77, 78, 79, 80, 81, 7, 82],
    "Two Pointers": [83, 84, 12],
    "Sliding Window": [85, 86, 87, 88],
    Stacks: [89],
    "Binary Search": [90, 91],
    "Linked Lists": [31, 92, 93, 94, 95, 96],
    Trees: [97, 33, 99, 100, 101, 102, 103, 104, 105, 106, 107],
    Heaps: [108],
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

  const problemsByCategory = await fetchProblemsByCategories(categories);

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
      <div className="">
        <ProblemBar problems={problemsByCategory} />
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
