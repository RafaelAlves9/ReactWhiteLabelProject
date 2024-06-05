import { fields } from "@extensions/messages";
import z from "zod";

export const ZTagCustomizationRequest = z.object({
    id: z.number().optional(),
    customerId: z.number().optional(),
    description: z.string().min(2, fields.required),
    message: z.string().min(2, fields.required),
    position: z.string().min(1, fields.required),
});

export type TTagCustomizationRequest = z.infer<typeof ZTagCustomizationRequest>;
