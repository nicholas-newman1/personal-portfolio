import { defineField, defineType } from 'sanity';

export const education = defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({
      name: 'school',
      title: 'School / Institution',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'schoolUrl',
      title: 'School Website',
      type: 'url',
    }),
    defineField({
      name: 'schoolLogo',
      title: 'School Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'degree',
      title: 'Degree / Certificate',
      type: 'string',
      description: 'e.g., "BS, Computer Science" or "High School Diploma"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      options: {
        dateFormat: 'MMMM YYYY',
      },
    }),
    defineField({
      name: 'endDate',
      title: 'End Date / Graduation',
      type: 'date',
      options: {
        dateFormat: 'MMMM YYYY',
      },
    }),
    defineField({
      name: 'gpa',
      title: 'GPA',
      type: 'number',
      validation: (rule) => rule.min(0).max(4),
    }),
    defineField({
      name: 'honors',
      title: 'Honors',
      type: 'string',
      description: 'e.g., "Honors", "Magna Cum Laude"',
    }),
  ],
  orderings: [
    {
      title: 'End Date, Newest',
      name: 'endDateDesc',
      by: [{ field: 'endDate', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'school',
      subtitle: 'degree',
      media: 'schoolLogo',
    },
  },
});

