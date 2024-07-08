import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import Link from "next/link";

const ProblemStats = () => {
  return (
    <div className="w-full backdrop-blur-[15px] border-[1px] shadow-2xl shadow-black rounded-md bg-black/[.35] border-t-[1px] border-neutral-800/[.35] p-6">
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
            <div className="flex flex-col space-y-2">
              <h2>Easy: 24 / 50</h2>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProblemStats;
