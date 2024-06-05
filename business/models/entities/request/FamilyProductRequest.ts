import { fields } from "@extensions/messages";
import z from "zod";

export const ZPaginationFamilyProductRequest = z.object({
  name: z.string(),
  code: z.string(),
  pageNumber: z.number(),
  pageSize: z.number()
});

export const ZFamilyProductRequest = z.object({
  id: z
    .number(),
  code: z
    .string()
    .min(2, fields.min(2)),
  name: z
    .string()
    .min(2, fields.min(2))
});

export type TPaginationFamilyProductRequest = z.infer<typeof ZPaginationFamilyProductRequest>;
export type TFamilyProductRequest = z.infer<typeof ZFamilyProductRequest>;
