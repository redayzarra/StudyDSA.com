"use client";

import React, { useRef, useState, useCallback } from "react";
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
  
  // Calculate node positions once
  const nodePosArray = nodeStyles.map((style, index) => {
    const defaultPositions = generatePolygonPositions(
      nodeStyles.length,
      width,
      height
    );
    return {
      x: style.startPosition?.x ?? defaultPositions[index].x,
      y: style.startPosition?.y ?? defaultPositions[index].y,
    };
  });

  const getNodeSize = useCallback(
    (index: number) => nodeStyles[index].size || size,
    [nodeStyles, size]
  );

  // Calculate offset positions for connecting lines
  const offsetNodePosArray = nodePosArray.map((pos, index) => ({
    x: pos.x + getNodeSize(index) * 0 - 15,
    y: pos.y + getNodeSize(index) * 0 - 15,
  }));

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
          nodePosArray={offsetNodePosArray}  // Use offset positions for lines
          getNodeSize={getNodeSize}
          connectionColor={connectionColor}
        />
      ))}
      {nodeStyles.map((style, index) => (
        <GraphNode
          key={index}
          style={style}
          index={index}
          position={nodePosArray[index]} 
          getNodeSize={getNodeSize}
          constraintsRef={constraintsRef}
        />
      ))}
    </div>
  );
};

export default GraphNodes;
