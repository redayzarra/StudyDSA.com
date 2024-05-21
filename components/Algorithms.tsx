import React from "react";
import AlgorithmCell from "./AlgorithmCell";
import { Algorithm } from "@prisma/client";

interface Props {
  items: Algorithm[];
}

const Algorithms = ({ items }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-3">
      {items.map((item, index) => (
        <AlgorithmCell
          key={index}
          title={item.title}
          description={item.description}
          href={item.href}
          algorithmId={item.id}
        />
      ))}
    </div>
  );
};

export default Algorithms;
