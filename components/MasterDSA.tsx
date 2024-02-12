import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["800"],
});

const MasterDSA = () => {
  return (
    <div className="flex flex-col justify-between">
      <h1 className={cn("font-bold text-4xl", font.className)}>
        Master Data Structures <br /> and Algorithms
      </h1>
      <h2 className="dark:text-muted-foreground text-lg">
        Let's make the tough stuff easy. Get straightforward, free resources to
        tackle data structures and algorithms.
      </h2>
      <p className="italic">"Where complexity meets clarity."</p>
    </div>
  );
};

export default MasterDSA;
