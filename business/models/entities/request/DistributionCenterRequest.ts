import { fields } from "@extensions/messages";
import { ZAddressRequest } from "@request/AddressRequest";
import z from "zod";
import { ZResponsibleRequest } from "./ResponsibleRequest";
import { validateCNPJ } from "@extensions/validation";

export const ZPaginationDistributionCenterRequest = z.object({
    name: z.string(),
    document: z.string(),
    code: z.string(),
    erpCode: z.string(),
    step: z.string(),
    active: z.boolean(),
    pageNumber: z.number(),
    pageSize: z.number()
});

export const ZDistributionCenterRequest = z.object({
    id: z.number(),
    name: z.string().min(2, fields.min(2)),
    document: z
        .string()
        .refine((data) => validateCNPJ(data), {
            message: fields.documentInvalid,
        }),
    code: z.string().min(1, fields.required),
    erpCode: z.nullable(z.string()),
    createDate: z.string().min(1, fields.required),
    active: z.boolean(),
    address: ZAddressRequest,
    responsible: z.nullable(ZResponsibleRequest),
});

export type TPaginationDistributionCenterRequest = z.infer<typeof ZPaginationDistributionCenterRequest>;
export type TDistributionCenterRequest = z.infer<typeof ZDistributionCenterRequest>;
