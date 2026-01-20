import { groq } from 'next-sanity';

export const projectsQuery = groq`
  *[_type == "project"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    "imageUrl": image.asset->url,
    techStack,
    liveUrl,
    githubUrl,
    featured,
    publishedAt
  }
`;

export const featuredProjectsQuery = groq`
  *[_type == "project" && featured == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    "imageUrl": image.asset->url,
    techStack,
    liveUrl,
    githubUrl,
    featured,
    publishedAt
  }
`;

