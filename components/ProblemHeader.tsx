import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import React, { PropsWithChildren } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

interface Props {
  title: string;
}

const ProblemHeader = ({ title, children }: PropsWithChildren<Props>) => {
  return (
    <div className="space-y-5">
      <h1 className={cn("text-4xl md:text-6xl font-bold", poppins.className)}>
        {title}
      </h1>
      {children}
    </div>
  );
};

export default ProblemHeader;
