import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import React from "react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const SkillTreeSubHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className={cn("font-[650] mb-2 text-[1.15rem]", font.className)}>
      {children}
    </h2>
  );
};

export default SkillTreeSubHeading;
