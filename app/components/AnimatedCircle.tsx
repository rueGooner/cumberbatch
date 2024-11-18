import React, { FC } from 'react'
import { motion } from 'framer-motion';

interface AnimatedCircleProps {
  circumference: number;
  strokeWidth: number;
  size: 'lg' | 'sm';
  duration: number;
};

export const AnimatedCircle: FC<AnimatedCircleProps> = ({
  circumference,
  strokeWidth,
  size,
  duration
}) => {
  return (
    <motion.svg
      width="310"
      height="310"
      viewBox="0 0 310 310"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
      initial={{
        strokeDashoffset: 2 * Math.PI * circumference,
      }}
      animate={{
        strokeDashoffset: [2 * Math.PI * circumference, 0],
        strokeDasharray: size === 'lg' ? [
          "30, 6, 18",
          "15, 5, 30",
          "40, 5, 10",
          "20, 10, 20",
        ] : [
          "20, 5, 10",
          "40, 10, 15",
          "30, 10, 5",
          "10, 5, 25",
        ],
      }}
      transition={{
        duration,
        ease: "linear",
        repeat: Infinity
      }}
    >
      <circle
        cx="155"
        cy="155"
        r={size === 'sm' ? 140 : 155}
        fill="none"
        stroke="rgb(255, 182, 193)"
        strokeWidth={strokeWidth}
        strokeDasharray="30, 20, 8"
      />
    </motion.svg>
  )
}
