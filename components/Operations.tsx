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
    <Table className="max-w-lg mx-auto rounded-lg overflow-hidden">
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold">Operations</TableHead>
          <TableHead className="font-bold text-center">Time</TableHead>
          <TableHead className="font-bold text-center">Space</TableHead>
          <TableHead className="hidden md:flex items-center font-bold">
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
  );
};

export default Operations;
