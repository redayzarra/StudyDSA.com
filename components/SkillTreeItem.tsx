import { cn } from "@/lib/utils";
import { Chapter } from "@prisma/client";
import { Poppins } from "next/font/google";
import { PropsWithChildren } from "react";
import SkillTreeCell from "./SkillTreeCell";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

interface Props {
  value: string;
  name: string;
  items: Chapter[];
}

const SkillTreeItem = ({
  children,
  value,
  name,
  items,
}: PropsWithChildren<Props>) => {
  return (
    <AccordionItem id={value} value={value}>
      <AccordionTrigger>
        <div className="flex space-x-4 items-center justify-center">
          <div className="rounded-full bg-background/50 dark:bg-foreground/10 shadow-md h-12 w-12 items-center justify-center flex flex-shrink-0">
            {children}
          </div>
          <h1 className={cn("text-xl", font.className)}>{name}</h1>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="">
          <ul className="grid grid-cols-2 gap-4">
            {items.map((item, index) => (
              <SkillTreeCell
                key={index}
                title={item.title}
                href={item.href}
                description={item.description}
                chapterId={item.id}
              />
            ))}
          </ul>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default SkillTreeItem;
