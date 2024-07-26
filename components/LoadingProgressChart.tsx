"use client";

import React, { useMemo } from "react";
import {
  Label,
  LabelList,
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
  ({ cx, cy, color, completedCount, totalCount }) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const percentage = Math.round((completedCount / totalCount) * 100);

    return (
      <g
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
          <tspan
            x={cx}
            y={cy}
            className={cn(
              "fill-foreground text-4xl font-bold transition-opacity duration-300",
              font.className,
              isHovered ? "opacity-0" : "opacity-100"
            )}
            fill={color}
          >
            {completedCount}
          </tspan>
          <tspan
            x={cx}
            y={cy + 5}
            className={cn(
              "fill-foreground text-4xl font-bold transition-opacity duration-300",
              font.className,
              isHovered ? "opacity-100" : "opacity-0"
            )}
            fill={color}
          >
            {percentage}%
          </tspan>
          <tspan
            x={cx}
            y={cy + 30}
            className={cn(
              "fill-muted-foreground text-[20px] font-semibold",
              isHovered ? "opacity-0" : "opacity-100"
            )}
          >
            / {totalCount.toLocaleString()}
          </tspan>
        </text>
      </g>
    );
  }
);

ChartLabel.displayName = "ChartLabel";

export function LoadingProgressChart({
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
          label: `${difficulty}`,
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
        startAngle={-90}
        endAngle={endAngle - 90}
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
        <RadialBar dataKey="problems" background cornerRadius={10}>
          <LabelList
            position="insideStart"
            dataKey="progress"
            className="fill-background text-base font-semibold capitalize"
            fontSize={10}
          />
        </RadialBar>
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

