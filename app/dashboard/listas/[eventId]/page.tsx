"use client";
import React from "react";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { EventForm } from "@/components/forms/events/create-event";
import PageContainer from "@/components/layout/page-container";
import { events } from "@/constants/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar, XIcon, MapPinIcon, MapPinnedIcon } from "lucide-react";
import { ExitIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/format-currency";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Listas", link: "/dashboard/listas" },
  { title: "Ver", link: "/dashboard/listas/:eventId" },
];

export default function page() {
  // TODO: Get eventId from params
  const event = events[0];

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <div className="flex-1 space-y-4 p-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <Card>
          <CardHeader>{event.name}</CardHeader>

          <CardContent>
            <div className="w-full flex flex-col space-y-6">
              <div className="flex items-start   space-x-2">
                <Calendar />
                <p>
                  {format(new Date(event.day), "PPPP", { locale: ptBR })}, de{" "}
                  {event.startAt} às {event.endsAt}
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <MapPinIcon /> <p>{event.place?.name}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="font-medium">Valores</CardHeader>

          <CardContent>
            <div className="w-full flex flex-row items-center justify-between">
              <div className="max-w-36 md:w-full flex p-4 flex-col rounded-md space-y-2 bg-secondary">
                <p className="font-medium text-2xl">
                  {formatCurrency(event.price)}
                </p>
                <p className="font-light text-sm">Valor total</p>
              </div>
              <div className="max-w-36 md:w-full flex p-4 flex-col rounded-md space-y-2 bg-primary">
                <p className="font-medium text-2xl">
                  {formatCurrency(event.price / event.participants.length)}
                </p>
                <p className="font-light text-sm">Por pessoa</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="font-medium">
            Participantes ({event.participants.length})
          </CardHeader>

          <CardContent>
            <div className="flex flex-col space-y-2">
              {event.participants.map((participant, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-md space-x-2 hover:bg-primary duration-200 transition"
                >
                  <p className="font-light text-sm text-primary-foreground">
                    {participant}
                  </p>
                  <Button variant={"outline"} className="p-2">
                    <XIcon size={16} color="red" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
