import { NodeStyle } from "@/types/problems";
import { motion, MotionValue } from "framer-motion";

const GraphNode: React.FC<{
  style: NodeStyle;
  index: number;
  motionValue: { x: MotionValue<number>; y: MotionValue<number> };
  getNodeSize: (index: number) => number;
  constraintsRef: React.RefObject<HTMLDivElement>;
}> = ({ style, index, motionValue, getNodeSize, constraintsRef }) => {
  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      whileHover={{ scale: 1.1 }}
      whileDrag={{ scale: 1.2 }}
      dragMomentum={false}
      dragTransition={{
        power: 0.2,
        timeConstant: 300,
        modifyTarget: (target: number) => Math.round(target / 25) * 25,
      }}
      className={`${style.backgroundColorClass} absolute flex items-center justify-center rounded-full`}
      style={{
        width: `${getNodeSize(index)}px`,
        height: `${getNodeSize(index)}px`,
        x: motionValue.x,
        y: motionValue.y,
        zIndex: 1,
      }}
    >
      <span className="text-white font-bold">{index + 1}</span>
    </motion.div>
  );
};

export default GraphNode;
