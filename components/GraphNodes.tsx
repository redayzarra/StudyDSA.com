"use client";
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const GraphNodes: React.FC = () => {
  const constraintsRef = useRef(null);

  const nodeStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '25px',
    backgroundColor: 'white',
    position: 'absolute' as 'absolute',
  };

  const nodeProps = {
    drag: true,
    dragConstraints: constraintsRef,
    whileHover: { scale: 1.1 },
    whileDrag: { scale: 1.2 },
    dragMomentum: true,
    dragTransition: { 
      power: 0.2,
      timeConstant: 300,
      modifyTarget: (target: number) => Math.round(target / 25) * 25
    },
    className: "absolute flex items-center justify-center"
  };

  return (
    <div ref={constraintsRef} className='bg-red-400 w-[400px] h-[400px] relative'>
      <motion.div
        {...nodeProps}
        style={{...nodeStyle, top: '50px', left: '50px'}}
      >
        <span className="text-black font-bold text-lg">1</span>
      </motion.div>

      <motion.div
        {...nodeProps}
        style={{...nodeStyle, top: '150px', left: '150px'}}
      >
        <span className="text-black font-bold text-lg">2</span>
      </motion.div>
    </div>
  );
};

export default GraphNodes;
