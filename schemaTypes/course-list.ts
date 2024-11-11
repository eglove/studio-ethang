import {defineField, defineType} from 'sanity'

export const courseList = defineType({
  name: 'courseList',
  title: 'Course List',
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
      name: 'courseSections',
      type: 'array',
      title: 'Course Sections',
      of: [{type: 'reference', to: [{type: 'courseSection'}]}],
    }),
  ],
})
