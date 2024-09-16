import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, MapPinIcon } from "lucide-react";
import { ptBR } from "date-fns/locale";
import { format } from "date-fns";

type EventDetailsProps = {
  event: {
    name: string;
    day: string;
    startAt: string;
    endsAt: string;
    place: {
      name: string;
    };
  };
};

const EventDetails: React.FC<EventDetailsProps> = ({ event }) => {
  return (
    <div className="w-full">
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
    </div>
  );
};

export default EventDetails;
