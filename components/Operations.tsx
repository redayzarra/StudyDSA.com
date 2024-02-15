import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const Operations = () => {
  return (
    <Table>
      <TableCaption>Operations supported by Arrays</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="">Operations</TableHead>
          <TableHead>Time Complexity</TableHead>
          <TableHead>Space Complexity</TableHead>
          <TableHead className="">Notes</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default Operations;
