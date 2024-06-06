"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const QuestionsTabs = () => {
  const pathname = usePathname();

  const getLinkClass = (href: string) => {
    return pathname === href
      ? "rounded-sm text-[14px] p-2 bg-neutral-600/25 hover:bg-neutral-600/25 font-medium text-white"
      : "rounded-sm text-[14px] p-2 text-neutral-400 hover:bg-neutral-400/[0.15]";
  };

  const items = [
    {
      title: "Blind 75",
      href: "/practice/blind-75",
      id: "blind-75",
    },
    {
      title: "LeetCode 75",
      href: "/practice/leetcode-75",
      id: "leetcode-75",
    },
    // {
    //   title: "Top 100 Liked",
    //   href: "/practice/top-100-liked",
    //   id: "top-100-liked",
    // },
    {
      title: "NeetCode 150",
      href: "/practice",
      id: "neetcode-150",
    },
    // {
    //   title: "Top Interview 150",
    //   href: "/practice/top-interview-150",
    //   id: "top-interview-150",
    // },
  ];

  return (
    <div className="w-full backdrop-blur-[15px] border-[1px] shadow-2xl shadow-black rounded-md bg-black/[.35] border-t-[1px] border-neutral-800/[.35] p-6">
      <div className="absolute inset-x-0 h-[1px] mx-auto -top-px bg-gradient-to-r from-transparent via-stone-400 to-transparent" />
      <Accordion
        type="single"
        className="w-full"
        collapsible
        defaultValue="questions"
      >
        <AccordionItem value="questions">
          <AccordionTrigger>Questions</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2">
              {items.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={getLinkClass(item.href)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default QuestionsTabs;
