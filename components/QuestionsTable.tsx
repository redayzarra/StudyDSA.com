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
import { LeetCodeProblem } from "@prisma/client";
import Link from "next/link";
import { useState } from "react";
import Difficulty from "./Difficulty";
import QuestionCheckbox from "./QuestionCheckbox";
import { Status } from "./Status";
import { Notes } from "./Notes";

interface Props {
  userId: string | undefined;
  problems: LeetCodeProblem[];
}

export function QuestionsTable({ userId, problems }: Props) {
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
          <QuestionCheckbox
            userId={userId!}
            problemId={row.original.id}
          />
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "title",
      header: "Title",
      cell: ({ row }) => {
        const href = row.original.href;
        return href ? (
          <Link
            className="text-left font-bold"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {row.getValue("title")}
          </Link>
        ) : (
          <span className="text-left">Links are not working</span>
        );
      },
    },
    {
      accessorKey: "difficulty",
      header: () => <div>Difficulty</div>,
      cell: ({ row }) => <Difficulty difficulty={row.original.difficulty} />,
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
      header: () => <div className="hidden md:flex items-center justify-center">Notes</div>,
      cell: ({ row }) => (
        <div className="hidden md:flex items-center justify-center"><Notes /></div>
      ),
    },
    {
      accessorKey: "solution",
      header: () => <div className="flexitems-center justify-center">Solution</div>,
      cell: ({ row }) => (
        <div className="flex items-center justify-center"><Notes /></div>
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
      <div className="w-full backdrop-blur-[15px] border-[1px] shadow-2xl shadow-black rounded-md bg-black/[.35] border-t-[1px] border-neutral-800/[.35] p-4">
        {/* Highlight */}
        <div className="absolute inset-x-0 h-[1px] mx-auto -top-px bg-gradient-to-r from-transparent via-stone-400 to-transparent" />
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
                  className=""
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

