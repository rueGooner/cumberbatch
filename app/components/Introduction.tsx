import React from 'react';
import { FadingText } from '@/app/components/FadingText';
import { TypewriteText } from '@/app/components/TypewriteText';
import Image from 'next/image';
import {motion} from 'framer-motion';
import { AnimatedCircle } from '@/app/components/AnimatedCircle';

const LETTER_DELAY = 0.095;
const BOX_FADE_DURATION = 0.225;
const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;
const SWAP_DELAY_IN_MS = 5500;

export const Introduction = () => {

  return (
    <div className="flex flex-col md:flex-row px-6 h-[100vh] md:h-[75vh] items-center justify-center md:justify-around">
      <div className='flex items-center justify-center gap-5 mb-20'>
        <motion.div
          style={{
            position: "relative",
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: "50%",
            width: "310px",
            height: "310px",
            overflow: "hidden",
          }}
        >
          <AnimatedCircle circumference={155} strokeWidth={8} duration={30} size="lg" />
          <AnimatedCircle circumference={140} strokeWidth={5} duration={40} size="sm" />

          <Image
            src='/me.png'
            alt={'ME'}
            width={270}
            height={270}
            className='  transition duration-1000 ease-in-out hover:rotate-3 hover:scale-[1] grayscale hover:grayscale-[40%] blur-[0.1px] hover:blur-0 w-[150px] lg:w-[260px] opacity-100 hover:opacity-30'
          />
        </motion.div>
      </div>
      <div className="gap-5 flex flex-col basis-1/2 text-center md:text-left">
        <TypewriteText
          sentences={[
            "Most people call me",
            "The Mrs calls me...",
            "The kids know me as",
          ]}
          letterDelay={LETTER_DELAY}
          boxFade={BOX_FADE_DURATION}
          fadeDelay={FADE_DELAY}
          mainFade={MAIN_FADE_DURATION}
          swapDelay={SWAP_DELAY_IN_MS}
          as='h3'
        />
        <FadingText
          swapDelay={SWAP_DELAY_IN_MS}
          mainFade={MAIN_FADE_DURATION}
          fadeDelay={FADE_DELAY}
          words={[
            "Rueben.",
            "$%&@.",
            "Dad",
          ]} as='h1'
        />
        <p className='text-2xl'>Full Stack Developer. Problem Solver. Idea Builder.</p>
        <p className="text-base">A man of many hats, you may find me building impactful full stack solutions using <span
          className="bg-[#215732] font-bold px-1 my-1 rounded">NodeJS,</span> <span
          className="bg-[#61dafb] text-background font-bold px-1 my-1 rounded">ReactJS</span> and <span
          className="bg-[#007aac] font-bold px-1 my-1 rounded">TypeScript</span> or honing my craft behind a drum kit.
        </p>
      </div>

    </div>
  )
}

