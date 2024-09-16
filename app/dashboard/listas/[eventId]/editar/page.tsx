"use client";
import React from "react";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { EventForm } from "@/components/forms/events/create-event";
import PageContainer from "@/components/layout/page-container";
import { events } from "@/constants/data";
import { useParams } from "next/navigation";
import ParticipantsCardList from "@/components/events/participants-card-list";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Listas", link: "/dashboard/listas" },
  { title: "Editar", link: "/dashboard/listas/:eventId/editar" },
];

export default function page() {
  const params = useParams();
  const event = events[0];

  return (
    <PageContainer scrollable>
      <div className="flex-1 space-y-4 p-8">
        <Breadcrumbs items={breadcrumbItems} />
        <EventForm initialData={event} />

        <ParticipantsCardList data={event.participants} />
      </div>
    </PageContainer>
  );
}
