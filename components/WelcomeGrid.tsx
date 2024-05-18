import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

export function WelcomeGrid() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          url={item.url}
          title={item.title}
          description={item.description}
          header={item.header}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "Big-O Notation",
    url: "/big-o",
    description:
      "Dive into the world of sorting algorithms and their efficiency.",
    header: <Skeleton />,
  },
  {
    title: "Data Structures",
    url: "/data-structures",
    description:
      "Dive into the world of sorting algorithms and their efficiency.",
    header: <Skeleton />,
  },
  {
    title: "Algorithms",
    url: "/algorithms",
    description:
      "Dive into the world of sorting algorithms and their efficiency.",
    header: <Skeleton />,
  },
  {
    title: "Practice LeetCode Questions!",
    url: "/practice",
    description:
      "Understand how hash tables work and their significance in programming.",
    header: <Skeleton />,
  },
  {
    title: "Support on Patreon",
    url: "/algorithms/graph-algorithms",
    description:
      "Dive into the world of sorting algorithms and their efficiency.",
    header: <Skeleton />,
  },
];
