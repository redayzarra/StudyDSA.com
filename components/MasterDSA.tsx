import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { GenerateText } from "./ui/GenerateText";
import { TextGenerateEffect } from "./ui/generate-text";

const MasterDSA = () => {
  return (
    <div className="flex flex-col space-y-4">
      <GenerateText>Master Data Structures and Algorithms</GenerateText>
      <TextGenerateEffect
        className="text-foreground text-left"
        words="Let's make the tough stuff easy. Get straightforward, free resources to
        tackle data structures and algorithms."
      />
      <p className="italic font-medium hidden md:block">
        "Where complexity meets clarity."
      </p>
    </div>
  );
};

export default MasterDSA;
