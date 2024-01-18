import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TbBinaryTree } from "react-icons/tb";
import { PiTreeStructure } from "react-icons/pi";
import { Badge } from "./ui/badge";
import { AiOutlineFunction } from "react-icons/ai";

const SkillTree = () => {
  return (
    <div className="w-full rounded-md bg-slate-300/50 dark:bg-zinc-950/50 px-8 py-4">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex space-x-4 items-center justify-center">
                <div className="rounded-full bg-background/50 dark:bg-foreground/10 shadow-md h-12 w-12 items-center justify-center flex flex-shrink-0">
                  <TbBinaryTree size={30} />
                </div>
                <h1 className="text-xl">Data Structures</h1>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* Algorithms & Machine Learning */}
        <Accordion type="single" collapsible defaultValue="algorithms">
          <AccordionItem value="algorithms">
            <AccordionTrigger>
              <div className="flex space-x-4 items-center justify-center">
                <div className="rounded-full bg-background/50 dark:bg-foreground/10 shadow-md h-12 w-12 items-center justify-center flex flex-shrink-0">
                  <AiOutlineFunction size={30} />
                </div>
                <h1 className="text-xl">Algorithms</h1>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem disabled value="machineLearning">
            <AccordionTrigger className="hover:font-medium text-muted-foreground">
              <div className="flex space-x-4 items-center justify-center">
                <div className="rounded-full bg-background/50 dark:bg-foreground/10 shadow-md h-12 w-12 items-center justify-center flex flex-shrink-0">
                  <PiTreeStructure size={30} />
                </div>
                <h1 className="text-xl">Machine Learning</h1>
                <Badge variant="secondary" className="text-muted-foreground">
                  Coming Soon
                </Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default SkillTree;
