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
  width?: number;
  height?: number;
}

const GraphNodes: React.FC<GraphNodesProps> = ({
  nodeStyles,
  edges,
  size = 15,
  className,
  connectionColor,
  width = 150,
  height = 150,
}) => {
  const constraintsRef = useRef<HTMLDivElement>(null);

  // Create initial node positions
  const [nodePosArray, setNodePosArray] = useState(() => {
    const defaultPositions = generatePolygonPositions(
      nodeStyles.length,
      width,
      height
    );
    return nodeStyles.map((style, index) => {
      if (style.startPosition) {
        return {
          x: style.startPosition.x - (style.size || size) / 2,
          y: style.startPosition.y - (style.size || size) / 2,
        };
      }
      return {
        x: defaultPositions[index].x - (style.size || size) / 2,
        y: defaultPositions[index].y - (style.size || size) / 2,
      };
    });
  });

  // Create motion values
  const nodeMotionValues = nodeStyles.map((_, index) => ({
    x: useMotionValue(nodePosArray[index].x),
    y: useMotionValue(nodePosArray[index].y),
  }));

  const getNodeSize = useCallback(
    (index: number) => nodeStyles[index].size || size,
    [nodeStyles, size]
  );

  useEffect(() => {
    const defaultPositions = generatePolygonPositions(
      nodeStyles.length,
      width,
      height
    );
    const adjustedPositions = nodeStyles.map((style, index) => {
      if (style.startPosition) {
        return {
          x: style.startPosition.x - (style.size || size) / 2,
          y: style.startPosition.y - (style.size || size) / 2,
        };
      }
      return {
        x: defaultPositions[index].x - (style.size || size) / 2,
        y: defaultPositions[index].y - (style.size || size) / 2,
      };
    });
    setNodePosArray(adjustedPositions);
    nodeMotionValues.forEach((motionValue, index) => {
      motionValue.x.set(adjustedPositions[index].x);
      motionValue.y.set(adjustedPositions[index].y);
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
  }, [nodeStyles, width, height, size]);

  return (
    <div
      ref={constraintsRef}
      className={cn("relative", className)}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
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
