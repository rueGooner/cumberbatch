export interface CoreSkillItem {
  skill: string;
  level: number;
  color?: string;
}

export const coreSkills: CoreSkillItem[] = [
  { skill: "React", level: 91, color: "#A8D5E2" }, // Light Blue
  { skill: "Node.js", level: 85, color: "#C5DCA0" }, // Soft Green
  { skill: "TypeScript", level: 90, color: "#FDE8C8" }, // Light Peach
  { skill: "HTML & CSS", level: 94, color: "#EAD2E9" }, // Lavender
  { skill: "Git", level: 80, color: "#FFECB5" }, // Light Yellow
  { skill: "GraphQL", level: 75, color: "#F7C7DB" }, // Light Pink
  { skill: "Testing (TDD)", level: 80, color: "#D8C3A5" }, // Soft Beige
  { skill: "Database Management", level: 80, color: "#d2f3bb" },
  { skill: "CI/CD & DevOps", level: 70, color: "#a0d8f1" }
];

export const softSkills: CoreSkillItem[] = [
  { skill: "Emotional Intelligence", level: 80, color: "#f9c8d4" },  // Soft pastel pink
  { skill: "Leadership & Mentoring", level: 85, color: "#a0d8f1" },  // Light pastel blue
  { skill: "Problem Solving & Innovation", level: 90, color: "#f3e5ab" },  // Pastel yellow
  { skill: "Communication", level: 95, color: "#a8e5a1" },  // Soft pastel green
  { skill: "Collaboration & Teamwork", level: 85, color: "#f5b1a3" },  // Soft pastel peach
  { skill: "Adaptability", level: 80, color: "#d1c4e9" },  // Light pastel lavender
  { skill: "Time Management", level: 90, color: "#f8c1a2" },  // Soft pastel orange
  { skill: "Critical Thinking", level: 75, color: "#f3a3d5" },  // Light pastel pink
  { skill: "Conflict Resolution", level: 80, color: "#d2f3bb" },  // Pastel mint green
];
