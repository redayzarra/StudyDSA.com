import * as z from "zod";

// Regular expression for a traditional username format
const usernameRegex = /^[a-zA-Z0-9_.]+$/;

export const loginSchema = z.object({
  emailUsername: z
    .union([
      z.string().email({ message: "Invalid email" }),
      z.string().regex(usernameRegex, {
        message:
          "Username can only contain letters, numbers, underscores, and periods.",
      }),
    ])
    .refine((data) => data.length > 0, {
      message: "Email or username is required",
    }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const registerSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z
    .string()
    .min(6, { message: "Password should be at least 6 characters" }),
  username: z
    .string()
    .regex(usernameRegex, {
      message:
        "Username can only contain letters, numbers, underscores, and periods.",
    })
    .min(1, { message: "Username is required" }),
});
