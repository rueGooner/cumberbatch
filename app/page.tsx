'use client';

import { useState, useEffect, useMemo } from 'react';
import { Introduction } from '@/components/Introduction';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { Engine, Container, MoveDirection, OutMode, ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { IconGrid } from '@/components/IconGrid';
import { RiGithubLine, RiLinkedinLine, RiMailStarLine } from 'react-icons/ri';
import { Link } from '@nextui-org/react';
import { SkillSection } from '@/components/SkillSection';

export default function Home() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "var(--background)",
        },
      },
      fpsLimit: 50,
      interactivity: {
        detectsOn: "canvas",
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "rgb(255, 182, 193)",
        },
        links: {
          color: "rgb(255, 182, 193)",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: {min: 1, max: 5},
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <div className="w-full h-screen relative">
      <div className='container mx-auto w-full flex flex-col max-w-screen-xl'>
        {init && (
          <Particles
            id="tsparticles"
            options={options}
            particlesLoaded={particlesLoaded}
          />
        )}
      </div>
      <Introduction/>
      <IconGrid>
        <h3 className="text-4xl pb-2 text-center font-bold text-background border-b-2 border-primary">
          What I Bring to the Table.
        </h3>
      </IconGrid>
      <SkillSection/>
      <div className="w-full relative section-four z-10 bg-background py-32 -mt-1">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-4xl pb-2 text-center font-bold text-foreground border-b-2 border-primary">
            How to reach me.
          </h3>
          <h4 className="text-2xl mt-4">Social Media Links</h4>
          <div className="grid grid-cols-3 gap-8 py-10">
            <Link
              isExternal href="https://www.linkedin.com/in/ruebencumberbatch/"
              className="text-linkedin hover:text-primary">
              <RiLinkedinLine size={100}/>
            </Link>
            <Link
              isExternal href="mailto:development.rue@gmail.com"
              className="text-gmail hover:text-primary">
              <RiMailStarLine size={100}/>
            </Link>
            <Link
              isExternal href="https://github.com/rueGooner/"
              className="text-github hover:text-primary">
              <RiGithubLine size={100}/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
