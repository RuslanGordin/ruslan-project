"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  DivBoxAboutMeSC,
  DivContainerSC,
  NameSC,
  TextAboutSC,
  TextSpecialSC,
  SocialLinksSC,
  NavLinksSC,
} from "@/app/home.styles";
import AboutMe from "@/app/components/aboutMe/index";
import Portfolio from "@/app/components/portfolio";
import Skills from "@/app/components/skills/index";
import Contact from "@/app/components/contact/index";
import Experience from "@/app/components/experience";
import { FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";
import { tabs } from "@/app/components/arrays";

const Home = () => {
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6 },
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    // Remove the hash and ensure we have a clean ID
    const id = sectionId.replace("#", "").trim();
    const section = document.getElementById(id);

    if (section) {
      // Add a small delay to ensure smooth scrolling
      setTimeout(() => {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    } else {
      console.warn(`Section with id "${id}" not found`);
    }
  };

  return (
    <DivContainerSC>
      <motion.div
        initial="initial"
        animate="animate"
        variants={{
          animate: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        <motion.div {...fadeInUp}>
          <DivBoxAboutMeSC>
            <NameSC>Ruslan Gordin</NameSC>
            <TextSpecialSC>Front End Engineer</TextSpecialSC>
            <TextAboutSC $width={"max-content"} $margin={"0"}>
              I build accessible, pixel-perfect digital experiences for the web.
            </TextAboutSC>
            <NavLinksSC>
              {tabs.map((tab, index) => (
                <motion.button
                  key={tab.name}
                  onClick={() => scrollToSection(tab.link)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.name}
                </motion.button>
              ))}
            </NavLinksSC>
            <SocialLinksSC>
              <a
                href="https://github.com/RuslanGordin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://t.me/gord1n_ruslan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram />
              </a>
              {/* <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a> */}
            </SocialLinksSC>
          </DivBoxAboutMeSC>
        </motion.div>

        <motion.div {...fadeInUp}>
          <AboutMe />
        </motion.div>

        <motion.div {...fadeInUp}>
          <Skills />
        </motion.div>

        <motion.div {...fadeInUp}>
          <Experience />
        </motion.div>

        <motion.div {...fadeInUp}>
          <Portfolio />
        </motion.div>

        <motion.div {...fadeInUp}>
          <Contact />
        </motion.div>
      </motion.div>
    </DivContainerSC>
  );
};

export default Home;
