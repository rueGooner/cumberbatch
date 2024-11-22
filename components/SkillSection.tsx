import React from 'react';
import { coreSkills, softSkills } from '@/app/utils/radar-chart-data';
import { SkillBarStack } from '@/components/SkillBarStack';
import { RiInformation2Line } from 'react-icons/ri';

export const SkillSection = () => {
  return (
    <section className="py-28 px-6 flex flex-col items-center justify-center bg-neutral-100 -mt-1">
      <div className="container mx-auto px-6 w-full flex flex-col items-center justify-center max-w-screen-xl">
        <h3 className="text-4xl pb-2 text-center font-bold text-background border-b-2 border-primary mb-10">Tools of the
          Trade.</h3>
        <p className="text-background flex justify-between items-center mb-3">
          <RiInformation2Line size={25} className="text-foreground bg-primary rounded-lg shadow-lg"/>
          <span className="ml-2"> You may notice that my <span
            className="font-bold text-sm bg-primary text-foreground p-1 rounded pt-0">core</span> skills evolve over time. This is because I adapt them based on the projects I&#39;m currently working on.</span>
        </p>
        {/*<SkillRadarChart data={coreSkills} chartSize={400} />*/}
        <div className="container px-6 mx-auto grid grid-cols-2 gap-5">
          <SkillBarStack data={coreSkills}/>
          <SkillBarStack data={softSkills}/>
        </div>
      </div>
    </section>
  );
}
