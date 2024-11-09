import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'methodology',
  title: 'Methodology',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
  ],
});