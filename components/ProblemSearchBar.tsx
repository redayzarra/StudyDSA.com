"use client";

import { DialogProps } from "@radix-ui/react-alert-dialog";
import { useRouter } from "next/navigation";
import {
  FaArrowRightArrowLeft,
  FaArrowUpRightDots,
  FaListCheck,
  FaQuestion,
  FaSearchengin,
  FaTimeline,
} from "react-icons/fa6";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { GoSearch } from "react-icons/go";
import { GiArrowed, GiArrowFlights, GiArrowhead, GiChoppedSkull, GiKneeling, GiPathDistance, GiPiercedBody, GiRobber, GiStrikingArrows, GiWilliamTellSkull } from "react-icons/gi";

import { cn } from "@/lib/utils";
import { LeetCodeProblem } from "@prisma/client";
import { useCallback, useState } from "react";
import { TfiLayoutSlider, TfiVector } from "react-icons/tfi";
import { FaPray, FaSearch } from "react-icons/fa";
import { Button } from "./ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { MdDataArray } from "react-icons/md";
import { PiGraph, PiGraphFill, PiStack } from "react-icons/pi";
import { AiOutlineNodeIndex } from "react-icons/ai";
import { TbArrowLoopLeft2, TbBinaryTree, TbBinaryTree2 } from "react-icons/tb";

type Category =
  | "Array / String"
  | "Two Pointers"
  | "Sliding Window"
  | "Prefix Sum"
  | "Hash Map / Set"
  | "Stacks"
  | "Queues"
  | "Linked Lists"
  | "Binary Tree - DFS"
  | "Binary Tree - BFS"
  | "Binary Search Tree"
  | "Graphs - DFS"
  | "Graphs"
  | "Graphs - BFS"
  | "Heaps / Priority Queues"
  | "Binary Search"
  | "Backtracking"
  | "Dynamic Programming - 1D"
  | "Dynamic Programming - Multidimensional"
  | "Bit Manipulation"
  | "Tries"
  | "Intervals"
  | "Monotonic Stack"
  | "Trees"
  | "Advanced Graphs"
  | "Greedy Algorithms"
  | "Math";

const categoryIcons: Record<Category, JSX.Element> = {
  "Array / String": <MdDataArray size={20} />,
  "Two Pointers": <HiArrowsRightLeft size={20} />,
  "Sliding Window": <TfiLayoutSlider size={20} />,
  "Prefix Sum": <FaListCheck size={20} />,
  "Hash Map / Set": <FaListCheck size={20} />,
  Stacks: <PiStack size={20} />,
  Queues: <FaListCheck size={20} />,
  "Linked Lists": <AiOutlineNodeIndex size={20} />,
  "Binary Tree - DFS": <FaListCheck size={20} />,
  "Binary Tree - BFS": <FaListCheck size={20} />,
  "Binary Search Tree": <FaListCheck size={20} />,
  "Graphs - DFS": <PiGraph size={20} />,
  "Graphs - BFS": <PiGraph size={20} />,
  Graphs: <PiGraph size={20} />,
  "Heaps / Priority Queues": <FaArrowUpRightDots size={20} />,
  "Binary Search": <GoSearch size={20} />,
  Backtracking: <TbArrowLoopLeft2 size={20} />,
  "Dynamic Programming - 1D": <GiArrowhead size={20} />,
  "Dynamic Programming - Multidimensional": <GiArrowed size={20} />,
  "Bit Manipulation": <FaListCheck size={20} />,
  Tries: <TbBinaryTree2 size={20} />,
  Intervals: <FaTimeline size={20} />,
  "Monotonic Stack": <PiStack size={20} />,
  Trees: <TbBinaryTree size={20} />,
  "Advanced Graphs": <TfiVector size={23} />,
  "Greedy Algorithms": <GiRobber size={20} />,
  Math: <FaListCheck size={20} />,
};

export function ProblemSearchBar({
  problems,
  ...props
}: DialogProps & { problems: { [category: string]: LeetCodeProblem[] } }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const runCommand = useCallback((url: string) => {
    setOpen(false);
    window.open(url, "_blank");
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-8 w-full justify-start rounded-[0.5rem] bg-black hover:bg-neutral-950 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-44"
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <FaSearch className="mr-2 absolute" />
        <span className="ml-6">Search problems...</span>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search all problems..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {Object.entries(problems).map(([category, problems]) => (
            <CommandGroup key={category} heading={category}>
              {problems.map((problem) => (
                <CommandItem
                  className="cursor-pointer"
                  key={problem.id}
                  value={problem.title}
                  onSelect={() => {
                    runCommand(problem.href);
                  }}
                >
                  {categoryIcons[category as Category] || (
                    <FaQuestion size={20} />
                  )}
                  <span className="ml-2">{problem.title}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
