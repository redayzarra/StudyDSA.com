import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import SocialButton from "./SocialButton";

const Social = () => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <div className="flex items-center w-full gap-x-2">
      <SocialButton onClick={() => onClick("google")}>
        <FcGoogle className="w-5 h-5" />
      </SocialButton>
      <SocialButton onClick={() => onClick("github")}>
        <FaGithub className="w-5 h-5" />
      </SocialButton>
    </div>
  );
};

export default Social;
