import { fields } from "@extensions/messages";
import z from "zod";

export const ZPaginationBlastingServiceRequest = z.object({
  name: z.string(),
  description: z.string(),
  serviceLocationId: z.number(),
  active: z.boolean(),
  pageNumber: z.number(),
  pageSize: z.number(),
});

export const ZBlastingServiceRequest = z.object({
  id: z.number(),
  name: z.string().min(2, fields.min(2)),
  description: z.nullable(z.string()).refine((data) => data === null || data.length === 0 ||data.length > 2, {
    message: fields.min(2)
  }),
  createDate: z.string().min(2, fields.min(2)),
  serviceLocationId: z.number(),
});

export type TPaginationBlastingServiceRequest = z.infer<typeof ZPaginationBlastingServiceRequest>;
export type TBlastingServiceRequest = z.infer<typeof ZBlastingServiceRequest>;
