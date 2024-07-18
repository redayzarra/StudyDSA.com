"use client";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const DynamicProblemCharts = dynamic(() => import("./ProblemCharts"), {
  loading: () => <p>Loading charts...</p>,
  ssr: false,
});

const ProblemStats: React.FC = () => {
  return (
    <div className="w-full backdrop-blur-[15px] border-[1px] shadow-lg shadow-black rounded-md bg-black/[.35] border-t-[1px] border-neutral-800/[.35] pt-2 px-6 pb-4">
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
            <Suspense fallback={<div>Loading...</div>}>
              <DynamicProblemCharts />
            </Suspense>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProblemStats;
