import { Topic } from "@prisma/client";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import getTopics from "@/actions/topics/getTopics";

const TableSection = ({ children }: { children: React.ReactNode }) => {
  return <div className="mb-6">{children}</div>;
};

const TableHeading = ({ heading }: { heading: string }) => {
  return <h2 className="font-medium">{heading}</h2>;
};

const TableItems = ({ items }: { items: Topic[] }) => {
  return (
    <div className="flex flex-col items-start space-y-2">
      {items.map((item) => (
        <p key={item.id}>
          {item.title}
        </p>
      ))}
    </div>
  );
};

const TableOfContents = async () => {
  const topics = await getTopics();
  return (
    <ScrollArea className="hidden md:block h-[750px] w-[200px] rounded-md">
      <TableSection>
        <TableHeading heading="Introduction" />
        <TableItems items={topics} />
      </TableSection>

      <TableSection>
        <TableHeading heading="Data Structures" />
      </TableSection>
    </ScrollArea>
  );
};

export default TableOfContents;
