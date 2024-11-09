import {defineField, defineType} from 'sanity'

export const courseSection = defineType({
  name: 'courseSection',
  title: 'Course Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'courses',
      type: 'array',
      title: 'Courses',
      of: [{type: 'reference', to: [{type: 'course'}]}],
    }),
  ],
})
