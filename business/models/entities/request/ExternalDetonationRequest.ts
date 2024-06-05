import { fields } from "@extensions/messages";
import z from "zod";

export const ZDetonationPaginationRequest = z.object({
    description: z.string(),
    type: z.string(),
    active: z.boolean(),
    customerId: z.number(),
    pageNumber: z.number(),
    pageSize: z.number(),
});

export const ZDetonationSaveRequest = z.object({
    description: z.string().min(3, fields.required),
    createDate: z.string().min(2, fields.required),
    type: z.string().min(1, fields.required),
    customerId: z.number().optional(),
});

export const ZDetonationUpdateRequest = z.object({
    id: z.number(),
    description: z.string().min(2, fields.required),
});

export type TDetonationSaveRequest = z.infer<typeof ZDetonationSaveRequest>;
export type TDetonationUpdateRequest = z.infer<typeof ZDetonationUpdateRequest>;
export type TDetonationPaginationRequest = z.infer<typeof ZDetonationPaginationRequest>;
