import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import SocialButton from "./SocialButton";

const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <SocialButton onClick={() => null}>
        <FcGoogle className="w-5 h-5" />
      </SocialButton>
      <SocialButton onClick={() => null}>
        <FaGithub className="w-5 h-5" />
      </SocialButton>
    </div>
  );
};

export default Social;
