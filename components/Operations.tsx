import React, { PropsWithChildren } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

interface Props {
  items: { operation: string; time: string; space: string; notes: string }[];
}

const Operations = ({ items, children }: PropsWithChildren<Props>) => {
  return (
    <div className="">
      {/* <h2 className="font-bold mb-8">
        Operations: <span className="font-normal">{children}</span>
      </h2> */}
      <Table className="max-w-4xl mx-auto rounded-lg overflow-hidden">
        <TableHeader>
          <TableRow>
            <TableHead className="text-foreground">Operations</TableHead>
            <TableHead className="text-foreground text-center">
              Time Complexity
            </TableHead>
            <TableHead className="text-foreground text-center">
              Space Complexity
            </TableHead>
            <TableHead className="text-foreground">Notes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.operation}>
              <TableCell className="">{item.operation}</TableCell>
              <TableCell className="text-center">{item.time}</TableCell>
              <TableCell className="text-center">{item.space}</TableCell>
              <TableCell className="text-muted-foreground">
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
