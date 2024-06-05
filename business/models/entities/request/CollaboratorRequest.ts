import { fields } from "@extensions/messages";
import { ZAddressRequest } from "@request/AddressRequest";
import z from "zod";

export const ZPaginationCollaboratorRequest = z.object({
    name: z.string(),
    document: z.string(),
    role: z.string(),
    cellPhone: z.string(),
    blaster: z.boolean(),
    blastingAssistant: z.boolean(),
    active: z.boolean(),
    collaboratorLocationId: z.number(),
    pageNumber: z.number(),
    pageSize: z.number()
});

const ZResponsibleRequest = z.object({
    name: z.string().min(1, fields.required),
    role: z.string().min(1, fields.required),
    document: z.string().min(1, fields.required),
    cellPhone: z.string().min(1, fields.required)
});

export const ZCollaboratorRequest = z.object({
    id: z.string().optional(),
    collaboratorLocationId: z.number().optional(),
    identifier: z.nullable(z.string()).refine((data) => data === null || data?.length === 0 || data.length > 2, {
        message: fields.min(2)
    }),
    password: z.nullable(z.string()).refine((data) => data === null || data?.length === 0 || data.length > 2, {
        message: fields.min(2)
    }),
    collectorAccess: z.boolean(),
    blaster: z.boolean(),
    blastingAssistant: z.boolean(),
    createDate: z.string().min(1, fields.required),
    active: z.boolean(),
    address: ZAddressRequest,
    responsible: z.nullable(ZResponsibleRequest),
});

export type TPaginationCollaboratorRequest = z.infer<typeof ZPaginationCollaboratorRequest>;
export type TCollaboratorRequest = z.infer<typeof ZCollaboratorRequest>;
