"use client";

import { DialogProps } from "@radix-ui/react-alert-dialog";
import { FaArrowUpRightDots, FaQuestion, FaTimeline } from "react-icons/fa6";
import {
  GiAbstract089,
  GiArrowed,
  GiKneeling,
  GiPayMoney,
} from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { LuBinary } from "react-icons/lu";
import { PiStackPlus } from "react-icons/pi";

import { cn } from "@/lib/utils";
import { LeetCodeProblem } from "@prisma/client";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdDataArray, MdDataObject, MdLinearScale } from "react-icons/md";
import { PiGraph, PiMathOperationsBold, PiStack } from "react-icons/pi";
import { TfiLayoutSlider } from "react-icons/tfi";
import { Button } from "./ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";

import { AiOutlineNodeIndex } from "react-icons/ai";
import { TbArrowLoopLeft2, TbBinaryTree, TbBinaryTree2 } from "react-icons/tb";
import { useRouter } from "next/navigation";

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
  | "Monotonic Stacks"
  | "Trees"
  | "Advanced Graphs"
  | "Greedy Algorithms"
  | "Math";

const categoryIcons: Record<Category, JSX.Element> = {
  "Array / String": <MdDataArray size={20} />,
  "Two Pointers": <HiArrowsRightLeft size={20} />,
  "Sliding Window": <TfiLayoutSlider size={20} />,
  "Prefix Sum": <PiStackPlus size={20} />,
  "Hash Map / Set": <MdDataObject size={20} />,
  Stacks: <PiStack size={20} />,
  Queues: <MdLinearScale size={20} />,
  "Linked Lists": <AiOutlineNodeIndex size={20} />,
  "Binary Tree - DFS": <TbBinaryTree size={20} />,
  "Binary Tree - BFS": <TbBinaryTree size={20} />,
  "Binary Search Tree": <TbBinaryTree size={20} />,
  "Graphs - DFS": <PiGraph size={20} />,
  "Graphs - BFS": <PiGraph size={20} />,
  Graphs: <PiGraph size={20} />,
  "Heaps / Priority Queues": (
    <FaArrowUpRightDots size={20} className="p-[2px]" />
  ),
  "Binary Search": <GoSearch size={20} />,
  Backtracking: <TbArrowLoopLeft2 size={20} />,
  "Dynamic Programming - 1D": <GiKneeling size={20} className="p-[2px]" />,
  "Dynamic Programming - Multidimensional": <GiArrowed size={20} />,
  "Bit Manipulation": <LuBinary size={20} />,
  Tries: <TbBinaryTree2 size={20} />,
  Intervals: <FaTimeline size={20} />,
  "Monotonic Stacks": <PiStack size={20} />,
  Trees: <TbBinaryTree size={20} />,
  "Advanced Graphs": <GiAbstract089 size={23} className="p-[1px]" />,
  "Greedy Algorithms": <GiPayMoney size={20} />,
  Math: <PiMathOperationsBold size={20} />,
};

const formatTitleForHref = (title: string): string => {
  return title.toLowerCase().replace(/\s+/g, "-");
};

export function ProblemSearchBar({
  problems,
  ...props
}: DialogProps & { problems: { [category: string]: LeetCodeProblem[] } }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "m" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-8 justify-start rounded-[0.5rem] bg-black hover:bg-neutral-950 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-[212px]"
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <FaSearch className="mr-2 absolute" />
        <span className="ml-6 hidden md:block">Search problems...</span>
        <span className="ml-6 block md:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>M
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search all problems..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {Object.entries(problems).map(([category, categoryProblems]) => (
            <CommandGroup key={category} heading={category}>
              {categoryProblems.map((problem) => {
                const formattedTitle = formatTitleForHref(problem.title);
                return (
                  <CommandItem
                    key={problem.id}
                    className="cursor-pointer w-full"
                    value={problem.title}
                    onSelect={() => handleSelect(`#${formattedTitle}`)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSelect(`#${formattedTitle}`);
                      }
                    }}
                  >
                    {categoryIcons[category as Category] || (
                      <FaQuestion size={20} />
                    )}
                    <span className="ml-2">{problem.title}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
