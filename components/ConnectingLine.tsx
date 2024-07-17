import { Edge } from "@/types/problems";

interface Props {
  edge: Edge;
  nodePosArray: { x: number; y: number }[];
  getNodeSize: (index: number) => number;
  connectionColor?: string;
}

const ConnectingLine = ({
  edge,
  nodePosArray,
  getNodeSize,
  connectionColor,
}: Props) => {
  const startNodeSize = getNodeSize(edge.from);
  const endNodeSize = getNodeSize(edge.to);
  const startNodeRadius = startNodeSize / 2;
  const endNodeRadius = endNodeSize / 2;
  const arrowPadding = Math.max(
    5,
    Math.min(startNodeRadius, endNodeRadius) / 2
  );
  const arrowSize = Math.max(5, Math.min(startNodeRadius, endNodeRadius) / 2);

  // Adjust start and end points to the center of the nodes
  const startX = nodePosArray[edge.from].x + startNodeRadius;
  const startY = nodePosArray[edge.from].y + startNodeRadius;
  const endX = nodePosArray[edge.to].x + endNodeRadius;
  const endY = nodePosArray[edge.to].y + endNodeRadius;

  const angle = Math.atan2(endY - startY, endX - startX);

  const paddedStartX =
    startX + (startNodeRadius + arrowPadding) * Math.cos(angle);
  const paddedStartY =
    startY + (startNodeRadius + arrowPadding) * Math.sin(angle);
  const paddedEndX = endX - (endNodeRadius + arrowPadding) * Math.cos(angle);
  const paddedEndY = endY - (endNodeRadius + arrowPadding) * Math.sin(angle);

  const createArrowhead = (
    x: number,
    y: number,
    angle: number,
    forward: boolean
  ) => {
    const arrowPoint1X = x - arrowSize * Math.cos(angle - Math.PI / 6);
    const arrowPoint1Y = y - arrowSize * Math.sin(angle - Math.PI / 6);
    const arrowPoint2X = x - arrowSize * Math.cos(angle + Math.PI / 6);
    const arrowPoint2Y = y - arrowSize * Math.sin(angle + Math.PI / 6);
    return (
      <polygon
        points={`${x},${y} ${arrowPoint1X},${arrowPoint1Y} ${arrowPoint2X},${arrowPoint2Y}`}
        className={connectionColor || "text-black"} // Use the TailwindCSS color class
        fill="currentColor"
        transform={forward ? "" : `rotate(180 ${x} ${y})`}
      />
    );
  };

  return (
    <svg className="absolute top-0 left-0 w-full h-full" style={{ zIndex: 0 }}>
      <line
        x1={paddedStartX}
        y1={paddedStartY}
        x2={paddedEndX}
        y2={paddedEndY}
        className={connectionColor || "text-black"} // Use the TailwindCSS color class
        stroke="currentColor"
        strokeWidth="2"
      />
      {createArrowhead(paddedEndX, paddedEndY, angle, true)}
      {edge.bidirectional &&
        createArrowhead(paddedStartX, paddedStartY, angle, false)}
    </svg>
  );
};

export default ConnectingLine;
