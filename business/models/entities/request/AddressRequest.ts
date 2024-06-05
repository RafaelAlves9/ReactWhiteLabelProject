import { fields } from "@extensions/messages";
import { validateCep, validateOptionOrMin2 } from "@extensions/validation";
import { z } from "zod";

export const ZAddressRequest = z.object({
  zipCode: z
    .string()
    .refine((data) => {
      return validateCep(data);
    }, {
      message: fields.cepInvalid,
    }),
  street: z
    .string()
    .min(2, fields.required),
  number: z
    .string()
    .min(1, fields.min(1)),
  complement: z
    .nullable(z.string())
    .refine((data) => validateOptionOrMin2(data), {
      message: fields.min(2)
    }),
  district: z
    .string()
    .min(2, fields.min(2)),
  city: z
    .string()
    .min(2, fields.min(2)),
  state: z
    .string()
    .min(2, fields.min(2)),
  country: z
    .string()
    .min(2, fields.min(2)),
});

export type TAddressRequest = z.infer<typeof ZAddressRequest>;
