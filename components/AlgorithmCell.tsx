import Link from "next/link";
import React from "react";
import { Checkbox } from "./ui/checkbox";

const AlgorithmCell = () => {
  return (
    <div className="relative hover:-translate-y-1 transition-all">
      <Link href="/">
        <div className="rounded-sm shadow-md transition-all p-2 bg-gray-300/50 hover:bg-gray-300/70 dark:bg-muted-foreground/10 dark:hover:bg-muted-foreground/20 border-t-2 border-white dark:border-white/10 hover:cursor-pointer space-y-2">
          <h1 className="font-semibold text-[1rem]">Sorting</h1>
          <h2 className="line-clamp-1 text-muted-foreground text-sm">
            Sorting is how you reorder a list
          </h2>
        </div>
      </Link>
      <Checkbox className="absolute top-2 right-2 rounded-full" />
    </div>
  );
};

export default AlgorithmCell;
