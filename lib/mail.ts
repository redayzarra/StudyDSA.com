import { Resend } from "resend";
import VerificationEmail from "@/components/emails/verificationEmail";

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/new-verification?token=${token}`;
  await resend.emails.send({
    from: "Welcome@studydsa.com",
    to: email,
    subject: "StudyDSA: Verify Your Email Address",
    react: VerificationEmail({ confirmLink }),
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/new-password?token=${token}`;
  await resend.emails.send({
    from: "Reset@studydsa.com",
    to: email,
    subject: "StudyDSA: Reset Your Password",
    html: `<p>Click <a href=${resetLink}>here</a> to reset your password.</p>`,
  });
};
