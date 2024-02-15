import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

interface Props {
  items: { operation: string; time: string; space: string; notes: string }[];
}

const Operations = ({ items }: Props) => {
  return (
    <div className="border-[2px] border-black/10 dark:border-border max-w-3xl mx-auto rounded-lg">
      <Table className="rounded-lg overflow-hidden">
        <TableHeader>
          <TableRow className="bg-stone-800/10 dark:bg-stone-200/5 hover:bg-stone-800/10">
            <TableHead className="font-bold text-foreground">
              Operations
            </TableHead>
            <TableHead className="font-bold text-center text-foreground">
              Time
            </TableHead>
            <TableHead className="font-bold text-center text-foreground">
              Space
            </TableHead>
            <TableHead className="hidden md:flex items-center text-foreground font-bold">
              Notes
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.operation}>
              <TableCell className="">{item.operation}</TableCell>
              <TableCell className="text-center">{item.time}</TableCell>
              <TableCell className="text-center">{item.space}</TableCell>
              <TableCell className="hidden md:flex text-muted-foreground">
                {item.notes}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Operations;
