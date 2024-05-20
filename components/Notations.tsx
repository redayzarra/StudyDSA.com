import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import localFont from "next/font/local";

const font = localFont({
  src: "../public/fonts/computerModern.ttf",
});

interface Props {
  items: {
    complexity: string;
    notation: string;
    rank: string;
    notes: string;
  }[];
}

const getColorClassByRank = (rank: string) => {
  switch (rank) {
    case "#1":
      return "text-green-500"; // Bright green
    case "#2":
      return "text-lime-500"; // Slightly lighter green
    case "#3":
      return "text-yellow-500"; // Yellow
    case "#4":
      return "text-amber-500"; // Yellow-orange
    case "#5":
      return "text-orange-600"; // Orange
    case "#6":
      return "text-rose-500"; // Light red
    case "#7":
      return "text-red-600"; // Red
    case "#8":
      return "text-red-800"; // Darker red
    default:
      return "";
  }
};
const Notations = ({ items }: Props) => {
  return (
    <div className="border-[1px] my-6 shadow-lg dark:border-stone-700/75 border-black/10 max-w-3xl mx-auto rounded-lg">
      <Table className="rounded-lg overflow-hidden text-">
        <TableHeader>
          <TableRow className="bg-stone-800/10 dark:bg-stone-200/5 hover:bg-stone-800/10">
            <TableHead className="font-bold text-foreground text-">
              Complexity
            </TableHead>
            <TableHead className="font-bold text-center text-foreground">
              Notation
            </TableHead>
            <TableHead className="font-bold text-center text-foreground">
              Rank
            </TableHead>
            <TableHead className="hidden md:flex items-center text-foreground font-bold">
              Notes
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.complexity}>
              <TableCell className="font-medium">{item.complexity}</TableCell>
              <TableCell
                className={cn(
                  "text-center font-bold text-lg truncate",
                  font.className
                )}
              >
                {item.notation}
              </TableCell>
              <TableCell
                className={cn(
                  "text-center text-base font-semibold",
                  getColorClassByRank(item.rank)
                )}
              >
                {item.rank}
              </TableCell>
              <TableCell className="hidden md:flex items-center mt-1 text-muted-foreground">
                {item.notes}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Notations;
