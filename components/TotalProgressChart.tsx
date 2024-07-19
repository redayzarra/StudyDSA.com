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

interface Props {
  className?: string;
  color?: string;
}

interface ChartLabelProps {
  cx: number;
  cy: number;
  color: string;
  percentage: number;
  totalCompleted: number;
  totalProblems: number;
}

const ChartLabel: React.FC<ChartLabelProps> = React.memo(
  ({ cx, cy, color, percentage, totalCompleted, totalProblems }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
      <g
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
          <tspan
            x={cx}
            y={cy + 5}
            className={cn(
              "fill-foreground text-4xl font-bold transition-opacity duration-300",
              font.className
            )}
            fill={color}
          >
            {totalCompleted}%
          </tspan>
        </text>
      </g>
    );
  }
);

ChartLabel.displayName = "ChartLabel";

export function TotalProgressChart({ className, color = "#73BF5E" }: Props) {
  const { currentSet, problemSets, calculateTotalPercentage } =
    useProblemCountStore();

  const {
    percentage,
    totalCompleted,
    totalProblems,
    endAngle,
    chartData,
    chartConfig,
  } = useMemo(() => {
    const set = problemSets[currentSet];
    const percentage = calculateTotalPercentage(currentSet);
    const totalCompleted = set
      ? Object.values(set.completed).reduce((sum, count) => sum + count, 0)
      : 0;
    const totalProblems = set
      ? Object.values(set.total).reduce((sum, count) => sum + count, 0)
      : 0;
    const endAngle = (percentage / 100) * 360;
    const chartData = [
      { progress: "Total", problems: totalCompleted, fill: color },
    ];
    const chartConfig: ChartConfig = {
      problems: {
        label: "Total Progress",
      },
      Total: {
        label: "Total",
        color: color,
      },
    };
    return {
      percentage,
      totalCompleted,
      totalProblems,
      endAngle,
      chartData,
      chartConfig,
    };
  }, [currentSet, problemSets, calculateTotalPercentage, color]);

  return (
    <ChartContainer
      config={chartConfig}
      className={cn("overflow-visible w-48 h-48", className)}
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
                    percentage={percentage}
                    totalCompleted={totalCompleted}
                    totalProblems={totalProblems}
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
