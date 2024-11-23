import React from 'react'
import { TextInTitle } from '@/components/typography/TextInTitle';

export default function About() {
  return (
    <div className="bg-foreground text-background py-10">
      <div className="container mx-auto w-full flex flex-col max-w-screen-xl px-6">
        <TextInTitle title="Behind The Code" text="Behind the code"/>
      </div>
      <div className="container px-6 mx-auto max-w-screen-xl flex flex-col justify-center items-start">
        <h2 className="text-5xl font-bold text-primary mb-3">Hi, I’m Rueben Cumberbatch (no relation).</h2>
        <p className="w-1/2 text-base mb-4"> I’m a Full Stack Engineer from London, currently based in the North
          West. Passionate about crafting innovative, elegant, and scalable web solutions, I bring nearly a decade of
          experience turning ideas into
          impactful digital products.
        </p>
        <h3 className="text-3xl font-bold text-primary mb-3">My Core Skills and Expertise</h3>
        <p className="w-1/2 text-base mb-4"> With a strong foundation in TypeScript, Node.js, and React, I pair my
          technical expertise with effective
          strategic communication and calming leadership, ensuring every project is delivered collaboratively and
          smoothly.
        </p>
        <h3 className="text-3xl font-bold text-primary mt-1 mb-3">A Diverse Journey Through Industries</h3>
        <p className="w-1/2 text-base mb-4">Over the years, I’ve worked across a range of industries, including
          Healthcare, FinTech, E-Commerce, and even
          government. My experience spans Digital Agency workflows and P/SaaS development, equipping me with a versatile
          skill set and a deep appreciation for different project dynamics.
        </p>
        <h3 className="text-3xl font-bold text-primary mb-3"> Driven by Solutions, Inspired by Impact</h3>
        <p className="w-1/2 text-base mb-4">For me, problem-solving isn’t just a job—it’s a passion. I thrive on
          tackling complex challenges and watching
          projects come to life, especially when those solutions help make everyday tasks more efficient for users.
        </p>
        <h3 className="text-3xl font-bold text-primary mb-3">Beyond the Screen</h3>
        <p className="w-1/2 text-base mb-4">When I’m not coding, you’ll likely find me reading, sketching ideas for
          my own series, or attending my
          drumming
          lessons—a childhood dream I’m finally pursuing.
        </p>
      </div>
    </div>)
}
