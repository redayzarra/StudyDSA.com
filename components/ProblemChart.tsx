"use client";

import React, { useMemo } from "react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { useProblemCountStore } from "@/app/store/problemCount";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

type Difficulty = "Easy" | "Medium" | "Hard";

interface Props {
  className?: string;
  color?: string;
  difficulty: Difficulty;
}

interface ChartLabelProps {
  cx: number;
  cy: number;
  color: string;
  completedCount: number;
  totalCount: number;
}

const ChartLabel: React.FC<ChartLabelProps> = React.memo(
  ({ cx, cy, color, completedCount, totalCount }) => (
    <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
      <tspan
        x={cx}
        y={cy}
        className={cn("fill-foreground text-4xl font-bold", font.className)}
        fill={color}
      >
        {completedCount}
      </tspan>
      <tspan
        x={cx}
        y={cy + 30}
        className="fill-muted-foreground text-[20px] font-semibold"
      >
        / {totalCount.toLocaleString()}
      </tspan>
    </text>
  )
);

ChartLabel.displayName = "ChartLabel";

export function ProblemChart({
  className,
  color = "#73BF5E",
  difficulty,
}: Props) {
  const { currentSet, problemSets } = useProblemCountStore();

  const { completedCount, totalCount, endAngle, chartData, chartConfig } =
    useMemo(() => {
      const counts = problemSets[currentSet] || {
        total: { Easy: 0, Medium: 0, Hard: 0 },
        completed: { Easy: 0, Medium: 0, Hard: 0 },
      };
      const completedCount = counts.completed[difficulty];
      const totalCount = counts.total[difficulty];
      const endAngle = totalCount > 0 ? (completedCount / totalCount) * 360 : 0;
      const chartData = [
        { progress: difficulty, problems: completedCount, fill: color },
      ];
      const chartConfig: ChartConfig = {
        problems: {
          label: "Problems",
        },
        [difficulty]: {
          label: difficulty,
          color: color,
        },
      };
      return { completedCount, totalCount, endAngle, chartData, chartConfig };
    }, [currentSet, problemSets, difficulty, color]);

  return (
    <ChartContainer
      config={chartConfig}
      className={cn("mx-auto aspect-square h-[173px]", className)}
    >
      <RadialBarChart
        data={chartData}
        startAngle={0}
        endAngle={endAngle}
        innerRadius={80}
        outerRadius={110}
      >
        <PolarGrid
          gridType="circle"
          radialLines={false}
          stroke="none"
          className="first:fill-muted last:fill-background"
          polarRadius={[86, 74]}
        />
        <RadialBar dataKey="problems" background cornerRadius={10} />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                const { cx, cy } = viewBox;
                return (
                  <ChartLabel
                    cx={cx ?? 0}
                    cy={cy ?? 0}
                    color={color}
                    completedCount={completedCount}
                    totalCount={totalCount}
                  />
                );
              }
              return null;
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  );
}

