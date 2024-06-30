import React from "react";
import { FaTrash } from "react-icons/fa6";
import { Button } from "./ui/button";

const ProblemDeleteButton = () => {
  return (
    <Button
      size="icon"
      className="h-9 bg-neutral-900/75 hover:bg-red-800/50 hover:border-red-900 text-neutral-400 hover:text-red-300 px-2"
      variant="outline"
    >
      <FaTrash size={15} />
    </Button>
  );
};

export default ProblemDeleteButton;
