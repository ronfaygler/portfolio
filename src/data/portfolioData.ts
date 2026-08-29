import aiLogAnalysisImage from "../assets/log-analysis.jpg";
import travelTipsImage from "../assets/travel-tips.jpg";
import qaVqaImage from "../assets/vqa-final-project.jpeg";
import wikiSearchImage from "../assets/wiki.jpg";
import worldAttractionsImage from "../assets/world.jpg";
import type { ContactLink, Project, SkillCategory, TimelineItem } from "./types";

export const profile = {
  name: "Ron Faygler",
  role: "Full Stack Developer",
  location: "Israel",
};

export const about = {
  paragraphs: [
    "I'm Ron, a Full Stack Developer who enjoys turning ideas into working products, with a background in JavaScript, React, Node.js, Python and more.",
    "I like digging into tricky problems and landing on solutions that are clean and simple, and I'm always curious to pick up new tools and technologies.",
    "Outside of code, you'll find me hiking, listening to music, or out playing sport.",
    "And I just really enjoy writing code.",
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Full-Stack",
    skills: ["JavaScript", "React", "Node.js", "Python", "HTML5", "CSS", "SQL", "MongoDB", "PostgreSQL"],
  },
  {
    title: "AI",
    skills: ["Claude", "Cursor", "Windsurf", "Multi-Agent System", "LLM Integration"],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "GCP", "CI/CD", "Testing"],
  },
];

export const projects: Project[] = [
  {
    title: "AI Log Analysis",
    description:
      "An AI-powered tool that scans production logs with Claude and turns them into a quick summary, a severity rating, and a suggested fix — so you don't have to dig through raw logs yourself.",
    image: aiLogAnalysisImage,
    tags: ["Claude API", "Docker", "Redis", "Microservices", "Node.js", "React"],
    githubUrl: "https://github.com/ronfaygler/AI-Log-Analysis",
  },
  {
    title: "World Attractions Website",
    description:
      "A full-stack web app showcasing world attractions, built with a team of junior developers at QueenB's Summer Camp under an industry mentor.",
    image: worldAttractionsImage,
    tags: ["Authentication", "Team Project", "Node.js", "React", "MongoDB"],
    githubUrl: "https://github.com/ronfaygler/World-Attractions-Website",
  },
  {
    title: "Travel Tips",
    description:
      "A full-stack web app for collecting and managing travel tips and trip reports.",
    image: travelTipsImage,
    tags: ["Node.js", "React", "MongoDB"],
    githubUrl: "https://github.com/ronfaygler/Travel-Tips",
  },
  {
    title: "Wiki Search Engine",
    description:
      "An information-retrieval search engine built over the full hebrew Wikipedia corpus, combining an inverted index, PageRank, and cosine-similarity ranking to return results in about 0.1 seconds.",
    image: wikiSearchImage,
    tags: ["Python", "Flask", "Information Retrieval", "GCP"],
    githubUrl: "https://github.com/ronfaygler/wiki_search_engine",
  },
  {
    title: "QA-VQA Final Project",
    description:
      "A research project evaluating how LLMs handle unanswerable questions with presupposition conflicts or faulty assumptions, using visual and textual context to test whether models know when to rely on internal knowledge versus the given context.",
    image: qaVqaImage,
    tags: ["OpenAI API", "GPT", "Llama", "Python"],
    githubUrl: "https://github.com/ronfaygler/QA-VQA-Final-Project",
  },
];

export const timeline: TimelineItem[] = [
  {
    type: "experience",
    title: "Full-Stack Developer (Freelance)",
    organization: "Danika & Qelos",
    period: "Jul 2025 - Nov 2025",
    description: [
      "Built full-stack applications with Node.js and Vue.js, using AI-assisted development to speed up delivery by up to 70%.",
      "Integrated real-time communication with LiveKit, deployed on DigitalOcean, and automated video processing with FFmpeg.",
      "Worked in agile sprints, turning technical requirements into shipped features.",
    ],
  },
  {
    type: "experience",
    title: "Machine Learning Research Assistant",
    organization: "Ben-Gurion University",
    period: "Jun 2023 - Jan 2025",
    description: [
      "Built models for the miRGen project that generate synthetic miRNAs with a fine-tuned GPT model.",
      "Conducted computational biology research using EDA, predictive modeling, and SHAP.",
      "Communicated results to guide research decisions.",
    ],
  },
  {
    type: "experience",
    title: "DevOps Intern",
    organization: "Cybereason",
    period: "Mar 2022 - Jun 2022",
    description: [
      "Configured cloud infrastructure and deployment environments in a team of four using Docker, Kubernetes, and GCP.",
      "Built a real-time metrics dashboard with the TICK Stack to monitor system performance.",
    ],
  },
  {
    type: "education",
    title: "B.Sc. Software & Information Systems Engineering",
    organization: "Ben-Gurion University of the Negev",
    period: "2020 - 2024",
    description: ["GPA: 86"],
  },
];

export const contactLinks: ContactLink[] = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/ronfaygler", icon: "linkedin" },
  { label: "GitHub", url: "https://github.com/ronfaygler", icon: "github" },
  { label: "Email", url: "mailto:ronfaygler@gmail.com", icon: "email" },
  { label: "WhatsApp", url: "https://wa.me/972545622113", icon: "whatsapp" },
];
