"use client";

import { DialogProps } from "@radix-ui/react-alert-dialog";
import { useRouter } from "next/navigation";
import { FaArrowUpRightDots, FaListCheck } from "react-icons/fa6";
import { MdDataArray, MdDataObject, MdLinearScale } from "react-icons/md";
import { PiGraph } from "react-icons/pi";
import { TbBinaryTree, TbBinaryTree2, TbVector } from "react-icons/tb";

import { cn } from "@/lib/utils";
import { useCallback, useEffect, useState } from "react";
import { AiOutlineFunction, AiOutlineNodeIndex } from "react-icons/ai";
import { MdOutlineMoreTime } from "react-icons/md";
import { Button } from "./ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { ScrollArea } from "./ui/scroll-area";
import { FaSearch } from "react-icons/fa";

export function SearchBar({ ...props }: DialogProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
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

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  const docs = [
    {
      title: "Data Structures",
      href: "/data-structures",
      icon: <AiOutlineNodeIndex size={20} />,
    },
    {
      title: "Algorithms",
      href: "/algorithms",
      icon: <AiOutlineFunction size={20} />,
    },
    {
      title: "Big-O Notation",
      href: "/big-o",
      icon: <MdOutlineMoreTime size={20} />,
    },
  ];

  const data = [
    {
      title: "Arrays",
      href: "/data-structures/arrays",
      icon: <MdDataArray size={20} />,
    },
    {
      title: "Linked Lists",
      href: "/data-structures/linked-lists",
      icon: <AiOutlineNodeIndex size={20} />,
    },
    {
      title: "Hashmaps & Sets",
      href: "/data-structures/hashmaps",
      icon: <MdDataObject size={20} />,
    },
    {
      title: "Queues",
      href: "/data-structures/queues",
      icon: <MdLinearScale size={20} />,
    },
    {
      title: "Trees",
      href: "/data-structures/trees",
      icon: <TbBinaryTree size={20} />,
    },
    {
      title: "Graphs",
      href: "/data-structures/graphs",
      icon: <TbVector size={20} />,
    },
    {
      title: "Heaps",
      href: "/data-structures/heaps",
      icon: <FaArrowUpRightDots size={20} />,
    },
    {
      title: "Tries",
      href: "/data-structures/tries",
      icon: <TbBinaryTree2 size={20} />,
    },
    {
      title: "Union-Find",
      href: "/data-structures/union-find",
      icon: <PiGraph size={20} />,
    },
    {
      title: "Segment Trees",
      href: "/data-structures/segment-trees",
      icon: <TbBinaryTree size={20} />,
    },
  ];

  const algo = [
    {
      title: "Two Pointers",
      href: "/algorithms/two-pointers",
    },
    {
      title: "Fast & Slow Pointers",
      href: "/algorithms/fast-and-slow",
    },
    {
      title: "Sliding Window",
      href: "/algorithms/sliding-window",
    },
    {
      title: "Binary Search",
      href: "/algorithms/binary-search",
    },
    {
      title: "Prefix Sums",
      href: "/algorithms/prefix-sums",
    },
    {
      title: "Recursion",
      href: "/algorithms/recursion",
    },
    {
      title: "Sorting",
      href: "/algorithms/sorting",
    },
    {
      title: "Backtracking",
      href: "/algorithms/backtracking",
    },
    {
      title: "1D Dynamic Pro.",
      href: "/algorithms/1d-dynamic-programming",
    },
    {
      title: "Greedy",
      href: "/algorithms/greedy",
    },
    {
      title: "Intervals",
      href: "/algorithms/intervals",
    },
    {
      title: "Bit Operations",
      href: "/algorithms/bit-operations",
    },
    {
      title: "Depth-First Search",
      href: "/algorithms/depth-first-search",
    },
    {
      title: "Breadth-First Search",
      href: "/algorithms/breadth-first-search",
    },
    {
      title: "2D Dynamic Pro.",
      href: "/algorithms/2d-dynamic-programming",
    },
    {
      title: "Two-Heaps Pattern",
      href: "/algorithms/two-heaps",
    },
    {
      title: "Dijkstra's Algo.",
      href: "/algorithms/dijkstras",
    },
    {
      title: "A* Search Algo.",
      href: "/algorithms/a-star",
    },
    {
      title: "Floyd-Warshall's Algo.",
      href: "/algorithms/floyd-warshalls",
    },
    {
      title: "Bellman-Ford Algo.",
      href: "/algorithms/bellman-ford",
    },
    {
      title: "Prim's Algo.",
      href: "/algorithms/prims",
    },
    {
      title: "Kruskal's Algo.",
      href: "/algorithms/kruskals",
    },
    {
      title: "Topological Sort",
      href: "/algorithms/topological-sort",
    },
    {
      title: "DAG Shortest Path",
      href: "/algorithms/dag-shortest-path",
    },
  ];

  const problems = [
    {
      title: "Blind 75",
      href: "/practice/blind-75",
    },
    {
      title: "LeetCode 75",
      href: "/practice/leetcode-75",
    },
    {
      title: "Top 100 Liked",
      href: "/practice/top-100-liked",
    },
    {
      title: "NeetCode 150",
      href: "/practice",
    },
    {
      title: "Top Interview 150",
      href: "/practice/top-interview-150",
    },
  ];

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40"
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <FaSearch className="mr-2" />
        <span>Search...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search documentation..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Links">
              {docs.map((doc) => (
                <CommandItem
                  key={doc.href}
                  value={doc.title}
                  onSelect={() => {
                    runCommand(() => router.push(doc.href));
                  }}
                >
                  {doc.icon}
                  <span className="ml-2">{doc.title}</span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandGroup heading="Data Structures">
              {data.map((dataStructure) => (
                <CommandItem
                  key={dataStructure.href}
                  value={dataStructure.title}
                  onSelect={() => {
                    runCommand(() => router.push(dataStructure.href));
                  }}
                >
                  {dataStructure.icon}
                  <span className="ml-2">{dataStructure.title}</span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandGroup heading="Algorithms">
              {data.map((algorithm) => (
                <CommandItem
                  key={algorithm.href}
                  value={algorithm.title}
                  onSelect={() => {
                    runCommand(() => router.push(algorithm.href));
                  }}
                >
                  <AiOutlineFunction size={20} />
                  <span className="ml-2">{algorithm.title}</span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandGroup heading="Practice">
              {problems.map((problem) => (
                <CommandItem
                  key={problem.href}
                  value={problem.title}
                  onSelect={() => {
                    runCommand(() => router.push(problem.href));
                  }}
                >
                  <FaListCheck size={20} />
                  <span className="ml-2">{problem.title}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
      </CommandDialog>
    </>
  );
}
