import { EventModel } from "@/constants/models/event";
import { eventStatusTranslate } from "@/constants/translated";

interface CellStatusProps {
  data: EventModel;
}

export const CellStatus: React.FC<CellStatusProps> = ({ data }) => {
  const status = data.status;

  return (
    <span
      className={`text-sm capitalize font-semibold ${
        eventStatusTranslate[data.status].color || ""
      }`}
    >
      {eventStatusTranslate[status].text}
    </span>
  );
};
