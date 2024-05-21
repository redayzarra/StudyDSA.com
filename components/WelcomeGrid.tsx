"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { motion } from "framer-motion";
import Image from "next/image";
import NotationsChart from "./NotationsChart";
import { TypeWriter } from "./TypeWriter";
import { FaCircle } from "react-icons/fa";

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
  <div className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"></div>
);

const SkeletonOne = () => (
  <div className="flex flex-1 min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
    <NotationsChart />
  </div>
);

const SkeletonTwo = () => {
  const words = [
    {
      text: "def",
      className: "text-blue-400",
    },
    {
      text: "welcome(",
      className: "text-yellow-200",
    },
    {
      text: "is_new",
      className: "text-white -mx-2",
    },
    {
      text: "):",
      className: "text-yellow-200",
    },
    {
      text: "AAAAAAAAAAAAA",
      className: "invisible md:hidden",
    },
    {
      text: "if",
      className: "ml-6 text-blue-400",
    },
    {
      text: "is_new:",
      className: "text-white",
    },
    {
      text: "AAAAAAAAAAAAAAAAA",
      className: "invisible md:hidden",
    },
    {
      text: "return",
      className: "ml-12 text-blue-400",
    },
    {
      text: '"Hello!"',
      className: "text-rose-300",
    },
        {
      text: "AAAAAAAAAAAAAAAAA",
      className: "invisible md:hidden",
    },
    {
      text: "return",
      className: "text-blue-400",
    },
    {
      text: '"Welcome',
      className: "text-rose-300",
    },
    {
      text: 'Back!"',
      className: "text-rose-300",
    },
  ];

  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2 text-green">
      <div className="spacing-y-px max-w-3xl mx-auto shadow-md bg-[#23272e] dark: dark:bg-stone-900/[0.3] border-t-2 dark:border-stone-700 rounded-lg overflow-hidden">
        <div className="grid grid-cols-3 items-center px-2 py-1 bg-[#17191d] dark:bg-black/70">
          <div className="flex justify-start items-center space-x-2">
            <FaCircle className="text-[#FF605C]" size={10} />
            <FaCircle className="text-[#FFBD44]" size={10} />
            <FaCircle className="text-[#00CA4E]" size={10} />
          </div>
          <h1 className="text-[14px] font-medium text-white justify-self-center">
            Welcome.py
          </h1>
        </div>
        <div className="p-2">
          <TypeWriter words={words} />
        </div>
      </div>
    </div>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black/75 dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="/images/LeetCode.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-muted-foreground mt-4">
          Longest Increasing Path In a Matrix
        </p>
        <p className="border border-red-500 bg-red-100 mb-2 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Hard
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black/75 dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src="/images/LeetCode.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold mb-4 text-muted-foreground mt-4">
          Reverse <br /> Linked List
        </p>
        <p className="border border-green-500 bg-green-100 mb-2 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Easy
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black/75 dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="/images/LeetCode.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-muted-foreground mt-4">
          Longest Increasing Subsequence
        </p>
        <p className="border border-orange-500 bg-orange-100 mb-2 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Medium
        </p>
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "Big-O Notation",
    url: "/big-o",
    description:
      "Dive into the world of sorting algorithms and their efficiency.",
    header: <SkeletonOne />,
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
    header: <SkeletonTwo />,
  },
  {
    title: "Practice LeetCode Questions!",
    url: "/practice",
    description:
      "Understand how hash tables work and their significance in programming.",
    header: <SkeletonFour />,
  },
  {
    title: "Support on Patreon",
    url: "/algorithms/graph-algorithms",
    description:
      "Dive into the world of sorting algorithms and their efficiency.",
    header: <Skeleton />,
  },
];
