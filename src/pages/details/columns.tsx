"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Expense } from "@/lib/types";
import { Checkbox } from "@/components/ui/checkbox";

export const columns: ColumnDef<Expense>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      return (
        <span className="text-sm font-medium">${row.original.amount}</span>
      );
    },
  },
  {
    accessorKey: "deductedFrom",
    header: "Deducted From",
  },
];
