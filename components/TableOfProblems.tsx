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
import QuestionsTabs from "./QuestionsTabs";

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
    <div className="flex flex-col items-start space-y-3 ml-4">
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

const TableOfProblems = async () => {
  const topics = await getTopics();
  const algorithms = await getAlgorithms();

  const basics = [
    {
      id: 100,
      title: "Data Structures",
      description: "",
      href: "/data-structures",
    },
    {
      id: 101,
      title: "Algorithms",
      description: "",
      href: "/algorithms",
    },
    {
      id: 102,
      title: "Big O Notation",
      description: "",
      href: "/big-o",
    },
    {
      id: 103,
      title: "Practice",
      description: "",
      href: "/practice",
    },
  ];

  return (
    <ScrollArea className="h-full mt-2 pr-6 py-4 w-[225px]">
      <QuestionsTabs />
    </ScrollArea>
  );
};

export default TableOfProblems;
