import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'headshot',
      title: 'Headshot',
      type: 'image',
      description: 'Your profile photo for the hero section',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      initialValue: 'Portfolio',
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'resumePdf',
      title: 'Resume PDF',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      description: 'Upload your resume PDF for download links',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'linkedIn',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'github',
      title: 'GitHub URL',
      type: 'url',
    }),
    defineField({
      name: 'about',
      title: 'About Me',
      type: 'text',
      rows: 5,
      description: 'A brief introduction about yourself, your background, and what you do',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
      };
    },
  },
});

