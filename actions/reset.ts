"use server";

import { getUserByEmail, getUserByUsername } from "@/data/user";
import { resetSchema } from "@/schemas";
import * as z from "zod";
import isEmail from "./isEmail";

export const reset = async (values: z.infer<typeof resetSchema>) => {
  const validated = resetSchema.safeParse(values);
  if (!validated.success) {
    return {error: "Invalid format. Please check for typos!"}
  }

  const {emailUsername} = validated.data;

  let user;
  if (isEmail(emailUsername)) {
    user = await getUserByEmail(emailUsername);
    if (!user) {
      return { error: "Email does not exist" };
    }
  } else {
    user = await getUserByUsername(emailUsername);
    if (!user) {
      return { error: "Username does not exist" };
    }
  }

  if (!user?.password) {
    return { error: "Please log in with Google or GitHub" };
  }


  return {success: "Password reset email sent!"}
}