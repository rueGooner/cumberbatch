import React, { FC, JSX, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useFontsizeClassname } from '@/app/utils/font-size-class';

interface TypewriteTextProps {
  sentences: string[];
  letterDelay: number;
  boxFade: number;
  fadeDelay: number;
  mainFade: number;
  swapDelay: number;
  as?: keyof JSX.IntrinsicElements;
}

export const TypewriteText: FC<TypewriteTextProps> = ({
  sentences,
  letterDelay,
  swapDelay,
  boxFade,
  mainFade,
  fadeDelay,
  as: TypographyElement = 'p'
}) => {
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const fontSizeClassname = useFontsizeClassname(TypographyElement);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSentenceIndex((pv) => (pv + 1) % sentences.length);
    }, swapDelay);

    return () => clearInterval(intervalId);
  }, [sentences.length, swapDelay]);

  const MotionTypographyElement = motion.create(
    TypographyElement as keyof JSX.IntrinsicElements
  );

  return (
    <MotionTypographyElement className={`${fontSizeClassname} mb-2.5 font-light`}>
      <span className="inline-block w-3 h-6 rounded bg-primary"/>
      <span className="ml-1">
        {sentences[sentenceIndex].split("").map((l, i) => (
          <motion.span
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 0,
            }}
            transition={{
              delay: fadeDelay,
              duration: mainFade,
              ease: "easeInOut",
            }}
            key={`${sentenceIndex}-${i}`}
            className="relative"
          >
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: i * letterDelay,
                duration: 0,
              }}
            >
              {l}
            </motion.span>
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                delay: i * letterDelay,
                times: [0, 0.1, 1],
                duration: boxFade,
                ease: "easeInOut",
              }}
              className="absolute bottom-[3px] left-[1px] right-0 top-[3px] border-b border-primary"
            />
          </motion.span>
        ))}
      </span>
    </MotionTypographyElement>
  );
};
