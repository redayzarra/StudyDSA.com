import React from "react";
import Logo from "./Logo";
import TableOfContents from "./TableOfContents";
import { SearchBar } from "./SearchBar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const SideBar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-background shadow-sm">
      <div className="flex items-center justify-center space-x-12 mt-6 px-3">
        <Logo />
        <SearchBar />
      </div>
      <div className="mt-4 space-y-4">
        <Accordion type="single" className="border-" collapsible defaultValue="introduction">
          <AccordionItem value="introduction">
            <AccordionTrigger className="px-4">Introduction</AccordionTrigger>
            <AccordionContent className="border-none border-0">Coming by the end of the day</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default SideBar;
