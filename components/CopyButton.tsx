"use client";

import { useState } from "react";
import { FaCheck, FaRegCopy } from "react-icons/fa6";
import { Button } from "./ui/button";

const CopyButton = ({
  code,
  className,
}: {
  code: string;
  className?: string;
}) => {
  // Initialize the checked state for the copy button
  const [isClicked, setIsClicked] = useState(false);

  // Copy and then reset
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 2000); // Reset isClicked after 2 seconds
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleCopy}
      className={className}
    >
      {isClicked ? <FaCheck /> : <FaRegCopy />}
    </Button>
  );
};

export default CopyButton;
