import { Edge } from "@/types/problems";

const ConnectingLine: React.FC<{
  edge: Edge;
  nodePosArray: { x: number; y: number }[];
  getNodeSize: (index: number) => number;
  connectionColor?: string;
}> = ({ edge, nodePosArray, getNodeSize, connectionColor }) => {
  const nodeRadius = getNodeSize(edge.from) / 2;
  const arrowPadding = 10;
  const arrowSize = 10;

  const startX = nodePosArray[edge.from].x + nodeRadius;
  const startY = nodePosArray[edge.from].y + nodeRadius;
  const endX = nodePosArray[edge.to].x + nodeRadius;
  const endY = nodePosArray[edge.to].y + nodeRadius;

  const angle = Math.atan2(endY - startY, endX - startX);

  const paddedStartX = startX + (nodeRadius + arrowPadding) * Math.cos(angle);
  const paddedStartY = startY + (nodeRadius + arrowPadding) * Math.sin(angle);
  const paddedEndX = endX - (nodeRadius + arrowPadding) * Math.cos(angle);
  const paddedEndY = endY - (nodeRadius + arrowPadding) * Math.sin(angle);

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