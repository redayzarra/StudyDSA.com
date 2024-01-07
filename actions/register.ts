"use server";

import { getUserByEmail, getUserByUsername } from "@/data/user";
import db from "@/lib/db";
import { generateVerificationToken } from "@/lib/tokens";
import { registerSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import * as z from "zod";

export const register = async (values: z.infer<typeof registerSchema>) => {
  // Parse the values through our registerSchema
  const validated = registerSchema.safeParse(values);

  // If we don't have a safe parse, throw an error immediately
  if (!validated.success) {
    return { error: "Invalid format. Please check for typos!" };
  }

  // Extract the values from validated & hash the password
  const { username, email, password } = validated.data;
  const hashedPassword = await bcrypt.hash(password, 12);

  // Confirm that the email is not taken
  const existingEmail = await getUserByEmail(email);

  if (existingEmail) {
    return { error: "Email is already is use" };
  }

  // Confirm that the username is not taken
  const existingUsername = await getUserByUsername(username);

  if (existingUsername) {
    return { error: "Username is taken" };
  }

  await db.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });

  const verificationToken = await generateVerificationToken(email);

  return { success: "Confirmation email sent!" };
};
