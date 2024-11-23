'use client';

import React, { FC, JSX } from 'react'
import { motion } from 'framer-motion';
import { useFontsizeClassname } from '@/app/utils/font-size-class';

interface TextInTitleProps {
  title: string;
  text: string;
  direction?: 'left' | 'up' | 'down' | 'right';
  duration?: number;
  delay?: number;
  as?: keyof JSX.IntrinsicElements
}

export const TextInTitle: FC<TextInTitleProps> = ({
  title,
  text,
  direction = 'up',
  duration = 0.8,
  delay = 0,
  as: TypographyElement = 'p'
}) => {
  const fontSizeClassname = useFontsizeClassname(TypographyElement);
  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slide: {
      hidden: {
        opacity: 0,
        x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
        y: direction === 'up' ? -100 : direction === 'down' ? 100 : 0,
      },
      visible: { opacity: 1, x: 0, y: 0 },
    },
  };

  const MotionTypographyElement = motion.create(
    TypographyElement as keyof JSX.IntrinsicElements
  );

  return (
    <div className="h-fit px-0 mb-12">
      <div className="container w-full h-56 overflow-hidden whitespace-nowrap relative">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={variants.slide}
          transition={{ duration: duration + 0.5, delay: delay }}
          className="2xl:text-[200px] md:text-[180px] text-[128px] text-foreground m-0 leading-none overflow-hidden absolute font-extrabold opacity-25 title-text break-after-all">{title}</motion.h1>
        <MotionTypographyElement
          initial="hidden"
          animate="visible"
          variants={variants.fade}
          transition={{ duration, delay }}
          className={`${fontSizeClassname} absolute capitalize 2xl:top-[26%] md:top-[23%] top-[15%] mx-8 text-background md:text-[48px] text-[32px] font-bold m-0 leading-none whitespace-nowrap border-b-2 border-primary w-3/5 pb-[8px] left-0`}
        >
          {text}
        </MotionTypographyElement>
      </div>
    </div>
  )
}
