"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { ProblemChart } from "./ProblemChart";

type Difficulty = "Easy" | "Medium" | "Hard";

interface ChartConfig {
  difficulty: Difficulty;
  color: string;
}

const CHART_CONFIGS: ChartConfig[] = [
  { difficulty: "Easy", color: "#73BF5E" },
  { difficulty: "Medium", color: "#F2AE30" },
  { difficulty: "Hard", color: "#F23C13" },
];

const ProblemCharts: React.FC = () => (
  <div className="-space-y-9 -mt-6 -mb-6 flex flex-col items-center justify-center">
    {CHART_CONFIGS.map(({ difficulty, color }) => (
      <ProblemChart
        key={difficulty}
        className="scale-[.65]"
        difficulty={difficulty}
        color={color}
      />
    ))}
  </div>
);

const ProblemStats: React.FC = () => (
  <div className="w-full backdrop-blur-[15px] border-[1px] shadow-lg shadow-black rounded-md bg-black/[.35] border-t-[1px] border-neutral-800/[.35] pt-2 px-6 pb-4">
    <div className="absolute inset-x-0 h-[1px] mx-auto -top-px bg-gradient-to-r from-transparent via-stone-400 to-transparent" />
    <Accordion
      type="single"
      className="w-full"
      collapsible
      defaultValue="progress"
    >
      <AccordionItem value="progress">
        <AccordionTrigger>Progress</AccordionTrigger>
        <AccordionContent>
          <ProblemCharts />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);

export default ProblemStats;
