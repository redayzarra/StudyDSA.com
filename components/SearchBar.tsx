"use client";

import { DialogProps } from "@radix-ui/react-alert-dialog";
import { useRouter } from "next/navigation";
import { FaListCheck } from "react-icons/fa6";

import {
  algorithmPages,
  dataStructurePages,
  introPages,
  problemPages,
  arrayPages,
  linkedListPages,
  hashmapPages,
  queuePages,
  treePages,
  graphPages,
  heapPages,
  triePages,
  unionFindPages,
  segmentTreePages,
} from "@/data/constants";
import { cn } from "@/lib/utils";
import { useCallback, useEffect, useState } from "react";
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

interface DetailedPage {
  title: string;
  href: string;
}

const detailedPagesMap: { [key: string]: DetailedPage[] } = {
  Arrays: arrayPages,
  "Linked Lists": linkedListPages,
  "Hashmaps": hashmapPages,
  Queues: queuePages,
  Trees: treePages,
  Graphs: graphPages,
  Heaps: heapPages,
  Tries: triePages,
  "Union-Find": unionFindPages,
  "Segment Trees": segmentTreePages,
};

const getDetailedPages = (dataStructureTitle: string): DetailedPage[] => {
  return detailedPagesMap[dataStructureTitle] || [];
};

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

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-8 w-full justify-start rounded-[0.5rem] bg-black hover:bg-neutral-950 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40"
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
            {introPages.map((doc) => (
              <CommandItem
                className="cursor-pointer"
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
            {dataStructurePages.map((dataStructure) => (
              <CommandItem
                className="cursor-pointer"
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
            {algorithmPages.map((algorithm) => (
              <CommandItem
                className="cursor-pointer"
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
            {problemPages.map((problem) => (
              <CommandItem
                className="cursor-pointer"
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

          {dataStructurePages.map((dataStructure) => {
            const detailedPages = getDetailedPages(dataStructure.title);
            return (
              <CommandGroup
                key={dataStructure.title}
                heading={dataStructure.title}
              >
                {detailedPages.map((page) => (
                  <CommandItem
                    className="cursor-pointer"
                    key={page.href}
                    value={page.title}
                    onSelect={() => {
                      runCommand(() => router.push(page.href));
                    }}
                  >
                    {dataStructure.icon}
                    <span className="ml-2">{page.title}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            );
          })}
        </CommandList>
      </CommandDialog>
    </>
  );
}
