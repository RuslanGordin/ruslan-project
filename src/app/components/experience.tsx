"use client";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar } from "react-icons/fi";

const ExperienceSection = styled.section`
  padding: 6rem 0;
  max-width: 800px;
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

const Timeline = styled.div`
  position: relative;
  padding: 2rem 0;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: var(--primary);
    opacity: 0.2;
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  margin: 2rem 0;
  width: 50%;
  position: relative;

  &:nth-child(odd) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-left: 30px;
    padding-right: 0;
    margin-left: 50%;
  }

  &::before {
    content: "";
    position: absolute;
    right: -6px;
    top: 0;
    width: 12px;
    height: 12px;
    background: var(--primary);
    border-radius: 50%;
  }

  &:nth-child(odd)::before {
    left: -6px;
    right: auto;
  }
`;

const TimelineContent = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 400px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: var(--primary);
  }
`;

const JobTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
`;

const Company = styled.div`
  font-size: 1rem;
  color: var(--primary);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Period = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Description = styled.p`
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
`;

const TechStack = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background: rgba(59, 130, 246, 0.1);
  color: var(--primary);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.8rem;
`;

const experienceData = [
  {
    title: "Lead Frontend Developer",
    company: "Tech Company",
    period: "2025 - Present",
    description:
      "Led a frontend development team in creating web applications using React and Next.js. Focused on implementing modern UI/UX practices and optimizing application performance.",
    technologies: ["React", "Next.js", "TypeScript", "Styled Components"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2023 - 2024",
    description:
      "Developed responsive web applications and maintained large-scale projects. Collaborated with design team to implement pixel-perfect interfaces.",
    technologies: ["React", "Redux", "SASS", "REST API"],
  },
  {
    title: "Junior Developer",
    company: "Startup",
    period: "2022 - 2023",
    description:
      "Started my journey in web development. Worked on various features and bug fixes. Learned modern development practices and tools.",
    technologies: ["JavaScript", "HTML", "CSS", "Git"],
  },
];

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <Title>Work Experience</Title>
      <Timeline>
        {experienceData.map((job, index) => (
          <TimelineItem
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <TimelineContent>
              <JobTitle>{job.title}</JobTitle>
              <Company>
                <FiBriefcase />
                {job.company}
              </Company>
              <Period>
                <FiCalendar />
                {job.period}
              </Period>
              <Description>{job.description}</Description>
              <TechStack>
                {job.technologies.map((tech, i) => (
                  <TechTag key={i}>{tech}</TechTag>
                ))}
              </TechStack>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </ExperienceSection>
  );
};

export default Experience;
