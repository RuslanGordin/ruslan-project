import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { SiStyledcomponents } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { IconType } from "react-icons";

export interface ITabs {
  name: string;
  link: string;
}

export interface ISkills {
  ico: IconType;
}

export interface IProjects {
  title: string;
  description: string;
  link?: string;
  github?: string;
  image?: string;
  category: "web" | "mobile" | "design";
  technologies: string[];
}

export const tabs: ITabs[] = [
  { name: "HOME", link: "/" },
  { name: "ABOUT", link: "#about" },
  { name: "SKILLS", link: "#skills" },
  { name: "EXPERIENCE", link: "#experience" },
  { name: "PORTFOLIO", link: "#portfolio" },
  { name: "CONTACT", link: "#contact" },
];

export const dataSkills: ISkills[] = [
  { ico: FaJsSquare },
  { ico: FaReact },
  { ico: TbBrandNextjs },
  { ico: SiTypescript },
  { ico: FaGithub },
  { ico: TbApi },
  { ico: SiStyledcomponents },
  { ico: FaHtml5 },
  { ico: FaCss3Alt },
  { ico: SiRedux },
  { ico: FaNodeJs },
  { ico: IoLogoFirebase },
];

export const dataProjects: IProjects[] = [
  {
    title: "Infinity Ængines App",
    description:
      "Premium networking platform for industry professionals with AI-powered matching system. Features include intelligent partner matching, secure instant messaging, QR contact sharing, and business profile management. Cross-platform mobile application with web support.",
    link: "https://infinity-engines-app.vercel.app/",
    github: "Private repository",
    category: "mobile",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "OpenAI API",
      "React Query",
    ],
  },
  {
    title: "Earthy App",
    description:
      "Revolutionary platform for environmental and humanitarian initiatives using blockchain and AI. Features tools for fundraising, community building, transparent fund tracking, and project management. Enables nonprofits and donors to create meaningful impact with full transparency.",
    link: "https://app.earthy.tech/",
    github: "Private repository",
    category: "web",
    technologies: [
      "Next.js",
      "TypeScript",
      "Web3.js",
      "TradingView",
      "Ethers.js",
    ],
  },
  {
    title: "Modern Art Theory",
    description:
      "Interactive platform for exploring modern art theory and history. Features dynamic content presentation, responsive gallery layouts, and seamless navigation through art collections.",
    link: "https://www.modernarttheory.io/",
    github: "Private repository",
    category: "web",
    technologies: [
      "Next.js",
      "TypeScript",
      "Framer Motion",
      "Styled Components",
      "Three.js",
    ],
  },
  {
    title: "Empress Jets",
    description:
      "Premium private jet booking platform with real-time availability, luxury fleet showcase, and seamless booking experience. Features interactive map integration and personalized travel planning.",
    link: "https://empress-jets-lilac.vercel.app/",
    github: "Private repository",
    category: "web",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "MapBox",
    ],
  },
  {
    title: "Eagle Owl",
    description:
      "Corporate website for a digital solutions company. Features comprehensive service presentation, project portfolio showcase, and modern tech stack visualization. Includes interactive project timeline, service categories, and contact integration.",
    link: "https://main-owl.vercel.app/",
    github: "Private repository",
    category: "web",
    technologies: [
      "Next.js",
      "TypeScript",
      "Framer Motion",
      "Styled Components",
      "React Hook Form",
    ],
  },
  {
    title: "Earthy 2.0",
    description:
      "A modern crypto platform with advanced features and seamless user experience. Built with Next.js and Web3 technologies.",
    link: "https://earthy-2-0.vercel.app/",
    github: "Private repository",
    category: "web",
    technologies: ["Next.js", "TypeScript", "Web3.js", "Styled Components"],
  },
  {
    title: "Earthy Landing Page",
    description:
      "Modern landing page for the Earthy crypto platform with real-time token price tracking, tokenomics visualization, and integrated Web3 features for token purchases via Uniswap.",
    link: "https://earthy.vercel.app/",
    github: "Private repository",
    category: "web",
    technologies: [
      "Next.js",
      "React",
      "Web3.js",
      "Styled Components",
      "Framer Motion",
    ],
  },
];
