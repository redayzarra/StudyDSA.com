import getAlgorithms from "@/actions/algorithms/getAlgorithms";
import getTopics from "@/actions/topics/getTopics";
import { Topic } from "@prisma/client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { ScrollArea } from "./ui/scroll-area";

const TableSection = ({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) => {
  return (
    <Accordion
      type="single"
      className="mr-4"
      collapsible
      defaultValue={heading}
    >
      <AccordionItem value={heading}>
        <AccordionTrigger>{heading}</AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

const TableItems = ({ items }: { items: Topic[] }) => {
  return (
    <div className="flex flex-col items-start space-y-3">
      {items.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className="hover:underline text-sm dark:text-stone-400"
        >
          {item.title}
        </a>
      ))}
    </div>
  );
};

const TableOfContents = async () => {
  const topics = await getTopics();
  const algorithms = await getAlgorithms();
  return (
    <ScrollArea className="h-full pr-6 py-6 w-[225px]">
      <TableSection heading="Data Structures">
        <TableItems items={topics} />
      </TableSection>

      <TableSection heading="Algorithms">
        <TableItems items={algorithms} />
      </TableSection>
    </ScrollArea>
  );
};

export default TableOfContents;
