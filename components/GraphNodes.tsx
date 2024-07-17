"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { useMotionValue } from "framer-motion";
import { Edge, NodeStyle } from "@/types/problems";
import { cn } from "@/lib/utils";
import ConnectingLine from "./ConnectingLine";
import GraphNode from "./GraphNode";
import { generatePolygonPositions } from "@/utils/graphs";

interface GraphNodesProps {
  nodeStyles: NodeStyle[];
  edges: Edge[];
  size?: number;
  className?: string;
  connectionColor?: string;
}

const GraphNodes: React.FC<GraphNodesProps> = ({
  nodeStyles,
  edges,
  size,
  className,
  connectionColor,
}) => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const containerWidth = 350;
  const containerHeight = 350;

  const [nodePosArray, setNodePosArray] = useState(() =>
    generatePolygonPositions(nodeStyles.length, containerWidth, containerHeight)
  );

  const nodeMotionValues = useRef(
    nodeStyles.map((_, index) => ({
      x: useMotionValue(nodePosArray[index].x),
      y: useMotionValue(nodePosArray[index].y),
    }))
  ).current;

  const getNodeSize = useCallback(
    (index: number) => size || nodeStyles[index].size || 50,
    [size, nodeStyles]
  );

  useEffect(() => {
    const positions = generatePolygonPositions(
      nodeStyles.length,
      containerWidth,
      containerHeight
    );
    setNodePosArray(positions);

    nodeMotionValues.forEach((motionValue, index) => {
      motionValue.x.set(positions[index].x);
      motionValue.y.set(positions[index].y);
    });

    const unsubscribes = nodeMotionValues.map((motionValue, index) => [
      motionValue.x.onChange((x) =>
        setNodePosArray((prev) => {
          const newArray = [...prev];
          newArray[index] = { ...newArray[index], x };
          return newArray;
        })
      ),
      motionValue.y.onChange((y) =>
        setNodePosArray((prev) => {
          const newArray = [...prev];
          newArray[index] = { ...newArray[index], y };
          return newArray;
        })
      ),
    ]);

    return () => unsubscribes.flat().forEach((unsubscribe) => unsubscribe());
  }, [nodeStyles.length, containerWidth, containerHeight]);

  return (
    <div ref={constraintsRef} className={cn("h-[350px] w-[350px]", className)}>
      {edges.map((edge, index) => (
        <ConnectingLine
          key={index}
          edge={edge}
          nodePosArray={nodePosArray}
          getNodeSize={getNodeSize}
          connectionColor={connectionColor}
        />
      ))}
      {nodeStyles.map((style, index) => (
        <GraphNode
          key={index}
          style={style}
          index={index}
          motionValue={nodeMotionValues[index]}
          getNodeSize={getNodeSize}
          constraintsRef={constraintsRef}
        />
      ))}
    </div>
  );
};

export default GraphNodes;
