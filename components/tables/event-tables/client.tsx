"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { columns } from "./columns";
import { EventModel } from "@/constants/models/event";

interface EventClientProps {
  data: EventModel[];
}

export const EventClient: React.FC<EventClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Listas (${data.length})`}
          description="Gerencie suas listas de eventos."
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/dashboard/listas/criar`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Criar nova
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};
