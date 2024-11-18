'use client';

import { useState, useEffect, useMemo } from 'react';
import { Navigation } from '@/app/components/Navigation';
import { Background } from '@/app/components/Background';
import { Introduction } from '@/app/components/Introduction';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { Engine, Container, MoveDirection, OutMode, ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { IconSkills } from '@/app/components/IconSkills';

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
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <div className='container mx-auto w-full flex flex-col h-svh max-h-svh max-w-screen-xl'>
      {/*<Background isSvg={false} />*/}
      <Navigation />
      {init && (
        <Particles
          id="tsparticles"
          options={options}
          particlesLoaded={particlesLoaded}
        />
      )}
      <Introduction />
      <IconSkills />
    </div>
  );
}
