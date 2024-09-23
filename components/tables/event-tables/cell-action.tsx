"use client";
import { AlertModal } from "@/components/modal/alert-modal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import { EventModel } from "@/constants/models/event";
import {
  CopyCheckIcon,
  CopyIcon,
  Edit,
  MoreHorizontal,
  RepeatIcon,
  Trash,
  ViewIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface CellActionProps {
  data: EventModel;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const onConfirm = async () => {};

  const handleCopyLink = (eventId: string) => {
    const link = `http://localhost:3000/${eventId}/participar`;
    navigator.clipboard.writeText(link);
    toast({
      title: "Link copiado",
      description: "O link foi copiado para a área de transferência",
      variant: "default",
    });
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 3000);
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Abrir menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Ações</DropdownMenuLabel>

          {/* Details Action */}
          <DropdownMenuItem
            className="hover:cursor-pointer"
            onClick={() => handleCopyLink(data.id)}
          >
            {linkCopied ? (
              <CopyCheckIcon className="mr-2 h-4 w-4" />
            ) : (
              <CopyIcon className="mr-2 h-4 w-4" />
            )}{" "}
            Compartilhar
          </DropdownMenuItem>

          {/* Recreate Action */}
          <DropdownMenuItem
            className="hover:cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <RepeatIcon className="mr-2 h-4 w-4" /> Detalhar
          </DropdownMenuItem>

          {/* Update Action */}
          <DropdownMenuItem
            className="hover:cursor-pointer"
            onClick={() => router.push(`/dashboard/listas/${data.id}/editar`)}
          >
            <Edit className="mr-2 h-4 w-4" /> Editar
          </DropdownMenuItem>

          {/* Delete Action */}
          <DropdownMenuItem
            className="hover:cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <Trash className="mr-2 h-4 w-4" /> Excluir
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
