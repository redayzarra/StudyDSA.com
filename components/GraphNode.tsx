import { NodeStyle } from "@/types/problems";
import { motion, MotionValue } from "framer-motion";

interface Props {
  style: NodeStyle;
  index: number;
  motionValue: { x: MotionValue<number>; y: MotionValue<number> };
  getNodeSize: (index: number) => number;
  constraintsRef: React.RefObject<HTMLDivElement>;
}

const GraphNode = ({
  style,
  index,
  motionValue,
  getNodeSize,
  constraintsRef,
}: Props) => {
  const nodeSize = getNodeSize(index);
  const fontSize = Math.max(10, nodeSize / 2);

  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      whileHover={{ scale: 1.1 }}
      whileDrag={{ scale: 1.2 }}
      dragMomentum={false}
      className={`${style.backgroundColorClass} cursor-pointer absolute flex items-center justify-center rounded-full`}
      style={{
        width: `${nodeSize}px`,
        height: `${nodeSize}px`,
        x: motionValue.x,
        y: motionValue.y,
        fontSize: `${fontSize}px`,
        transform: `translate(-50%, -50%)`, // Center the node on its position
      }}
    >
      <span className="text-white font-bold">{index + 1}</span>
    </motion.div>
  );
};

export default GraphNode;
