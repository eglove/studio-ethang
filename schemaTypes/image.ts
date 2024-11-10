import {defineType} from 'sanity'

export const imageUpload = defineType({
  name: 'imageUpload',
  title: 'Image',
  type: 'document',
  fields: [
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'imageUpload',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    },
  ],
})
