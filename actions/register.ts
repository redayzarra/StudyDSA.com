"use server";

import { registerSchema } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcrypt";
import db from "@/lib/db";
import { getUserByEmail, getUserByUsername } from "@/data/user";

export const register = async (values: z.infer<typeof registerSchema>) => {
  // Parse the values through our registerSchema
  const validated = registerSchema.safeParse(values);

  // If we don't have a safe parse, throw an error immediately
  if (!validated.success) {
    return { error: "Invalid information provided!" };
  }

  // Extract the values from validated & hash the password
  const { username, email, password } = validated.data;
  const hashedPassword = await bcrypt.hash(password, 0);

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

  return { success: "User created!" };
};
