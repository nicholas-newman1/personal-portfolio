import { defineField, defineType } from 'sanity';

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  groups: [
    { name: 'basic', title: 'Basic Info', default: true },
    { name: 'content', title: 'Content' },
    { name: 'media', title: 'Media' },
    { name: 'links', title: 'Links' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'basic',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
      group: 'basic',
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: 'A brief summary for cards and previews',
      group: 'basic',
    }),
    defineField({
      name: 'role',
      title: 'My Role',
      type: 'string',
      description: 'e.g., "Solo Developer", "Frontend Lead", "Full Stack Engineer"',
      group: 'basic',
    }),
    defineField({
      name: 'duration',
      title: 'Project Duration',
      type: 'string',
      description: 'e.g., "3 months", "Ongoing", "Jan 2024 - Mar 2024"',
      group: 'basic',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show this project on the homepage',
      initialValue: false,
      group: 'basic',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      group: 'basic',
    }),
    defineField({
      name: 'overview',
      title: 'Overview / The Problem',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'What problem does this solve? Who is it for? Why did you build it?',
      group: 'content',
    }),
    defineField({
      name: 'technicalDetails',
      title: 'Technical Deep Dive',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Architecture decisions, interesting challenges, technical implementation details',
      group: 'content',
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'feature',
          fields: [
            defineField({ 
              name: 'title', 
              title: 'Feature', 
              type: 'string', 
              validation: (rule) => rule.required() 
            }),
            defineField({ 
              name: 'description', 
              title: 'Description', 
              type: 'array',
              of: [{ type: 'block' }],
            }),
          ],
          preview: {
            select: { title: 'title' },
          },
        },
      ],
      description: 'Main features of the project',
      group: 'content',
    }),
    defineField({
      name: 'achievements',
      title: 'Results & Impact',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
          ],
        },
      ],
      description: 'Awards, metrics, user feedback, or other measurable impact',
      group: 'content',
    }),
    defineField({
      name: 'learnings',
      title: 'What I Learned',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Personal reflection on growth and lessons learned',
      group: 'content',
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'media',
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'caption', type: 'string', title: 'Caption' },
            { name: 'alt', type: 'string', title: 'Alt Text' },
          ],
        },
      ],
      description: 'Additional screenshots, diagrams, or images',
      group: 'media',
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      group: 'basic',
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
      description: 'Link to the deployed project',
      group: 'links',
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
      description: 'Link to the source code',
      group: 'links',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      featured: 'featured',
    },
    prepare({ title, media, featured }) {
      return {
        title: featured ? `⭐ ${title}` : title,
        media,
      };
    },
  },
});

