import { z } from "zod";

export const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be have at least 3 characters")
    .max(20, "Username must not be longer than 20 characters"),
  email: z.string().email("Not a valid email"),
  password: z
    .string()
    .min(8, "Password must be longer than 8 characters")
    .max(100, "Password must not be longer than 100 characters"),
});
