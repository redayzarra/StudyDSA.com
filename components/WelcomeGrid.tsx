"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AiOutlineNodeIndex } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";
import { PiGraph } from "react-icons/pi";
import { TbBinaryTree } from "react-icons/tb";
import NotationsChart from "./NotationsChart";
import { TypeWriter } from "./TypeWriter";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { Meteors } from "./Meteors";

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
  <div className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2">
      <div className=" w-full relative max-w-xs">
        <div className="relative shadow-xl h-full px-4 overflow-hidden rounded-2xl flex flex-col items-center justify-center">
          {/* Meaty part - Meteor effect */}
          <div className="font-thin text-sm">Everyone deserves a chance at good education.</div>
          <Meteors number={40} />
        </div>
      </div>
  </div>
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
      className: "mr-20 md:mr-2 text-yellow-200",
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
      className: "mr-20 md:mr-6 text-white",
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
      text: '"Welcome!"',
      className: "text-rose-300",
    },
    {
      text: "AAAAAAAAAAAAAAAAA",
      className: "invisible md:hidden",
    },
    {
      text: "return",
      className: "ml-6 text-blue-400",
    },
    {
      text: '"Welcome',
      className: "text-rose-300",
    },
    {
      text: 'back!"',
      className: "text-rose-300",
    },
  ];

  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2 text-green">
      <div className="spacing-y-px max-w-3xl mx-auto shadow-md bg-[#23272e] dark: dark:bg-black/[0.5] border-t-2 dark:border-stone-700 rounded-lg overflow-hidden">
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

const SkeletonThree = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-black/75"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0 flex items-center justify-center">
          <AiOutlineNodeIndex size={24} />
        </div>
        <div className="w-full bg-gray-100 text-sm h-6 rounded-full pl-4 dark:bg-neutral-900 flex items-center line-clamp-1">
          Review Linked Lists
        </div>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-black/75"
      >
        <div className="w-full bg-gray-100 text-sm h-6 rounded-full pr-4 text-right justify-end dark:bg-neutral-900 flex items-center line-clamp-1">
          Study Trees
        </div>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-orange-500 to-amber-800 flex-shrink-0 flex items-center justify-center">
          <TbBinaryTree size={18} />
        </div>
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-black/75"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-lime-500 to-teal-700 flex-shrink-0 flex items-center justify-center">
          <PiGraph size={22} />
        </div>
        <div className="w-full bg-gray-100 text-sm h-6 rounded-full pl-4 dark:bg-neutral-900 flex items-center line-clamp-1">
          Learn Union Find
        </div>
      </motion.div>
    </motion.div>
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
          Alien Dictionary
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
    description: "Learn how to measure an algorithm's time complexity.",
    header: <SkeletonOne />,
  },
  {
    title: "Data Structures",
    url: "/data-structures",
    description: "Understand different data structures and their uses.",
    header: <SkeletonThree />,
  },
  {
    title: "Algorithms",
    url: "/algorithms",
    description: "Explore the most important algorithms in computer science.",
    header: <SkeletonTwo />,
  },
  {
    title: "Practice LeetCode Questions!",
    url: "/practice",
    description:
      "Practice problem solving with curated lists of questions! Track your progress and prepare to ace your technical interviews.",
    header: <SkeletonFour />,
  },
  {
    title: "About Us",
    url: "/about",
    description: "A one-man team and his mission to make education free.",
    header: <Skeleton />,
  },
];
