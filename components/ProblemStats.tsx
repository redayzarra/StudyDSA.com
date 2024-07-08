import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { ProblemChart } from "./ProblemChart";

const ProblemStats = () => {
  return (
    <div className="w-full backdrop-blur-[15px] border-[1px] shadow-lg shadow-black rounded-md bg-black/[.35] border-t-[1px] border-neutral-800/[.35] pt-2 px-6 pb-4">
      {/* Highlight */}
      <div className="absolute inset-x-0 h-[1px] mx-auto -top-px bg-gradient-to-r from-transparent via-stone-400 to-transparent" />
      <Accordion
        type="single"
        className="w-full"
        collapsible
        defaultValue="progress"
      >
        <AccordionItem value="progress">
          <AccordionTrigger>Progress</AccordionTrigger>
          <AccordionContent>
            <div className="-space-y-9 -mt-6 -mb-6 flex flex-col items-center justify-center">
              <ProblemChart className="scale-[.65]" />
              <ProblemChart className="scale-[.65]" color="#F2AE30" />
              <ProblemChart className="scale-[.65]" color="#F23C13" />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProblemStats;
