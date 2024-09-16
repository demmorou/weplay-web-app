import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { ParticipantForm } from "../forms/events/participant-form";

const ParticipantModal: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Adicionar nome</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicionar nome na lista</DialogTitle>
          <DialogDescription>
            Informe seu nome e e-mail para participar da lista
          </DialogDescription>
        </DialogHeader>

        <ParticipantForm />
      </DialogContent>
    </Dialog>
  );
};

export default ParticipantModal;
