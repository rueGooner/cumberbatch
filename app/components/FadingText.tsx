'use client';

import React, { useState, useEffect, FC, JSX } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFontsizeClassname } from '@/app/utils/font-size-class';

interface FadingTextProps {
  words: string[];
  fadeDelay: number;
  mainFade: number;
  swapDelay: number;
  as?: keyof JSX.IntrinsicElements;
}

export const FadingText: FC<FadingTextProps> = ({
  words,
  swapDelay,
  mainFade,
  fadeDelay,
  as: TypographyElement = 'h3'
}) => {
  const fontSizeClassname = useFontsizeClassname(TypographyElement);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, swapDelay); // Change text every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const MotionTypographyElement = motion(
    TypographyElement as keyof JSX.IntrinsicElements
  );

  return (
    <AnimatePresence mode="wait">
      <MotionTypographyElement
        key={wordIndex}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{
          delay: fadeDelay,
          duration: mainFade,
          opacity: {
            duration: 0.3
          }
        }}
        className={`${fontSizeClassname} leading-none tracking-normal -mt-4 font-bold`}
      >
        <span className='text-background dark:text-background dark:inline dark:bg-primary rounded px-2'>{words[wordIndex]}</span>
      </MotionTypographyElement>
    </AnimatePresence>
  );
};
