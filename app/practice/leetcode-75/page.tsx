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

  const arrayProblems = await getProblems([
    "Merge Strings Alternately",
    "Greatest Common Divisor of Strings",
    "Kids With the Greatest Number of Candies",
    "Can Place Flowers",
    "Reverse Vowels of a String",
    "Reverse Words in a String",
    "Product of Array Except Self",
    "Increasing Triplet Subsequence",
    "String Compression",
  ]);

  const twoPointersProblems = await getProblems([
    "Move Zeroes",
    "Is Subsequence",
    "Container With Most Water",
    "Max Number of K-Sum Pairs",
  ]);

  const slidingWindowProblems = await getProblems([
    "Maximum Average Subarray I",
    "Maximum Number of Vowels in a Substring of Given Length",
    "Max Consecutive Ones III",
    "Longest Subarray of 1's After Deleting One Element",
  ]);

  const prefixSumProblems = await getProblems([
    "Find the Highest Altitude",
    "Find Pivot Index",
  ]);

  const hashmapProblems = await getProblems([
    "Find the Difference of Two Arrays",
    "Unique Number of Occurrences",
    "Determine if Two Strings Are Close",
    "Equal Row and Column Pairs",
  ]);

  const stackProblems = await getProblems([
    "Removing Stars From a String",
    "Asteroid Collision",
    "Decode String",
  ]);

  const queueProblems = await getProblems([
    "Number of Recent Calls",
    "Dota2 Senate",
  ]);

  const linkedlistProblems = await getProblems([
    "Delete the Middle Node of a Linked List",
    "Odd Even Linked List",
    "Reverse Linked List",
    "Maximum Twin Sum of a Linked List",
  ]);

  const dfsProblems = await getProblems([
    "Maximum Depth of Binary Tree",
    "Leaf-Similar Trees",
    "Count Good Nodes in Binary Tree",
    "Path Sum III",
    "Longest ZigZag Path in a Binary Tree",
    "Lowest Common Ancestor of a Binary Tree",
  ]);

  const bfsProblems = await getProblems([
    "Binary Tree Right Side View",
    "Maximum Level Sum of a Binary Tree",
  ]);

  const binarySearchTreeProblems = await getProblems([
    "Search in a Binary Search Tree",
    "Delete Node in a BST",
  ]);

  const graphDFSProblems = await getProblems([
    "Keys and Rooms",
    "Number of Provinces",
    "Reorder Routes to Make All Paths Lead to the City Zero",
    "Evaluate Division",
  ]);

  const graphBFSProblems = await getProblems([
    "Nearest Exit from Entrance in Maze",
    "Rotting Oranges",
  ]);

  const heapProblems = await getProblems([
    "Kth Largest Element in an Array",
    "Smallest Number in Infinite Set",
    "Maximum Subsequence Score",
    "Total Cost to Hire K Workers",
  ]);

  const binarySearchProblems = await getProblems([
    "Guess Number Higher or Lower",
    "Successful Pairs of Spells and Potions",
    "Find Peak Element",
    "Koko Eating Bananas",
  ]);

  const backtrackingProblems = await getProblems([
    "Letter Combinations of a Phone Number",
    "Combination Sum III",
  ]);

  const oneDProblems = await getProblems([
    "N-th Tribonacci Number",
    "Min Cost Climbing Stairs",
    "House Robber",
    "Domino and Tromino Tiling",
  ]);

  const multiDPProblems = await getProblems([
    "Unique Paths",
    "Longest Common Subsequence",
    "Best Time to Buy and Sell Stock with Transaction Fee",
    "Edit Distance",
  ]);

  const bitProblems = await getProblems([
    "Counting Bits",
    "Single Number",
    "Minimum Flips to Make a OR b Equal to c",
  ]);

  const trieProblems = await getProblems([
    "Implement Trie (Prefix Tree)",
    "Search Suggestions System",
  ]);

  const intervalsProblems = await getProblems([
    "Non-overlapping Intervals",
    "Minimum Number of Arrows to Burst Balloons",
  ]);

  const monoStackProblems = await getProblems([
    "Daily Temperatures",
    "Online Stock Span",
  ]);

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
