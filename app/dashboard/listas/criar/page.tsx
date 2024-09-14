"use client";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EventForm } from "@/components/forms/events/create-event";
import PageContainer from "@/components/layout/page-container";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Listas", link: "/dashboard/listas" },
  { title: "Nova", link: "/dashboard/listas/nova" },
];

export default function Page() {
  return (
    <PageContainer scrollable>
      <div className="flex-1 space-y-4 p-8">
        <Breadcrumbs items={breadcrumbItems} />
        <EventForm />
      </div>
    </PageContainer>
  );
}
