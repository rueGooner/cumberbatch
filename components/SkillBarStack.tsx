'use client';

import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { CoreSkillItem } from '@/app/utils/radar-chart-data';

interface SkillBarStackProps {
  data: CoreSkillItem[];
  barHeight?: number;
}

export const SkillBarStack: FC<SkillBarStackProps> = ({ data, barHeight = 20}) => {
  return (
    <div className="w-full flex flex-col gap-4">
      {data.map((skill, index) => (
        <div key={skill.skill} className="w-full">
          <div className="mb-1 text-sm font-medium">{skill.skill}</div>
          <div className="relative bg-gray-200 rounded-md" style={{height: barHeight}}>
            <motion.div
              className="absolute top-0 left-0 h-full rounded-md"
              style={{backgroundColor: skill.color}}
              initial={{width: 0}}
              animate={{width: `${skill.level}%`}}
              transition={{duration: 1.5 + index * 0.2, ease: 'easeInOut'}}
            />
            <motion.div
              className="absolute right-1 top-1/2 transform -translate-y-1/2 text-xs text-background font-bold"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 1.5 + index * 0.2}}
            >
              {skill.level}%
            </motion.div>
            <motion.div
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-background text-sm"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 1.5 + index * 0.2}}
            >
              {skill.skill}
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};
