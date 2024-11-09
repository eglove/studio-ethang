import {defineField, defineType} from 'sanity'

export const certification = defineType({
  name: 'certification',
  title: 'Certification',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'issuedBy',
      title: 'Issued By',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'issuedOn',
      title: 'Issued On',
      type: 'date',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'expires',
      title: 'Expires',
      type: 'date',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: rule => rule.required()
    }),
  ],
})