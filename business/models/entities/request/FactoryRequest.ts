import { fields } from "@extensions/messages";
import { ZAddressRequest } from "@request/AddressRequest";
import z from "zod";
import { ZResponsibleRequest } from "./ResponsibleRequest";

export const ZPaginationFactoryRequest = z.object({
    name: z.string(),
    document: z.string(),
    code: z.string(),
    erpCode: z.string(),
    step: z.string(),
    active: z.boolean(),
    pageNumber: z.number(),
    pageSize: z.number()
});

export const ZFactoryRequest = z.object({
    id: z.number(),
    name: z.string().min(2, fields.required),
    document: z.string().min(2, fields.required),
    code: z.string().min(2, fields.required),
    erpCode: z.nullable(z.string()),
    militaryRegime: z.string().min(2, fields.required),
    createDate: z.string().min(2, fields.required),
    active: z.boolean(),
    address: ZAddressRequest,
    responsible: ZResponsibleRequest,
});

export type TPaginationFactoryRequest = z.infer<typeof ZPaginationFactoryRequest>;
export type TFactoryRequest = z.infer<typeof ZFactoryRequest>;
