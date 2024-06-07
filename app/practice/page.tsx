import { QuestionsTable } from "@/components/QuestionsTable";
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

type ProblemCategories = {
  [category: string]: number[];
};

const fetchProblemsByCategories = async (categories: ProblemCategories) => {
  const problems: { [category: string]: any } = {};
  for (const [category, ids] of Object.entries(categories)) {
    problems[category] = await getProblems(ids);
  }
  return problems;
};

const PracticePage = async () => {
  const userId = await getUserId();
  const categories = {
    "Array / String": [76, 77, 78, 79, 80, 81, 7, 148, 82],
    "Two Pointers": [83, 84, 12, 149, 150],
    "Sliding Window": [85, 86, 87, 88, 151, 152],
    Stack: [89, 153, 154, 155, 74, 157, 158],
    "Binary Search": [90, 91, 159, 160, 161, 56, 162],
    "Linked List": [31, 92, 93, 94, 95, 96],
    Trees: [97, 33, 99, 100, 101, 102, 103, 104, 105, 106, 107],
    Heaps: [108],
    Backtracking: [109, 110],
    Tries: [70, 112, 113],
    Graphs: [114, 115, 116, 117, 118, 119],
    "Advanced Graphs": [120],
    "1D Dynamic Programming": [121, 61, 123, 124, 125, 126, 127, 128, 129, 130],
    "2D Dynamic Programming": [63, 64],
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
          NeetCode 150 🚀
        </h1>
        <h2 className="dark:text-muted-foreground line-clamp-2">
          A comprehensive list curated by Navdeep Singh (
          <TextLink href="https://www.youtube.com/@NeetCode" external={true}>
            NeetCode
          </TextLink>
          ). It is an expansion of the{" "}
          <TextLink href="/practice/blind-75">Blind 75</TextLink> list and
          features more beginner-friendly problems.
        </h2>
      </div>
      <Separator className="my-4 self-stretch bg-border" />
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
