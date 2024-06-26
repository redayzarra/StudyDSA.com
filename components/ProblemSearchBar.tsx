"use client";

import { DialogProps } from "@radix-ui/react-alert-dialog";
import { useRouter } from "next/navigation";
import { FaListCheck } from "react-icons/fa6";

import { cn } from "@/lib/utils";
import { LeetCodeProblem } from "@prisma/client";
import { useCallback, useState } from "react";
import { AiOutlineFunction } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { Button } from "./ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";

type Category =
  | "Array / String"
  | "Two Pointers"
  | "Sliding Window"
  | "Prefix Sum"
  | "Hash Map / Set"
  | "Stack"
  | "Queue"
  | "Linked List"
  | "Binary Tree - DFS"
  | "Binary Tree - BFS"
  | "Binary Search Tree"
  | "Graphs - DFS"
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
  "Array / String": <AiOutlineFunction size={20} />,
  "Two Pointers": <FaListCheck size={20} />,
  "Sliding Window": <FaListCheck size={20} />,
  "Prefix Sum": <FaListCheck size={20} />,
  "Hash Map / Set": <FaListCheck size={20} />,
  Stack: <FaListCheck size={20} />,
  Queue: <FaListCheck size={20} />,
  "Linked List": <FaListCheck size={20} />,
  "Binary Tree - DFS": <FaListCheck size={20} />,
  "Binary Tree - BFS": <FaListCheck size={20} />,
  "Binary Search Tree": <FaListCheck size={20} />,
  "Graphs - DFS": <FaListCheck size={20} />,
  "Graphs - BFS": <FaListCheck size={20} />,
  "Heaps / Priority Queues": <FaListCheck size={20} />,
  "Binary Search": <FaListCheck size={20} />,
  Backtracking: <FaListCheck size={20} />,
  "Dynamic Programming - 1D": <FaListCheck size={20} />,
  "Dynamic Programming - Multidimensional": <FaListCheck size={20} />,
  "Bit Manipulation": <FaListCheck size={20} />,
  Tries: <FaListCheck size={20} />,
  Intervals: <FaListCheck size={20} />,
  "Monotonic Stack": <FaListCheck size={20} />,
  Trees: <FaListCheck size={20} />,
  "Advanced Graphs": <FaListCheck size={20} />,
  "Greedy Algorithms": <FaListCheck size={20} />,
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
                    <FaListCheck size={20} />
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
