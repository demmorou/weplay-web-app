"use client";
import EventDetails from "@/components/events/event-details";
import EventPriceDetails from "@/components/events/event-price";
import ParticipantModal from "@/components/events/participant-modal";
import ParticipantsCardList from "@/components/events/participants-card-list";
import PageContainer from "@/components/layout/page-container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { events } from "@/constants/data";
import { formatCurrency } from "@/lib/format-currency";
import { useParams } from "next/navigation";
import React from "react";

export default function page() {
  const params = useParams();
  const event = events[0];

  return (
    <PageContainer scrollable>
      <div className="w-full flex flex-col items-center justify-between space-y-4 md:space-y-0">
        <div className="space-y-8">
          <EventDetails
            event={{
              day: event.day,
              endsAt: event.endsAt,
              name: event.name,
              place: { name: event.place!.name! },
              startAt: event.startAt,
            }}
          />

          <EventPriceDetails
            participants={event.participants.length}
            value={event.price}
          />

          {/* Com sua presenca o valor fica XX */}
          <div className="text-left flex flex-col text-sm text-gray-500">
            Com sua presença o valor fica{" "}
            {formatCurrency(event.price / (event.participants.length + 1))} por
            pessoa
          </div>
          <ParticipantModal />

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Ver lista de participantes ({event.participants.length})
              </AccordionTrigger>
              <AccordionContent>
                <ParticipantsCardList data={event.participants} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </PageContainer>
  );
}
