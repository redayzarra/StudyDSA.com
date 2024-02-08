import React from "react";
import AlgorithmCell from "./AlgorithmCell";

interface Props {
  items: { title: string; description: string; href: string }[];
}

const Algorithms = ({ items }: Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
      {items.map((item, index) => (
        <AlgorithmCell
          key={index}
          title={item.title}
          description={item.description}
          href={item.href}
        />
      ))}
    </div>
  );
};

export default Algorithms;
