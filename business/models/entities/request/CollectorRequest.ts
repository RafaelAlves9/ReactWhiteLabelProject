import { fields } from "@extensions/messages";
import z from "zod";

export const ZPaginationCollectorRequest = z.object({
  name: z.string(),
  serialCode: z.string(),
  model: z.string(),
  code: z.string(),
  active: z.boolean(),
  collectorLocationId: z.number(),
  pageNumber: z.number(),
  pageSize: z.number(),
});

export const ZCollectorRequest = z.object({
  id: z.number(),
  name: z.string().min(2, fields.min(2)),
  serialCode: z.string().min(2, fields.min(2)),
  model: z.string().min(2, fields.min(2)),
  code: z.string().min(2, fields.min(2)),
  active: z.boolean(),
  collectorLocationId: z.number(),
});

export type TPaginationCollectorRequest = z.infer<typeof ZPaginationCollectorRequest>;
export type TCollectorRequest = z.infer<typeof ZCollectorRequest>;
