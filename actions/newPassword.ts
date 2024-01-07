"use server";

import { getPasswordResetTokenByToken } from "@/data/passwordResetToken";
import { getUserByEmail } from "@/data/user";
import { newPasswordSchema } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcryptjs";
import db from "@/lib/db";

export const newPassword = async (
  values: z.infer<typeof newPasswordSchema>,
  token?: string | null
) => {
  if (!token) {
    return { error: "Missing token" };
  }

  const validated = newPasswordSchema.safeParse(values);
  if (!validated.success) {
    return { error: "Invalid format. Please check for typos!" };
  }

  const { password, confirmPassword } = validated.data;
  if (password !== confirmPassword) {
    return { error: "Passwords do not match" };
  }

  const existingToken = await getPasswordResetTokenByToken(token);
  if (!existingToken) {
    return { error: "Token does not exist" };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();
  if (hasExpired) {
    return { error: "Token has expired! Please send another email" };
  }

  const existingUser = await getUserByEmail(existingToken.email);
  if (!existingUser) {
    return { error: "Email does not exist" };
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  await db.user.update({
    where: { id: existingUser.id },
    data: { password: hashedPassword },
  });

  await db.passwordResetToken.delete({
    where: { id: existingToken.id },
  });

  return { success: "Password updated! Please try logging in" };
};
