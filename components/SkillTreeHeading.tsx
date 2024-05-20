import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const SkillTreeHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1
      className={cn(
        "w-full mb-5 mt-2 text-[1.7rem] font-semibold flex items-center justify-center",
        font.className
      )}
    >
      {children}
    </h1>
  );
};

export default SkillTreeHeading;
