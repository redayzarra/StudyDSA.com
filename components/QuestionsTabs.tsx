"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const QuestionsTabs = () => {
  const pathname = usePathname();

  const getLinkClass = (href: string) => {
    return pathname === href
      ? "rounded-sm text-[14px] p-2 bg-black font-medium text-white"
      : "rounded-sm text-[14px] p-2 text-neutral-400";
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
    {
      title: "Top 100 Liked",
      href: "/practice/top-100-liked",
      id: "top-100-liked",
    },
    {
      title: "NeetCode 150",
      href: "/practice",
      id: "neetcode-150",
    },
    {
      title: "Top Interview 150",
      href: "/practice/top-interview-150",
      id: "top-interview-150",
    },
  ];

  return (
    <div className="w-full backdrop-blur-[15px] border-[1px] shadow-2xl shadow-black rounded-md bg-black/[.35] border-t-[1px] border-neutral-800/[.35] p-6">
      <div className="absolute inset-x-0 h-[1px] mx-auto -top-px bg-gradient-to-r from-transparent via-stone-400 to-transparent" />
      <div className="flex flex-col space-y-2 w-[200px]">
        {items.map((item) => (
          <Link key={item.id} href={item.href} className={getLinkClass(item.href)}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuestionsTabs;

