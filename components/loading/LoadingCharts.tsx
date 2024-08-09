"use client";

import React from "react";
import { LoadingProgressChart } from "./LoadingProgressChart";

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

const LoadingCharts: React.FC = () => (
  <div className="-space-y-9 -mt-6 -mb-6 flex flex-col items-center justify-center">
    {CHART_CONFIGS.map(({ difficulty, color }) => (
      <LoadingProgressChart key={difficulty} className="scale-[.65]" />
    ))}
  </div>
);

export default LoadingCharts;
