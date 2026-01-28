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
    publishedAt,
    achievements
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
    publishedAt,
    achievements
  }
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    role,
    duration,
    "imageUrl": image.asset->url,
    techStack,
    liveUrl,
    githubUrl,
    featured,
    publishedAt,
    overview,
    technicalDetails,
    features,
    achievements,
    learnings,
    "gallery": gallery[] {
      "url": asset->url,
      caption,
      alt
    }
  }
`;

export const projectSlugsQuery = groq`
  *[_type == "project"] {
    "slug": slug.current
  }
`;

export const workExperienceQuery = groq`
  *[_type == "workExperience"] | order(startDate desc) {
    _id,
    company,
    companyUrl,
    "companyLogoUrl": companyLogo.asset->url,
    role,
    startDate,
    endDate,
    bullets,
    skills,
    achievements
  }
`;

export const educationQuery = groq`
  *[_type == "education"] | order(endDate desc) {
    _id,
    school,
    schoolUrl,
    "schoolLogoUrl": schoolLogo.asset->url,
    degree,
    startDate,
    endDate,
    gpa,
    honors
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    _id,
    title,
    description,
    "headshotUrl": headshot.asset->url,
    "resumeUrl": resumePdf.asset->url,
    email,
    linkedIn,
    github,
    about
  }
`;
