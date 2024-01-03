import { usernameRegex } from "@/schemas";

const isEmail = (input: string) => {
  // If the input doesn't match the username regex, and it has an
  // '@' symbol, it's safe to assume it's an email.
  return !usernameRegex.test(input) && input.includes("@");
};

export default isEmail;
