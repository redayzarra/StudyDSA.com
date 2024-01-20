import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { dataStructures } from "@/data/navData";
import { AiOutlineFunction } from "react-icons/ai";
import { TbBinaryTree } from "react-icons/tb";

const SkillTree = () => {
  return (
    <div className="w-full shadow-lg rounded-md bg-slate-200/50 dark:bg-zinc-950/50 border-t-2 border-white dark:border-border px-8 py-4">
      <div className="grid gap-8 grid-cols-1 xm:grid-cols-2">
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex space-x-4 items-center justify-center">
                <div className="rounded-full bg-background/50 dark:bg-foreground/10 shadow-md h-12 w-12 items-center justify-center flex flex-shrink-0">
                  <TbBinaryTree size={30} />
                </div>
                <h1 className="text-xl">Arrays</h1>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Static Arrays <br />
              Dynamic Arrays <br />
              Tuples <br />
              Strings <br />
              Stacks <br />
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
              <div className="">
                <ul className="grid grid-cols-2 gap-4">
                  {dataStructures.map((dataStructure) => (
                    <div className="rounded-sm p-2 bg-transparent hover:bg-muted-foreground/10 dark:hover:bg-black/25 hover:cursor-pointer space-y-2">
                      <h1 className="font-semibold">{dataStructure.title}</h1>
                      <h2 className="line-clamp-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </h2>
                    </div>
                  ))}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default SkillTree;
