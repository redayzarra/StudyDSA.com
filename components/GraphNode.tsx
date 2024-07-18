import React from "react";
import { NodeStyle } from "@/types/problems";

interface Props {
  style: NodeStyle;
  index: number;
  position: { x: number; y: number };
  getNodeSize: (index: number) => number;
  constraintsRef: React.RefObject<HTMLDivElement>;
}

const GraphNode = ({
  style,
  index,
  position,
  getNodeSize,
}: Props) => {
  const nodeSize = getNodeSize(index);
  const fontSize = Math.max(10, nodeSize / 2);

  return (
    <div
      className={`${style.backgroundColorClass} cursor-pointer absolute flex items-center justify-center rounded-full`}
      style={{
        width: `${nodeSize}px`,
        height: `${nodeSize}px`,
        left: `${position.x}px`,
        top: `${position.y}px`,
        fontSize: `${fontSize}px`,
        transform: `translate(-50%, -50%)`, // Center the node on its position
      }}
    >
      <span className="text-white font-bold">{index + 1}</span>
    </div>
  );
};

export default GraphNode;
