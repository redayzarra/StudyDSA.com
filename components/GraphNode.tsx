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

  // Function to determine if the backgroundColor is a hexcode
  const isHexCode = (color: string) => /^#([0-9A-F]{3}){1,2}$/i.test(color);

  // Determine the background color styling
  const backgroundColorStyle = isHexCode(style.backgroundColorClass)
    ? { backgroundColor: style.backgroundColorClass }
    : {};

  return (
    <div
      className={`${
        !isHexCode(style.backgroundColorClass) ? style.backgroundColorClass : ''
      } cursor-pointer absolute flex items-center justify-center rounded-full`}
      style={{
        width: `${nodeSize}px`,
        height: `${nodeSize}px`,
        left: `${position.x}px`,
        top: `${position.y}px`,
        fontSize: `${fontSize}px`,
        transform: `translate(-50%, -50%)`,
        ...backgroundColorStyle,
      }}
    >
      <span className="text-white font-bold">{index + 1}</span>
    </div>
  );
};

export default GraphNode;
