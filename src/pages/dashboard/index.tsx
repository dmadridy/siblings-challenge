import { data } from "@/lib/constants";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Clients</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
