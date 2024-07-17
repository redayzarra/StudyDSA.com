import { NodeStyle } from "@/types/problems";
import { MotionValue, useMotionValue } from "framer-motion";

export const generatePolygonPositions = (
  count: number,
  containerWidth: number,
  containerHeight: number
) => {
  const centerX = containerWidth / 2;
  const centerY = containerHeight / 2;
  const radius = Math.min(containerWidth, containerHeight) * 0.4; // 40% of the smaller dimension

  return Array.from({ length: count }, (_, index) => {
    const angle = (index / count) * 2 * Math.PI - Math.PI / 2; // Start from top
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  });
};

interface MotionValueObject {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

export const useNodeMotionValues = (
  nodeStyles: NodeStyle[],
  size: number,
  nodePosArray: { x: number; y: number }[]
): MotionValueObject[] => {
  return nodeStyles.map((_, index) => ({
    x: useMotionValue(nodePosArray[index].x),
    y: useMotionValue(nodePosArray[index].y),
  }));
};