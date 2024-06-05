import { fields } from "@extensions/messages";
import z from "zod";

export const ZPaginationLineConfigurationRequest = z.object({
    description: z.string(),
    value: z.string(),
    productionLineId: z.number(),
    pageNumber: z.number(),
    pageSize: z.number()
});

export const ZLineConfigurationRequest = z.object({
    id: z.number().optional(),
    productionLineId: z.number(),
    description: z.string().min(2, fields.min(2)),
    type: z.string().min(2, fields.min(2)),
    value: z.string().min(2, fields.min(2)),
});

export type TPaginationLineConfigurationRequest = z.infer<typeof ZPaginationLineConfigurationRequest>;
export type TLineConfigurationRequest = z.infer<typeof ZLineConfigurationRequest>;
