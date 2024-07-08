"use client";

import { Line, LineChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = Array.from({ length: 10 }, (_, i) => ({
  n: i + 1,
  O1: 1,
  OLogN: Math.log2(i + 1),
  ON: i + 1,
  ONLogN: (i + 1) * Math.log2(i + 1),
  ON2: (i + 1) ** 2
}));

const chartConfig = {
  O1: {
    label: "O(1)",
    color: "hsl(var(--chart-1))",
  },
  OLogN: {
    label: "O(log n)",
    color: "hsl(var(--chart-2))",
  },
  ON: {
    label: "O(n)",
    color: "hsl(var(--chart-3))",
  },
  ONLogN: {
    label: "O(n log n)",
    color: "hsl(var(--chart-4))",
  },
  ON2: {
    label: "O(n^2)",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

interface Props {
  className?: string;
}

export function NotationsChart({ className }: Props) {
  return (
    <ChartContainer config={chartConfig} className={`sm:min-h-[300px] md:min-h-[100px] ${className}`}>
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <Line
          dataKey="O1"
          type="monotone"
          stroke="var(--color-O1)"
          strokeWidth={2}
          dot={false}
        />
        <Line
          dataKey="OLogN"
          type="monotone"
          stroke="var(--color-OLogN)"
          strokeWidth={2}
          dot={false}
        />
        <Line
          dataKey="ON"
          type="monotone"
          stroke="var(--color-ON)"
          strokeWidth={2}
          dot={false}
        />
        <Line
          dataKey="ONLogN"
          type="monotone"
          stroke="var(--color-ONLogN)"
          strokeWidth={2}
          dot={false}
        />
        <Line
          dataKey="ON2"
          type="monotone"
          stroke="var(--color-ON2)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}