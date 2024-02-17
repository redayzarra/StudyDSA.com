import React from "react";
import { Button } from "../ui/button";
import NeoButton from "../NeoButton";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const SocialButton = ({ children, onClick }: Props) => {
  return (
    <NeoButton
      className="shadow-md flex w-full py-3 items-center justify-center"
      onClick={onClick}
    >
      {children}
    </NeoButton>
  );
};

export default SocialButton;
