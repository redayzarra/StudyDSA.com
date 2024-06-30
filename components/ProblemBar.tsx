import React from "react";
import { ProblemSearchBar } from "./ProblemSearchBar";
import { LeetCodeProblem } from "@prisma/client";
import ProblemDeleteButton from "./ProblemDeleteButton";

interface Props {
  userId: string | undefined;
  problems: { [category: string]: LeetCodeProblem[] }; // Define the type for the 'problems' prop
  title: string;
}

const ProblemBar = ({ problems, title, userId }: Props) => {
  return (
    <div>
      <div className="flex items-center justify-between w-full border-dashed backdrop-blur-[15px] border-2 shadow-2xl shadow-black rounded-md bg-black/[.35] border-neutral-800/[.35] p-2">
        {/* <div className="absolute inset-x-0 h-[1px] mx-auto -top-px bg-gradient-to-r from-transparent via-stone-400 to-transparent" /> */}
        <ProblemSearchBar problems={problems} />
        <div className="">
          <ProblemDeleteButton
            userId={userId}
            title={title}
            problems={problems}
          />
        </div>
      </div>
    </div>
  );
};

export default ProblemBar;
