import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'text-image-layout',
  title: 'Text Image Layout',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
    }),
  ],
})
