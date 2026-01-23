export interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
  imageUrl?: string;
  techStack?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  publishedAt?: string;
  achievements?: Achievement[];
}

export interface Achievement {
  title: string;
  description?: string;
}

export interface WorkExperience {
  _id: string;
  company: string;
  companyUrl?: string;
  companyLogoUrl?: string;
  role: string;
  startDate: string;
  endDate?: string;
  bullets?: string[];
  skills?: string[];
  achievements?: Achievement[];
}

export interface Education {
  _id: string;
  school: string;
  schoolUrl?: string;
  schoolLogoUrl?: string;
  degree: string;
  startDate?: string;
  endDate?: string;
  gpa?: number;
  honors?: string;
}

export interface SiteSettings {
  _id: string;
  title?: string;
  description?: string;
  headshotUrl?: string;
  resumeUrl?: string;
  email?: string;
  linkedIn?: string;
  github?: string;
}
