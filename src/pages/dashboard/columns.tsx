"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Client } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, EllipsisVertical } from "lucide-react";
import { Link } from "react-router-dom";

export const columns: ColumnDef<Client>[] = [
  {
    id: "clientName",
    accessorKey: "clientName",
    header: "Client Name",
  },
  {
    id: "doa",
    accessorKey: "doa",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          DOA
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div>{row.original.doa}</div>;
    },
  },
  {
    id: "caseStatus",
    accessorKey: "caseStatus",
    header: "Case Status",
  },
  {
    id: "medicalStatus",
    accessorKey: "medicalStatus",
    header: "Medical Status",
  },
  {
    id: "lawFirm",
    accessorKey: "lawFirm",
    header: "Law Firm",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="size-8 rounded-full" variant="ghost">
              <EllipsisVertical />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link
                className="w-full"
                to={`/company-details/${row.original.id}`}
              >
                View
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
