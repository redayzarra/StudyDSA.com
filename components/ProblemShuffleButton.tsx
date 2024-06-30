import React from "react";
import { Button } from "./ui/button";
import { FaTrash } from "react-icons/fa6";

const ProblemShuffleButton = () => {
  return (
    <Button
      size="icon"
      className="h-9 bg-neutral-900/75 hover:bg-red-800/50 hover:border-red-900 text-neutral-400 hover:text-red-200 px-2"
      variant="outline"
    >
      <FaTrash size={15} />
    </Button>
  );
};

export default ProblemShuffleButton;
