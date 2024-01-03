import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import isEmail from "./actions/isEmail";
import { getUserByEmail, getUserByUsername } from "./data/user";
import { loginSchema } from "./schemas";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        // Check if the credentials satisfy our schema
        const validated = loginSchema.safeParse(credentials);

        if (validated.success) {
          const { emailUsername, password } = validated.data;

          let user; // Initialize user

          // If the user entered an email...
          if (isEmail(emailUsername)) {
            user = await getUserByEmail(emailUsername);
            // If the user entered a username...
          } else {
            user = await getUserByUsername(emailUsername);
          }

          if (!user || !user.password) return null;

          const passwordMatch = await bcrypt.compare(password, user.password);
          if (passwordMatch) return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
