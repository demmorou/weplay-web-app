import React from "react";
import { LucideRepeat } from "lucide-react";

import { EventModel } from "@/constants/models/event";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

type EventCardProps = {
  data: EventModel;
};

const EventCard: React.FC = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Racha da GOODLIFE</CardTitle>
        <Button title="Repetir">
          <LucideRepeat className="text-sm" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="text-xl font-bold">R$200,00</div>
        <p className="text-xs text-muted-foreground">Das 8h às 9h</p>
        <p className="text-xs text-muted-foreground">
          Mínimo 18 e máximo 24 pessoas
        </p>
      </CardContent>
    </Card>
  );
};

export default EventCard;
