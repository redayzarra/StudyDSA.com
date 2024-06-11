"use client";

import Link from "next/link";
import Logo from "./Logo";
import { SearchBar } from "./SearchBar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { ScrollArea } from "./ui/scroll-area";
import {
  algorithmPages,
  dataStructurePages,
  introPages,
  problemPages,
} from "@/data/constants";
import { MdOutlineMoreTime } from "react-icons/md";
import { AiOutlineFunction, AiOutlineNodeIndex } from "react-icons/ai";
import { TbTargetArrow } from "react-icons/tb";

const SideBar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-background shadow-sm">
      <div className="flex items-center justify-center mt-6">
        <Logo />
      </div>
      <div className="mt-4 px-4">
        <SearchBar />
      </div>
      <ScrollArea className="h-full mt-2">
        <Accordion
          type="single"
          className=""
          collapsible
          defaultValue="introduction"
        >
          <AccordionItem value="introduction">
            <AccordionTrigger className="px-4 font-medium">
              <div className="flex items-center">
                <MdOutlineMoreTime size={20} className="mr-2" /> Introduction
              </div>
            </AccordionTrigger>
            <AccordionContent className="border-none border-0">
              <div className="ml-10 flex flex-col justify-center space-y-2 text-neutral-400">
                {introPages.map((doc, index) => (
                  <Link
                    key={index}
                    href={doc.href}
                    className="hover:font-extrabold"
                  >
                    {doc.title}
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" className="" collapsible>
          <AccordionItem value="data-structures">
            <AccordionTrigger className="px-4 font-medium">
              <div className="flex items-center">
                <AiOutlineNodeIndex size={20} className="mr-2" /> Data Structures
              </div>
            </AccordionTrigger>
            <AccordionContent className="border-none border-0">
              <div className="ml-10 flex flex-col justify-center space-y-2 text-neutral-300">
                {dataStructurePages.map((dataStructure, index) => (
                  <Link
                    key={index}
                    href={dataStructure.href}
                    className="hover:font-extrabold"
                  >
                    {dataStructure.title}
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" className="" collapsible>
          <AccordionItem value="algorithms">
            <AccordionTrigger className="px-4 font-medium">
              <div className="flex items-center">
                <AiOutlineFunction size={20} className="mr-2" /> Algorithms
              </div>
            </AccordionTrigger>
            <AccordionContent className="border-none border-0">
              <div className="ml-10 flex flex-col justify-center space-y-2 text-neutral-300">
                {algorithmPages.map((algorithm, index) => (
                  <Link
                    key={index}
                    href={algorithm.href}
                    className="hover:font-extrabold"
                  >
                    {algorithm.title}
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" className="" collapsible>
          <AccordionItem value="practice">
            <AccordionTrigger className="px-4 font-medium">
              <div className="flex items-center">
                <TbTargetArrow size={20} className="mr-2" /> Practice
              </div>
            </AccordionTrigger>
            <AccordionContent className="border-none border-0">
              <div className="ml-10 flex flex-col justify-center space-y-2 text-neutral-300">
                {problemPages.map((algorithm, index) => (
                  <Link
                    key={index}
                    href={algorithm.href}
                    className="hover:font-extrabold"
                  >
                    {algorithm.title}
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Socials will go at the very bottom */}
      </ScrollArea>
    </div>
  );
};

export default SideBar;
