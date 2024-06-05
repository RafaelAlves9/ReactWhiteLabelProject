import { fields } from "@extensions/messages";
import z from "zod";
import { ZAddressRequest } from "./AddressRequest";
import { validateCNPJ, validateOptionOrMin2 } from "@extensions/validation";

export const ZPaginationShippingCompanyRequest = z.object({
  name: z.string(),
  document: z.string(),
  code: z.string(),
  active: z.boolean(),
  pageNumber: z.number(),
  pageSize: z.number(),
});

export const ZShippingCompanyRequest = z.object({
  id: z
    .number(),
  name: z
    .string()
    .min(2, fields.min(2)),
  document: z
    .string()
    .refine((data) => {
      return validateCNPJ(data);
    }, {
      message: fields.documentInvalid,
    }),
  code: z
    .nullable(z.string())
    .refine((data) => {
      return validateOptionOrMin2(data);
    }, {
      message: fields.min(2),
    }),
  createDate: z.string().optional(),
  address: ZAddressRequest,
});

export type TPaginationShippingCompanyRequest = z.infer<typeof ZPaginationShippingCompanyRequest>;
export type TShippingCompanyRequest = z.infer<typeof ZShippingCompanyRequest>;
