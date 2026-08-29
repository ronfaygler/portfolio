export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface TimelineItem {
  type: "education" | "experience";
  title: string;
  organization: string;
  period: string;
  description: string[];
}

export interface ContactLink {
  label: string;
  url: string;
  icon: "linkedin" | "github" | "email" | "whatsapp";
}
