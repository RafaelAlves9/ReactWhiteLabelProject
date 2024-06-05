import { fields } from "@extensions/messages";
import { validateCPF, validateCellPhone } from "@extensions/validation";
import { z } from "zod";

export const ZResponsibleRequest = z.object({
    name: z.string().min(2, fields.min(2)),
    role: z.string().min(2, fields.min(2)),
    document: z
        .string()
        .refine((data) => {
            return validateCPF(data);
        }, {
            message: fields.documentInvalid
        }),
    cellPhone: z.string().refine((data) => {
        return validateCellPhone(data);
    }, {
        message: fields.cellInvalid
    }),
});

export type TResponsibleRequest = z.infer<typeof ZResponsibleRequest>;
