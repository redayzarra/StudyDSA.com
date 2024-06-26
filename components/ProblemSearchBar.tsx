"use client";

import { DialogProps } from "@radix-ui/react-alert-dialog";
import { useRouter } from "next/navigation";
import { FaListCheck } from "react-icons/fa6";

import {
  algorithmPages,
  dataStructurePages,
  introPages,
  problemPages,
} from "@/data/constants";
import { cn } from "@/lib/utils";
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

export function ProblemSearchBar({ ...props }: DialogProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false);
    command();
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
        </CommandList>
      </CommandDialog>
    </>
  );
}
