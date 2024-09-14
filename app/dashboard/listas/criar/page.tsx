"use client";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EventForm } from "@/components/forms/events/create-event";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Listas", link: "/dashboard/listas" },
  { title: "Nova", link: "/dashboard/listas/nova" },
];

export default function Page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-8">
        <Breadcrumbs items={breadcrumbItems} />
        <EventForm />
      </div>
    </ScrollArea>
  );
}
