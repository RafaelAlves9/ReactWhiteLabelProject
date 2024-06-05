import { fields } from "@extensions/messages";
import { z } from "zod";

export const ZLoginRequester = z.object({
  login: z.string()
  .min(2, fields.min(2))
  .max(200, fields.max(200)),
  password: z.string()
  .min(1, fields.required)
  .max(25, fields.max(25)),
});

//EXAMPLE
// z.string().min(5, { message: "Must be 5 or more characters long" });
// z.string().max(5, { message: "Must be 5 or fewer characters long" });
// z.string().length(5, { message: "Must be exactly 5 characters long" });
// z.string().email({ message: "Invalid email address" });
// z.string().url({ message: "Invalid url" });
// z.string().emoji({ message: "Contains non-emoji characters" });
// z.string().uuid({ message: "Invalid UUID" });
// z.string().includes("tuna", { message: "Must include tuna" });
// z.string().startsWith("https://", { message: "Must provide secure URL" });
// z.string().endsWith(".com", { message: "Only .com domains allowed" });
// z.string().datetime({ message: "Invalid datetime string! Must be UTC." });
// z.string().ip({ message: "Invalid IP address" });

export type TLoginRequester = z.infer<typeof ZLoginRequester>;
