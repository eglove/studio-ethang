import {defineField, defineType} from 'sanity'

export const job = defineType({
  name: 'job',
  title: 'Job',
  type: 'document',
  preview: {
    select: {
      title: 'company',
      subtitle: 'title',
    }
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: rule => {
        return rule.required();
      }
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      validation: rule => {
        return rule.min(rule.valueOfField('startDate'));
      }
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'techUsed',
      title: 'Tech Used',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'technology' }] }],
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'methodologiesUsed',
      title: 'Methodologies Used',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'methodology' }] }],
      validation: rule => rule.required(),
    }),
  ],
})