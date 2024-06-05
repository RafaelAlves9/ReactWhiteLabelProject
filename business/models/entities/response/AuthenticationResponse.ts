import { z } from "zod";

export const ZAuthenticationUserResponse = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
});

export type TAuthenticationUserResponse = z.infer<typeof ZAuthenticationUserResponse>;
