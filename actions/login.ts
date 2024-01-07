"use server";

import { signIn } from "@/auth";
import { getUserByEmail, getUserByUsername } from "@/data/user";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { loginSchema } from "@/schemas";
import { AuthError } from "next-auth";
import * as z from "zod";
import isEmail from "./isEmail";
import { getVerificationTokenByEmail } from "@/data/verificationToken";
import { generateVerificationToken } from "@/lib/tokens";

export const login = async (values: z.infer<typeof loginSchema>) => {
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

  if (!user) {
    return { error: "User does not exist" };
  }

  // Come up with better way for verfifying users.
  
  // if (!user.emailVerified) {
  //   const verificationToken = await generateVerificationToken(user.email!);

  //   return {success: "For your safety, please confirm your email"}
  // }

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
          return { error: "Something went wrong. Please try again" };
      }
    }

    throw error;
  }
};
