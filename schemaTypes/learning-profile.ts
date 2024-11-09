import {defineField, defineType} from 'sanity'

export const learningProfile = defineType({
  name: 'learningProfile',
  title: 'Learning Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
  ],
})
