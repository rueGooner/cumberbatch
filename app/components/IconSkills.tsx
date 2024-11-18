import React from 'react'
import { RiNextjsLine, RiReactjsLine, RiP } from "react-icons/ri";
import { SiNestjs, SiTypescript, SiVuedotjs } from 'react-icons/si';

export const IconSkills = () => {
  return (
    <div className='grid'>
      <RiNextjsLine size={100}/>
      <SiNestjs size={100}/>
      <SiTypescript size={100}/>
      <RiReactjsLine size={100}/>
      <SiVuedotjs size={100}/>
    </div>
  )
}
