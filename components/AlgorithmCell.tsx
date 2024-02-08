import Link from "next/link";
import React from "react";
import { Checkbox } from "./ui/checkbox";

interface Props {
  title: string;
  description: string;
  href: string;
}

const AlgorithmCell = ({ title, description, href }: Props) => {
  return (
    <div className="relative hover:-translate-y-1 transition-all">
      <Link href={href}>
        <div className="rounded-sm shadow-md transition-all p-2 bg-gray-300/40 hover:bg-gray-300/70 dark:bg-muted-foreground/10 dark:hover:bg-muted-foreground/20 border-t-2 border-white dark:border-white/10 hover:cursor-pointer space-y-2">
          <h1 className="font-semibold text-[0.92rem]">{title}</h1>
          <h2 className="line-clamp-1 text-muted-foreground text-sm">
            {description}
          </h2>
        </div>
      </Link>
      <Checkbox className="absolute top-2 right-2 rounded-full" />
    </div>
  );
};

export default AlgorithmCell;
