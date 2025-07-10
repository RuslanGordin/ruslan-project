"use client";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { dataSkills } from "@/app/components/arrays";

const SkillsSection = styled.section`
  padding: 6rem 0;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
`;

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.1);
    border-color: var(--primary);
  }

  svg {
    font-size: 2.5rem;
    color: var(--primary);
  }
`;

const SkillName = styled.span`
  font-size: 0.9rem;
  color: var(--text-secondary);
  text-align: center;
`;

const skillsData = [
  { icon: dataSkills[0].ico, name: "JavaScript" },
  { icon: dataSkills[1].ico, name: "React" },
  { icon: dataSkills[2].ico, name: "Next.js" },
  { icon: dataSkills[3].ico, name: "TypeScript" },
  { icon: dataSkills[4].ico, name: "Git" },
  { icon: dataSkills[5].ico, name: "REST API" },
  { icon: dataSkills[6].ico, name: "Styled Components" },
  { icon: dataSkills[7].ico, name: "HTML5" },
  { icon: dataSkills[8].ico, name: "CSS3" },
  { icon: dataSkills[9].ico, name: "Redux" },
  { icon: dataSkills[10].ico, name: "Node.js" },
  { icon: dataSkills[11].ico, name: "Firebase" },
];

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <Title>Technical Skills</Title>
      <SkillsGrid>
        {skillsData.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <SkillCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Icon />
              <SkillName>{skill.name}</SkillName>
            </SkillCard>
          );
        })}
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills;
