import { fields } from "@extensions/messages";
import z from "zod";

export const ZPaginationProductivePlantRequest = z.object({
    name: z.string(),
    identifier: z.string(),
    active: z.boolean(),
    pageNumber: z.number(),
    pageSize: z.number()
});

export const ZProductivePlantRequest = z.object({
    id: z.number().optional(),
    factoryId: z.number().optional(),
    depositId: z.number(),
    name: z.string().min(2, fields.min(2)),
    identifier: z.string().min(1, fields.required),
    createDate: z.string().min(2, fields.min(2)),
});

export type TPaginationProductivePlantRequest = z.infer<typeof ZPaginationProductivePlantRequest>;
export type TProductivePlantRequest = z.infer<typeof ZProductivePlantRequest>;
