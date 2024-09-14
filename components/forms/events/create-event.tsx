import { FC, useState } from "react";
import { eventFormSchema, EventFormValues } from "./schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Trash } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format, set } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { ptBR } from "date-fns/locale";
import CurrencyInput from "@/components/ui/currency-input";

type EventFormProps = {
  initialData?: any | null;
};

export const EventForm: FC<EventFormProps> = (props) => {
  // States
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  // Constants
  const title = props?.initialData ? "Editar lista" : "Criar lista";
  const description = props?.initialData
    ? "Editando uma lista"
    : "Criando uma nova lista";

  // Default values
  const defaultValues: EventFormValues = {
    name: "",
    price: 0,
    minParticipants: "1",
    maxParticipants: "1",
    day: new Date(),
    startAt: "",
    endsAt: "",
  };

  // Form
  const form = useForm<EventFormValues>({
    resolver: zodResolver(eventFormSchema),
    defaultValues,
    mode: "onSubmit",
  });

  // Handlers
  const onSubmit = (data: EventFormValues) => {
    console.log({ data });
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
        {props?.initialData && (
          <Button
            disabled={loading}
            variant="destructive"
            size="sm"
            // Handle open confirmation to delete
            onClick={() => setOpen(true)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </div>

      <Separator />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-4"
        >
          <div className="gap-8 md:grid md:grid-cols-2">
            {/* Left side */}
            <div className="gap-4 md:grid md:grid-cols-1 justify-between">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Nome do evento"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="day"
                render={({ field }) => (
                  <FormItem className="flex flex-col justify-between mt-2.5">
                    <FormLabel>Dia do jogo</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(new Date(field.value), "PPPP", {
                                locale: ptBR,
                              })
                            ) : (
                              <span>Escolha uma data</span>
                            )}
                            <CalendarIcon className="ml-auto w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="startAt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Horário de início</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        type="time"
                        placeholder="--:--"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="endsAt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Horário de fim</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        type="time"
                        placeholder="--:--"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Right side */}
            <div className="space-y-4">
              <div>
                <CurrencyInput
                  form={form}
                  label="Valor total"
                  name="price"
                  placeholder="R$ 0,00"
                />
              </div>

              <FormField
                control={form.control}
                name="minParticipants"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mínimo de participantes</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        disabled={loading}
                        placeholder="Mínimo de participantes"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="maxParticipants"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Máximo de participantes</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        disabled={loading}
                        placeholder="Máximo de participantes"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button
            className="w-full mt-8"
            type="submit"
            variant={"default"}
            disabled={!form.formState.isValid}
          >
            Criar
          </Button>
        </form>
      </Form>
    </>
  );
};
