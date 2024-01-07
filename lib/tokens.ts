import { getVerificationTokenByEmail } from "@/data/verificationToken";
import { v4 as uuidv4 } from "uuid";
import db from "./db";
import { getPasswordResetTokenByEmail } from "@/data/passwordResetToken";

const expirationTime = 5 * 60 * 1000; // 5 mins

export const generateVerificationToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + expirationTime);

  const existingToken = await getVerificationTokenByEmail(email);
  if (existingToken) {
    await db.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return verificationToken;
};

export const generatePasswordResetToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + expirationTime);

  const existingToken = await getPasswordResetTokenByEmail(email);

  if (existingToken) {
    // If the token expired, delete it and make a new one
    const hasExpired = new Date(existingToken.expires) < new Date();
    if (hasExpired) {
      await db.passwordResetToken.delete({
        where: { id: existingToken.id },
      });
    } else {
      return null;
    }
  }

  const passwordResetToken = await db.passwordResetToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return passwordResetToken;
};
