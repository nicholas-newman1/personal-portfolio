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
}

