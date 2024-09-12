import { PlaceModel } from "./place";

export type EventModel = {
  id: string;
  placeId: string;
  managerId: string;
  name: string;
  price: number;
  minParticipants: number;
  maxParticipants: number;
  day: Date;
  startAt: string;
  endsAt: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  participants: string[];
  place: PlaceModel;
  manager: {
    id: string;
    name: string;
  };
}