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
    x: pos.x - size / 2,
    y: pos.y - size / 2,
  }));

  return (
    <div
      ref={constraintsRef}
      className={cn("relative flex items-center justify-center", className)}
    >
      <div
        className="relative"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        {edges.map((edge, index) => (
          <ConnectingLine
            key={index}
            edge={edge}
            nodePosArray={offsetNodePosArray}
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
    </div>
  );
};

export default GraphNodes;
