import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["800"],
});

const SkillTreeHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1
      className={cn(
        "w-full mb-5 mt-2 text-[1.7rem] font-bold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-950 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50",
        font.className
      )}
    >
      {children}
    </h1>
  );
};

export default SkillTreeHeading;
