import React from 'react';
import { FadingText } from '@/app/components/FadingText';
import { TypewriteText } from '@/app/components/TypewriteText';
import Image from 'next/image';

const LETTER_DELAY = 0.095;
const BOX_FADE_DURATION = 0.225;

const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;

const SWAP_DELAY_IN_MS = 5500;

export const Introduction = () => {
  return (
    <div className="flex px-6 h-[75vh] items-center justify-around">
      <div className='flex items-center justify-center'>
        <Image
          src='/me.png'
          alt={'ME'}
          width={300}
          height={300}
          className='-rotate-12 scale-[1.1] transition duration-1000 ease-in-out hover:rotate-3 hover:scale-[1] grayscale hover:grayscale-[40%] blur-[0.1px] hover:blur-0'
        />
      </div>
      <div className="gap-5 flex flex-col basis-1/2">
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

