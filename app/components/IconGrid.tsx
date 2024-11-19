import {
  RiNextjsLine,
  RiReactjsLine,
  RiHtml5Line,
  RiCss3Line,
  RiGitBranchLine,
} from 'react-icons/ri';
import {
  SiNestjs,
  SiTypescript,
  SiVuedotjs,
  SiRedux,
  SiPostgresql,
  SiSocketdotio,
  SiExpress,
  SiGraphql,
  SiTailwindcss,
  SiSass,
  SiNodedotjs,
  SiPhp,
  SiLaravel, SiTestinglibrary, SiJest, SiCypress,
} from 'react-icons/si';
import { motion } from 'framer-motion';

const icons = [
  { Component: RiNextjsLine, name: "Next.js", color: "#000000" },
  { Component: SiNestjs, name: "NestJS", color: "#E0234E" },
  { Component: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { Component: RiReactjsLine, name: "React", color: "#61DAFB" },
  { Component: SiVuedotjs, name: "Vue.js", color: "#42B883" },
  { Component: SiRedux, name: "Redux", color: "#764ABC" },
  { Component: RiHtml5Line, name: "HTML5", color: "#E34F26" },
  { Component: SiPostgresql, name: "PostgreSQL", color: "#336791" },
  { Component: SiSocketdotio, name: "Socket.io", color: "#010101" },
  { Component: SiExpress, name: "Express", color: "#000000" },
  { Component: RiCss3Line, name: "CSS3", color: "#1572B6" },
  { Component: RiGitBranchLine, name: "Git", color: "#F05033" },
  { Component: SiGraphql, name: "GraphQL", color: "#E10098" },
  { Component: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
  { Component: SiSass, name: "Sass", color: "#CC6699" },
  { Component: SiNodedotjs, name: "Node.js", color: "#339933" },
  { Component: SiPhp, name: "PHP", color: "#777BB4" },
  { Component: SiLaravel, name: "Laravel", color: "#FF2D20" },
  { Component: SiTestinglibrary, name: "React Testing Library", color: "#E33332" },
  { Component: SiJest, name: "Jest", color: "#C21325" },
  { Component: SiCypress, name: "Cypress", color: "#17202C" },
];

export const IconGrid = () => (
  <div className="grid grid-cols-7 gap-2 py-20">
    {icons.map(({ Component, name, color }, index) => (
      <div key={index} className="flex items-center justify-center py-5 rounded">
        <motion.div
          animate={{
            y: [0, -5, 0]
          }}
          transition={{
            duration: Math.random() * 1.5 + 1,
            ease: 'easeInOut',
            repeat: Infinity,
            delay: index * 0.2,
          }}
        >
          <Component size={100} title={name} color={color}/>
        </motion.div>
      </div>
    ))}
  </div>
);
