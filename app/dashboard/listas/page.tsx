import { Breadcrumbs } from "@/components/breadcrumbs";
import PageContainer from "@/components/layout/page-container";
import { EventClient } from "@/components/tables/event-tables/client";
import { events } from "@/constants/data";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Listas", link: "/dashboard/listas" },
];

export default function page() {
  return (
    <PageContainer>
      <div className="space-y-2">
        <Breadcrumbs items={breadcrumbItems} />
        <EventClient data={events} />
      </div>
    </PageContainer>
  );
}
