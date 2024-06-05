import { fields } from "@extensions/messages";
import { ZAddressRequest } from "@request/AddressRequest";
import z from "zod";
import { ZResponsibleRequest } from "./ResponsibleRequest";

export const ZPaginationClientRequest = z.object({
  name: z.string(),
  document: z.string(),
  code: z.string(),
  erpCode: z.string(),
  active: z.boolean(),
  pageNumber: z.number(),
  pageSize: z.number()
});

export const ZClientRequest = z.object({
  id: z.number().optional(),
  name: z.string().min(1, fields.required),
  document: z.string().min(1, fields.required),
  active: z.boolean(),
  hasOwnTransport: z.boolean(),
  codeType: z.string().min(1, fields.required),
  code: z.string().min(1, fields.required),
  erpCode: z.nullable(z.string()),
  createDate: z.string().min(1, fields.required),
  address: ZAddressRequest,
  responsible: z.nullable(ZResponsibleRequest),
});

export type TPaginationClientRequest = z.infer<typeof ZPaginationClientRequest>;
export type TClientRequest = z.infer<typeof ZClientRequest>;