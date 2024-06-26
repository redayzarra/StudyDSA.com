import React from "react";
import { ProblemSearchBar } from "./ProblemSearchBar";

const ProblemBar = () => {
  return (
    <div>
      <div className="w-full border-dashed backdrop-blur-[15px] border-2 shadow-2xl shadow-black rounded-md bg-black/[.35] border-neutral-800/[.35] p-2">
        {/* <div className="absolute inset-x-0 h-[1px] mx-auto -top-px bg-gradient-to-r from-transparent via-stone-400 to-transparent" /> */}
        <ProblemSearchBar />
      </div>
    </div>
  );
};

export default ProblemBar;
