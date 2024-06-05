import { fields } from "@extensions/messages";
import z from "zod";
import { validateOptionOrMin2 } from "@extensions/validation";

export const ZPaginationMarketRequest = z.object({
  name: z.string(),
  type: z.string(),
  integrationCode: z.string(),
  description: z.string(),
  pageNumber: z.number(),
  pageSize: z.number(),
});

export const ZMarketRequest = z.object({
  id: z
    .number(),
  integrationCode: z
    .string()
    .min(1, fields.min(1)),
  name: z
    .string()
    .min(2, fields.min(2)),
  type: z
    .string()
    .min(1, fields.required),
  description: z
    .string()
    .refine((data) => validateOptionOrMin2(data), {
      message: fields.min(2)
    })
});

export type TPaginationMarketRequest = z.infer<typeof ZPaginationMarketRequest>;
export type TMarketRequest = z.infer<typeof ZMarketRequest>;
