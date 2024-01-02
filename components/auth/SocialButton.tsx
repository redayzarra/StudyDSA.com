import React from "react";
import { Button } from "../ui/button";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const SocialButton = ({ children, onClick }: Props) => {
  return (
    <Button
      className="w-full shadow-md"
      size="lg"
      variant="outline"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default SocialButton;
