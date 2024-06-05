import { fields } from "@extensions/messages";
import z from "zod";

export const ZPaginationDepositRequest = z.object({
  name: z.string(),
  code: z.string(),
  type: z.string(),
  product: z.string(),
  active: z.boolean(),
  allowMovement: z.boolean(),
  pageNumber: z.number(),
  pageSize: z.number(),
  depositLocationId: z.number(),
});

export const ZDepositRequest = z.object({
  id: z.string(),
  name: z.string().min(2, fields.min(2)),
  identifier: z.string().min(2, fields.min(2)),
  code: z
    .nullable(z.string())
    .refine((data) => data === null || data?.length === 0 || data.length > 2, {
      message: fields.min(2),
    }),
  type: z.string().min(1, fields.required),
  product: z.string().min(1, fields.required),
  createDate: z.string(),
  allowMovement: z.boolean(),
  collaboratorId: z.string().min(1, fields.required),
  depositLocationId: z.number(),
  active: z.boolean(),
});

export type TPaginationDepositRequest = z.infer<typeof ZPaginationDepositRequest>;
export type TDepositRequest = z.infer<typeof ZDepositRequest>;
