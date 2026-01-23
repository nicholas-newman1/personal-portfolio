# Personal Portfolio

A modern, animated portfolio website built with Next.js and Sanity CMS.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: Material UI v7
- **CMS**: Sanity
- **Language**: TypeScript
- **Styling**: Emotion

## Features

- **Hero Section** — Introduction with headshot, social links, and resume download
- **About** — Personal bio
- **Experience** — Work history with company logos, role details, skills, and achievements
- **Projects** — Portfolio showcase with images, tech stack, and live/GitHub links
- **Education** — Academic background with GPA and honors
- **Smooth Animations** — Scroll-triggered fade-in animations throughout
- **Sanity Studio** — Built-in content management at `/studio`

## Getting Started

### Prerequisites

- Node.js 18+
- A Sanity project (create one at [sanity.io](https://sanity.io))

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:2000](http://localhost:2000) to view the site.

Access the Sanity Studio at [http://localhost:2000/studio](http://localhost:2000/studio) to manage content.

## Content Management

All content is managed through Sanity Studio. The following content types are available:

| Type | Description |
|------|-------------|
| **Site Settings** | Global settings like social links, resume, headshot, and about text |
| **Work Experience** | Job history with company info, skills, and achievements |
| **Projects** | Portfolio projects with images and tech stack |
| **Education** | Academic credentials |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 2000 |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Deployment

Deploy to [Vercel](https://vercel.com) for the best Next.js experience:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Remember to add your environment variables in the Vercel dashboard.
