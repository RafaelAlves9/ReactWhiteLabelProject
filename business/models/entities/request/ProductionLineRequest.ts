import { fields } from "@extensions/messages";
import z from "zod";

export const ZPaginationProductionLineRequest = z.object({
    description: z.string(),
    computerCode: z.string(),
    productivePlantId: z.number(),
    pageNumber: z.number(),
    pageSize: z.number()
});

export const ZProductionLineRequest = z.object({
    id: z.number().optional(),
    productivePlantId: z.number().optional(),
    productivePlantName: z.string().optional(),
    description: z.string().min(2, fields.required),
    computerCode: z.string().min(2, fields.required),
});

export type TPaginationProductionLineRequest = z.infer<typeof ZPaginationProductionLineRequest>;
export type TProductionLineRequest = z.infer<typeof ZProductionLineRequest>;
