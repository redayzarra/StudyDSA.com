import React from "react";
import { GenerateText } from "./ui/GenerateText";
import { TextGenerateEffect } from "./ui/generate-text";
import { Spotlight } from "./ui/Spotlight";

const MasterDSA = () => {
  return (
    <div className="flex flex-col space-y-4 relative">
      <Spotlight className="top-[-30rem] left-[-25rem] overflow-hidden h-[700%] w-[180vh]" />
      <GenerateText className="text-center md:text-left">
        Master Data Structures and Algorithms
      </GenerateText>
      <TextGenerateEffect
        className="text-foreground text-center md:text-left"
        words="Let's make the tough stuff easy. Get straightforward, free resources to
        tackle data structures and algorithms."
      />
      <TextGenerateEffect
        className="italic font-medium hidden md:flex"
        words={`"Where complexity meets clarity."`}
      />
    </div>
  );
};

export default MasterDSA;
