"use server";

import { signIn } from "@/auth";
import { getUserByEmail, getUserByUsername } from "@/data/user";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { loginSchema } from "@/schemas";
import { AuthError } from "next-auth";
import * as z from "zod";
import isEmail from "./isEmail";

export const login = async (values: z.infer<typeof loginSchema>) => {
  const validated = loginSchema.safeParse(values);

  if (!validated.success) {
    return { error: "Invalid information provided!" };
  }

  const { emailUsername, password } = validated.data;

  let user;
  // If the user entered an email...
  if (isEmail(emailUsername)) {
    user = await getUserByEmail(emailUsername);
    // If the user entered a username...
  } else {
    user = await getUserByUsername(emailUsername);
  }

  if (!user?.email) {
    return {error: "Email does not exist."}
  }

  if (!user?.username) {
    return {error: "Username does not exist."}
  }

  if (!user?.password) {
    return { error: "Please log in with your original provider." };
  }

  try {
    await signIn("credentials", {
      emailUsername,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });

    return { success: "Successfully logging in!" };

    // Error handling
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default:
          return { error: "Something went wrong" };
      }
    }

    throw error;
  }
};
