"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AiOutlineNodeIndex } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";
import { PiGraph } from "react-icons/pi";
import { TbBinaryTree } from "react-icons/tb";
import { TypeWriter } from "./TypeWriter";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { Meteors } from "./Meteors";
import { NotationsChart } from "./NotationsChart";
import GraphNodes from "./GraphNodes";
import { NodeStyle, Edge } from "@/types/problems";

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
          external={item.external}
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
        <div className="font-thin text-sm">
          Everyone deserves a chance at good education.
        </div>
        <Meteors number={40} />
      </div>
    </div>
  </div>
);

const SkeletonOne = () => (
  <div className="flex flex-1 w-full overflow-hidden dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
    <NotationsChart className="-ml-[6px]" />
  </div>
);

const SkeletonTwo = () => {
  const code = {
    text: `def welcome(is_new):
    if is_new:
        return "Welcome!"
    return "Welcome back!"`,
  };

  const words = [
    { text: "def", className: "text-blue-400" },
    { text: " welcome(", className: "text-yellow-200" },
    { text: "is_new", className: "text-white" },
    { text: "):\n", className: "text-yellow-200" },
    { text: "    if ", className: "text-blue-400" },
    { text: "is_new:\n", className: "text-white" },
    { text: "        return ", className: "text-blue-400" },
    { text: '"Welcome!"\n', className: "text-rose-300" },
    { text: "    return ", className: "text-blue-400" },
    { text: '"Welcome ', className: "text-rose-300" },
    { text: 'back!"', className: "text-rose-300" },
  ];

  return (
    <div className="border-[1px] rounded-lg border-neutral-900 flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2 text-green">
      <div className="spacing-y-px max-w-3xl w-full mx-auto shadow-md bg-[#23272e] dark: dark:bg-black/[0.5] rounded-lg overflow-hidden">
        <div className="grid grid-cols-3 items-center px-2 py-1 bg-neutral-900">
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
  const nodeStyles: NodeStyle[] = [
    { backgroundColorClass: "bg-red-500", startPosition: { x: 108, y: 15 }},
    { backgroundColorClass: "bg-blue-500", startPosition: { x: 200, y: 50 }},
    { backgroundColorClass: "bg-green-600", startPosition: { x: 165, y: 115 }},
    { backgroundColorClass: "bg-orange-500", startPosition: { x: 50, y: 115 }},
    { backgroundColorClass: "bg-purple-500", startPosition: { x: 15, y: 50 }},
    // { backgroundColorClass: "bg-pink-400" },
  ];
  const edges: Edge[] = [
    { from: 0, to: 1, bidirectional: false },
    { from: 1, to: 3, bidirectional: false },
    { from: 1, to: 4, bidirectional: true },
    { from: 3, to: 4, bidirectional: true },
    { from: 4, to: 2, bidirectional: true },
    // { from: 4, to: 5, bidirectional: false },
    // { from: 5, to: 0, bidirectional: true },
  ];
  return (
    <div className="flex flex-1 w-full min-h-[200px] md:min-h-[0px]">
      <GraphNodes
        nodeStyles={nodeStyles}
        connectionColor="bg-red-400"
        size={30}
        edges={edges}
        width={220}
        height={128}
        className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2] h-32 w-full z-50"
      />
      <p className="absolute cursor-none text-muted-foreground/75 text-[12px] top-[25px] text-center">
        Hold to drag the nodes.
      </p>
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
        className="h-full w-1/3 relative rounded-2xl bg-white p-4 dark:bg-black/75 dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="/images/LeetCode.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10 absolute -top-5"
        />
        <p className="sm:text-sm text-xs text-center absolute font-semibold text-muted-foreground">
          Alien Dictionary
        </p>
        <p className="border border-red-500 absolute -bottom-2 bg-red-100 mb-2 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Hard
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black/75 dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src="/images/LeetCode.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10 absolute -top-5"
        />
        <p className="sm:text-sm text-xs absolute text-center font-semibold mb-4 text-muted-foreground mt-4">
          Reverse <br /> Linked List
        </p>
        <p className="border border-green-500 absolute -bottom-2 bg-green-100 mb-2 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5">
          Easy
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl relative bg-white p-4 dark:bg-black/75 dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="/images/LeetCode.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10 absolute -top-5"
        />
        <p className="sm:text-sm text-xs text-center absolute font-semibold text-muted-foreground">
          Group Anagrams
        </p>
        <p className="border border-orange-500 absolute -bottom-2 bg-orange-100 mb-2 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
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
    title: "About Me",
    url: "https://www.linkedin.com/in/redayzarra/",
    description: "A one-man team and his mission to make education free.",
    header: <Skeleton />,
    external: true,
  },
];
