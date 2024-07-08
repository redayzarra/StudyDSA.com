"use client";

import React from "react";
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

export default ProblemCharts;