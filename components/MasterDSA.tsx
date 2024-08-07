import React from "react";
import { TextGenerateEffect } from "./ui/generate-text";
import Balancer from "react-wrap-balancer";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { FlipWords } from "./ui/FlipWords";

const font = Poppins({
  subsets: ["latin"],
  weight: ["800"],
});

const MasterDSA = () => {
  const words = ["Study", "Master", "Learn", "Explore"];

  return (
    <div className="flex flex-col space-y-4 relative">
      {/* <Spotlight className="hidden dark:block top-[-30rem] left-[-25rem] overflow-hidden h-[700%] w-[180vh]" /> */}
      <h1
        className={cn(
          "text-5xl pb-2 text-left font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 transition-all duration-700",
          font.className
        )}
      >
        <Balancer>
          <FlipWords words={words} className="" /> Data <br /> Structures &
          Algorithms
        </Balancer>
      </h1>
      <p className="text-lg text-muted-foreground text-left">
        <Balancer>
          Let&apos;s make the tough stuff easy. Get free resources to tackle
          data structures and algorithms.
        </Balancer>
      </p>
      <TextGenerateEffect
        className="italic font-medium"
        words={`"Where complexity meets clarity."`}
      />
    </div>
  );
};

export default MasterDSA;
