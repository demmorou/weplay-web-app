import { z } from "zod";

export const eventFormSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "O nome deve ter pelo menos 3 caracteres" }),
    price: z.coerce.number().min(0.01, "O preço deve ser um valor positivo"),
    minParticipants: z.string().min(1, {
      message: "O número mínimo de participantes deve ser ao menos 1",
    }),
    maxParticipants: z.string().min(1, {
      message: "O número máximo deve ser maior que o mínimo",
    }),
    day: z.date(),
    startAt: z.string().regex(/^([0-1][0-9]|2[0-3]):([0-5][0-9])$/, {
      message: "O horário de início deve estar no formato HH:MM",
    }),
    endsAt: z.string().regex(/^([0-1][0-9]|2[0-3]):([0-5][0-9])$/, {
      message: "O horário de término deve estar no formato HH:MM",
    }),
    pixKey: z.string().optional(),
  })
  .refine((data) => data.maxParticipants >= data.minParticipants, {
    message: "O número máximo de participantes deve ser maior que o mínimo",
    path: ["maxParticipants"],
  });

export type EventFormValues = z.infer<typeof eventFormSchema>;
