import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { dataStructures } from "@/data/navData";
import { TbBrandCitymapper } from "react-icons/tb";
import { MdDataArray } from "react-icons/md";
import { AiOutlineNodeIndex } from "react-icons/ai";
import SkillTreeHeading from "./SkillTreeHeading";
import SkillTreeCell from "./SkillTreeCell";
import SkillTreeItem from "./SkillTreeItem";
import { arraySkills, linkedSkills } from "@/data/skillsData";
import { BiSolidCoinStack } from "react-icons/bi";

const DataStructureSkills = () => {
  return (
    <div className="w-full shadow-lg rounded-md bg-slate-200/50 dark:bg-zinc-950/50 border-t-2 border-white dark:border-border px-8 py-4">
      <SkillTreeHeading>Data Structures</SkillTreeHeading>
      {/* The Basics */}
      <h2 className="font-semibold mb-2">Basics</h2>
      <div className="grid gap-x-8 grid-cols-1 xm:grid-cols-2">
        {/* First Column */}
        <Accordion type="multiple">
          {/* Arrays */}
          <SkillTreeItem items={arraySkills} name="Arrays" value="arrays">
            <MdDataArray size={30} />
          </SkillTreeItem>
          {/* Linked Lists */}
          <SkillTreeItem
            items={linkedSkills}
            name="Linked Lists"
            value="linkedLists"
          >
            <AiOutlineNodeIndex size={30} />
          </SkillTreeItem>
        </Accordion>

        {/* Second Column */}
        <Accordion type="multiple">
          {/* Hashmaps */}
          <SkillTreeItem
            name="Hashmaps & Sets"
            value="hashmaps"
            items={dataStructures}
          >
            <TbBrandCitymapper size={35} />
          </SkillTreeItem>
        </Accordion>
      </div>

      {/* Intermediate Data Structrues */}
      <h2 className="font-semibold mt-10 mb-2">Intermediate</h2>
      <div className="grid gap-x-8 grid-cols-1 xm:grid-cols-2">
        <Accordion type="multiple">
          {/* First Column */}
          <AccordionItem value="arrays">
            <AccordionTrigger>
              <div className="flex space-x-4 items-center justify-center">
                <div className="rounded-full bg-background/50 dark:bg-foreground/10 shadow-md h-12 w-12 items-center justify-center flex flex-shrink-0">
                  <MdDataArray size={30} />
                </div>
                <h1 className="text-xl">Arrays</h1>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="">
                <ul className="grid grid-cols-2 gap-4">
                  {dataStructures.map((dataStructure) => (
                    <SkillTreeCell>{dataStructure.title}</SkillTreeCell>
                  ))}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="linkedLists">
            <AccordionTrigger>
              <div className="flex space-x-4 items-center justify-center">
                <div className="rounded-full bg-background/50 dark:bg-foreground/10 shadow-md h-12 w-12 items-center justify-center flex flex-shrink-0">
                  <AiOutlineNodeIndex size={30} />
                </div>
                <h1 className="text-xl">Linked Lists</h1>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="">
                <ul className="grid grid-cols-2 gap-4">
                  {dataStructures.map((dataStructure) => (
                    <SkillTreeCell>{dataStructure.title}</SkillTreeCell>
                  ))}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* Second Column */}
        <Accordion type="multiple">
          <AccordionItem value="algorithms">
            <AccordionTrigger>
              <div className="flex space-x-4 items-center justify-center">
                <div className="rounded-full bg-background/50 dark:bg-foreground/10 shadow-md h-12 w-12 items-center justify-center flex flex-shrink-0">
                  <TbBrandCitymapper size={35} />
                </div>
                <h1 className="text-xl">Hashmaps & Sets</h1>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="">
                <ul className="grid grid-cols-2 gap-4">
                  {dataStructures.map((dataStructure) => (
                    <SkillTreeCell>{dataStructure.title}</SkillTreeCell>
                  ))}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Advanced Data Structrues */}
      <h2 className="font-semibold mt-10 mb-2">Advanced</h2>
      <div className="grid gap-x-8 grid-cols-1 xm:grid-cols-2">
        <Accordion type="multiple">
          {/* First Column */}
          <AccordionItem value="arrays">
            <AccordionTrigger>
              <div className="flex space-x-4 items-center justify-center">
                <div className="rounded-full bg-background/50 dark:bg-foreground/10 shadow-md h-12 w-12 items-center justify-center flex flex-shrink-0">
                  <MdDataArray size={30} />
                </div>
                <h1 className="text-xl">Arrays</h1>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="">
                <ul className="grid grid-cols-2 gap-4">
                  {dataStructures.map((dataStructure) => (
                    <SkillTreeCell>{dataStructure.title}</SkillTreeCell>
                  ))}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="linkedLists">
            <AccordionTrigger>
              <div className="flex space-x-4 items-center justify-center">
                <div className="rounded-full bg-background/50 dark:bg-foreground/10 shadow-md h-12 w-12 items-center justify-center flex flex-shrink-0">
                  <AiOutlineNodeIndex size={30} />
                </div>
                <h1 className="text-xl">Linked Lists</h1>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="">
                <ul className="grid grid-cols-2 gap-4">
                  {dataStructures.map((dataStructure) => (
                    <SkillTreeCell>{dataStructure.title}</SkillTreeCell>
                  ))}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* Second Column */}
        <Accordion type="multiple">
          <AccordionItem value="algorithms">
            <AccordionTrigger>
              <div className="flex space-x-4 items-center justify-center">
                <div className="rounded-full bg-background/50 dark:bg-foreground/10 shadow-md h-12 w-12 items-center justify-center flex flex-shrink-0">
                  <TbBrandCitymapper size={35} />
                </div>
                <h1 className="text-xl">Hashmaps & Sets</h1>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="">
                <ul className="grid grid-cols-2 gap-4">
                  {dataStructures.map((dataStructure) => (
                    <SkillTreeCell>{dataStructure.title}</SkillTreeCell>
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

export default DataStructureSkills;
