import { Checkbox } from "@/components/ui/checkbox";
import { EventModel } from "@/constants/models/event";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { CellStatus } from "./cell-status";

export const columns: ColumnDef<EventModel>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
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
    accessorKey: "name",
    header: "Nome da lista",
  },
  {
    id: "when",
    header: "Quando",
    cell: ({ row }) => {
      const date = new Date(row.original.day).toLocaleDateString("pt-BR");
      return `${date} das ${row.original.startAt} às ${row.original.endsAt}`;
    },
  },
  {
    accessorKey: "price",
    header: "Valor",
    cell: ({ row }) => `R$ ${row.original.price.toFixed(2)}`,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <CellStatus data={row.original} />,
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
