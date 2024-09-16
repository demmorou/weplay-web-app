import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { formatCurrency } from "@/lib/format-currency";
import React from "react";

type EventPriceDetailsProps = {
  value: number;
  participants: number;
};

const EventPriceDetails: React.FC<EventPriceDetailsProps> = (props) => {
  return (
    <div className="w-full">
      <Card>
        <CardHeader className="font-medium">Valores</CardHeader>

        <CardContent>
          <div className="w-full flex flex-row items-center justify-between">
            <div className="max-w-36 md:w-full flex p-4 flex-col rounded-md space-y-2 bg-secondary">
              <p className="font-medium text-2xl">
                {formatCurrency(props.value)}
              </p>
              <p className="font-light text-sm">Valor total</p>
            </div>
            <div className="max-w-36 md:w-full flex p-4 flex-col rounded-md space-y-2 bg-primary">
              <p className="font-medium text-2xl">
                {formatCurrency(props.value / props.participants)}
              </p>
              <p className="font-light text-sm">Por pessoa</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventPriceDetails;
