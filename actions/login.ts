"use server";

import { signIn } from "@/auth";
import { getUserByEmail, getUserByUsername } from "@/data/user";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { loginSchema } from "@/schemas";
import { AuthError } from "next-auth";
import * as z from "zod";
import isEmail from "./isEmail";

export const login = async (values: z.infer<typeof loginSchema>, callbackUrl?: string | null) => {
  const validated = loginSchema.safeParse(values);

  if (!validated.success) {
    return { error: "Invalid format. Please check for typos!" };
  }

  const { emailUsername, password } = validated.data;

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

  try {
    await signIn("credentials", {
      emailUsername,
      password,
      redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });

    return { success: "Successfully logging in!" };

    // Error handling
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default:
          return { error: "Something went wrong. Please try again" };
      }
    }

    throw error;
  }
};
