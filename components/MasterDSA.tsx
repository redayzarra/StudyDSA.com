import React from "react";
import { TextGenerateEffect } from "./ui/generate-text";
import { Spotlight } from "./ui/Spotlight";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["800"],
});

const MasterDSA = () => {
  return (
    <div className="flex flex-col space-y-4 relative">
      <Spotlight className="hidden dark:block top-[-30rem] left-[-25rem] overflow-hidden h-[700%] w-[180vh]" />
      <h1
        className={cn(
          "text-4xl pb-2 text-center md:text-left md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-900 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50",
          font.className
        )}
      >
        Master Data Structures and Algorithms
      </h1>
      <p className="text-neutral-900 dark:text-muted-foreground text-center md:text-left">
        Let&apos;s make the tough stuff easy. Get straightforward, free resources to
        tackle data structures and algorithms.
      </p>
      <TextGenerateEffect
        className="italic font-medium hidden md:flex"
        words={`"Where complexity meets clarity."`}
      />
    </div>
  );
};

export default MasterDSA;
