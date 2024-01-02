"use server";

import { loginSchema } from "@/schemas";
import * as z from "zod";

export const login = async (values: z.infer<typeof loginSchema>) => {
  const validated = loginSchema.safeParse(values);

  if (!validated) {
    return { error: "Invalid information provided!" };
  }

  return { success: "Confirmation email has been sent!" };
};
