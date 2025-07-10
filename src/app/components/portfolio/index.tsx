"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";
import { dataProjects } from "@/app/components/arrays";

const PortfolioSection = styled.section`
  padding: 6rem 0;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  text-align: center;
  color: var(--text-secondary);
  margin-bottom: 4rem;
  font-size: 1.1rem;
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1.5rem;
  border-radius: 9999px;
  border: 1px solid
    ${(props) => (props.$active ? "var(--primary)" : "var(--text-secondary)")};
  background: ${(props) => (props.$active ? "var(--primary)" : "transparent")};
  color: ${(props) => (props.$active ? "white" : "var(--text-secondary)")};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary);
    color: ${(props) => (props.$active ? "white" : "var(--primary)")};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.1);
    border-color: var(--primary);
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

const FolderIcon = styled(FiFolder)`
  font-size: 2.5rem;
  color: var(--primary);
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: var(--text-secondary);
    font-size: 1.2rem;
    transition: color 0.2s ease;

    &:hover {
      color: var(--primary);
    }
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TechList = styled.ul`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: auto;

  li {
    color: var(--text-secondary);
    font-size: 0.85rem;
    font-family: monospace;
  }
`;

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const categories = ["all", "web", "mobile", "design"];

  const filteredProjects =
    filter === "all"
      ? dataProjects
      : dataProjects.filter((project) => project.category === filter);

  return (
    <PortfolioSection id="portfolio">
      <Title>Featured Projects</Title>
      <Subtitle>A selection of my recent work</Subtitle>

      <FilterButtons>
        {categories.map((category) => (
          <FilterButton
            key={category}
            $active={filter === category}
            onClick={() => setFilter(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </FilterButton>
        ))}
      </FilterButtons>

      <ProjectsGrid>
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ProjectHeader>
                <FolderIcon />
                <ProjectLinks>
                  {project.github !== "Private repository" ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub />
                    </a>
                  ) : (
                    <p>Private repository</p>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </ProjectLinks>
              </ProjectHeader>

              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>

              <TechList>
                {project.technologies?.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </TechList>
            </ProjectCard>
          ))}
        </AnimatePresence>
      </ProjectsGrid>
    </PortfolioSection>
  );
};

export default Portfolio;
