"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface ArrowProps {
  length: number;
  color: string;
}

const GraphArrow: React.FC<ArrowProps> = ({ length, color }) => {
  const arrowHeadSize = 20;

  return (
    <motion.svg width={20} height={length + arrowHeadSize} viewBox={`0 0 20 ${length + arrowHeadSize}`}>
      <motion.path
        d="M10 0 L0 ${arrowHeadSize} L20 ${arrowHeadSize} Z"
        fill={color}
      />
      <motion.line
        x1="10"
        y1={arrowHeadSize}
        x2="10"
        y2={length + arrowHeadSize}
        stroke={color}
        strokeWidth="2"
      />
    </motion.svg>
  );
};

export default GraphArrow;