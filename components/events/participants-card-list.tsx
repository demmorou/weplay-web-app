import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { XIcon } from "lucide-react";

type ParticipantsCardListProps = {
  data: string[];
};

const ParticipantsCardList: React.FC<ParticipantsCardListProps> = ({
  data,
}) => {
  return (
    <>
      <Card>
        <CardHeader className="font-medium">
          Participantes ({data.length})
        </CardHeader>

        <CardContent>
          <div className="flex flex-col space-y-2">
            {data.length ? (
              data.map((participant, index) => (
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
              ))
            ) : (
              <p className="font-light text-sm text-primary-foreground">
                Ainda não há nomes na lista
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ParticipantsCardList;
