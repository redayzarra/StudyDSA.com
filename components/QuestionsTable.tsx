"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { ProblemWithProgress } from "@/types/problems";
import { MasteryLevel, QuestionDifficulty } from "@prisma/client";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Difficulty from "./Difficulty";
import { Notes } from "./Notes";
import QuestionCheckbox from "./QuestionCheckbox";
import { Solution } from "./Solution";
import { Status } from "./Status";
import { Button } from "./ui/button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface Props {
  userId: string | undefined;
  problems: ProblemWithProgress[];
  title: string;
}

const difficultyOrder = {
  Easy: 1,
  Medium: 2,
  Hard: 3,
};

const parseFilters = (
  searchParams: ReadonlyURLSearchParams
): ColumnFiltersState => {
  const filters: [string, string][] = [
    ["select", "completed"],
    ["difficulty", "difficulty"],
    ["masteryLevel", "status"],
  ];

  return filters.reduce<ColumnFiltersState>((acc, [id, param]) => {
    const values = searchParams.get(param)?.split(",").filter(Boolean);
    if (values?.length) {
      acc.push({
        id,
        value: id === "select" ? values.includes("complete") : values,
      });
    }
    return acc;
  }, []);
};

export function QuestionsTable({ userId, title, problems }: Props) {
  const searchParams = useSearchParams();

  const [data] = useState<ProblemWithProgress[]>(problems);
  const [sorting, setSorting] = useState<SortingState>([
    { id: "difficulty", desc: false },
  ]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(() =>
    parseFilters(searchParams)
  );
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  useEffect(() => {
    setColumnFilters(parseFilters(searchParams));
  }, [searchParams]);

  const columns: ColumnDef<ProblemWithProgress>[] = [
    {
      id: "select",
      header: () => (
        <div className="flex items-center justify-center">Completed</div>
      ),
      cell: ({ row }) => (
        <div className="flex items-center justify-center -ml-4">
          <QuestionCheckbox userId={userId!} problem={row.original} />
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
      filterFn: (row, id, filterValue) => {
        const isComplete = row.original.progress?.isComplete ?? false;
        return filterValue === undefined || isComplete === filterValue;
      },
    },
    {
      accessorKey: "title",
      header: () => <div className="flex justify-left">Title</div>,
      cell: ({ row }) => {
        return (
          <div className="w-72">
            <Link
              className="text-left font-semibold"
              href={row.original.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {row.getValue("title")}
            </Link>
          </div>
        );
      },
    },
    {
      accessorKey: "difficulty",
      header: ({ column }) => (
        <div className="flex items-center justify-center">
          <Button
            variant="ghost"
            className="hover:bg-neutral-800/50"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Difficulty
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      ),
      cell: ({ row }) => (
        <div className="flex items-center justify-center">
          <Difficulty difficulty={row.original.difficulty} />
        </div>
      ),
      sortingFn: (a, b) =>
        difficultyOrder[a.original.difficulty] -
        difficultyOrder[b.original.difficulty],
      filterFn: (row, columnId, filterValue: QuestionDifficulty[]) =>
        filterValue.length === 0 ||
        filterValue.includes(row.getValue(columnId)),
    },
    {
      id: "masteryLevel",
      accessorFn: (row) => row.progress?.masteryLevel,
      header: () => (
        <div className="hidden md:flex items-center justify-center">Status</div>
      ),
      cell: ({ row }) => (
        <div className="hidden md:flex w-[100px]">
          <Status userId={userId} problem={row.original} />
        </div>
      ),
      filterFn: (row, columnId, filterValue: MasteryLevel[]): boolean => {
        const masteryLevel = row.getValue(columnId) as MasteryLevel | undefined;
        return (
          filterValue.length === 0 ||
          (masteryLevel !== undefined && filterValue.includes(masteryLevel))
        );
      },
    },
    {
      accessorKey: "notes",
      header: () => (
        <div className="flex items-center justify-center">Notes</div>
      ),
      cell: ({ row }) => (
        <div className="flex items-center justify-center">
          <Notes userId={userId} problem={row.original} />
        </div>
      ),
    },
    {
      accessorKey: "solution",
      header: () => (
        <div className="flex items-center justify-center">Solution</div>
      ),
      cell: ({ row }) => (
        <div className="flex items-center justify-center">
          <Solution code={row.original.solution} />
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const hasVisibleRows = table.getFilteredRowModel().rows.length > 0;

  if (!hasVisibleRows) {
    return null;
  }

  // Function to format the title for the href
  const formatTitleForHref = (title: string): string => {
    return title.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <div className="w-auto">
      <div className="w-full backdrop-blur-[15px] border-[1px] shadow-2xl shadow-black rounded-md bg-black/[.35] border-t-[1px] border-neutral-800/[.35]">
        <div className="absolute inset-x-0 h-[1px] mx-auto -top-px bg-gradient-to-r from-transparent via-stone-400 to-transparent" />
        <div
          className={cn(
            "flex items-center justify-center font-bold py-4 border-b-transparent border-1 border bg-gradient-to-t from-neutral-950/80  to-neutral-900/75 rounded-t-sm",
            font.className
          )}
        >
          {title}
        </div>
        <Table className="">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="h-[60px]">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  id={formatTitleForHref(row.original.title)}
                  data-state={row.getIsSelected() && "selected"}
                  className="h-[55px] px-4"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
