"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
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
import { LeetCodeProblem } from "@prisma/client";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import Difficulty from "./Difficulty";
import { Notes } from "./Notes";
import QuestionCheckbox from "./QuestionCheckbox";
import { Solution } from "./Solution";
import { Status } from "./Status";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface Props {
  userId: string | undefined;
  problems: LeetCodeProblem[];
  showTags?: boolean;
  title: string;
}

export function QuestionsTable({ userId, title, problems, showTags = true }: Props) {
  const [data, setData] = useState<LeetCodeProblem[]>(problems);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const columns: ColumnDef<LeetCodeProblem>[] = [
    {
      id: "select",
      header: () => <div className="">Completed</div>,
      cell: ({ row }) => (
        <div className="flex items-center justify-center w-[75px]">
          <QuestionCheckbox userId={userId!} problemId={row.original.id} />
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "title",
      header: "Title",
      cell: ({ row }) => {
        return (
          <div className="relative w-[250px]">
            <Link
              className="text-left font-semibold"
              href={row.original.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {row.getValue("title")}
            </Link>
            {/* {showTags && (
              <div className="absolute top-6 left-0">
                <ProblemTags items={row.original.tags} />
              </div>
            )} */}
          </div>
        );
      },
    },
    {
      accessorKey: "difficulty",
      header: () => <div className="flex items-center justify-center">Difficulty</div>,
      cell: ({ row }) => <div className="flex items-center justify-center">
        <Difficulty difficulty={row.original.difficulty} />
      </div>,
    },
    {
      accessorKey: "status",
      header: () => <div className="hidden md:flex">Status</div>,
      cell: ({ row }) => (
        <div className="hidden md:flex">
          <Status userId={userId} problemId={row.original.id} />
        </div>
      ),
    },
    {
      accessorKey: "notes",
      header: () => (
        <div className="flex items-center justify-center">Notes</div>
      ),
      cell: ({ row }) => (
        <div className="flex items-center justify-center">
          <Notes userId={userId} problemId={row.original.id} />
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
    getPaginationRowModel: getPaginationRowModel(),
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

  return (
    <div className="w-auto">
      {/* Table */}
      <div className="w-full backdrop-blur-[15px] border-[1px] shadow-2xl shadow-black rounded-md bg-black/[.35] border-t-[1px] border-neutral-800/[.35]">
        {/* Highlight */}
        <div className="absolute inset-x-0 h-[1px] mx-auto -top-px bg-gradient-to-r from-transparent via-stone-400 to-transparent" />
          <div className={cn("flex items-center justify-center font-bold pt-5 pb-3", font.className)}>
            {title}
          </div>
        <Table className="">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
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
                  data-state={row.getIsSelected() && "selected"}
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
